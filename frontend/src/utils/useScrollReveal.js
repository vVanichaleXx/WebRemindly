import { useEffect } from 'react';

const revealSelector = [
  '.page-hero',
  '.section-heading-row',
  '.feature-card',
  '.flow-line',
  '.flow-step',
  '.interface-copy',
  '.interface-board',
  '.interface-card',
  '.roadmap-route-layer',
  '.roadmap-card',
  '.roadmap-closing',
  '.tutorial-step-rail',
  '.tutorial-stage',
  '.tutorial-bottom-cards article',
  '.tutorial-deep-copy',
  '.tutorial-detail-visual',
  '.tutorial-message-stack',
  '.tutorial-calendar-card',
  '.tutorial-analytics-card',
  '.tutorial-insight-card',
  '.tutorial-card',
  '.pricing-card',
  '.article-card',
  '.final-cta',
  '.site-footer',
].join(', ');

const staggerSelector = [
  '.feature-card',
  '.flow-step',
  '.interface-card',
  '.article-card',
  '.roadmap-card',
  '.tutorial-bottom-cards article',
  '.tutorial-insight-card',
  '.tutorial-card',
].join(', ');

export default function useScrollReveal(refreshKey) {
  useEffect(() => {
    const root = document.querySelector('.landing-home');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!root) {
      return undefined;
    }

    const revealTargets = [...root.querySelectorAll(revealSelector)];

    if (prefersReducedMotion) {
      root.querySelectorAll('.feature-card, .article-card').forEach((element) => {
        element.classList.add('is-ready');
      });

      return undefined;
    }

    const readyTimers = [];

    revealTargets.forEach((element) => {
      const parent = element.parentElement;
      const groupItems = parent ? [...parent.children].filter((child) => child.matches?.(staggerSelector)) : [];
      const groupIndex = Math.max(0, groupItems.indexOf(element));

      element.classList.add('reveal-on-scroll');
      element.classList.remove('reveal-from-left', 'reveal-from-right', 'is-visible', 'is-ready');
      element.style.setProperty('--reveal-delay', `${Math.min(groupIndex * 120, 360)}ms`);

      if (element.matches('.section-heading-row, .interface-copy, .page-hero')) {
        element.classList.add('reveal-from-left');
      } else if (element.matches('.interface-board, .tutorial-stage, .final-cta, .site-footer, .pricing-card')) {
        element.classList.add('reveal-from-right');
      } else if (element.matches(staggerSelector)) {
        element.classList.add(groupIndex % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            if (entry.target.matches('.feature-card, .article-card')) {
              const delay = Number.parseFloat(getComputedStyle(entry.target).getPropertyValue('--reveal-delay')) || 0;
              const revealDuration = entry.target.matches('.article-card') ? 1320 : 1120;
              const timer = window.setTimeout(() => {
                entry.target.classList.add('is-ready');
              }, delay + revealDuration);

              readyTimers.push(timer);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => {
      readyTimers.forEach((timer) => window.clearTimeout(timer));
      observer.disconnect();
    };
  }, [refreshKey]);
}
