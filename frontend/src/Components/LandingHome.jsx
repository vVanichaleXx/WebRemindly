import { useRef } from 'react';
import { heroCopy } from '../config/homeContent.js';
import ArticleSection from './sections/ArticleSection.jsx';
import FeatureGrid from './sections/FeatureGrid.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import FlowVisualization from './sections/FlowVisualization.jsx';
import PhonePreview from './PhonePreview.jsx';
import usePresentationSections, { getPresentationClass } from '../utils/usePresentationSections.js';

export default function LandingHome({ onHomeSectionNavigate, onNavigate }) {
  const homeRef = useRef(null);
  const activeSection = usePresentationSections(homeRef);
  const presentationClass = (index) => getPresentationClass(index, activeSection);

  return (
    <div ref={homeRef} className="home-view home-presentation-page" aria-label="Remindly home">
      <div id="overview" className={`home-hero ${presentationClass(0)}`}>
        <div className="home-copy">
          <p className="home-eyebrow">{heroCopy.eyebrow}</p>
          <h2>{heroCopy.title}</h2>
          <p>{heroCopy.body}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a
              href="#features"
              className="hero-button hero-button-primary"
              onClick={(event) => {
                event.preventDefault();
                onHomeSectionNavigate('features');
              }}
            >
              Explore Remindly
            </a>
            <a
              href="/tutorial"
              className="hero-button hero-button-secondary"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('tutorial');
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        <PhonePreview />
      </div>

      <FeatureGrid className={presentationClass(1)} />
      <FlowVisualization className={presentationClass(2)} />
      <div className={`philosophy-presentation-section ${presentationClass(3)}`}>
        <ArticleSection />
        <FinalCTA />
      </div>
    </div>
  );
}
