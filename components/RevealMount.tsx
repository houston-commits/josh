'use client';
import { useEffect } from 'react';

export default function RevealMount() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document
        .querySelectorAll('.reveal, .reveal-stagger, .hero-word')
        .forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    const targets = document.querySelectorAll('.reveal, .reveal-stagger, .hero-word');
    targets.forEach((el) => observer.observe(el));

    // Hero words fire immediately on first paint
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero-on-load .hero-word').forEach((el) => {
        el.classList.add('is-in');
      });
    });

    return () => observer.disconnect();
  });

  return null;
}
