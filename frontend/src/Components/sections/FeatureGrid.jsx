import { BellRing, Layers3, ListChecks } from 'lucide-react';
import { featureCards } from '../../config/homeContent.js';

const icons = [Layers3, ListChecks, BellRing];

export default function FeatureGrid() {
  return (
    <section className="site-section feature-section" aria-labelledby="features-title">
      <div className="section-kicker">Daily overview</div>
      <div className="section-heading-row">
        <h3 id="features-title">Everything important, arranged quietly.</h3>
        <p>
          Remindly is designed for review, not overload. The important parts of the day stay
          visible, ordered, and easy to act on.
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
