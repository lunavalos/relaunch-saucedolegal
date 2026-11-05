import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Compass, Eye, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export const NosotrosSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="nosotros" className="py-24 bg-[#202122] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.about.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-6">
            {t.about.title}
          </h2>
          <p className="font-serif text-lg text-gray-300 leading-relaxed font-light">
            {t.about.lead}
          </p>
        </div>

        {/* Detailed firm description with visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              {t.about.p1}
            </p>
            <div className="pt-2">
              <button
                onClick={() => scrollTo('equipo')}
                className="inline-flex items-center gap-2 bg-[#3B3C3D] hover:bg-[#494b4d] text-white border border-[#959597]/50 px-6 py-3 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-200 shadow-md group cursor-pointer"
              >
                <span>{t.about.btnTeam}</span>
                <ArrowRight className="w-4 h-4 text-[#959597] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#3B3C3D] shadow-2xl group">
              <img 
                src="/images/1-2.jpg" 
                alt="Oficinas Saucedo Legal" 
                className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202122] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#28292a]/90 backdrop-blur-md border border-[#3B3C3D]">
                <div className="flex items-center gap-2 text-[#959597] text-xs font-sans uppercase tracking-wider mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Distrito Financiero Saltillo</span>
                </div>
                <p className="font-serif text-xs text-gray-200">
                  Edificio Corporativo QX, Boulevard Galerías.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/60 p-8 rounded-lg transition-all duration-300 hover:shadow-xl flex flex-col group">
            <div className="w-12 h-12 rounded bg-[#3B3C3D]/80 border border-[#959597]/40 flex items-center justify-center text-white mb-6 group-hover:bg-[#48494b] transition-colors">
              <Compass className="w-6 h-6 text-[#ffffff]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white mb-4">
              {t.about.missionTitle}
            </h3>
            <p className="font-serif text-sm text-gray-300 leading-relaxed font-light">
              {t.about.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/60 p-8 rounded-lg transition-all duration-300 hover:shadow-xl flex flex-col group">
            <div className="w-12 h-12 rounded bg-[#3B3C3D]/80 border border-[#959597]/40 flex items-center justify-center text-white mb-6 group-hover:bg-[#48494b] transition-colors">
              <Eye className="w-6 h-6 text-[#ffffff]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white mb-4">
              {t.about.visionTitle}
            </h3>
            <p className="font-serif text-sm text-gray-300 leading-relaxed font-light">
              {t.about.visionText}
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/60 p-8 rounded-lg transition-all duration-300 hover:shadow-xl flex flex-col group">
            <div className="w-12 h-12 rounded bg-[#3B3C3D]/80 border border-[#959597]/40 flex items-center justify-center text-white mb-6 group-hover:bg-[#48494b] transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#ffffff]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white mb-4">
              {t.about.valuesTitle}
            </h3>
            <p className="font-serif text-sm text-gray-300 leading-relaxed font-light">
              {t.about.valuesText}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
