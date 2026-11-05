'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedUrl } from '@/i18n/navigation';

export default function HomePage() {
  const { t, language } = useLanguage();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#0d0e10] flex flex-col justify-end items-center">
      {/* Background Fullscreen Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        >
          <source src="/videos/abogados-saltillo-saucedo-legal.webm" type="video/webm" />
          <source src="/videos/Saucedo.webm" type="video/webm" />
        </video>

        {/* Exact gradient overlay matching original Elementor CSS: linear-gradient(180deg, #11132047 0%, #0F1120BF 100%) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(17, 19, 32, 0.28) 0%, rgba(15, 17, 32, 0.55) 50%, rgba(15, 17, 32, 0.88) 100%)'
          }}
        />
      </div>

      {/* Hero Content: Centered at the bottom */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center text-center pb-14 sm:pb-16 md:pb-20">
        
        {/* Eyebrow: Asesoría legal corporativa (Raleway) */}
        <div className="reveal-mask mb-2 sm:mb-2.5">
          <p 
            data-reveal="fade-up"
            className="font-raleway text-xs sm:text-[13px] text-white/90 uppercase tracking-[0.24em] font-normal"
          >
            {t.hero.eyebrow}
          </p>
        </div>

        {/* Main Heading: Más de 20 años de Experiencia (Lora, en una sola línea) */}
        <div className="reveal-mask mb-2 sm:mb-2.5">
          <h1 
            data-reveal="fade-up"
            className="font-lora text-xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-[0.04em] uppercase leading-tight whitespace-nowrap delay-150"
          >
            {t.hero.heroTitle}
          </h1>
        </div>

        {/* Subtitle: Contribuyendo con el éxito de nuestros clientes (Raleway) */}
        <div className="reveal-mask mb-5 sm:mb-6">
          <p 
            data-reveal="fade-up"
            className="font-raleway text-xs sm:text-[13px] md:text-sm text-white/90 uppercase tracking-[0.18em] font-light delay-225"
          >
            {t.hero.tagline}
          </p>
        </div>

        {/* Contact CTA Button with Smartphone Glyph (Lora) */}
        <div data-reveal="fade-up" className="delay-300">
          <Link
            href={getLocalizedUrl('contact', language)}
            className="font-lora inline-flex items-center justify-center gap-2 border border-white bg-black/25 hover:bg-white hover:text-[#0d0e10] text-white px-6 py-2 sm:px-7 sm:py-2.5 rounded-none text-xs sm:text-[13px] uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl group cursor-pointer"
          >
            <span>{t.hero.contactBtn}</span>
            <svg 
              className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" 
              viewBox="0 0 320 512" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/>
            </svg>
          </Link>
        </div>

      </div>
    </main>
  );
}
