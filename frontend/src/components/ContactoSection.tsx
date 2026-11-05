import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

const SERVICES_OPTIONS = [
  'Derecho Corporativo',
  'Derecho Laboral',
  'Seguridad Social',
  'Derecho Mercantil',
  'Derecho Civil',
  'Derecho Familiar',
  'Derecho Fiscal',
  'Propiedad Intelectual',
  'Derecho Penal',
  'Servicios Ambientales',
  'Derecho Migratorio',
  'Área Contable y Financiera',
  'Derecho Administrativo',
];

export const ContactoSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate immediate successful contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contacto" className="py-24 bg-[#202122] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.contact.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 bg-[#28292a] border border-[#3B3C3D] rounded-xl p-8 shadow-xl flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-2">
                {t.contact.infoTitle}
              </h3>
              <p className="font-serif text-sm text-gray-300 font-light leading-relaxed mb-8">
                {t.contact.infoDesc}
              </p>

              {/* Office Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#333436] border border-[#48494b] flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5 text-[#ffffff]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#959597] font-semibold mb-1">
                    {t.contact.officeTitle}
                  </h4>
                  <p className="font-serif text-sm text-white leading-relaxed">
                    {t.contact.officeAddress}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#333436] border border-[#48494b] flex items-center justify-center text-white shrink-0">
                  <Phone className="w-5 h-5 text-[#ffffff]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#959597] font-semibold mb-1">
                    {t.contact.phonesTitle}
                  </h4>
                  <div className="space-y-0.5 font-sans text-sm">
                    <a href="tel:8443438333" className="block text-white hover:text-[#959597] transition-colors">
                      844-343-8333
                    </a>
                    <a href="tel:8449801322" className="block text-white hover:text-[#959597] transition-colors">
                      844-980-1322
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#333436] border border-[#48494b] flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5 text-[#ffffff]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#959597] font-semibold mb-1">
                    {t.contact.emailTitle}
                  </h4>
                  <a 
                    href="mailto:contacto@saucedolegal.mx" 
                    className="font-sans text-sm text-white hover:text-[#959597] transition-colors"
                  >
                    contacto@saucedolegal.mx
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#333436] border border-[#48494b] flex items-center justify-center text-white shrink-0">
                  <Clock className="w-5 h-5 text-[#ffffff]" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#959597] font-semibold mb-1">
                    Horario de Atención
                  </h4>
                  <p className="font-serif text-sm text-white">
                    Lunes a Viernes: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-[#3B3C3D]">
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#959597] font-semibold mb-3">
                  {t.contact.socialTitle}
                </h4>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-9 h-9 rounded-md bg-[#333436] hover:bg-[#3B3C3D] border border-[#48494b] flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-9 h-9 rounded-md bg-[#333436] hover:bg-[#3B3C3D] border border-[#48494b] flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-9 h-9 rounded-md bg-[#333436] hover:bg-[#3B3C3D] border border-[#48494b] flex items-center justify-center text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@EntreAbogadosTV" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-9 h-9 rounded-md bg-[#333436] hover:bg-[#3B3C3D] border border-[#48494b] flex items-center justify-center text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Google Maps */}
            <div className="rounded-lg overflow-hidden border border-[#3B3C3D] h-48 w-full mt-6">
              <iframe
                title="Saucedo Legal Saltillo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.825206263543!2d-100.990499!3d25.444005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86881335cb853e3d%3A0xe285e6ef85b2e0be!2sBlvd.%20Galer%C3%ADas%20200%2C%20Villa%20Ol%C3%ADmpica%2C%2025240%20Saltillo%2C%20Coah.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#28292a] border border-[#3B3C3D] rounded-xl p-8 shadow-xl">
            <h3 className="font-serif text-2xl font-normal text-white mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="font-serif text-sm text-gray-300 font-light leading-relaxed mb-8">
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div className="p-8 rounded-lg bg-[#333436] border border-[#959597]/60 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#959597] mx-auto mb-4" />
                <h4 className="font-serif text-xl text-white font-medium mb-2">
                  Mensaje Enviado con Éxito
                </h4>
                <p className="font-serif text-sm text-gray-300 mb-6 font-light">
                  {t.contact.successMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#3B3C3D] hover:bg-[#484a4c] text-white px-6 py-2.5 rounded text-xs font-sans uppercase tracking-wider font-semibold cursor-pointer border border-[#959597]/40"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#959597] mb-2">
                    {t.contact.nameLabel} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-[#1f2021] border border-[#48494b] focus:border-[#959597] rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email and Phone in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#959597] mb-2">
                      {t.contact.emailLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-[#1f2021] border border-[#48494b] focus:border-[#959597] rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#959597] mb-2">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full bg-[#1f2021] border border-[#48494b] focus:border-[#959597] rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#959597] mb-2">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#1f2021] border border-[#48494b] focus:border-[#959597] rounded px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">{t.contact.serviceSelectDefault}</option>
                    {SERVICES_OPTIONS.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#242526] text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#959597] mb-2">
                    {t.contact.messageLabel} <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-[#1f2021] border border-[#48494b] focus:border-[#959597] rounded px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Privacy disclaimer */}
                <p className="font-serif text-[11px] text-[#959597] font-light leading-relaxed">
                  {t.contact.privacyNote}
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B3C3D] hover:bg-[#48494b] text-white border border-[#959597] px-8 py-3.5 rounded text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#ffffff]" />
                  <span>{isSubmitting ? t.contact.submitting : t.contact.submitBtn}</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
