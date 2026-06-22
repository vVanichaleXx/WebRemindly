import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { flowSteps } from '../../config/homeContent.js';

export default function FlowVisualization({ className = '' }) {
  return (
    <section id="flow" className={`site-section flow-section ${className}`.trim()} aria-labelledby="flow-title">
      <div className="section-kicker">Everyday flow</div>
      <div className="section-heading-row">
        <h3 id="flow-title">From a thought to a finished reminder.</h3>
        <p>
          Remindly gives loose intentions a place to land, then brings them back when they are
          useful.
        </p>
      </div>

      <div className="flow-visual">
        <div className="flow-line" aria-hidden="true" />
        {flowSteps.map((step, index) => (
          <article key={step.title} className="flow-step" style={{ '--step-index': index }}>
            <div className="flow-index">
              {index === flowSteps.length - 1 ? (
                <CheckCircle2 size={21} strokeWidth={2.3} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="flow-meta">{step.meta}</span>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
            {step.extra ? (
              <div className="flow-extra">
                <span>More detail</span>
                <p>{step.extra}</p>
              </div>
            ) : null}
            {index < flowSteps.length - 1 ? (
              <ArrowRight className="flow-arrow" size={20} strokeWidth={2.1} aria-hidden="true" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
