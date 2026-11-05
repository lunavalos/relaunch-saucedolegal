'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const SERVICES_DICT: Record<string, { es: string; en: string; zh: string; ko: string }> = {
  socialSecurity: { es: 'Seguridad Social', en: 'Social Security', zh: '社会保障与劳动福利', ko: '사회보장법' },
  familyLaw: { es: 'Derecho Familiar', en: 'Family Law', zh: '婚姻家庭法', ko: '가족법' },
  environmental: { es: 'Servicios Ambientales', en: 'Environmental Law', zh: '环境合规与资源法', ko: '환경법' },
  commercial: { es: 'Derecho Mercantil', en: 'Commercial Law', zh: '商事与贸易法', ko: '상법' },
  civil: { es: 'Derecho Civil', en: 'Civil Law', zh: '民事法', ko: '민법' },
  criminal: { es: 'Derecho Penal', en: 'Criminal Defense', zh: '刑事辩护', ko: '형사소송' },
  intellectualProperty: { es: 'Propiedad Intelectual', en: 'Intellectual Property', zh: '知识产权与商标', ko: '지식재산권' },
  accounting: { es: 'Área Contable', en: 'Accounting Advisory', zh: '财税会计咨询', ko: '회계 및 감사 자문' },
  tax: { es: 'Derecho Fiscal', en: 'Tax Law', zh: '财税与规费合规', ko: '조세법' },
  corporate: { es: 'Derecho Corporativo', en: 'Corporate Law', zh: '公司与企业合规法', ko: '기업법무' },
  labor: { es: 'Derecho Laboral', en: 'Labor & Employment', zh: '劳动人事法', ko: '노동법' },
  administrative: { es: 'Derecho Administrativo', en: 'Administrative Law', zh: '行政法与政府审批', ko: '행정법' },
};

