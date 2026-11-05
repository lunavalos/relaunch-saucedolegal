'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedUrl } from '@/i18n/navigation';

export default function NosotrosPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER WITH BACKGROUND IMAGE 33A7570.jpg */}
      <section className="relative w-full h-[38vh] min-h-[290px] md:h-[46vh] flex items-center justify-center overflow-hidden">
        {/* Background Photo & Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/33A7570.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 text-center px-4 pt-16 md:pt-20">
          <div className="reveal-mask">
            <h1 
              data-reveal="fade-up"
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.24em] text-white select-none"
            >
              {t.nav.about}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION: TEXT + OUTDOOR TEAM PHOTO 1-1.jpg */}
      <section className="bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Heading + Paragraph + Button */}
            <div 
              data-reveal="fade-up"
              className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-4"
            >
              <h2 className="font-lora text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-normal text-[#111214] tracking-tight uppercase leading-snug">
                {t.about.title}
              </h2>
              
              <p className="font-lora text-sm sm:text-base md:text-[16px] text-[#333333] leading-relaxed font-light">
                {t.about.lead} {t.about.p1}
              </p>

              <div className="pt-2">
                <Link
                  href={getLocalizedUrl('team', language)}
                  className="inline-block border border-black bg-transparent hover:bg-black hover:text-white text-black px-8 py-3 rounded-none font-lora text-xs uppercase tracking-[0.2em] font-normal transition-all duration-300 shadow-sm cursor-pointer"
                >
                  {t.about.btnTeam}
                </Link>
              </div>
            </div>

            {/* Right Column: Outdoor Team Terrace Photo (1-1.jpg) */}
            <div 
              data-reveal="scale"
              className="lg:col-span-6 flex justify-center delay-150"
            >
              <div className="w-full shadow-2xl overflow-hidden border border-gray-100 group">
                <img
                  src="/images/1-1.jpg"
                  alt="Equipo Saucedo Consultoría Jurídica y Mediación"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CHECKERBOARD SECTION: MISIÓN & VISIÓN */}
      <section className="w-full overflow-hidden">
        
        {/* ROW 1: MISIÓN (Dark Left, White Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] lg:min-h-[460px]">
          
          {/* Top-Left: MISIÓN Title with Deco Graphic 01 */}
          <div 
            data-reveal="fade-up"
            className="bg-[#2c2d2e] flex items-center justify-center md:justify-end px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-0 relative bg-no-repeat bg-[length:50%_auto] sm:bg-[length:40%_auto] bg-left-bottom"
            style={{ backgroundImage: `url('/images/lawfirm-deco-01.png')` }}
          >
            <h2 className="font-lora text-5xl sm:text-6xl md:text-6xl lg:text-[76px] font-normal text-white uppercase tracking-tight select-none">
              {t.about.missionTitle}
            </h2>
          </div>

          {/* Top-Right: Misión Text */}
          <div 
            data-reveal="fade-up"
            className="bg-white flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-20 delay-150"
          >
            <div className="max-w-xl">
              <p className="font-lora text-sm sm:text-base md:text-[16px] text-[#2c2d2e] leading-relaxed font-light">
                {t.about.missionText}
              </p>
            </div>
          </div>

        </div>

        {/* ROW 2: VISIÓN (White Left, Dark Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px] lg:min-h-[460px]">
          
          {/* Bottom-Left: Visión Text */}
          <div 
            data-reveal="fade-up"
            className="bg-white flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-20 order-2 md:order-1"
          >
            <div className="max-w-xl">
              <p className="font-lora text-sm sm:text-base md:text-[16px] text-[#2c2d2e] leading-relaxed font-light">
                {t.about.visionText}
              </p>
            </div>
          </div>

          {/* Bottom-Right: VISIÓN Title with Deco Graphic 02 */}
          <div 
            data-reveal="fade-up"
            className="bg-[#2c2d2e] flex items-center justify-center md:justify-start px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-0 relative bg-no-repeat bg-[length:50%_auto] sm:bg-[length:40%_auto] bg-right-top order-1 md:order-2 delay-150"
            style={{ backgroundImage: `url('/images/lawfirm-deco-02.png')` }}
          >
            <h2 className="font-lora text-5xl sm:text-6xl md:text-6xl lg:text-[76px] font-normal text-white uppercase tracking-tight select-none">
              {t.about.visionTitle}
            </h2>
          </div>

        </div>

      </section>
    </div>
  );
}