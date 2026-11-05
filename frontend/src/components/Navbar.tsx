import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  Clock,
  ExternalLink
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, languages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // detect active section
      const sections = ['inicio', 'nosotros', 'equipo', 'areas-de-practica', 'videos', 'galeria', 'colaboraciones', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: t.nav.home },
    { id: 'nosotros', label: t.nav.about },
    { id: 'equipo', label: t.nav.team },
    { id: 'areas-de-practica', label: t.nav.practiceAreas },
    { id: 'videos', label: t.nav.videos },
    { id: 'galeria', label: t.nav.gallery },
    { id: 'colaboraciones', label: t.nav.collaborations },
    { id: 'contacto', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar info */}
      <div className={`bg-[#202122] border-b border-[#3B3C3D]/60 text-xs text-[#959597] font-sans transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2 px-4 md:px-8'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:8443438333" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#959597]" />
              <span className="font-medium tracking-wide">844-343-8333</span>
            </a>
            <a 
              href="mailto:contacto@saucedolegal.mx" 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#959597]" />
              <span>contacto@saucedolegal.mx</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#959597]" />
              <span>{t.header.officeHours}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                FB
              </a>
              <span className="text-[#3B3C3D]">|</span>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                IG
              </a>
              <span className="text-[#3B3C3D]">|</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                IN
              </a>
              <span className="text-[#3B3C3D]">|</span>
              <a 
                href="https://wa.me/528443438333" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="hover:text-white transition-colors"
              >
                WA
              </a>
              <span className="text-[#3B3C3D]">|</span>
              <a 
                href="https://www.youtube.com/@EntreAbogadosTV" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                YT
              </a>
            </div>

            <span className="text-[#3B3C3D]">|</span>

            {/* Quick Admin access indicator */}
            <a 
              href="http://localhost:3000/admin" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#959597] hover:text-white text-[11px] flex items-center gap-1 bg-[#2e3031] px-2 py-0.5 rounded border border-[#3B3C3D]"
              title="Panel de administración Payload CMS"
            >
              Payload Admin
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#242526]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#3B3C3D]' 
          : 'bg-[#242526]/80 backdrop-blur-sm py-4 border-b border-[#3B3C3D]/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo brand */}
          <button 
            onClick={() => scrollTo('inicio')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <img 
              src="/images/logo.png" 
              alt="Saucedo Legal Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-white">
                SAUCEDO
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-[#959597] uppercase">
                Consultoría y Mediación
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-sans text-[13px] tracking-wide font-medium">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-sm transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white border-b-2 border-[#959597] bg-white/5 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Header Area: Language Switcher + Consultation CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Prominent Header Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 bg-[#333436] hover:bg-[#3d3f41] border border-[#484a4c] text-white px-3 py-1.5 rounded text-xs font-sans font-medium transition-all duration-200 shadow-sm cursor-pointer"
                aria-label="Seleccionar idioma"
              >
                <Globe className="w-3.5 h-3.5 text-[#959597]" />
                <span className="text-base leading-none">{currentLangObj.flag}</span>
                <span className="uppercase tracking-wider font-semibold">{currentLangObj.code}</span>
                <ChevronDown className={`w-3 h-3 text-[#959597] transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Language Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#28292a] border border-[#3B3C3D] rounded-md shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[11px] font-sans uppercase tracking-wider text-[#959597] border-b border-[#3B3C3D]/60 mb-1">
                    {t.header.language}
                  </div>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-sans transition-colors cursor-pointer text-left ${
                        language === item.code
                          ? 'bg-[#3B3C3D] text-white font-semibold'
                          : 'text-gray-300 hover:bg-[#333436] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base leading-none">{item.flag}</span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-[#959597] uppercase font-mono">
                        {item.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Agendar Asesoría CTA Button */}
            <button
              onClick={() => scrollTo('contacto')}
              className="bg-[#3B3C3D] hover:bg-[#48494b] text-white border border-[#959597]/40 px-4 py-2 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-200 shadow hover:shadow-md cursor-pointer hover:border-[#959597]"
            >
              {t.nav.scheduleConsultation}
            </button>
          </div>

          {/* Mobile buttons: Language quick icon + Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile language dropdown toggle */}
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 bg-[#333436] border border-[#484a4c] text-white px-2.5 py-1.5 rounded text-xs font-sans font-medium"
            >
              <span className="text-base leading-none">{currentLangObj.flag}</span>
              <span className="uppercase text-[11px] font-bold">{currentLangObj.code}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-14 top-14 w-40 bg-[#28292a] border border-[#3B3C3D] rounded-md shadow-2xl py-1 z-50">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-sans text-left ${
                      language === item.code ? 'bg-[#3B3C3D] text-white font-bold' : 'text-gray-300'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#242526] border-b border-[#3B3C3D] px-6 py-5 mt-2 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 font-sans text-sm">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left py-2 px-3 rounded transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#3B3C3D] text-white font-semibold'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#3B3C3D] flex flex-col gap-2">
                <button
                  onClick={() => scrollTo('contacto')}
                  className="w-full bg-[#3B3C3D] hover:bg-[#48494b] text-white py-2.5 rounded text-xs font-sans uppercase tracking-widest font-semibold border border-[#959597]/40"
                >
                  {t.nav.scheduleConsultation}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
