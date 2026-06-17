import { CheckCircle2 } from 'lucide-react';
import { pricingCopy } from '../../config/homeContent.js';

export default function PricingSection() {
  return (
    <section id="pricing" className="site-section pricing-section" aria-labelledby="pricing-title">
      <div className="pricing-card" aria-label="Remindly free plan">
        <div className="pricing-glow" aria-hidden="true" />
        <div className="section-kicker">Pricing</div>
        <p className="pricing-plan">{pricingCopy.plan}</p>
        <h3 id="pricing-title">{pricingCopy.price}</h3>
        <p className="pricing-body">{pricingCopy.body}</p>

        <ul className="pricing-features">
          {pricingCopy.bullets.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} strokeWidth={2.2} />
              {item}
            </li>
          ))}
        </ul>

        <a href="mailto:hello@remindly.app" className="pricing-button">
          Get early access
        </a>
        <small>No credit card required</small>
      </div>
    </section>
  );
}
