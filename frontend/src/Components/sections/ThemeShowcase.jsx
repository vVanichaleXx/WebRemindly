import { CalendarDays, CircleDot, Layers3, Target } from 'lucide-react';

const interfacePoints = [
  {
    icon: Target,
    title: 'Now card',
    body: 'The current focus sits first, with the next useful time or action attached.',
  },
  {
    icon: Layers3,
    title: 'Category cards',
    body: 'Work, life, plans, habits, and events keep their own color and count.',
  },
  {
    icon: CalendarDays,
    title: 'Footer navigation',
    body: 'Home, Calendar, Add, Stats, and Settings stay reachable without visual noise.',
  },
];

export default function ThemeShowcase() {
  return (
    <section id="interface" className="site-section interface-section" aria-labelledby="interface-title">
      <div className="interface-copy">
        <div className="section-kicker">iPhone-first interface</div>
        <h3 id="interface-title">A quiet home for the parts of the day that matter.</h3>
        <p>
          The website preview follows the native app: a focused Home tab, compact cards, category
          context, and a footer that feels familiar on iPhone.
        </p>
      </div>

      <div className="interface-board" aria-label="Remindly interface principles">
        <div className="interface-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <article className="interface-card interface-card-primary">
          <span><CircleDot size={15} strokeWidth={2.4} /> Home tab</span>
          <strong>Today’s Overview</strong>
          <p>Now, top priority, categories, and the short to-do list stay in one readable stack.</p>
        </article>

        <div className="interface-card-grid">
          {interfacePoints.map((point) => {
            const Icon = point.icon;

            return (
              <article key={point.title} className="interface-card">
                <Icon size={21} strokeWidth={2.1} />
                <h4>{point.title}</h4>
                <p>{point.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
