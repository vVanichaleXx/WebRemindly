import ThemeSwitch from '../ThemeSwitch.jsx';
import { Moon, SunMedium } from 'lucide-react';
import { themeOptions } from '../../config/homeContent.js';

export default function ThemeShowcase({ activeTheme, onThemeChange }) {
  const active = themeOptions.find((theme) => theme.id === activeTheme);

  return (
    <section id="themes" className="site-section theme-section" aria-labelledby="themes-title">
      <div className="theme-copy">
        <div className="section-kicker">Light and dark</div>
        <h3 id="themes-title">Light and dark, built to stay calm.</h3>
        <p>
          Remindly changes tone without changing the product. The same hierarchy, controls, and
          daily context stay in place whether you are planning in daylight or reviewing at night.
        </p>
        <ThemeSwitch activeTheme={activeTheme} onThemeChange={onThemeChange} />
        <small>{active?.description}</small>
      </div>

      <div className="mode-preview-grid" aria-label="Light and dark interface previews">
        <article className="mode-preview mode-preview-light">
          <div className="mode-preview-topline">
            <span><SunMedium size={16} strokeWidth={2.2} /> Light</span>
            <small>Morning plan</small>
          </div>
          <div className="mode-preview-panel">
            <strong>Today</strong>
            <p>Review project plan before lunch</p>
            <div className="mode-preview-progress"><span /></div>
          </div>
          <div className="mode-preview-list">
            <span><strong>9:15</strong> Project plan</span>
            <span><strong>10:00</strong> Morning habit</span>
            <span><strong>14:30</strong> Design review</span>
          </div>
        </article>

        <article className="mode-preview mode-preview-dark">
          <div className="mode-preview-topline">
            <span><Moon size={16} strokeWidth={2.2} /> Dark</span>
            <small>Evening review</small>
          </div>
          <div className="mode-preview-panel">
            <strong>Tomorrow</strong>
            <p>Plan the first focused block</p>
            <div className="mode-preview-progress"><span /></div>
          </div>
          <div className="mode-preview-list">
            <span><strong>Plan</strong> First focused block</span>
            <span><strong>Habit</strong> Evening reset</span>
            <span><strong>Event</strong> Calendar review</span>
          </div>
        </article>
      </div>
    </section>
  );
}
