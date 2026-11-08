import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const siteConfigPath = path.join(rootDir, 'src/config/site.ts');
const contributorsConfigPath = path.join(rootDir, 'src/config/contributors.ts');
const publicDir = path.join(rootDir, 'public');

const { GALLERY_FEATURES } = await import(siteConfigPath);
const { CONTRIBUTORS } = await import(contributorsConfigPath);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate site.json
const siteOutputPath = path.join(publicDir, 'site.json');
fs.writeFileSync(siteOutputPath, JSON.stringify(GALLERY_FEATURES, null, 2), 'utf-8');
console.log(`[generate-site-json] Generated ${siteOutputPath} with ${GALLERY_FEATURES.length} features.`);

// 2. Generate contributors.json (resolving relative avatar paths to full URLs)
const resolvedContributors = CONTRIBUTORS.map(c => ({
  ...c,
  avatar: c.avatar.startsWith('http://') || c.avatar.startsWith('https://')
    ? c.avatar
    : `https://bittenfruit.inled.es${c.avatar.startsWith('/') ? '' : '/'}${c.avatar}`
}));

const contributorsOutputPath = path.join(publicDir, 'contributors.json');
fs.writeFileSync(contributorsOutputPath, JSON.stringify(resolvedContributors, null, 2), 'utf-8');
console.log(`[generate-site-json] Generated ${contributorsOutputPath} with ${resolvedContributors.length} contributors.`);
