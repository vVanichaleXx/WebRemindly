import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="site-section final-cta" aria-label="Join Remindly beta">
      <div>
        <span><Sparkles size={16} strokeWidth={2.1} /> Next step</span>
        <h3>Make the landing page feel as calm as the app.</h3>
        <p>
          The structure is ready for App Store links, TestFlight signup, screenshots, privacy
          pages, and a real changelog when you want to ship it publicly.
        </p>
      </div>
      <a href="mailto:hello@remindly.app">
        Join beta <ArrowRight size={18} strokeWidth={2.2} />
      </a>
    </section>
  );
}
