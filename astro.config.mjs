// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

function exportPublicJson() {
  return {
    name: 'export-public-json',
    hooks: {
      'astro:config:setup': async () => {
        try {
          const { GALLERY_FEATURES } = await import('./src/config/site.ts');
          const { CONTRIBUTORS } = await import('./src/config/contributors.ts');
          const publicDir = path.resolve('./public');
          if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
          }

          // 1. site.json
          fs.writeFileSync(
            path.join(publicDir, 'site.json'),
            JSON.stringify(GALLERY_FEATURES, null, 2),
            'utf-8'
          );

          // 2. contributors.json
          const resolvedContributors = CONTRIBUTORS.map(c => ({
            ...c,
            avatar: c.avatar.startsWith('http://') || c.avatar.startsWith('https://')
              ? c.avatar
              : `https://bittenfruit.inled.es${c.avatar.startsWith('/') ? '' : '/'}${c.avatar}`
          }));

          fs.writeFileSync(
            path.join(publicDir, 'contributors.json'),
            JSON.stringify(resolvedContributors, null, 2),
            'utf-8'
          );
          console.log(`[exportPublicJson] Generated site.json (${GALLERY_FEATURES.length} items) and contributors.json (${resolvedContributors.length} items).`);
        } catch (e) {
          console.error('[exportPublicJson] Error:', e);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  },
  site: 'https://bittenfruit.inled.es',
  integrations: [sitemap(), exportPublicJson()],
});
