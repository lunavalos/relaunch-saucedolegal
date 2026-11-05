import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GalleryItem } from '../types';
import { api } from '../services/api';
import { Image, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GaleriaSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    api.getGallery(language).then(data => {
      if (isMounted) setItems(data);
    });
    return () => { isMounted = false; };
  }, [language]);

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  const filterTabs = [
    { key: 'all', label: t.gallery.all },
    { key: 'oficinas', label: t.gallery.offices },
    { key: 'eventos', label: t.gallery.events },
    { key: 'medios', label: t.gallery.media },
    { key: 'equipo', label: t.gallery.team },
  ];

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galeria" className="py-24 bg-[#202122] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.gallery.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.gallery.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filter === tab.key
                  ? 'bg-[#3B3C3D] text-white border border-[#959597]'
                  : 'bg-[#28292a] text-gray-300 border border-[#3B3C3D] hover:bg-[#333436] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.imageUrl + idx}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative h-72 rounded-lg overflow-hidden border border-[#3B3C3D] bg-[#1f2021] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/1-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-sans text-[10px] text-[#959597] uppercase tracking-widest font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-white font-medium mb-1">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="font-serif text-xs text-gray-300 font-light line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-sans text-[#959597]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1f2021]/80 text-[#959597] hover:text-white hover:bg-[#3B3C3D] flex items-center justify-center transition-colors border border-[#3B3C3D] cursor-pointer"
            aria-label="Cerrar visor"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Photo */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1f2021]/80 text-white hover:bg-[#3B3C3D] flex items-center justify-center transition-colors border border-[#3B3C3D] cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Photo */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1f2021]/80 text-white hover:bg-[#3B3C3D] flex items-center justify-center transition-colors border border-[#3B3C3D] cursor-pointer"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedPhotoIndex].imageUrl}
              alt={filteredItems[selectedPhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-lg border border-[#3B3C3D] shadow-2xl mb-4"
            />
            <div className="text-center px-4 max-w-2xl">
              <h4 className="font-serif text-lg text-white font-medium mb-1">
                {filteredItems[selectedPhotoIndex].title}
              </h4>
              {filteredItems[selectedPhotoIndex].description && (
                <p className="font-serif text-xs text-gray-300 font-light">
                  {filteredItems[selectedPhotoIndex].description}
                </p>
              )}
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
