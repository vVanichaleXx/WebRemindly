import PricingSection from '../sections/PricingSection.jsx';

export default function PricingView() {
  return (
    <div className="page-view pricing-view" aria-label="Remindly pricing">
      <section className="page-hero page-hero-centered" aria-labelledby="pricing-page-title">
        <div className="section-kicker">Pricing</div>
        <h1 id="pricing-page-title">Free while Remindly is taking shape.</h1>
        <p>
          A simple early-access plan for the iPhone app: reminders, habits, plans, and events in
          one calm daily workspace.
        </p>
      </section>

      <PricingSection />

      <p className="pricing-page-note">
        Remindly is currently free as the product is refined. Future paid plans will be introduced
        carefully and clearly.
      </p>
    </div>
  );
}
