'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language } from '../types';
import { translations, Translations } from './translations';
import { 
  getLocaleFromPathname, 
  getPageKeyFromPathname, 
  getLocalizedUrl, 
  getSwitchLanguageUrl,
  LANGUAGE_NAMES 
} from './navigation';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  flagImg: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languages: LanguageOption[];
}

const LANGUAGE_BASE_CONFIG: { code: Language; flag: string; flagImg: string }[] = [
  { code: 'es', flag: '🇲🇽', flagImg: '/images/es.png' },
  { code: 'en', flag: '🇺🇸', flagImg: '/images/en.png' },
  { code: 'zh', flag: '🇨🇳', flagImg: '/images/cn.png' },
  { code: 'ko', flag: '🇰🇷', flagImg: '/images/ko.png' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguageState] = useState<Language>(() => {
    return getLocaleFromPathname(pathname);
  });

  // Keep language in sync with the URL prefix automatically
  useEffect(() => {
    const urlLocale = getLocaleFromPathname(pathname);
    if (urlLocale !== language) {
      setLanguageState(urlLocale);
    }
    if (typeof window !== 'undefined') {
      document.documentElement.lang = urlLocale;
    }
  }, [pathname]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('saucedo_lang', newLang);
      document.documentElement.lang = newLang;
    }

    // Navigate to the localized URL for the current page
    const targetUrl = getSwitchLanguageUrl(pathname, newLang);
    if (targetUrl !== pathname) {
      router.push(targetUrl);
    }
  };

  // Names of each language translated into the CURRENT active language
  const localizedLanguages: LanguageOption[] = LANGUAGE_BASE_CONFIG.map((item) => ({
    ...item,
    name: LANGUAGE_NAMES[language]?.[item.code] || item.code,
  }));

  const value = {
    language,
    setLanguage,
    t: translations[language] || translations.es,
    languages: localizedLanguages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
