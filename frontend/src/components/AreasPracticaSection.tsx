import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PracticeArea } from '../types';
import { api } from '../services/api';
import { 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Scale, 
  FileText, 
  HeartHandshake, 
  Landmark, 
  Award, 
  ShieldAlert, 
  Leaf, 
  Globe, 
  ChevronRight, 
  X,
  ArrowRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Users,
  ShieldCheck,
  Scale,
  FileText,
  HeartHandshake,
  Landmark,
  Award,
  ShieldAlert,
  Leaf,
  Globe,
};

export const AreasPracticaSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [areas, setAreas] = useState<PracticeArea[]>([]);
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    let isMounted = true;
    api.getPracticeAreas(language).then(data => {
      if (isMounted) setAreas(data);
    });
    return () => { isMounted = false; };
  }, [language]);

  const handleConsult = (areaTitle: string) => {
    setSelectedArea(null);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Preselect in select element
      setTimeout(() => {
        const select = document.getElementById('service-select') as HTMLSelectElement;
        if (select) {
          select.value = areaTitle;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 400);
    }
  };

  return (
    <section id="areas-de-practica" className="py-24 bg-[#202122] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.areas.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.areas.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {t.areas.subtitle}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const IconComponent = (area.icon && ICON_MAP[area.icon]) ? ICON_MAP[area.icon] : Scale;

            return (
              <div
                key={area.slug || index}
                onClick={() => setSelectedArea(area)}
                className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/70 rounded-lg p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#333436] border border-[#48494b] flex items-center justify-center text-white mb-6 group-hover:bg-[#3B3C3D] group-hover:border-[#959597] transition-all">
                    <IconComponent className="w-6 h-6 text-[#ffffff]" />
                  </div>

                  <h3 className="font-serif text-xl font-normal text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {area.title}
                  </h3>

                  <p className="font-serif text-xs md:text-sm text-gray-300 font-light leading-relaxed line-clamp-3 mb-6">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3B3C3D]/60 flex items-center justify-between text-xs font-sans font-medium text-[#959597] group-hover:text-white transition-colors">
                  <span>{t.areas.moreInfo}</span>
                  <ChevronRight className="w-4 h-4 text-[#959597] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Area Details Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#28292a] border border-[#3B3C3D] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1f2021] text-[#959597] hover:text-white hover:bg-[#3B3C3D] flex items-center justify-center transition-colors border border-[#3B3C3D] cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-6">
              <div className="inline-block px-3 py-1 rounded bg-[#3B3C3D]/70 text-[#959597] text-xs font-sans uppercase tracking-widest font-semibold mb-3">
                {t.areas.badge}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-white mb-6">
                {selectedArea.title}
              </h3>
            </div>

            <div className="space-y-4 text-gray-300 font-serif text-sm md:text-base leading-relaxed font-light mb-8">
              <p>{selectedArea.fullDescription || selectedArea.shortDescription}</p>
            </div>

            <div className="pt-6 border-t border-[#3B3C3D] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => handleConsult(selectedArea.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B3C3D] hover:bg-[#4a4c4e] text-white border border-[#959597]/50 px-6 py-3 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
              >
                <span>{t.areas.consultThisArea}</span>
                <ArrowRight className="w-4 h-4 text-[#959597]" />
              </button>

              <button
                onClick={() => setSelectedArea(null)}
                className="text-xs font-sans text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {t.areas.modalClose}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
