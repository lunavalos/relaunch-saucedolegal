'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedUrl, getLocalizedDetailUrl } from '@/i18n/navigation';
import { TeamMember } from '@/types';
import { api, fallbackTeam } from '@/services/api';
import { getMediaUrl } from '@/utils/media';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  MessageSquare,
  UserCheck
} from 'lucide-react';

export default function TeamMemberDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const slug = (params?.subslug || params?.slug) as string;

  const fallback = fallbackTeam.find((m) => m.slug === slug) || null;
  const [member, setMember] = useState<TeamMember | null>(fallback);
  const [allMembers, setAllMembers] = useState<TeamMember[]>(fallbackTeam);
  const [loading, setLoading] = useState(!fallback);

  // Carousel refs and scroll state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 310;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollability, 350);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (!slug) return;

    if (!member) {
      setLoading(true);
    }

    // Fetch active member
    api.getMemberBySlug(slug, language).then((data) => {
      if (isMounted) {
        if (data) {
          setMember(data);
        }
        setLoading(false);
      }
    });

    // Fetch full team for "Otros miembros del equipo"
    api.getTeam(language).then((teamList) => {
      if (isMounted && teamList && teamList.length > 0) {
        setAllMembers(teamList);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug, language]);

  const otherMembers = allMembers.filter((m) => m.slug !== slug);

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [otherMembers]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-[#111214] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-lora text-sm text-[#777777] uppercase tracking-widest">
            {t.common.loading}
          </p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-6">
          <h2 className="font-lora text-3xl font-normal text-[#111214]">
            {t.common.notFound}
          </h2>
          <p className="font-lora text-sm text-[#555555]">
            {t.team.subtitle}
          </p>
          <div>
            <Link
              href={getLocalizedUrl("team", language)}
              className="inline-flex items-center gap-2 bg-[#18191a] hover:bg-black text-white px-6 py-2.5 rounded-none font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.teamDetail.backToTeam}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Strictly standing photo on the individual page
  const standingPhoto = getMediaUrl(member.photoStanding) || getMediaUrl(member.photoSitting, '/images/1-3.jpg');

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[34vh] min-h-[260px] md:h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Photo & Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/33A7570.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/65 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-16 md:pt-20">
          <span className="font-sans text-[11px] sm:text-xs text-white/75 uppercase tracking-[0.25em] font-medium block mb-2">
            {t.teamDetail.eyebrow}
          </span>
          <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal uppercase text-white tracking-wider select-none leading-tight">
            {member.name}
          </h1>
          <p className="font-lora text-xs sm:text-sm md:text-base text-white/90 font-light mt-2 max-w-2xl mx-auto leading-relaxed">
            {member.role}
          </p>
        </div>
      </section>

      {/* 2. MAIN PROFILE CONTENT ON CLEAN WHITE BACKGROUND */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Back Navigation Link */}
          <div className="mb-10">
            <Link
              href={getLocalizedUrl("team", language)}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#777777] hover:text-black transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{t.teamDetail.backToTeam}</span>
            </Link>
          </div>

          {/* 2-Column Profile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Standing Photo & Direct Contact Box */}
            <div data-reveal="fade-up" className="lg:col-span-5 space-y-6">
              
              {/* Photo Container: Strictly Standing Photo */}
              <div className="relative w-full aspect-[4/5] bg-gray-100 border border-gray-200 shadow-xl overflow-hidden group">
                <img
                  src={standingPhoto}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo.png';
                  }}
                />
              </div>

              {/* Direct Contact Card */}
              <div className="bg-[#fcfcfc] border border-gray-200 p-6 sm:p-7 rounded-none space-y-5 shadow-sm">
                <h3 className="font-lora text-lg font-normal text-[#111214] pb-3 border-b border-gray-200 flex items-center gap-2.5">
                  <UserCheck className="w-4 h-4 text-[#777777]" />
                  <span>{t.teamDetail.contactTitle}</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-sans">
                  {/* Email */}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-[#111214] hover:text-[#555555] transition-colors break-all group"
                    >
                      <div className="w-8 h-8 rounded-none bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#111214] group-hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5 text-[#777777] group-hover:text-white" />
                      </div>
                      <span className="font-light">{member.email}</span>
                    </a>
                  )}

                  {/* Phone */}
                  <a
                    href={`tel:${(member.phone || '844-343-8333').replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-3 text-[#111214] hover:text-[#555555] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-none bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#111214] group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#777777] group-hover:text-white" />
                    </div>
                    <span className="font-light">{member.phone || '844-343-8333'}</span>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-3 text-[#555555]">
                    <div className="w-8 h-8 rounded-none bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#777777]" />
                    </div>
                    <span className="text-xs leading-relaxed font-light">
                      {t.common.locationSaltillo}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-gray-200">
                  <a
                    href={`https://wa.me/+528443438333?text=Hola,%20deseo%20contactar%20con%20${encodeURIComponent(member.name)}%20de%20Saucedo%20Legal.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#18191a] hover:bg-black text-white px-5 py-3 rounded-none text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>{t.common.whatsappImmediate}</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Full Professional Biography & Education */}
            <div data-reveal="fade-up" style={{ transitionDelay: '150ms' }} className="lg:col-span-7 space-y-10">
              
              {/* Header Title & Role */}
              <div>
                <span className="font-sans text-[11px] text-[#777777] uppercase tracking-widest font-semibold block mb-2">
                  {t.team.badge}
                </span>
                <h2 className="font-lora text-3xl sm:text-4xl font-normal text-[#111214] mb-3">
                  {member.name}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#777777] uppercase tracking-wider font-semibold">
                  {member.role}
                </p>
                <div className="w-16 h-0.5 bg-[#111214] mt-5" />
              </div>

              {/* Semblanza Profesional / Biografía */}
              <div className="space-y-4">
                <h3 className="font-lora text-xl font-normal text-[#111214] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#777777]" />
                  <span>{t.team.viewBio}</span>
                </h3>
                <div className="text-sm sm:text-base text-[#333333] font-lora leading-relaxed font-light whitespace-pre-line text-justify">
                  {member.bio}
                </div>
              </div>

              {/* Formación Académica */}
              {member.education && (
                <div className="p-6 sm:p-7 bg-[#fbfbfb] border border-gray-200 rounded-none space-y-3">
                  <h3 className="font-lora text-lg font-normal text-[#111214] flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-[#777777]" />
                    <span>{t.teamDetail.educationTitle}</span>
                  </h3>
                  <p className="font-lora text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    {member.education}
                  </p>
                </div>
              )}

              {/* Áreas de Especialidad / Compromiso */}
              <div className="p-6 sm:p-7 bg-white border border-gray-200 rounded-none space-y-4">
                <h3 className="font-lora text-lg font-normal text-[#111214] flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#777777]" />
                  <span>{t.about.valuesTitle}</span>
                </h3>
                <p className="font-lora text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                  {t.about.valuesText}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#111214] hover:text-[#777777] transition-colors"
                  >
                    <span>{t.nav.scheduleConsultation} →</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* 3. OTROS MIEMBROS DEL EQUIPO — CAROUSEL */}
          {otherMembers.length > 0 && (
            <div className="mt-20 sm:mt-24 pt-14 sm:pt-16 border-t border-gray-200">
              
              {/* Header with Carousel Controls */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
                <div>
                  <span className="font-sans text-[11px] text-[#777777] uppercase tracking-[0.2em] font-semibold block mb-2">
                    {t.teamDetail.otherMembersEyebrow}
                  </span>
                  <h3 className="font-lora text-2xl sm:text-3xl font-normal text-[#111214]">
                    {t.teamDetail.otherMembersTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={getLocalizedUrl("team", language)}
                    className="hidden sm:inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest font-semibold text-[#111214] hover:text-[#777777] transition-colors group mr-2"
                  >
                    <span>{t.teamDetail.backToTeam}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Left / Right Carousel Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleScroll('left')}
                      disabled={!canScrollLeft}
                      className="w-10 h-10 rounded-none border border-gray-300 bg-white text-gray-800 hover:bg-[#111214] hover:text-white hover:border-[#111214] disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleScroll('right')}
                      disabled={!canScrollRight}
                      className="w-10 h-10 rounded-none border border-gray-300 bg-white text-gray-800 hover:bg-[#111214] hover:text-white hover:border-[#111214] disabled:opacity-25 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Horizontal Scroll Track */}
              <div
                ref={carouselRef}
                onScroll={checkScrollability}
                className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 select-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {otherMembers.map((other) => (
                  <Link
                    key={other.slug || other.name}
                    href={getLocalizedDetailUrl("team", other.slug || "", language)}
                    className="w-[260px] sm:w-[280px] shrink-0 group flex flex-col items-center text-center cursor-pointer"
                  >
                    {/* Sitting photo in team cards */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 border border-gray-200 group-hover:border-[#111214] transition-all duration-300 shadow-sm group-hover:shadow-xl mb-3">
                      <img
                        src={getMediaUrl(other.photoSitting) || getMediaUrl(other.photoStanding, '/images/1-3.jpg')}
                        alt={other.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getMediaUrl(other.photoStanding, '/images/logo.png');
                        }}
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    
                    <h4 className="font-lora text-sm sm:text-base font-normal text-[#111214] group-hover:text-black transition-colors line-clamp-1 w-full px-1">
                      {other.name}
                    </h4>
                    
                    <p className="font-sans text-[10px] sm:text-[11px] text-[#777777] uppercase tracking-wider mt-1 line-clamp-1 w-full px-1">
                      {other.role}
                    </p>
                    
                    <span className="inline-flex items-center gap-1 text-[10px] font-sans uppercase tracking-widest text-gray-400 group-hover:text-black mt-2.5 transition-colors">
                      <span>{t.common.viewProfile}</span>
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
}