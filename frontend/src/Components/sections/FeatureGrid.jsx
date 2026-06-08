import { BellRing, Layers3, Palette } from 'lucide-react';
import { featureCards } from '../../config/homeContent.js';

const icons = [Layers3, Palette, BellRing];

export default function FeatureGrid() {
  return (
    <section className="site-section feature-section" aria-labelledby="features-title">
      <div className="section-kicker">Built around your HomeView</div>
      <div className="section-heading-row">
        <h3 id="features-title">Everything important, arranged quietly.</h3>
        <p>
          The website mirrors the app idea: categories, timeline, notifications, and progress
          are visible without turning the screen into a control panel.
        </p>
      </div>

      <div className="feature-grid">
        {featureCards.map((feature, index) => {
          const Icon = icons[index];

          return (
            <article key={feature.title} className={`feature-card tone-${feature.tone}`}>
              <div className="feature-icon">
                <Icon size={23} strokeWidth={2.1} />
              </div>
              <div className="feature-stat">
                <strong>{feature.stat}</strong>
                <span>{feature.statLabel}</span>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
