const { load } = require('cheerio');

const identifier = /^[A-Za-z][A-Za-z0-9_]*$/;
const primitives = { Integer: 'number', Int: 'number', String: 'string', Boolean: 'boolean', True: 'true', False: 'false', Float: 'number', 'Float number': 'number' };
const text = (node) => node.text().replace(/\s+/g, ' ').trim();
const comment = (value) => value.replace(/\*\//g, '* /');
const capitalize = (name) => name[0].toUpperCase() + name.slice(1);

function normalizeType(value, known) {
  value = value.trim();
  if (value.startsWith('Array of ')) return `ReadonlyArray<${normalizeType(value.slice(9), known)}>`;
  const union = value.split(/\s+or\s+|,\s*(?:and\s+)?|\s+and\s+/);
  if (union.length > 1) return union.map((part) => normalizeType(part, known)).join(' | ');
  if (primitives[value]) return primitives[value];
  if (known.has(value)) return value;
  throw new Error(`Unrecognized Telegram type: ${value}`);
}

function inferReturn(name, description, known) {
  const clauses = [
    ...(description.match(/\breturns?\b[^.!?]+/gi) || []),
    ...(description.match(/[^.!?]*\b(?:is|are) returned\b[^.!?]*/g) || []),
  ];
  const candidates = new Set();
  for (const clause of clauses) {
    if (/^returns? (?:an? )?error\b/i.test(clause)) continue;
    const array = clause.match(/\bArray of ([A-Z][A-Za-z0-9]+)/);
    if (array) {
      candidates.add(`ReadonlyArray<${normalizeType(array[1], known)}>`);
      continue;
    }
    for (const token of clause.match(/\b[A-Z][A-Za-z0-9]*\b/g) || []) {
      if (known.has(token) || primitives[token]) candidates.add(normalizeType(token, known));
    }
  }
  if (!candidates.size) throw new Error(`Cannot infer return type of ${name}: ${description}`);
  if (candidates.size > 1 && !(candidates.size === 2 && candidates.has('Message') && candidates.has('true'))) {
    throw new Error(`Ambiguous return type of ${name}: ${[...candidates].join(', ')}`);
  }
  return [...candidates].sort((a, b) => a === 'true' ? 1 : b === 'true' ? -1 : a.localeCompare(b)).join(' | ');
}

function parseAPI(html) {
  const $ = load(html);
  const versionNode = $('p strong').filter((_, node) => /^Bot API \d+(?:\.\d+)+$/.test(text($(node)))).first();
  if (!versionNode.length) throw new Error('Bot API version is missing from the document');
  const version = text(versionNode);
  const date = text(versionNode.closest('p').prevAll('h4').first());
  if (!date) throw new Error('Bot API release date is missing');
  // Each heading owns its siblings only, so unrelated tables cannot leak into it.
  const blocks = $('h4').toArray().map((heading) => {
    const name = text($(heading));
    return { name, body: $(heading).nextUntil('h3,h4'), section: text($(heading).prevAll('h3').first()) };
  }).filter(({ name }) => identifier.test(name));
  const known = new Set(blocks.filter(({ name }) => /^[A-Z]/.test(name)).map(({ name }) => name));
  const types = [];
  const methods = [];
  const seen = new Set();
  for (const { name, body, section } of blocks) {
    if (seen.has(name)) throw new Error(`Duplicate definition: ${name}`);
    seen.add(name);
    const method = /^[a-z]/.test(name);
    const description = body.filter('p').toArray().map((p) => text($(p))).join(' ');
    const tables = body.filter('table');
    const expected = method ? ['Parameter', 'Type', 'Required', 'Description'] : ['Field', 'Type', 'Description'];
    if (tables.length > 1) throw new Error(`Multiple tables in ${name}; review the documentation layout`);
    let fields = [];
    if (tables.length) {
      const headers = tables.find('thead th').toArray().map((h) => text($(h)));
      if (JSON.stringify(headers) !== JSON.stringify(expected)) throw new Error(`Unexpected table columns in ${name}: ${headers}`);
      const fieldNames = new Set();
      fields = tables.find('tbody tr').toArray().map((row) => {
        const cells = $(row).children('td');
        if (cells.length !== expected.length) throw new Error(`Invalid row in ${name}`);
        const field = text(cells.eq(0));
        if (!identifier.test(field) || fieldNames.has(field)) throw new Error(`Invalid or duplicate field ${name}.${field}`);
        fieldNames.add(field);
        const rawType = text(cells.eq(1));
        const description = text(cells.eq(method ? 3 : 2));
        const required = method ? text(cells.eq(2)) : '';
        if (method && !['Yes', 'Optional'].includes(required)) throw new Error(`Unknown requirement ${name}.${field}: ${required}`);
        return {
          name: field, description, rawType,
          optional: method ? required === 'Optional' : /^Optional\./.test(description),
          type: field === 'date' && /Always 0\./.test(description) ? '0' : normalizeType(rawType, known),
        };
      });
    }
    if (method) {
      if (!tables.length && !/no parameters|requires no parameters/i.test(description)) {
        throw new Error(`Method ${name} has no parameter table or explicit no-parameters statement`);
      }
      methods.push({ name, description, fields, returnType: inferReturn(name, description, known) });
      continue;
    }
    let alias;
    if (name === 'InputFile') {
      fields = [{ name: 'file', type: 'Buffer', optional: false, description: '' }, { name: 'name', type: 'string', optional: false, description: '' }];
    } else if (!tables.length) {
      const members = body.filter('ul').first().find('li').toArray().map((li) => text($(li)));
      if (members.length) {
        alias = members.map((member) => normalizeType(member, known)).join(' | ');
        // Telegram's recursive RichText union includes primitives outside its list.
        if (name === 'RichText') {
          if (!/String/.test(description) || !/Array of RichText/.test(description)) throw new Error('Review RichText union override');
          alias = `string | ReadonlyArray<RichText> | ${alias}`;
        }
      } else if (/currently holds no information/i.test(description)) {
        alias = name === 'CallbackGame' ? 'Readonly<{}>' : 'unknown';
      } else {
        throw new Error(`Type ${name} has neither a field table, a union list, nor an empty-object description`);
      }
    }
    types.push({ name, section, description, fields, alias });
  }
  if (!types.length || !methods.length) throw new Error('No API definitions found');
  return { version, date, types, methods };
}

function fieldsSource(fields, indent) {
  return fields.map((field) => `${indent}${field.name}${field.optional ? '?' : ''}: ${field.type};${field.description ? ` /** ${comment(field.description)} */` : ''}`).join('\n');
}
function doc(description, indent) {
  return `${indent}/**\n${indent} * ${comment(description)}\n${indent} */\n`;
}
function renderTypes(api) {
  let result = `/**\n ${api.version}\n ${api.date}\n */\n\nexport namespace Telegram {\n`;
  let section;
  for (const type of api.types) {
    if (section !== type.section) { section = type.section; result += `\n  /** ${comment(section)} */\n`; }
    result += `\n${doc(type.description, '  ')}  export type ${type.name} = ${type.alias || `Readonly<{\n${fieldsSource(type.fields, '    ')}\n  }>`};\n`;
  }
  result += '\n  export namespace Params {\n';
  for (const method of api.methods.filter((method) => method.fields.length)) {
    result += `    export type ${capitalize(method.name)} = Readonly<{\n${fieldsSource(method.fields, '      ')}\n    }>;\n\n`;
  }
  result += '  }\n\n  export interface Bot {\n';
  for (const method of api.methods) {
    const params = method.fields.length ? `params: Telegram.Params.${capitalize(method.name)}` : '';
    result += `${doc(method.description, '    ')}    ${method.name}(${params}): ITelegramResponse<${method.returnType}>;\n\n`;
  }
  return result + '  }\n}\n\nexport type ITelegramResponse<T = unknown> = Promise<ITelegramResponseData<T>>;\n\nexport type ITelegramResponseData<T> = {\n  ok: boolean;\n  result: T;\n}\n';
}

function renderClient(api, currentClient) {
  // Keep the maintained transport, constructor and imports, instead of another copy.
  const start = currentClient.indexOf('  private _call<');
  const constructor = currentClient.match(/^[\s\S]*?export class TelegramAPI implements Telegram.Bot \{\s*constructor\([\s\S]*?\n  \}/);
  if (start < 0 || !constructor) throw new Error('TelegramAPI transport layout changed; update the generator before overwriting it');
  const known = new Set(api.types.map((type) => type.name));
  const qualify = (type) => type.replace(/\b[A-Z][A-Za-z0-9]*\b/g, (name) => known.has(name) ? `Telegram.${name}` : name);
  const methods = [...api.methods].sort((a, b) => a.name < b.name ? -1 : 1).map((method) => {
    const params = method.fields.length ? `params: Telegram.Params.${capitalize(method.name)}` : '';
    const files = method.fields.filter((field) => /\bInputFile\b/.test(field.type));
    const upload = files.map((field) => `    if (params.${field.name} != null && typeof params.${field.name} === 'object') {\n      return this._sendForm('${method.name}', params, '${field.name}');\n    }\n`).join('');
    return `  ${method.name}(${params}): ITelegramResponse<${qualify(method.returnType)}> {\n${upload}    return this._call('${method.name}'${params ? ', params' : ''});\n  }\n`;
  });
  return `${constructor[0]}\n\n${methods.join('\n')}\n${currentClient.slice(start)}`;
}

module.exports = { parseAPI, normalizeType, inferReturn, renderTypes, renderClient };
