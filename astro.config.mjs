// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

function exportSiteJson() {
  return {
    name: 'export-site-json',
    hooks: {
      'astro:config:setup': async () => {
        try {
          const { GALLERY_FEATURES } = await import('./src/config/site.ts');
          const publicDir = path.resolve('./public');
          if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
          }
          fs.writeFileSync(
            path.join(publicDir, 'site.json'),
            JSON.stringify(GALLERY_FEATURES, null, 2),
            'utf-8'
          );
        } catch (e) {
          console.error('[exportSiteJson] Error:', e);
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
  integrations: [sitemap(), exportSiteJson()],
});