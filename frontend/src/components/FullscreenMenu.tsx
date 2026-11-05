'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedUrl, PageKey } from '../i18n/navigation';
import { X, Phone, Mail } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const pathname = usePathname();

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 bg-[#0d0e10] flex flex-col justify-between py-6 px-4 sm:px-8 md:px-12 animate-in fade-in duration-200 overflow-y-auto">
      {/* Top Bar with Logo & Close button */}
      <div className="max-w-[1240px] mx-auto w-full px-4 md:px-0 flex items-center justify-between border-b border-white/10 pb-5">
        <Link href={getLocalizedUrl('home', language)} onClick={onClose} className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Saucedo Legal"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="w-10 h-10 border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Cerrar menú"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links List (Without numbers, slightly smaller font as requested) */}
      <div className="py-8 flex flex-col items-center justify-center my-auto">
        <ul className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 text-center">
          {links.map((link) => {
            const href = getLocalizedUrl(link.key, language);
            const isActive = pathname === href;
            return (
              <li key={link.key}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`font-lora text-lg sm:text-2xl md:text-[28px] font-normal tracking-wide transition-all duration-300 hover:text-white hover:tracking-wider ${
                    isActive 
                      ? 'text-white font-medium underline decoration-[#959597] underline-offset-8' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Info Bar */}
      <div className="max-w-[1240px] mx-auto w-full px-4 md:px-0 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-400 gap-4">
        <div className="flex items-center gap-6">
          <a href="tel:8443438333" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#959597]" />
            <span className="font-lora">844- 343- 8333</span>
          </a>
          <a href="mailto:contacto@saucedolegal.mx" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#959597]" />
            <span className="font-sans">contacto@saucedolegal.mx</span>
          </a>
        </div>
        <p className="font-lora text-xs text-gray-500">
          Saltillo, Coahuila — México
        </p>
      </div>
    </div>
  );
};
