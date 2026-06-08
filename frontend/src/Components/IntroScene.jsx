import { useLayoutEffect, useRef } from 'react';
import BellLogo from './BellLogo.jsx';
import LandingHome from './LandingHome.jsx';
import ReminderWordmark from './ReminderWordmark.jsx';
import StarField from './StarField.jsx';
import { brand } from '../config/brand.js';

export default function IntroScene() {
  const lockupRef = useRef(null);
  const wordmarkRef = useRef(null);
  const iRef = useRef(null);
  const bellRef = useRef(null);

  useLayoutEffect(() => {
    const syncBellPath = () => {
      if (!lockupRef.current || !wordmarkRef.current || !iRef.current || !bellRef.current) {
        return;
      }

      const lockupRect = lockupRef.current.getBoundingClientRect();
      const wordmarkStyle = window.getComputedStyle(wordmarkRef.current);
      const iRect = iRef.current.getBoundingClientRect();
      const fontSize = Number.parseFloat(wordmarkStyle.fontSize) || 120;
      const bellSize = bellRef.current.offsetWidth || 180;

      const finalX = iRect.left - lockupRect.left + iRect.width / 2;
      const finalY = iRect.top - lockupRect.top + fontSize * 0.03;
      const startX = window.innerWidth / 2 - (lockupRect.left + finalX);
      const startY = window.innerHeight / 2 - (lockupRect.top + finalY);
      const dockScale = Math.min(0.32, Math.max(0.24, (fontSize * 0.28) / bellSize));

      lockupRef.current.style.setProperty('--bell-final-x', `${finalX}px`);
      lockupRef.current.style.setProperty('--bell-final-y', `${finalY}px`);
      lockupRef.current.style.setProperty('--bell-start-x', `${startX}px`);
      lockupRef.current.style.setProperty('--bell-start-y', `${startY}px`);
      lockupRef.current.style.setProperty('--bell-dock-scale', dockScale.toFixed(3));
    };

    syncBellPath();
    window.addEventListener('resize', syncBellPath);

    return () => window.removeEventListener('resize', syncBellPath);
  }, []);

  return (
    <section className="intro-scene" aria-label={`${brand.name} launch animation`}>
      <StarField />
      <div className="intro-vignette" aria-hidden="true" />
      <section className="intro-center intro-loader" aria-live="polite">
        <div ref={lockupRef} className="intro-core">
          <ReminderWordmark ref={wordmarkRef} iRef={iRef} />
          <BellLogo ref={bellRef} className="logo-bell" />
        </div>
      </section>
      <LandingHome />
    </section>
  );
}
