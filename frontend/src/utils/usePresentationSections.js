import { useEffect, useState } from 'react';

export default function usePresentationSections(rootRef, selector = '.presentation-section') {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!root || reducedMotion) {
      return undefined;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const sections = [...root.querySelectorAll(selector)];
      const viewportAnchor = window.innerHeight * 0.46;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionAnchor = rect.top + Math.min(rect.height * 0.42, window.innerHeight * 0.42);
        const distance = Math.abs(sectionAnchor - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [rootRef, selector]);

  return activeIndex;
}

export function getPresentationClass(index, activeIndex) {
  if (index === activeIndex) {
    return 'presentation-section is-active';
  }

  return `presentation-section ${index < activeIndex ? 'is-before' : 'is-after'}`;
}
