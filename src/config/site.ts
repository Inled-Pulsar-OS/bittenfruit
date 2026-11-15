import type { CloudProvider } from '../types/index.ts';
import { en } from '../i18n/en.ts';

/** Site-wide strings and links. Edit these to change the brand copy. */
export const SITE_CONFIG = {
  name: 'PulsarOS Bitten Fruit',
  edition: 'Bitten Fruit Edition',
  brandTagline: 'The macOS experience on Linux.',
  description:
    'PulsarOS is a Linux distribution engineered to replicate commercial operating systems. Bitten Fruit is specifically crafted to reproduce the macOS interface, animation rhythm, and user experience.',
  githubUrl: 'https://github.com/Inled-Pulsar-OS',
  releasesUrl: 'https://github.com/Inled-Pulsar-OS/ISO/releases/latest',
  downloadsUrl: 'https://downloads-os.inled.es/',
  bugReportUrl: 'https://bugme-os.inled.es/',
  feedUrl: 'https://feed-os.inled.es/',
  license: 'MIT-INLED',
} as const;

/** Cloud provider pills in the Finder / cloud providers section. */
export const CLOUD_PROVIDERS: CloudProvider[] = [
  { name: 'iCloud', logo: '/logos/providers/icloud.svg' },
  { name: 'Google Drive', logo: '/logos/providers/googledrive.svg' },
  { name: 'Dropbox', logo: '/logos/providers/dropbox.svg' },
  { name: 'OneDrive', logo: '/logos/providers/onedrive.svg' },
  { name: 'Nextcloud', logo: '/logos/providers/nextcloud.svg' },
  { name: 'Proton Drive', logo: '/logos/providers/proton.svg' },
  { name: 'Box', logo: '/logos/providers/box.svg' },
  { name: 'Mega', logo: '/logos/providers/mega.svg' },
];

/** ISO manifest used by the editions/downloads section. */
export const RELEASES_JSON_URL = 'https://downloads-os.inled.es/isos.json';

/**
 * English content re-exported for build-time consumers outside the page tree
 * (e.g. the public `site.json` export in astro.config.mjs).
 */
export const GALLERY_FEATURES = en.features.items.map((feature) => ({
  title: feature.title,
  description: feature.description,
  video: feature.media,
  poster: feature.poster,
}));
export const FAQS = en.faq.items;
