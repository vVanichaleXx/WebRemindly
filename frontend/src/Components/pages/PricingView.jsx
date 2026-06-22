import { useRef } from 'react';
import PricingSection from '../sections/PricingSection.jsx';
import usePresentationSections, { getPresentationClass } from '../../utils/usePresentationSections.js';

export default function PricingView() {
  const pageRef = useRef(null);
  const activeSection = usePresentationSections(pageRef);
  const presentationClass = (index) => getPresentationClass(index, activeSection);

  return (
    <div ref={pageRef} className="page-view pricing-view presentation-page" aria-label="Remindly pricing">
      <section className={`pricing-hero-slide presentation-page-hero ${presentationClass(0)}`} aria-labelledby="pricing-page-title">
        <div className="page-hero page-hero-centered">
          <div className="section-kicker">Pricing</div>
          <h1 id="pricing-page-title">Free while Remindly is taking shape.</h1>
          <p>
            A simple early-access plan for the iPhone app: reminders, habits, plans, and events in
            one calm daily workspace.
          </p>
        </div>
      </section>

      <PricingSection
        className={`pricing-presentation-section ${presentationClass(1)}`}
        note="Remindly is currently free as the product is refined. Future paid plans will be introduced carefully and clearly."
      />
    </div>
  );
}
