import { useState } from 'react';
import { heroCopy } from '../config/homeContent.js';
import ArticleSection from './sections/ArticleSection.jsx';
import FeatureGrid from './sections/FeatureGrid.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import FlowVisualization from './sections/FlowVisualization.jsx';
import ThemeShowcase from './sections/ThemeShowcase.jsx';
import MarketingHeader from './MarketingHeader.jsx';
import PhonePreview from './PhonePreview.jsx';

export default function LandingHome() {
  const [activeTheme, setActiveTheme] = useState('dark');

  return (
    <section className="landing-home" data-theme={activeTheme} aria-label="Remindly website">
      <MarketingHeader activeTheme={activeTheme} onThemeChange={setActiveTheme} />

      <div id="overview" className="home-hero">
        <div className="home-copy">
          <p className="home-eyebrow">{heroCopy.eyebrow}</p>
          <h2>{heroCopy.title}</h2>
          <p>{heroCopy.body}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#preview" className="hero-button hero-button-primary">
              Preview app
            </a>
            <a href="mailto:hello@remindly.app" className="hero-button hero-button-secondary">
              Contact
            </a>
          </div>
        </div>

        <PhonePreview />
      </div>

      <FeatureGrid />
      <FlowVisualization />
      <ThemeShowcase activeTheme={activeTheme} onThemeChange={setActiveTheme} />
      <ArticleSection />
      <FinalCTA />
    </section>
  );
}
