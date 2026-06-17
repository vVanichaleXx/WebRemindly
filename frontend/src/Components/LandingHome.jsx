import { heroCopy } from '../config/homeContent.js';
import ArticleSection from './sections/ArticleSection.jsx';
import FeatureGrid from './sections/FeatureGrid.jsx';
import FinalCTA from './sections/FinalCTA.jsx';
import FlowVisualization from './sections/FlowVisualization.jsx';
import PhonePreview from './PhonePreview.jsx';

export default function LandingHome({ onHomeSectionNavigate, onNavigate }) {
  return (
    <div className="home-view" aria-label="Remindly home">
      <div id="overview" className="home-hero">
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

      <FeatureGrid />
      <FlowVisualization />
      <ArticleSection />
      <FinalCTA />
    </div>
  );
}
