import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { TeamMember } from '../types';
import { api } from '../services/api';
import { getMediaUrl } from '../utils/media';
import { Mail, Phone, GraduationCap, Briefcase, X, ChevronRight, User } from 'lucide-react';

export const EquipoSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [photoModes, setPhotoModes] = useState<Record<string, 'standing' | 'sitting'>>({});

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    api.getTeam(language).then(data => {
      if (isMounted) {
        setTeam(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [language]);

  const togglePhoto = (slug: string, mode: 'standing' | 'sitting') => {
    setPhotoModes(prev => ({ ...prev, [slug]: mode }));
  };

  return (
    <section id="equipo" className="py-24 bg-[#242526] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.team.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.team.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light">
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const currentMode = photoModes[member.slug] || 'sitting';
            const displayPhoto = currentMode === 'standing' && member.photoStanding 
              ? getMediaUrl(member.photoStanding) 
              : (getMediaUrl(member.photoSitting) || getMediaUrl(member.photoStanding, '/images/1-3.jpg'));

            return (
              <div 
                key={member.slug || member.name}
                className="bg-[#2a2b2c] border border-[#3B3C3D] hover:border-[#959597]/70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative h-96 overflow-hidden bg-[#1f2021]">
                  <img 
                    src={displayPhoto} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLImageElement).src = getMediaUrl(member.photoStanding, '/images/logo.png');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2b2c] via-transparent to-transparent opacity-80" />

                  {/* Photo toggle button if member has both photos */}
                  {member.photoStanding && member.photoSitting && (
                    <div className="absolute top-3 right-3 flex items-center bg-[#202122]/90 backdrop-blur-md rounded-md p-1 border border-[#3B3C3D] text-[10px] font-sans font-semibold text-[#959597]">
                      <button
                        onClick={() => togglePhoto(member.slug, 'sitting')}
                        className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                          currentMode === 'sitting' ? 'bg-[#3B3C3D] text-white' : 'hover:text-white'
                        }`}
                      >
                        {t.team.sittingView}
                      </button>
                      <button
                        onClick={() => togglePhoto(member.slug, 'standing')}
                        className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                          currentMode === 'standing' ? 'bg-[#3B3C3D] text-white' : 'hover:text-white'
                        }`}
                      >
                        {t.team.standingView}
                      </button>
                    </div>
                  )}
                </div>

                {/* Member information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-white mb-2 group-hover:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs text-[#959597] font-medium tracking-wide uppercase mb-4 leading-relaxed line-clamp-2">
                      {member.role}
                    </p>
                    <p className="font-serif text-xs text-gray-300 line-clamp-3 leading-relaxed mb-6 font-light">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#3B3C3D] flex items-center justify-between">
                    {member.email ? (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-[#959597] hover:text-white transition-colors text-xs font-sans flex items-center gap-1.5"
                        title={member.email}
                      >
                        <Mail className="w-3.5 h-3.5 text-[#959597]" />
                        <span className="truncate max-w-[140px]">{member.email}</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-sans text-gray-500">Saucedo Legal</span>
                    )}

                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1 text-xs font-sans text-white font-semibold bg-[#3B3C3D] hover:bg-[#484a4c] px-3 py-1.5 rounded transition-colors cursor-pointer border border-[#959597]/30"
                    >
                      <span>{t.team.viewBio}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#959597]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#28292a] border border-[#3B3C3D] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#1f2021] text-[#959597] hover:text-white hover:bg-[#3B3C3D] flex items-center justify-center transition-colors border border-[#3B3C3D] cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Photo column */}
              <div className="md:col-span-5 bg-[#1f2021] relative min-h-[300px] md:min-h-full">
                <img 
                  src={getMediaUrl(selectedMember.photoStanding) || getMediaUrl(selectedMember.photoSitting, '/images/logo.png')} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28292a] via-transparent to-transparent md:hidden" />
              </div>

              {/* Bio & Details Column */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-sans text-xs text-[#959597] uppercase tracking-wider font-semibold mb-6">
                    {selectedMember.role}
                  </p>

                  {/* Biography */}
                  <div className="mb-6">
                    <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#959597]" />
                      <span>Semblanza Profesional</span>
                    </h4>
                    <p className="font-serif text-sm text-gray-300 leading-relaxed font-light whitespace-pre-line">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Education */}
                  {selectedMember.education && (
                    <div className="mb-6 pt-4 border-t border-[#3B3C3D]">
                      <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#959597]" />
                        <span>{t.team.educationTitle}</span>
                      </h4>
                      <p className="font-serif text-xs text-gray-300 leading-relaxed">
                        {selectedMember.education}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer contact button */}
                <div className="pt-4 border-t border-[#3B3C3D] flex items-center justify-between">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-2 bg-[#3B3C3D] hover:bg-[#484a4c] text-white border border-[#959597]/40 px-5 py-2.5 rounded text-xs font-sans uppercase tracking-wider font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#959597]" />
                      <span>{t.team.sendEmail}</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-xs font-sans text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {t.team.closeModal}
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
