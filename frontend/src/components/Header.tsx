'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedUrl } from '../i18n/navigation';
import { FullscreenMenu } from './FullscreenMenu';
import { ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t, languages } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Entrance animation for Header (slides down once preloader curtain is completely gone)
  const [headerRevealed, setHeaderRevealed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !document.getElementById('site-preloader');
  });

  useEffect(() => {
    const handleReveal = () => {
      // Trigger header slide-down right after curtain has lifted completely
      setTimeout(() => {
        setHeaderRevealed(true);
      }, 80);
    };

    if (document.getElementById('site-preloader')) {
      document.addEventListener('saucedo:preloader-done', handleReveal);
      const timer = setTimeout(handleReveal, 2500);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('saucedo:preloader-done', handleReveal);
      };
    } else {
      setHeaderRevealed(true);
    }
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary navigation links in main navbar (Localized URLs)
  const primaryLinks = [
    { href: getLocalizedUrl('home', language), label: t.nav.home },
    { href: getLocalizedUrl('about', language), label: t.nav.about },
    { href: getLocalizedUrl('team', language), label: t.nav.team },
    { href: getLocalizedUrl('practiceAreas', language), label: t.nav.practiceAreas },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];
  const isTransparentNavbar = true;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        headerRevealed ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        
        {/* Top Info Bar: Slim height, completely hidden on scroll to eliminate any gap */}
        <div className={`bg-[#0d0e10] text-white font-sans transition-all duration-300 ${
          isScrolled ? 'hidden' : 'py-1 border-b border-white/10'
        }`}>
          <div className="max-w-[1240px] mx-auto px-4 md:px-0 flex justify-between items-center text-[12px] tracking-wide">
            
            {/* Phone with smartphone glyph and Lora typography */}
            <a 
              href="tel:8443438333" 
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/>
              </svg>
              <span className="font-lora font-normal tracking-wider text-[14px]">844- 343- 8333</span>
            </a>

            {/* Social Icons matching original: Facebook, Instagram, LinkedIn, WhatsApp, YouTube, Spotify */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/saucedolegalsaltillo/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/saucedolegalmx/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/108309322/admin/dashboard/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/+528443438333/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@EntreAbogadosTV" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>

              {/* Spotify: Aligns directly with right edge of Menu button below */}
              <a 
                href="https://open.spotify.com/show/5KOLThhF8yIXobEp5ILaTv?si=bdd0746b5ab9430f" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Spotify"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 357.4c-4.5 7.4-14.2 9.7-21.6 5.2-59.2-36.2-133.7-44.4-221.5-24.3-8.4 1.9-16.7-3.3-18.6-11.7-1.9-8.4 3.3-16.7 11.7-18.6 96.3-22 179.1-12.8 244.8 27.8 7.4 4.6 9.7 14.2 5.2 21.6zm27.8-62.1c-5.7 9.3-17.9 12.2-27.2 6.5-67.7-41.6-171-53.7-251.2-29.3-10.5 3.2-21.6-2.8-24.8-13.3-3.2-10.5 2.8-21.6 13.3-24.8 91.8-27.9 205.7-14.4 283.4 33.6 9.3 5.7 12.2 17.9 6.5 27.3zm2.4-64.6C311.6 190.1 161.4 185.3 74.4 211.7c-12.4 3.8-25.7-3.3-29.5-15.7-3.8-12.4 3.3-25.7 15.7-29.5 99.9-30.3 266-24.9 360.7 31.3 11.2 6.7 14.9 21.2 8.2 32.4-6.6 11.2-21.1 14.9-32.3 8.5z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* Main Sticky Navbar: Sits right beneath top bar with minimal vertical gap ("casi que esten pegados") */}
        <nav className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#18191a]/95 backdrop-blur-md shadow-xl py-1.5 border-b border-white/10' 
            : isTransparentNavbar 
              ? 'bg-transparent pt-0.5 pb-1 sm:pt-1 sm:pb-1.5' 
              : 'bg-[#18191a]/90 backdrop-blur-sm pt-0.5 pb-1 sm:pt-1 sm:pb-1.5 border-b border-white/10'
        }`}>
          <div className="max-w-[1240px] mx-auto px-4 md:px-0 flex items-center justify-between">
            
            {/* Logo: Inset exactly aligned with Phone number above */}
            <Link href={getLocalizedUrl('home', language)} className="flex items-center group focus:outline-none">
              <img 
                src="/images/logo.png" 
                alt="Saucedo Consultoría Jurídica y Mediación" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Right Controls: Navigation Links + Flag Translator in Header + Menu Toggle */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              
              {/* Desktop Menu Links: Lora typography, clean, no focus borders */}
              <div className="hidden md:flex items-center space-x-6 sm:space-x-7 font-lora text-xs sm:text-[13px] uppercase tracking-[0.16em] font-medium">
                {primaryLinks.map((item) => {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-lora text-white hover:text-gray-300 transition-colors cursor-pointer py-1 select-none outline-none focus:outline-none focus-visible:outline-none border-none ring-0 focus:ring-0"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* TRANSLATOR IN HEADER WITH TRANSLATED LANGUAGE NAMES ACCORDING TO ACTIVE LANGUAGE */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/40 hover:border-white text-white px-2.5 py-1.5 rounded-none text-xs font-sans transition-all cursor-pointer shadow-sm"
                  aria-label="Seleccionar idioma / Select language"
                  title="Cambiar idioma"
                >
                  <img
                    src={currentLangObj.flagImg}
                    alt={currentLangObj.code}
                    className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm"
                  />
                  <span className="uppercase text-[11px] font-bold tracking-wider">
                    {currentLangObj.code}
                  </span>
                  <ChevronDown className={`w-3 h-3 text-white/80 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Options: Translated into the current active language */}
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#18191b] border border-white/20 shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1 text-[10px] font-sans uppercase tracking-wider text-white/50 border-b border-white/10 mb-1">
                      {t.header.language}
                    </div>
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLanguage(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-sans transition-colors cursor-pointer text-left ${
                          language === item.code
                            ? 'bg-[#3B3C3D] text-white font-semibold'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.flagImg}
                            alt={item.name}
                            className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm"
                          />
                          <span className="capitalize">{item.name}</span>
                        </div>
                        <span className="text-[10px] text-white/60 uppercase font-mono">
                          {item.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Menu Toggle: Aligns on right with Spotify icon above */}
              <button
                onClick={() => setMenuOpen(true)}
                className="px-2.5 py-2 sm:px-3 sm:py-2.5 border border-white bg-transparent hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Alternar menú"
                title="Menú"
              >
                <div className="flex flex-col space-y-1.5 w-5 sm:w-6 items-center justify-center">
                  <span className="w-full h-[2px] bg-white block" />
                  <span className="w-full h-[2px] bg-white block" />
                </div>
              </button>

            </div>

          </div>
        </nav>
      </header>

      {/* Fullscreen Menu Overlay */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
