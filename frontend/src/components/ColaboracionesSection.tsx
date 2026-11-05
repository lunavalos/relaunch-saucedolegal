import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Mic, Radio, Tv, ExternalLink } from 'lucide-react';

export const ColaboracionesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="colaboraciones" className="py-24 bg-[#242526] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.collaborations.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.collaborations.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {t.collaborations.subtitle}
          </p>
        </div>

        {/* Collaborations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Podcast Card */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/70 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#333436] border border-[#48494b] flex items-center justify-center text-white mb-6 group-hover:bg-[#3B3C3D] group-hover:border-[#959597] transition-all">
                <Mic className="w-7 h-7 text-[#ffffff]" />
              </div>
              <span className="font-sans text-[11px] text-[#959597] uppercase tracking-widest font-semibold block mb-2">
                Podcast Oficial
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-4 group-hover:text-gray-100 transition-colors">
                {t.collaborations.podcastTitle}
              </h3>
              <p className="font-serif text-sm text-gray-300 font-light leading-relaxed mb-6">
                {t.collaborations.podcastDesc}
              </p>
            </div>

            <div className="pt-6 border-t border-[#3B3C3D]">
              <a
                href="https://www.youtube.com/@EntreAbogadosTV"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#3B3C3D] hover:bg-[#484a4c] text-white border border-[#959597]/40 px-5 py-2.5 rounded text-xs font-sans uppercase tracking-wider font-semibold transition-colors"
              >
                <span>{t.collaborations.listenPodcast}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#959597]" />
              </a>
            </div>
          </div>

          {/* Zona de Negocios Card */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/70 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#333436] border border-[#48494b] flex items-center justify-center text-white mb-6 group-hover:bg-[#3B3C3D] group-hover:border-[#959597] transition-all">
                <Radio className="w-7 h-7 text-[#ffffff]" />
              </div>
              <span className="font-sans text-[11px] text-[#959597] uppercase tracking-widest font-semibold block mb-2">
                Análisis Financiero y Jurídico
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-4 group-hover:text-gray-100 transition-colors">
                {t.collaborations.tvTitle}
              </h3>
              <p className="font-serif text-sm text-gray-300 font-light leading-relaxed mb-6">
                {t.collaborations.tvDesc}
              </p>
            </div>

            <div className="pt-6 border-t border-[#3B3C3D]">
              <span className="font-sans text-xs text-[#959597] italic">
                Con el periodista Javier Medina Pasten
              </span>
            </div>
          </div>

          {/* RCG Media Card */}
          <div className="bg-[#28292a] border border-[#3B3C3D] hover:border-[#959597]/70 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#333436] border border-[#48494b] flex items-center justify-center text-white mb-6 group-hover:bg-[#3B3C3D] group-hover:border-[#959597] transition-all">
                <Tv className="w-7 h-7 text-[#ffffff]" />
              </div>
              <span className="font-sans text-[11px] text-[#959597] uppercase tracking-widest font-semibold block mb-2">
                Televisión y Prensa Digital
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-4 group-hover:text-gray-100 transition-colors">
                {t.collaborations.mediaTitle}
              </h3>
              <p className="font-serif text-sm text-gray-300 font-light leading-relaxed mb-6">
                {t.collaborations.mediaDesc}
              </p>
            </div>

            <div className="pt-6 border-t border-[#3B3C3D]">
              <span className="font-sans text-xs text-[#959597] italic">
                Cobertura estatal y nacional
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
