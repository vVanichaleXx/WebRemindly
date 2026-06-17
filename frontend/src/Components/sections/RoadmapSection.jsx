import { Brain, CalendarSync, Route, Sparkles } from 'lucide-react';
import { roadmapItems } from '../../config/homeContent.js';

const icons = [CalendarSync, Brain, Sparkles, Route];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="site-section roadmap-section" aria-labelledby="roadmap-title">
      <div className="section-kicker">Roadmap</div>
      <div className="section-heading-row">
        <h3 id="roadmap-title">A connected system, built in calm stages.</h3>
        <p>
          Each stage expands what Remindly can understand while keeping the first screen quiet,
          useful, and focused on the next decision.
        </p>
      </div>

      <div className="roadmap-system" aria-hidden="true">
        <div className="roadmap-system-core">
          <span>Remindly</span>
          <strong>Daily OS</strong>
        </div>
        {roadmapItems.map((item, index) => {
          const Icon = icons[index];

          return (
            <div key={item.title} className={`roadmap-node roadmap-node-${index + 1}`}>
              <Icon size={18} strokeWidth={2.1} />
              <span>{item.meta}</span>
            </div>
          );
        })}
      </div>

      <div className="roadmap-track" aria-label="Remindly product roadmap">
        <div className="roadmap-line" aria-hidden="true" />
        <div className="roadmap-line-glow" aria-hidden="true" />
        {roadmapItems.map((item, index) => {
          const Icon = icons[index];

          return (
            <article key={item.title} className="roadmap-card" style={{ '--roadmap-index': index }}>
              <div className="roadmap-card-marker">
                <span>{item.phase}</span>
              </div>
              <div className="roadmap-card-content">
                <div className="roadmap-card-top">
                  <strong>{item.meta}</strong>
                  <Icon size={22} strokeWidth={2.1} />
                </div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
