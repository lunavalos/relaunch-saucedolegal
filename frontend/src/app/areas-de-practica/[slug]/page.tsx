'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { getLocalizedUrl, getLocalizedDetailUrl } from '@/i18n/navigation';
import { PracticeArea } from '@/types';
import { api, fallbackPracticeAreas } from '@/services/api';
import { getMediaUrl } from '@/utils/media';
import { AreaIcon } from '@/components/AreaIcon';
import { 
  ArrowLeft, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function PracticeAreaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const slug = (params?.subslug || params?.slug) as string;

  const fallback = fallbackPracticeAreas.find((a) => a.slug === slug) || null;
  const [area, setArea] = useState<PracticeArea | null>(fallback);
  const [allAreas, setAllAreas] = useState<PracticeArea[]>(fallbackPracticeAreas);
  const [loading, setLoading] = useState(!fallback);

  // Carousel ref and scroll state for "Otras Áreas de Práctica"
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
      const scrollAmount = 340;
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

    if (!area) {
      setLoading(true);
    }

    // Fetch active practice area
    api.getPracticeAreaBySlug(slug, language).then((data) => {
      if (isMounted) {
        if (data) {
          setArea(data);
        }
        setLoading(false);
      }
    });

    // Fetch all practice areas for the bottom carousel
    api.getPracticeAreas(language).then((list) => {
      if (isMounted && list && list.length > 0) {
        setAllAreas(list);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug, language]);

  const otherAreas = allAreas.filter((a) => a.slug !== slug);

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [otherAreas]);

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

  if (!area) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-6">
          <h2 className="font-lora text-3xl font-normal text-[#111214]">
            {t.common.notFound}
          </h2>
          <p className="font-lora text-sm text-[#555555]">
            {t.areas.subtitle}
          </p>
          <div>
            <Link
              href={getLocalizedUrl("practiceAreas", language)}
              className="inline-flex items-center gap-2 bg-[#18191a] hover:bg-black text-white px-6 py-2.5 rounded-none font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.areaDetail.backToAreas}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Background image configured from Payload CMS (area.image), falling back to /images/33A7570.jpg
  const heroBackgroundImage = getMediaUrl(area.image, '/images/33A7570.jpg');

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER WITH CMS CUSTOMIZABLE BACKGROUND IMAGE */}
      <section className="relative w-full h-[36vh] min-h-[280px] md:h-[42vh] flex items-center justify-center overflow-hidden bg-[#111214]">
        {/* Background Photo & Dark Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={heroBackgroundImage}
            alt={area.title}
            className="w-full h-full object-cover object-center transition-all duration-700"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/33A7570.jpg';
            }}
          />
          <div className="absolute inset-0 bg-black/65 backdrop-brightness-[0.7]" />
        </div>

        {/* Hero Title & Eyebrow */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-16 md:pt-20">
          <span className="font-sans text-[11px] md:text-xs text-white/80 uppercase tracking-[0.25em] font-semibold block mb-3">
            {t.areaDetail.eyebrow}
          </span>
          <h1 className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal uppercase text-white tracking-wide select-none">
            {area.title}
          </h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY ON CLEAN WHITE BACKGROUND */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Back Navigation Bar */}
          <div className="mb-10 pb-4 border-b border-gray-200 flex items-center justify-between">
            <Link
              href={getLocalizedUrl("practiceAreas", language)}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-gray-500 hover:text-black transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>{t.areaDetail.backToAreas}</span>
            </Link>

            <span className="text-xs font-sans uppercase tracking-widest text-gray-400">
              {t.common.locationSaltillo}
            </span>
          </div>

          {/* Grid Layout: Detailed Content (Left) & Consultation Box (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Full Presentation of the Practice Area */}
            <div data-reveal="fade-up" className="lg:col-span-8 space-y-8">
              
              {/* Icon badge + Header */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-none bg-[#242527] border border-[#3B3C3D] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <AreaIcon icon={area.icon} className="text-2xl text-white" />
                </div>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-[#888888] block mb-1">
                    {t.areaDetail.integralService}
                  </span>
                  <h2 className="font-lora text-2xl sm:text-3xl md:text-4xl font-normal text-[#111214]">
                    {area.title}
                  </h2>
                </div>
              </div>

              {/* Short Description stylized quote */}
              {area.shortDescription && (
                <div className="border-l-2 border-[#111214] pl-6 py-2 bg-gray-50/80 rounded-none">
                  <p className="font-lora text-base sm:text-lg text-[#222222] font-normal italic leading-relaxed">
                    &ldquo;{area.shortDescription}&rdquo;
                  </p>
                </div>
              )}

              {/* Full Description text */}
              <div className="space-y-4 text-[#444444] font-lora text-base sm:text-lg leading-relaxed font-light">
                {area.fullDescription ? (
                  area.fullDescription.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{area.shortDescription}</p>
                )}
              </div>

              {/* Scope & Highlights of Service */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-lora text-xl font-normal text-[#111214] mb-6">
                  {t.areaDetail.methodologyTitle}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-none space-y-3">
                    <CheckCircle2 className="w-5 h-5 text-[#111214]" />
                    <h4 className="font-lora text-base font-semibold text-[#111214]">
                      {t.areaDetail.step1Title}
                    </h4>
                    <p className="font-lora text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {t.areaDetail.step1Desc}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-none space-y-3">
                    <CheckCircle2 className="w-5 h-5 text-[#111214]" />
                    <h4 className="font-lora text-base font-semibold text-[#111214]">
                      {t.areaDetail.step2Title}
                    </h4>
                    <p className="font-lora text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {t.areaDetail.step2Desc}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-none space-y-3">
                    <CheckCircle2 className="w-5 h-5 text-[#111214]" />
                    <h4 className="font-lora text-base font-semibold text-[#111214]">
                      {t.areaDetail.step3Title}
                    </h4>
                    <p className="font-lora text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                      {t.areaDetail.step3Desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Consultation Box & Contact Card */}
            <div data-reveal="fade-up" style={{ transitionDelay: '150ms' }} className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-white border-2 border-[#111214] p-8 rounded-none shadow-lg space-y-6">
                <div>
                  <span className="font-sans text-[11px] text-[#777777] uppercase tracking-widest font-semibold block mb-1">
                    {t.areaDetail.attentionTitle}
                  </span>
                  <h3 className="font-lora text-2xl font-normal text-[#111214]">
                    {t.areaDetail.attentionQuestion}
                  </h3>
                </div>

                <p className="font-lora text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                  {t.areaDetail.attentionDesc}
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    href={getLocalizedUrl('contact', language)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#18191a] hover:bg-black text-white px-6 py-3 rounded-none text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md group"
                  >
                    <span>{t.areaDetail.bookConsultation}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://wa.me/528443438333?text=Hola,%20quisiera%20recibir%20asesor%C3%ADa%20en%20el%20%C3%A1rea%20de%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 border border-gray-300 hover:border-black text-[#111214] bg-white hover:bg-gray-50 px-6 py-3 rounded-none text-xs font-sans uppercase tracking-widest font-semibold transition-all group"
                  >
                    {/* Official WhatsApp Brand Logo */}
                    <svg 
                      className="w-4 h-4 fill-[#25D366] shrink-0 transition-transform group-hover:scale-110" 
                      viewBox="0 0 448 512" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    <span>{t.common.whatsappImmediate}</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-3 font-sans text-xs text-[#555555]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#111214] shrink-0" />
                    <span>844-343-8333 / 844-980-1322</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#111214] shrink-0" />
                    <span>contacto@saucedolegal.mx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#111214] shrink-0" />
                    <span>{t.common.locationSaltillo}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CAROUSEL: "OTRAS ÁREAS DE PRÁCTICA" */}
      {otherAreas.length > 0 && (
        <section className="bg-[#f9fafb] border-t border-gray-200 py-16 sm:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1240px] mx-auto">
            
            {/* Carousel Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="font-sans text-[11px] text-[#777777] uppercase tracking-widest font-semibold block mb-2">
                  {t.areaDetail.otherAreasEyebrow}
                </span>
                <h3 className="font-lora text-2xl sm:text-3xl font-normal text-[#111214]">
                  {t.areaDetail.otherAreasTitle}
                </h3>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-10 h-10 border flex items-center justify-center transition-all ${
                    canScrollLeft 
                      ? 'border-[#111214] bg-white text-[#111214] hover:bg-[#111214] hover:text-white cursor-pointer' 
                      : 'border-gray-200 bg-white text-gray-300 cursor-not-allowed'
                  }`}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className={`w-10 h-10 border flex items-center justify-center transition-all ${
                    canScrollRight 
                      ? 'border-[#111214] bg-white text-[#111214] hover:bg-[#111214] hover:text-white cursor-pointer' 
                      : 'border-gray-200 bg-white text-gray-300 cursor-not-allowed'
                  }`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div
              ref={carouselRef}
              onScroll={checkScrollability}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 select-none"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {otherAreas.map((other, idx) => (
                  <Link
                    key={other.slug || idx}
                    href={getLocalizedDetailUrl("practiceAreas", other.slug || "", language)}
                    className="flex-none w-[280px] sm:w-[320px] bg-white border border-gray-200 hover:border-[#111214] p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-none bg-[#242527] border border-[#3B3C3D] flex items-center justify-center text-white mb-5 group-hover:bg-[#111214] transition-all">
                        <AreaIcon icon={other.icon} className="text-xl text-white" />
                      </div>

                      <h4 className="font-lora text-lg font-normal text-[#111214] mb-2 group-hover:text-black transition-colors">
                        {other.title}
                      </h4>

                      <p className="font-lora text-xs sm:text-sm text-[#555555] font-light leading-relaxed line-clamp-3 mb-6">
                        {other.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-sans text-gray-500 group-hover:text-black transition-colors">
                      <span className="uppercase tracking-wider font-medium text-[11px]">{t.areaDetail.viewSpecialty}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}