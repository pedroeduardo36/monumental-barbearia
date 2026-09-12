import { gunzipSync } from 'node:zlib';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const source = process.argv[2];
const output = process.argv[3];

if (!source || !output) {
  throw new Error('Uso: node scripts/extract-reference-assets.mjs <bundle.html> <diretorio>');
}

const html = readFileSync(source, 'utf8');
const match = html.match(/<script type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/);

if (!match) throw new Error('Manifesto de assets não encontrado no HTML.');

const manifest = JSON.parse(match[1]);
mkdirSync(output, { recursive: true });

let imageIndex = 0;
for (const asset of Object.values(manifest)) {
  if (!asset.mime.startsWith('image/')) continue;
  imageIndex += 1;
  const extension = asset.mime.split('/')[1] === 'jpeg' ? 'jpg' : asset.mime.split('/')[1];
  const compressed = Buffer.from(asset.data, 'base64');
  const contents = asset.compressed ? gunzipSync(compressed) : compressed;
  writeFileSync(`${output}/reference-${imageIndex}.${extension}`, contents);
}

console.log(`${imageIndex} imagens extraídas.`);
