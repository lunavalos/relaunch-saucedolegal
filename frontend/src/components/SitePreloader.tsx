'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const SitePreloader: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Safety fallback: if anything stalls, unlock screen after 2.4s
    const fallbackTimer = setTimeout(() => {
      setIsDone(true);
      document.body.classList.remove('overflow-hidden');
      document.dispatchEvent(new CustomEvent('saucedo:preloader-revealing'));
      document.dispatchEvent(new CustomEvent('saucedo:preloader-done'));
    }, 2400);

    document.body.classList.add('overflow-hidden');

    const container = containerRef.current;
    const logoEl = logoRef.current;

    if (!container || !logoEl) {
      setIsDone(true);
      document.body.classList.remove('overflow-hidden');
      clearTimeout(fallbackTimer);
      return;
    }

    // GSAP master timeline
    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(fallbackTimer);
        setIsDone(true);
        document.body.classList.remove('overflow-hidden');
        document.dispatchEvent(new CustomEvent('saucedo:preloader-done'));
      },
    });

    // 1. Logo appears gradually: from completely invisible (opacity 0) to fully visible (opacity 1)
    tl.to(
      logoEl,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.95,
        ease: 'power2.out',
      },
      0.1
    );

    // 2. Pause so the user clearly sees the loaded brand
    tl.to({}, { duration: 0.45 });

    // 3. Subtle softening / fade right before curtain lifts
    tl.to(logoEl, {
      opacity: 0.3,
      scale: 0.98,
      duration: 0.3,
      ease: 'power2.in',
    });

    // 4. Smooth curtain lifts up to reveal the website
    tl.to(
      container,
      {
        yPercent: -100,
        duration: 0.75,
        ease: 'power3.inOut',
        onStart: () => {
          // As the curtain begins lifting, signal header & hero texts to start animating in!
          document.dispatchEvent(new CustomEvent('saucedo:preloader-revealing'));
        },
      },
      '-=0.08'
    );

    return () => {
      clearTimeout(fallbackTimer);
      tl.kill();
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      id="site-preloader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none pointer-events-auto"
      style={{
        backgroundColor: '#F3EFEA', // Signature Studio Foundry luxury warm ivory
      }}
      aria-hidden="true"
    >
      {/* 
        CRITICAL: Initial style has opacity: 0 and y: 16px directly on the DOM element 
        to prevent ANY flash of unstyled content (FOUC). It starts completely invisible!
      */}
      <div
        ref={logoRef}
        className="flex flex-col items-center justify-center px-6 text-center"
        style={{
          opacity: 0,
          transform: 'translateY(16px) scale(0.95)',
          filter: 'blur(5px)',
          willChange: 'opacity, transform, filter',
        }}
      >
        <img
          src="/images/logo.png"
          alt="Saucedo Consultoría Jurídica y Mediación"
          className="w-56 sm:w-64 md:w-76 lg:w-80 max-w-[85vw] h-auto object-contain brightness-0"
        />
      </div>
    </div>
  );
};
