import RoadmapSection from '../sections/RoadmapSection.jsx';

export default function RoadmapView() {
  return (
    <div className="page-view roadmap-view" aria-label="Remindly roadmap">
      <section className="page-hero page-hero-wide" aria-labelledby="roadmap-page-title">
        <div className="section-kicker">Roadmap</div>
        <h1 id="roadmap-page-title">Where Remindly is going next.</h1>
        <p>
          A calm productivity system is not finished when reminders work. It gets better when it
          starts understanding how your day moves.
        </p>
      </section>

      <RoadmapSection />
    </div>
  );
}
