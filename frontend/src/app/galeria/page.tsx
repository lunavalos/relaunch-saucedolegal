'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { GalleryCategory, GalleryItem } from '@/types';
import { api, fallbackGallery } from '@/services/api';
import { getMediaUrl } from '@/utils/media';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface DisplayPhoto {
  id?: string | number;
  url: string;
}

export default function GaleriaPage() {
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [activeTabKey, setActiveTabKey] = useState<string>('oficinas');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback tabs when backend has no categories yet
  const fallbackTabs = [
    { key: 'oficinas', label: t.gallery.offices },
    { key: 'eventos', label: t.gallery.events },
    { key: 'inauguracion', label: t.gallery.events },
    { key: 'medios', label: t.gallery.media },
    { key: 'socios', label: t.gallery.offices },
    { key: 'equipo', label: t.gallery.team },
  ];

  useEffect(() => {
    let isMounted = true;
    api.getGalleryCategories(language).then((data) => {
      if (isMounted) {
        if (data && data.length > 0) {
          setCategories(data);
          setActiveTabKey(data[0].slug || String(data[0].id) || 'cat-0');
        }
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [language]);

  // Determine current tabs
  const isCmsMode = categories.length > 0;
  const currentTabs = isCmsMode
    ? categories.map((cat, idx) => ({
        key: cat.slug || String(cat.id || idx),
        label: cat.title,
      }))
    : fallbackTabs;

  // Determine photos to display for the active tab
  let currentPhotos: DisplayPhoto[] = [];

  if (isCmsMode) {
    const selectedCategory = categories.find(
      (cat, idx) => (cat.slug || String(cat.id || idx)) === activeTabKey
    ) || categories[0];

    if (selectedCategory && selectedCategory.images) {
      currentPhotos = selectedCategory.images
        .filter((item) => item && item.image)
        .map((item, idx) => ({
          id: item.id || idx,
          url: getMediaUrl(item.image),
        }));
    }
  } else {
    // Fallback mode using fallbackGallery
    currentPhotos = fallbackGallery
      .filter((it) => it.category === activeTabKey)
      .map((it, idx) => ({
        id: it.id || idx,
        url: it.imageUrl || getMediaUrl(it.image) || '/images/1-1.jpg',
      }));
  }

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[32vh] min-h-[240px] md:h-[38vh] flex items-center justify-center overflow-hidden bg-[#111214]">
        {/* Background Photo & Dark Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src="/images/33A7570.jpg"
            alt="Galería Saucedo Legal"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-14 md:pt-16">
          <span 
            data-reveal="fade-up"
            className="font-sans text-[11px] md:text-xs text-white/80 uppercase tracking-[0.25em] font-semibold block mb-2"
          >
            {t.gallery.badge}
          </span>
          <div className="reveal-mask">
            <h1 
              data-reveal="fade-up"
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal uppercase text-white select-none delay-150"
            >
              {t.gallery.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. MAIN GALLERY SECTION ON WHITE BACKGROUND */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-12">
            {currentTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTabKey(tab.key);
                  setSelectedIdx(null);
                }}
                className={`px-5 py-2.5 rounded-none text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeTabKey === tab.key
                    ? 'bg-[#18191a] text-white border border-[#18191a] shadow-md'
                    : 'bg-[#f4f4f5] text-gray-700 border border-gray-300 hover:bg-gray-200 hover:text-black hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Images Grid (No titles or descriptions needed for individual images) */}
          {currentPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7">
              {currentPhotos.map((photo, idx) => (
                <div
                  key={photo.url + idx}
                  onClick={() => setSelectedIdx(idx)}
                  data-reveal="scale"
                  style={{ transitionDelay: `${(idx % 3) * 110}ms` }}
                  className="group relative aspect-[4/3] rounded-none overflow-hidden bg-gray-100 border border-gray-200 hover:border-black cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={photo.url}
                    alt="Foto de galería"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/1-1.jpg';
                    }}
                  />
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 text-[#111214] flex items-center justify-center rounded-none shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-gray-300 rounded-none bg-gray-50/50">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="font-lora text-base text-gray-600 font-light">
                {t.common.notFound}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {selectedIdx !== null && currentPhotos[selectedIdx] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-none bg-black/80 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
            aria-label="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + currentPhotos.length) % currentPhotos.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-none bg-black/80 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % currentPhotos.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-none bg-black/80 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Counter */}
          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhotos[selectedIdx].url}
              alt="Foto ampliada"
              className="max-h-[75vh] max-w-full object-contain rounded-none border border-white/20 shadow-2xl mb-4"
            />
            <div className="text-center px-4">
              <span className="font-sans text-xs text-gray-400 tracking-widest uppercase">
                {selectedIdx + 1} de {currentPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
