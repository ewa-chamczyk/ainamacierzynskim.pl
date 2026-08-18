// Prosty i18n dla ainamacierzynskim.pl.
// Zasada: JEDEN układ (te same komponenty), treść wybierana propem `lang`.
// Polska wersja żyje pod `/`, angielska pod `/en/`. Dzięki temu zmiana designu
// trafia automatycznie do obu wersji — nie ma dwóch kopii markupu do utrzymania.

export const languages = ['pl', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'pl';

/** Wyciąga język ze ścieżki: /en/... → 'en', reszta → 'pl'. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'pl';
}

/** Ścieżka do tej samej strony w drugim języku (do przełącznika i hreflang). */
export function altPath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const withoutEn = clean.startsWith('/en') ? clean.slice(3) || '/' : clean;
  if (target === 'pl') return withoutEn;
  return withoutEn === '/' ? '/en' : `/en${withoutEn}`;
}

/** Prefiksuje link wewnętrzny bieżącym językiem. `t('/gabinet-ai','en')` → `/en/gabinet-ai`. */
export function path(p: string, lang: Lang): string {
  if (lang === 'pl') return p;
  if (p.startsWith('#')) return p;
  // kotwice na stronie głównej, np. `/#mapa`
  if (p.startsWith('/#')) return `/en${p.slice(1)}`;
  return p === '/' ? '/en' : `/en${p}`;
}

export const ui = {
  pl: {
    'nav.gabinet': 'Gabinet AI',
    'nav.ebook': 'Ebook',
    'nav.newsletter': 'Newsletter',
    'nav.cta': 'Umów wizytę',
    'nav.open': 'Otwórz menu',
    'nav.close': 'Zamknij menu',
    'nav.switch': 'English',
    'nav.switchAria': 'Switch to English',
    'footer.tagline': 'Spokojny start z AI przed powrotem do pracy.',
    'footer.offer': 'Oferta',
    'footer.legal': 'Dokumenty',
    'footer.privacy': 'Polityka prywatności',
    'footer.terms': 'Regulamin',
    'footer.rights': 'Wszystkie prawa zastrzeżone.',
    'lang.note.pl': '',
  },
  en: {
    'nav.gabinet': 'AI Clinic',
    'nav.ebook': 'Ebook',
    'nav.newsletter': 'Newsletter',
    'nav.cta': 'Book a session',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.switch': 'Polski',
    'nav.switchAria': 'Przełącz na polski',
    'footer.tagline': 'A calm start with AI before you go back to work.',
    'footer.offer': 'Offer',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',
    'lang.note.pl': 'in Polish',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['pl']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.pl as Record<string, string>)[key];
  };
}
