import { ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import { tutorialSteps } from '../../config/homeContent.js';

export default function TutorialSection() {
  return (
    <section id="tutorial" className="site-section tutorial-section" aria-labelledby="tutorial-title">
      <div className="section-kicker">Tutorial</div>
      <div className="section-heading-row">
        <h3 id="tutorial-title">A simple guide for turning the day into order.</h3>
        <p>
          The first guide will show how Remindly moves from fast capture to a calm overview,
          without forcing a heavy system.
        </p>
      </div>

      <div className="tutorial-steps" aria-label="Remindly tutorial steps">
        {tutorialSteps.map((step, index) => (
          <article key={step.title} className="tutorial-card">
            <div className="tutorial-index">
              {index === tutorialSteps.length - 1 ? (
                <CheckCircle2 size={20} strokeWidth={2.2} />
              ) : (
                <CircleDot size={20} strokeWidth={2.2} />
              )}
            </div>
            <span>Step {index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
            {index < tutorialSteps.length - 1 ? (
              <ArrowRight size={19} strokeWidth={2.1} aria-hidden="true" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
