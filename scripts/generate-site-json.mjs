import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const siteConfigPath = path.join(rootDir, 'src/config/site.ts');
const publicDir = path.join(rootDir, 'public');

const { GALLERY_FEATURES } = await import(siteConfigPath);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'site.json');
fs.writeFileSync(outputPath, JSON.stringify(GALLERY_FEATURES, null, 2), 'utf-8');
console.log(`[generate-site-json] Generated ${outputPath} with ${GALLERY_FEATURES.length} features.`);
