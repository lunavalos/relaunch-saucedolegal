'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1b1c] border-t border-[#3B3C3D] text-gray-400 font-serif">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Saucedo Legal Logo" 
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-sans text-[#959597] bg-[#222324] px-2.5 py-1 rounded border border-[#3B3C3D]">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>Más de 20 años de experiencia</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-4 border-b border-[#3B3C3D] pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => scrollTo('inicio')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('nosotros')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('equipo')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.team}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.practiceAreas}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('videos')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.videos}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('galeria')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('colaboraciones')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.collaborations}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contacto')} className="hover:text-white transition-colors cursor-pointer">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-4 border-b border-[#3B3C3D] pb-2">
              {t.footer.practiceAreas}
            </h4>
            <ul className="space-y-1.5 text-xs font-sans">
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Corporativo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Laboral
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Seguridad Social
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Mercantil y Civil
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Familiar y Mediación
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Fiscal y Tributario
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Propiedad Intelectual
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Penal y Ambiental
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('areas-de-practica')} className="hover:text-white transition-colors cursor-pointer">
                  Derecho Migratorio
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-4 border-b border-[#3B3C3D] pb-2">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#959597] shrink-0 mt-0.5" />
                <span>Edificio QX, Blvd. Galerías 200 - Piso 4, Villa Olímpica, 25240 Saltillo, Coah.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#959597] shrink-0" />
                <a href="tel:8443438333" className="hover:text-white transition-colors">
                  844-343-8333 / 844-980-1322
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#959597] shrink-0" />
                <a href="mailto:contacto@saucedolegal.mx" className="hover:text-white transition-colors">
                  contacto@saucedolegal.mx
                </a>
              </div>
              
              <div className="pt-3">
                <a
                  href="http://localhost:3000/admin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-sans text-gray-400 hover:text-white bg-[#28292a] border border-[#3B3C3D] px-3 py-1 rounded"
                >
                  <span>Acceso Payload CMS</span>
                  <ExternalLink className="w-3 h-3 text-[#959597]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#3B3C3D]/60 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-500 gap-4">
          <p>© 2026 {t.footer.rights}</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">
              {t.footer.privacyPolicy}
            </span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
