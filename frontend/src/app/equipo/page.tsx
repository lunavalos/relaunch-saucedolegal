'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { TeamMember } from '@/types';
import { api, fallbackTeam } from '@/services/api';
import { getMediaUrl } from '@/utils/media';
import { ArrowRight } from 'lucide-react';

export default function EquipoPage() {
  const { t, language } = useLanguage();
  const [team, setTeam] = useState<TeamMember[]>(fallbackTeam);

  useEffect(() => {
    let isMounted = true;
    api.getTeam(language).then((data) => {
      if (isMounted) setTeam(data);
    });
    return () => {
      isMounted = false;
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER IDENTICAL TO NOSOTROS */}
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
              {t.team.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. TEAM MEMBERS GRID ON CLEAN WHITE BACKGROUND */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {team.map((member, idx) => (
              <Link
                key={member.slug || member.name}
                href={`/equipo/${member.slug}`}
                data-reveal="fade-up"
                style={{ transitionDelay: `${(idx % 3) * 120}ms` }}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Member photo container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-[#111214] transition-all duration-300 shadow-md group-hover:shadow-2xl mb-4">
                  <img
                    src={getMediaUrl(member.photoSitting) || getMediaUrl(member.photoStanding, '/images/1-3.jpg')}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getMediaUrl(member.photoStanding, '/images/logo.png');
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Name in Lora */}
                <h4 className="font-lora text-base sm:text-lg font-normal text-[#111214] group-hover:text-black transition-colors">
                  {member.name}
                </h4>

                {/* Role in Sans-serif */}
                <p className="font-sans text-[11px] text-[#777777] uppercase tracking-wider mt-1 line-clamp-1">
                  {member.role}
                </p>

                {/* Link prompt */}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-widest text-gray-400 group-hover:text-black mt-3 transition-colors">
                  <span>{t.common.viewProfile}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}