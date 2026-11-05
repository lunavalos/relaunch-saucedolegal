import { Language } from '../types';

export type PageKey = 
  | 'home'
  | 'about'
  | 'team'
  | 'practiceAreas'
  | 'videos'
  | 'gallery'
  | 'collaborations'
  | 'contact';

export const PAGE_SLUGS: Record<Language, Record<PageKey, string>> = {
  es: {
    home: '',
    about: 'nosotros',
    team: 'equipo',
    practiceAreas: 'areas-de-practica',
    videos: 'videos',
    gallery: 'galeria',
    collaborations: 'colaboraciones',
    contact: 'contacto',
  },
  en: {
    home: '',
    about: 'about',
    team: 'team',
    practiceAreas: 'practice-areas',
    videos: 'videos',
    gallery: 'gallery',
    collaborations: 'collaborations',
    contact: 'contact',
  },
  zh: {
    home: '',
    about: 'about',
    team: 'team',
    practiceAreas: 'practice-areas',
    videos: 'videos',
    gallery: 'gallery',
    collaborations: 'collaborations',
    contact: 'contact',
  },
  ko: {
    home: '',
    about: 'about',
    team: 'team',
    practiceAreas: 'practice-areas',
    videos: 'videos',
    gallery: 'gallery',
    collaborations: 'collaborations',
    contact: 'contact',
  },
};

export const LANGUAGE_NAMES: Record<Language, Record<Language, string>> = {
  es: {
    es: 'Español',
    en: 'Inglés',
    zh: 'Chino',
    ko: 'Coreano',
  },
  en: {
    es: 'Spanish',
    en: 'English',
    zh: 'Chinese',
    ko: 'Korean',
  },
  zh: {
    es: '西班牙语',
    en: '英语',
    zh: '中文',
    ko: '韩语',
  },
  ko: {
    es: '스페인어',
    en: '영어',
    zh: '중국어',
    ko: '한국어',
  },
};

export function getLocaleFromPathname(pathname: string): Language {
  if (!pathname) return 'es';
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  if (pathname.startsWith('/zh/') || pathname === '/zh') return 'zh';
  if (pathname.startsWith('/ko/') || pathname === '/ko') return 'ko';
  return 'es';
}

export function getPageKeyFromPathname(pathname: string): PageKey {
  if (!pathname) return 'home';
  const clean = pathname.replace(/^\/(en|zh|ko)(\/|$)/, '/').replace(/^\//, '').replace(/\/$/, '');
  
  if (!clean) return 'home';
  if (['nosotros', 'about', 'guanyu'].includes(clean)) return 'about';
  if (['equipo', 'team'].includes(clean)) return 'team';
  if (['areas-de-practica', 'practice-areas', 'services', 'fuwu'].includes(clean)) return 'practiceAreas';
  if (['videos'].includes(clean)) return 'videos';
  if (['galeria', 'gallery'].includes(clean)) return 'gallery';
  if (['colaboraciones', 'collaborations'].includes(clean)) return 'collaborations';
  if (['contacto', 'contact'].includes(clean)) return 'contact';
  
  return 'home';
}

export function getLocalizedUrl(pageKey: PageKey, lang: Language): string {
  const slug = PAGE_SLUGS[lang][pageKey];
  if (lang === 'es') {
    return slug ? `/${slug}` : '/';
  }
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function getSwitchLanguageUrl(pathname: string, targetLang: Language): string {
  if (!pathname) return targetLang === 'es' ? '/' : `/${targetLang}`;
  
  const pathWithoutLocale = pathname.replace(/^\/(en|zh|ko)(\/|$)/, '/');
  const segments = pathWithoutLocale.replace(/^\//, '').split('/').filter(Boolean);
  
  if (segments.length === 0) {
    return targetLang === 'es' ? '/' : `/${targetLang}`;
  }
  
  if (segments.length === 1) {
    const pageKey = getPageKeyFromPathname(segments[0]);
    return getLocalizedUrl(pageKey, targetLang);
  }
  
  // Handle sub-slugs (e.g. ['equipo', 'slug'] or ['team', 'slug'])
  const section = segments[0];
  const detailSlug = segments.slice(1).join('/');
  const pageKey = getPageKeyFromPathname(section);
  const targetSection = PAGE_SLUGS[targetLang][pageKey] || section;
  
  if (targetLang === 'es') {
    return `/${targetSection}/${detailSlug}`;
  }
  return `/${targetLang}/${targetSection}/${detailSlug}`;
}
