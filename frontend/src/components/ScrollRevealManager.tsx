'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollRevealManager: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const isPreloaderActive = () => {
      const preloader = document.getElementById('site-preloader');
      return !!preloader;
    };

    const revealElement = (el: HTMLElement, delayMs = 0) => {
      if (el.classList.contains('is-revealed')) return;

      if (delayMs > 0 && !el.style.transitionDelay) {
        el.style.transitionDelay = `${delayMs}ms`;
      }
      el.classList.add('is-revealed');

      // Also ensure parent or child .reveal-mask is marked
      const maskParent = el.closest('.reveal-mask');
      if (maskParent) maskParent.classList.add('is-revealed');
      const maskChildren = el.querySelectorAll('.reveal-mask');
      maskChildren.forEach((m) => m.classList.add('is-revealed'));
    };

    const processElements = () => {
      const selectors = [
        '[data-reveal]',
        '.reveal',
        '.reveal-mask',
        // Headings in all sections
        'section h1',
        'section h2',
        'section h3',
        // Eyebrows & badges
        'section span[class*="tracking-[0.2"]',
        'section span[class*="tracking-wider"]',
        'section span[class*="tracking-widest"]',
        // Cards and Grid Containers
        'section .grid > div',
        'section .grid > a',
        'section [class*="border border-gray"]',
        'section [class*="border border-white/"]',
      ];

      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(', ')));

      elements.forEach((el) => {
        // Skip header, navigation menus, and preloader elements
        if (
          el.closest('header') ||
          el.closest('#fullscreen-menu') ||
          el.closest('#site-preloader')
        ) {
          return;
        }

        // Assign base data-reveal attribute if missing
        if (!el.hasAttribute('data-reveal') && !el.classList.contains('reveal')) {
          el.setAttribute('data-reveal', 'fade-up');
        }

        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

        if (isInViewport) {
          // Immediately reveal viewport/hero elements with stagger
          const order = Math.max(0, Math.min(Math.floor(rect.top / 80), 5));
          revealElement(el, order * 75);
        } else if (!el.classList.contains('is-revealed')) {
          // Observe below-the-fold elements for scroll
          observer?.observe(el);
        }
      });
    };

    // Intersection Observer for scroll triggers
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            // Handle staggered siblings in grids
            const parentGrid = el.parentElement;
            if (parentGrid && parentGrid.classList.contains('grid')) {
              const siblings = Array.from(parentGrid.children);
              const index = siblings.indexOf(el);
              if (index > 0 && !el.style.transitionDelay) {
                const delay = Math.min((index % 4) * 90, 360);
                el.style.transitionDelay = `${delay}ms`;
              }
            }

            revealElement(el);
            observer?.unobserve(el);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    let timer1: NodeJS.Timeout | null = null;
    let timer2: NodeJS.Timeout | null = null;
    let timer3: NodeJS.Timeout | null = null;

    if (!isPreloaderActive()) {
      // Preloader is not active (e.g. client-side page navigation), trigger immediately!
      processElements();
      timer1 = setTimeout(processElements, 60);
      timer2 = setTimeout(processElements, 180);
      timer3 = setTimeout(processElements, 350);
    }

    // MutationObserver to automatically catch dynamically rendered cards/subpages
    mutationObserver = new MutationObserver(() => {
      if (!isPreloaderActive()) {
        processElements();
      }
    });

    const mainEl = document.querySelector('main') || document.body;
    mutationObserver.observe(mainEl, { childList: true, subtree: true });

    // Handle preloader complete / revealing event
    const handlePreloaderReveal = () => {
      processElements();
      timer1 = setTimeout(processElements, 60);
      timer2 = setTimeout(processElements, 180);
    };

    document.addEventListener('saucedo:preloader-revealing', handlePreloaderReveal);
    document.addEventListener('saucedo:preloader-done', handlePreloaderReveal);

    return () => {
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      if (timer3) clearTimeout(timer3);
      observer?.disconnect();
      mutationObserver?.disconnect();
      document.removeEventListener('saucedo:preloader-revealing', handlePreloaderReveal);
      document.removeEventListener('saucedo:preloader-done', handlePreloaderReveal);
    };
  }, [pathname]);

  return null;
};
