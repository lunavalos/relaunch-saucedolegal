'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { VideoItem } from '@/types';
import { api, fallbackVideos } from '@/services/api';
import { getMediaUrl } from '@/utils/media';
import { X, Play } from 'lucide-react';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : null;
}

function getYouTubeThumbnail(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg` : null;
}

function getVideoSource(vid: VideoItem): { fileUrl: string | null; youtubeEmbed: string | null; thumbnail: string } {
  const youtubeUrl = vid.youtubeUrl || (vid.videoUrl?.includes('youtube') || vid.videoUrl?.includes('youtu.be') ? vid.videoUrl : undefined);
  const youtubeEmbed = getYouTubeEmbedUrl(youtubeUrl);
  
  let fileUrl: string | null = null;
  if (vid.videoFile) {
    fileUrl = getMediaUrl(vid.videoFile);
  } else if (vid.videoUrl && !vid.videoUrl.includes('youtube') && !vid.videoUrl.includes('youtu.be')) {
    fileUrl = vid.videoUrl;
  }

  const thumbnail = (vid.thumbnail ? getMediaUrl(vid.thumbnail, '') : '') || (youtubeUrl ? getYouTubeThumbnail(youtubeUrl) : '') || '/images/33A7570.jpg';

  return { fileUrl, youtubeEmbed, thumbnail };
}

export default function VideosPage() {
  const { t, language } = useLanguage();
  const [videos, setVideos] = useState<VideoItem[]>(fallbackVideos);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    api.getVideos(language).then((data) => {
      if (isMounted && data && data.length > 0) {
        setVideos(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [language]);

  const selectedSource = selectedVideo ? getVideoSource(selectedVideo) : null;

  return (
    <div className="min-h-screen bg-white text-[#111214]">
      
      {/* 1. HERO BANNER IDENTICAL TO NOSOTROS, EQUIPO & ÁREAS DE PRÁCTICA */}
      <section className="relative w-full h-[32vh] min-h-[240px] md:h-[38vh] flex items-center justify-center overflow-hidden bg-[#111214]">
        {/* Background Photo & Dark Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src="/images/33A7570.jpg"
            alt="Saucedo Legal Videos"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-brightness-[0.7]" />
        </div>

        {/* Centered Title */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full text-center px-4 md:px-0 pt-14 md:pt-16">
          <span 
            data-reveal="fade-up"
            className="font-sans text-[11px] md:text-xs text-white/80 uppercase tracking-[0.25em] font-semibold block mb-2"
          >
            {t.videos.badge}
          </span>
          <div className="reveal-mask">
            <h1 
              data-reveal="fade-up"
              className="font-lora text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal uppercase text-white select-none delay-150"
            >
              {t.videos.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: VIDEOS GRID */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {videos.map((vid, idx) => {
              const { thumbnail } = getVideoSource(vid);

              return (
                <div
                  key={vid.id || vid.title || idx}
                  onClick={() => setSelectedVideo(vid)}
                  data-reveal="fade-up"
                  style={{ transitionDelay: `${(idx % 4) * 90}ms` }}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  {/* Video Thumbnail with Play Button */}
                  <div className="relative w-full aspect-video bg-black overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/33A7570.jpg';
                      }}
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-300" />

                    {/* Translucent Play Button in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                        <svg 
                          className="w-12 h-12 sm:w-14 sm:h-14 text-white/90 fill-current drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Centered Title in Bold Serif Typography */}
                  <h3 className="font-lora text-sm sm:text-base font-semibold text-[#111214] uppercase tracking-wider text-center mt-4 transition-colors group-hover:text-black">
                    {vid.title}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX VIDEO MODAL */}
      {selectedVideo && selectedSource && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111214] border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/30 cursor-pointer transition-colors"
              aria-label="Cerrar video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Display: YouTube iframe or Native HTML5 Video */}
            <div className="aspect-video bg-black flex items-center justify-center overflow-hidden">
              {selectedSource.youtubeEmbed ? (
                <iframe
                  src={selectedSource.youtubeEmbed}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : selectedSource.fileUrl ? (
                <video
                  key={selectedSource.fileUrl}
                  controls
                  autoPlay
                  playsInline
                  poster={selectedSource.thumbnail}
                  className="w-full h-full object-contain"
                >
                  <source 
                    src={selectedSource.fileUrl} 
                    type={selectedSource.fileUrl.endsWith('.mp4') ? 'video/mp4' : 'video/webm'} 
                  />
                  Tu navegador no soporta reproducción de video HTML5.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
                  <p className="font-lora text-sm text-gray-300">
                    No se encontró fuente de video válida.
                  </p>
                </div>
              )}
            </div>

            {/* Title & Description in Modal */}
            <div className="p-4 sm:p-6 bg-[#18191b] border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-lora text-lg sm:text-xl font-normal text-white">
                  {selectedVideo.title}
                </h4>
                {selectedVideo.description && (
                  <p className="font-lora text-xs sm:text-sm text-gray-400 font-light mt-1">
                    {selectedVideo.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-xs font-sans text-gray-400 hover:text-white uppercase tracking-wider ml-4 cursor-pointer"
              >
                {t.common.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
