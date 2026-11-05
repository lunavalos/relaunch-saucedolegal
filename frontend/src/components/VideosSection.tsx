import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { VideoItem } from '../types';
import { api, fallbackVideos } from '../services/api';
import { getMediaUrl } from '../utils/media';
import { Play, Film, ExternalLink, Tv } from 'lucide-react';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
}

export const VideosSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [videos, setVideos] = useState<VideoItem[]>(fallbackVideos);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(fallbackVideos[0] || null);

  useEffect(() => {
    let isMounted = true;
    api.getVideos(language).then(data => {
      if (isMounted && data && data.length > 0) {
        setVideos(data);
        setActiveVideo(data[0]);
      }
    });
    return () => { isMounted = false; };
  }, [language]);

  const youtubeEmbed = activeVideo 
    ? getYouTubeEmbedUrl(activeVideo.youtubeUrl || (activeVideo.videoUrl?.includes('youtube') || activeVideo.videoUrl?.includes('youtu.be') ? activeVideo.videoUrl : undefined))
    : null;

  const fileUrl = activeVideo
    ? (activeVideo.videoFile ? getMediaUrl(activeVideo.videoFile) : (activeVideo.videoUrl && (activeVideo.videoUrl.endsWith('.mp4') || activeVideo.videoUrl.endsWith('.webm')) ? activeVideo.videoUrl : null))
    : null;

  const posterUrl = activeVideo?.thumbnail ? getMediaUrl(activeVideo.thumbnail) : undefined;

  return (
    <section id="videos" className="py-24 bg-[#242526] border-t border-[#3B3C3D]/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded bg-[#3B3C3D]/60 border border-[#959597]/40 text-[#959597] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-3">
            {t.videos.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            {t.videos.title}
          </h2>
          <p className="font-serif text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {t.videos.subtitle}
          </p>
        </div>

        {/* Video Player + Playlist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Player Display */}
          <div className="lg:col-span-8 bg-[#1f2021] border border-[#3B3C3D] rounded-xl overflow-hidden shadow-2xl">
            {activeVideo && (
              <div>
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                  {youtubeEmbed ? (
                    <iframe
                      src={youtubeEmbed}
                      title={activeVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : fileUrl ? (
                    <video
                      key={fileUrl}
                      controls
                      poster={posterUrl}
                      className="w-full h-full object-contain"
                    >
                      <source 
                        src={fileUrl} 
                        type={fileUrl.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} 
                      />
                    </video>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#18191a]">
                      {posterUrl ? (
                        <img 
                          src={posterUrl} 
                          alt={activeVideo.title} 
                          className="w-full h-full object-cover absolute inset-0 opacity-40" 
                        />
                      ) : (
                        <Tv className="w-16 h-16 text-[#959597] mb-4" />
                      )}
                      <div className="relative z-10">
                        <h4 className="font-serif text-xl text-white mb-2">{activeVideo.title}</h4>
                        {activeVideo.description && (
                          <p className="font-serif text-sm text-gray-300 max-w-md mb-6">{activeVideo.description}</p>
                        )}
                        {(activeVideo.youtubeUrl || activeVideo.videoUrl) && (
                          <a
                            href={activeVideo.youtubeUrl || activeVideo.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white px-6 py-2.5 rounded font-sans text-xs uppercase tracking-wider font-semibold transition-colors"
                          >
                            <span>{t.videos.watchOnYouTube}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-[#28292a]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-[11px] text-[#959597] uppercase tracking-widest font-semibold">
                      {activeVideo.category || 'Saucedo Legal'}
                    </span>
                    {(activeVideo.youtubeUrl || activeVideo.videoUrl?.includes('youtube')) && (
                      <a
                        href={activeVideo.youtubeUrl || activeVideo.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-sans text-red-400 hover:text-red-300 flex items-center gap-1"
                      >
                        YouTube <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-white mb-3">
                    {activeVideo.title}
                  </h3>
                  {activeVideo.description && (
                    <p className="font-serif text-sm text-gray-300 font-light leading-relaxed">
                      {activeVideo.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Video List / Playlist */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#959597] font-semibold px-2 mb-2 flex items-center gap-2">
              <Film className="w-4 h-4 text-[#959597]" />
              <span>{t.videos.allVideos}</span>
            </h4>

            {videos.map((vid, idx) => {
              const isCurrent = activeVideo?.id ? activeVideo.id === vid.id : activeVideo?.title === vid.title;
              const thumbUrl = vid.thumbnail ? getMediaUrl(vid.thumbnail) : null;

              return (
                <button
                  key={vid.id || vid.title || idx}
                  onClick={() => setActiveVideo(vid)}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-4 ${
                    isCurrent
                      ? 'bg-[#3B3C3D] border-[#959597] shadow-lg'
                      : 'bg-[#1f2021] border-[#3B3C3D]/60 hover:bg-[#28292a] hover:border-[#959597]/50'
                  }`}
                >
                  <div className="w-20 h-14 bg-black rounded overflow-hidden shrink-0 flex items-center justify-center relative group">
                    {thumbUrl ? (
                      <img 
                        src={thumbUrl} 
                        alt={vid.title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <Tv className="w-6 h-6 text-[#959597]" />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm text-white font-medium truncate mb-1">
                      {vid.title}
                    </h5>
                    <p className="font-serif text-xs text-gray-400 font-light line-clamp-2">
                      {vid.description || 'Saucedo Legal'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
