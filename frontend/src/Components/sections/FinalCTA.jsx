import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="site-section final-cta" aria-label="Get early access to Remindly">
      <div>
        <span><CheckCircle2 size={16} strokeWidth={2.1} /> Next step</span>
        <h3>Start with a calmer day.</h3>
        <p>
          Remindly brings reminders, habits, plans, and events into one focused iPhone workspace
          for daily organization.
        </p>
        <div className="final-cta-extra">
          <span>More detail</span>
          <p>
            Start simple: organize reminders, habits, plans, and events in one calm place. Future
            integrations, AI support, and adaptive habits can grow around the same focused
            foundation.
          </p>
        </div>
      </div>
      <a href="mailto:hello@remindly.app">
        Get early access <ArrowRight size={18} strokeWidth={2.2} />
      </a>
    </section>
  );
}
