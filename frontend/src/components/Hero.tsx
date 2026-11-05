import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, ChevronRight, Scale, Award, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Video with Fallback Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
        >
          <source src="/videos/Saucedo.webm" type="video/webm" />
          <source src="/videos/abogados-saltillo-saucedo-legal.webm" type="video/webm" />
        </video>
        {/* Luxury subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242526] via-[#242526]/70 to-[#202122]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B3C3D]/80 border border-[#959597]/50 text-[#ffffff] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-6 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Award className="w-4 h-4 text-[#959597]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Heading in Lora */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-white max-w-4xl tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t.hero.title}
        </h1>

        {/* Subtitle in Lora / Raleway */}
        <p className="font-serif text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 font-normal animate-in fade-in slide-in-from-bottom-5 duration-800">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-900">
          <button
            onClick={() => scrollTo('areas-de-practica')}
            className="w-full sm:w-auto bg-[#3B3C3D] hover:bg-[#4a4c4e] text-white border border-[#959597] px-8 py-3.5 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo('contacto')}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-gray-400 hover:border-white px-8 py-3.5 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl pt-8 border-t border-[#3B3C3D]/80">
          <div className="flex flex-col items-center p-3 rounded-lg bg-[#28292a]/60 backdrop-blur-sm border border-[#3B3C3D]">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.hero.stat1Number}
            </span>
            <span className="font-sans text-[11px] md:text-xs text-[#959597] uppercase tracking-wider text-center mt-1">
              {t.hero.stat1Label}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-[#28292a]/60 backdrop-blur-sm border border-[#3B3C3D]">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.hero.stat2Number}
            </span>
            <span className="font-sans text-[11px] md:text-xs text-[#959597] uppercase tracking-wider text-center mt-1">
              {t.hero.stat2Label}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-[#28292a]/60 backdrop-blur-sm border border-[#3B3C3D]">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.hero.stat3Number}
            </span>
            <span className="font-sans text-[11px] md:text-xs text-[#959597] uppercase tracking-wider text-center mt-1">
              {t.hero.stat3Label}
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-[#28292a]/60 backdrop-blur-sm border border-[#3B3C3D]">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.hero.stat4Number}
            </span>
            <span className="font-sans text-[11px] md:text-xs text-[#959597] uppercase tracking-wider text-center mt-1">
              {t.hero.stat4Label}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