export default function ContactoPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
    servicios: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const toggleService = (svcKey: string) => {
    setFormData((prev) => ({
      ...prev,
      servicios: prev.servicios.includes(svcKey)
        ? prev.servicios.filter((s) => s !== svcKey)
        : [...prev.servicios, svcKey],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
        servicios: [],
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[42vh] min-h-[320px] md:h-[48vh] flex items-center justify-center overflow-hidden">
        {/* Background Photo & Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/33A7570.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Content: Title, Subtitle, Contacto Button */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-16 md:pt-20">
          <div className="reveal-mask">
            <h1 
              data-reveal="fade-up"
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal uppercase text-white tracking-wider select-none"
            >
              {t.contact.title}
            </h1>
          </div>
          
          <div className="reveal-mask mt-3">
            <p 
              data-reveal="fade-up"
              className="font-lora text-xs sm:text-sm md:text-base text-white/90 font-light max-w-2xl mx-auto leading-relaxed delay-150"
            >
              {t.contact.subtitle}
            </p>
          </div>

          <div data-reveal="fade-up" className="mt-6 delay-225">
            <a
              href="https://wa.me/+528443438333"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/60 hover:border-white bg-black/30 hover:bg-white hover:text-black text-white px-7 py-2.5 rounded-none font-lora text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>{t.hero.contactBtn}</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Subtle Bottom Curve Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-6 sm:h-8 md:h-10 text-white fill-current">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* 2. MAIN CONTENT ON CLEAN WHITE BACKGROUND */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8" id="formulario-contacto">
        <div className="max-w-[1240px] mx-auto">
          
          {/* 2-Column Layout: Info Left + Form Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left Column: Información de Contacto */}
            <div 
              data-reveal="fade-up"
              className="lg:col-span-5 space-y-8 bg-white p-8 rounded-none border border-gray-200 shadow-sm"
            >
              <div>
                <div className="mb-8 w-full">
                  <img
                    src="/images/logo.png"
                    alt="Saucedo Consultoría Jurídica y Mediación"
                    className="w-full h-auto object-contain brightness-0"
                  />
                </div>
                <h2 className="font-lora text-2xl font-normal text-[#111214] mb-3">
                  {t.contact.infoTitle}
                </h2>
                <p className="font-lora text-xs md:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {t.contact.infoDesc}
                </p>
                
                <div className="space-y-4 font-sans text-sm">
                  <a
                    href="mailto:contacto@saucedolegal.mx"
                    className="flex items-center gap-2.5 text-[#111214] hover:text-[#555555] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#777777]" />
                    <span>contacto@saucedolegal.mx</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-[#111214]">
                    <Phone className="w-4 h-4 text-[#777777]" />
                    <div className="space-x-3">
                      <a href="tel:8443438333" className="hover:text-[#555555] transition-colors">844-343-8333</a>
                      <span className="text-gray-400">/</span>
                      <a href="tel:8449801322" className="hover:text-[#555555] transition-colors">844-980-1322</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Oficina */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-lora text-lg font-normal text-[#111214] mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#777777]" />
                  <span>{t.contact.officeTitle}</span>
                </h3>
                <p className="font-lora text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                  {t.contact.officeAddress}
                </p>
              </div>

              {/* Redes */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#777777] font-semibold mb-3">
                  {t.contact.socialTitle}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
                  <a href="https://www.facebook.com/saucedolegalsaltillo/" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">Facebook</a>
                  <span className="text-gray-300">•</span>
                  <a href="https://www.instagram.com/saucedolegalmx/" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">Instagram</a>
                  <span className="text-gray-300">•</span>
                  <a href="https://www.linkedin.com/company/108309322/admin/dashboard/" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">Linkedin</a>
                  <span className="text-gray-300">•</span>
                  <a href="https://wa.me/+528443438333/" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">WhatsApp</a>
                  <span className="text-gray-300">•</span>
                  <a href="https://www.youtube.com/@EntreAbogadosTV" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">YouTube</a>
                  <span className="text-gray-300">•</span>
                  <a href="https://open.spotify.com/show/5KOLThhF8yIXobEp5LaTv?si=bdd0746b5ab9430f" target="_blank" rel="noreferrer" className="text-[#555555] hover:text-black transition-colors">Spotify</a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-none overflow-hidden border border-gray-200 h-48 w-full shadow-sm">
                <iframe
                  title="Saucedo Legal Saltillo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.825206263543!2d-100.990499!3d25.444005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86881335cb853e3d%3A0xe285e6ef85b2e0be!2sBlvd.%20Galer%C3%ADas%20200%2C%20Villa%20Ol%C3%ADmpica%2C%2025240%20Saltillo%2C%20Coah.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Formulario */}
            <div 
              data-reveal="fade-up"
              style={{ transitionDelay: '150ms' }}
              className="lg:col-span-7 bg-white p-8 md:p-10 rounded-none border border-gray-200 shadow-sm"
            >
              <p className="font-lora text-sm text-[#555555] font-light mb-8">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <div className="p-8 rounded-none bg-gray-50 border border-gray-300 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-[#18191a] mx-auto mb-4" />
                  <h3 className="font-lora text-2xl text-[#111214] font-normal mb-2">
                    {t.contact.title}
                  </h3>
                  <p className="font-lora text-sm text-[#555555] mb-6 font-light">
                    {t.contact.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#18191a] hover:bg-black text-white px-6 py-2.5 rounded-none text-xs font-sans uppercase tracking-wider font-semibold cursor-pointer shadow-sm"
                  >
                    {t.contact.submitBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nombre */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#444444] font-semibold mb-2">
                      {t.contact.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#111214] rounded-none px-4 py-3 text-sm text-[#111214] placeholder-gray-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Correo y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#444444] font-semibold mb-2">
                        {t.contact.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full bg-white border border-gray-300 focus:border-[#111214] rounded-none px-4 py-3 text-sm text-[#111214] placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#444444] font-semibold mb-2">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full bg-white border border-gray-300 focus:border-[#111214] rounded-none px-4 py-3 text-sm text-[#111214] placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#444444] font-semibold mb-2">
                      {t.contact.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-white border border-gray-300 focus:border-[#111214] rounded-none px-4 py-3 text-sm text-[#111214] placeholder-gray-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Servicios */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#444444] font-semibold mb-3">
                      {t.contact.serviceLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {Object.entries(SERVICES_DICT).map(([key, translations]) => {
                        const isChecked = formData.servicios.includes(key);
                        const label = translations[language as keyof typeof translations] || translations.es;
                        return (
                          <label
                            key={key}
                            className="flex items-center space-x-2 text-xs font-sans text-[#555555] hover:text-black cursor-pointer select-none"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleService(key)}
                              className="w-4 h-4 rounded-none bg-white border-gray-300 text-black focus:ring-0 focus:outline-none cursor-pointer"
                            />
                            <span>{label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Nota de confidencialidad */}
                  <div className="text-[11px] font-lora text-[#777777] leading-relaxed font-light pt-2">
                    <p>
                      {t.contact.privacyNote}
                    </p>
                  </div>

                  {/* Botón de envío */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="bg-[#18191a] hover:bg-black text-white px-8 py-3 rounded-none text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSending ? t.contact.submitting : t.contact.submitBtn}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}