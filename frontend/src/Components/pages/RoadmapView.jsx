import RoadmapSection from '../sections/RoadmapSection.jsx';

export default function RoadmapView() {
  return (
    <div className="page-view roadmap-view" aria-label="Remindly roadmap">
      <section className="page-hero page-hero-wide" aria-labelledby="roadmap-page-title">
        <div className="section-kicker">Roadmap</div>
        <h1 id="roadmap-page-title">A calmer system for how your day moves next.</h1>
        <p>
          Remindly starts with simple daily organization. The next steps bring connected services,
          AI-assisted capture, adaptive habits, and smarter planning into the same calm workspace.
        </p>
      </section>

      <RoadmapSection />
    </div>
  );
}
