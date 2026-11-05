'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';

export default function ColaboracionesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[32vh] min-h-[240px] md:h-[38vh] flex items-center justify-center overflow-hidden">
        {/* Background Photo & Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/33A7570.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-14 md:pt-16">
          <div className="reveal-mask">
            <h1 
              data-reveal="fade-up"
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal uppercase text-white select-none"
            >
              {t.collaborations.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT ON WHITE BACKGROUND */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          {/* 3 Featured Collaborations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Entre Abogados Te Veas */}
            <div 
              data-reveal="fade-up"
              className="bg-white border border-gray-200 hover:border-[#111214] rounded-none overflow-hidden shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[16/10] sm:aspect-square w-full bg-gray-50 border-b border-gray-100 overflow-hidden flex items-center justify-center p-8">
                  <img
                    src="/images/entreabogadosteveas.webp"
                    alt="Podcast Entre Abogados Te Veas"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/1-7.jpg';
                    }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-lora text-xl md:text-2xl font-normal text-[#111214] mb-3 group-hover:text-black transition-colors">
                    {t.collaborations.podcastTitle}
                  </h2>
                  <p className="font-lora text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                    {t.collaborations.podcastDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-8 pt-2">
                <a
                  href="https://www.youtube.com/@EntreAbogadosTV"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#18191a] hover:bg-black text-white px-5 py-2.5 rounded-none text-xs font-sans uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <span>{t.videos.watchOnYouTube}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>

            {/* Card 2: Zona de Negocios */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '140ms' }}
              className="bg-white border border-gray-200 hover:border-[#111214] rounded-none overflow-hidden shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[16/10] sm:aspect-square w-full bg-gray-50 border-b border-gray-100 overflow-hidden flex items-center justify-center p-8">
                  <img
                    src="/images/eldiariodecoahuila.webp"
                    alt="Zona de Negocios"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/1-7.jpg';
                    }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-lora text-xl md:text-2xl font-normal text-[#111214] mb-3 group-hover:text-black transition-colors">
                    {t.collaborations.tvTitle}
                  </h2>
                  <p className="font-lora text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                    {t.collaborations.tvDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-8 pt-2">
                <a
                  href="https://eldiariodecoahuila.com.mx/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#18191a] hover:bg-black text-white px-5 py-2.5 rounded-none text-xs font-sans uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <span>{t.collaborations.visitWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>

            {/* Card 3: A Tiempo Matutino y RCG Media */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '280ms' }}
              className="bg-white border border-gray-200 hover:border-[#111214] rounded-none overflow-hidden shadow-md hover:shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="aspect-[16/10] sm:aspect-square w-full bg-gray-50 border-b border-gray-100 overflow-hidden flex items-center justify-center p-8">
                  <img
                    src="/images/atiempo-tv.webp"
                    alt="A Tiempo TV y RCG Media"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/1-7.jpg';
                    }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-lora text-xl md:text-2xl font-normal text-[#111214] mb-3 group-hover:text-black transition-colors">
                    {t.collaborations.mediaTitle}
                  </h2>
                  <p className="font-lora text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                    {t.collaborations.mediaDesc}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-8 pt-2">
                <a
                  href="https://atiempo.tv/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#18191a] hover:bg-black text-white px-5 py-2.5 rounded-none text-xs font-sans uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <span>{t.collaborations.visitWebsite}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}