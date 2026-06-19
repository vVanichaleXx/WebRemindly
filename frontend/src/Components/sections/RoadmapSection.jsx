import { roadmapItems } from '../../config/homeContent.js';

const connectorDots = Array.from({ length: 8 }, (_, index) => index);
const cardDots = Array.from({ length: 3 }, (_, index) => index);

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="site-section roadmap-section" aria-labelledby="roadmap-title">
      <div className="section-kicker">Roadmap</div>
      <div className="section-heading-row">
        <h3 id="roadmap-title">Future pieces, connected by one calm path.</h3>
        <p>
          Each step expands what Remindly can understand while protecting the quiet first glance
          that makes the app useful.
        </p>
      </div>

      <div className="roadmap-track" aria-label="Remindly product roadmap">
        {roadmapItems.map((item, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const nextSide = side === 'left' ? 'right' : 'left';

          return (
            <div key={item.title} className="roadmap-path-step">
              <article
                className={`roadmap-card roadmap-card-${side} roadmap-card-${index + 1}`}
                style={{ '--roadmap-index': index, '--path-delay': `${index * 320}ms` }}
              >
                <div className="roadmap-card-marker">
                  <span>{item.phase}</span>
                </div>
                <div className="roadmap-card-content">
                  <div className="roadmap-card-top">
                    <strong>{item.meta}</strong>
                    <span className="roadmap-card-dots" aria-hidden="true">
                      {cardDots.map((dot) => (
                        <i key={dot} />
                      ))}
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </article>

              {index < roadmapItems.length - 1 ? (
                <div
                  className={`roadmap-path-connector roadmap-path-connector-${side}-to-${nextSide}`}
                  style={{ '--path-delay': `${index * 320 + 180}ms` }}
                  aria-hidden="true"
                >
                  <span className="roadmap-dot-trail roadmap-dot-trail-vertical">
                    {connectorDots.slice(0, 4).map((dot) => (
                      <i
                        key={dot}
                        style={{ '--dot-delay': `${dot * 115}ms`, '--dot-pos': `${100 - dot * 24}%` }}
                      />
                    ))}
                  </span>
                  <span className="roadmap-dot-trail roadmap-dot-trail-cross">
                    {connectorDots.map((dot) => (
                      <i
                        key={dot}
                        style={{
                          '--dot-delay': `${(dot + 4) * 115}ms`,
                          '--dot-pos': `${dot * 14.28}%`,
                        }}
                      />
                    ))}
                  </span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="roadmap-closing">
        The roadmap stays focused on one idea: Remindly should make the next step clearer, not
        louder.
      </p>
    </section>
  );
}
