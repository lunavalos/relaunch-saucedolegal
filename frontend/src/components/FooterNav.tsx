'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedUrl, PageKey } from '../i18n/navigation';

export const FooterNav: React.FC = () => {
  const { t, language } = useLanguage();
  const pathname = usePathname();

  const links: { key: PageKey; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'team', label: t.nav.team },
    { key: 'practiceAreas', label: t.nav.practiceAreas },
    { key: 'videos', label: t.nav.videos },
    { key: 'gallery', label: t.nav.gallery },
    { key: 'collaborations', label: t.nav.collaborations },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#141517] border-t border-white/10 py-16 px-4 md:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Navigation list */}
        <nav className="mb-12">
          <ul className="flex flex-col space-y-4 md:space-y-6">
            {links.map((link) => {
              const href = getLocalizedUrl(link.key, language);
              const isActive = pathname === href;
              return (
                <li key={link.key}>
                  <Link
                    href={href}
                    className={`font-serif text-2xl md:text-3xl font-light tracking-wide transition-colors duration-200 hover:text-white ${
                      isActive ? 'text-white font-normal underline decoration-[#959597] underline-offset-8' : 'text-gray-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Brand logo & tagline */}
        <div className="flex flex-col items-center space-y-2 mb-8 pt-8 border-t border-white/10 w-full max-w-md">
          <img
            src="/images/logo.png"
            alt="Saucedo Legal"
            className="h-10 w-auto object-contain opacity-80"
          />
        </div>

        {/* Copyright notice */}
        <div className="text-xs font-sans text-gray-500">
          <p>© 2026 Saucedo Consultoría Jurídica S.C. {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};
