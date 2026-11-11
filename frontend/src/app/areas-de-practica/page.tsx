'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedDetailUrl } from '@/i18n/navigation';
import { PracticeArea } from '@/types';
import { api, fallbackPracticeAreas } from '@/services/api';
import { AreaIcon } from '@/components/AreaIcon';
import { ArrowRight } from 'lucide-react';

export default function AreasPage() {
  const { t, language } = useLanguage();
  const [areas, setAreas] = useState<PracticeArea[]>(fallbackPracticeAreas);

  useEffect(() => {
    let isMounted = true;
    api.getPracticeAreas(language).then((data) => {
      if (isMounted && data && data.length > 0) setAreas(data);
    });
    return () => {
      isMounted = false;
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER IDENTICAL TO NOSOTROS & EQUIPO */}
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
              {t.areas.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE AREAS GRID ON WHITE BACKGROUND */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {areas.map((area, idx) => (
              <Link
                key={area.slug || idx}
                href={getLocalizedDetailUrl("practiceAreas", area.slug || "", language)}
                data-reveal="fade-up"
                style={{ transitionDelay: `${(idx % 3) * 110}ms` }}
                className="bg-white border border-gray-200 hover:border-[#111214] p-8 rounded-none transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#242527] border border-[#3B3C3D] flex items-center justify-center text-white mb-6 group-hover:bg-[#111214] transition-all">
                    <AreaIcon icon={area.icon} className="text-xl text-white" />
                  </div>

                  <h3 className="font-lora text-xl font-normal text-[#111214] mb-3 group-hover:text-black transition-colors">
                    {area.title}
                  </h3>

                  <p className="font-lora text-xs md:text-sm text-[#555555] font-light leading-relaxed line-clamp-3 mb-6">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-sans text-gray-500 group-hover:text-black transition-colors">
                  <span className="uppercase tracking-wider font-medium text-[11px]">{t.areas.moreInfo}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}