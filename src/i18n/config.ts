export const LOCALES = ['en', 'es', 'it', 'fr', 'de'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Native names shown in the language dropdown. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français',
  de: 'Deutsch',
};

/** Value used for `<html lang>` and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  it: 'it',
  fr: 'fr',
  de: 'de',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Locale encoded in the path: `/es/...` → es, everything else → en. */
export function getLocale(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** Path without the locale prefix (`/es/editions` → `/editions`). */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  return '/' + segments.join('/');
}

/** Prefix a root-relative path with the locale. English stays unprefixed. */
export function localizePath(pathname: string, locale: Locale): string {
  const clean = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}
