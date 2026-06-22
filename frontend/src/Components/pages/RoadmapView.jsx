import { useRef } from 'react';
import RoadmapSection from '../sections/RoadmapSection.jsx';
import usePresentationSections, { getPresentationClass } from '../../utils/usePresentationSections.js';

export default function RoadmapView() {
  const pageRef = useRef(null);
  const activeSection = usePresentationSections(pageRef);
  const presentationClass = (index) => getPresentationClass(index, activeSection);

  return (
    <div ref={pageRef} className="page-view roadmap-view presentation-page" aria-label="Remindly roadmap">
      <section className={`presentation-page-hero ${presentationClass(0)}`} aria-labelledby="roadmap-page-title">
        <div className="page-hero page-hero-wide">
          <div className="section-kicker">Roadmap</div>
          <h1 id="roadmap-page-title">A calmer system for how your day moves next.</h1>
          <p>
            Remindly starts with simple daily organization. The next steps bring connected services,
            AI-assisted capture, adaptive habits, and smarter planning into the same calm workspace.
          </p>
        </div>
      </section>

      <div className={`roadmap-presentation-stage ${presentationClass(1)}`}>
        <RoadmapSection />
      </div>
    </div>
  );
}
