const footerHomeLinks = [
  { label: 'Overview', sectionId: 'overview' },
  { label: 'Features', sectionId: 'features' },
  { label: 'Workflow', sectionId: 'flow' },
  { label: 'Thinking', sectionId: 'journal' },
];

export default function Footer({ onHomeSectionNavigate, onNavigate }) {
  return (
    <footer className="site-footer" aria-label="Remindly footer">
      <div>
        <span>Remindly</span>
        <p>Calm daily organization for iPhone.</p>
      </div>
      <nav aria-label="Footer navigation">
        {footerHomeLinks.map((item) => (
          <a
            key={item.sectionId}
            href={`/#${item.sectionId}`}
            onClick={(event) => {
              event.preventDefault();
              onHomeSectionNavigate(item.sectionId);
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/roadmap"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('roadmap');
          }}
        >
          Roadmap
        </a>
        <a
          href="/pricing"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('pricing');
          }}
        >
          Pricing
        </a>
        <a href="mailto:hello@remindly.app">Contact</a>
      </nav>
    </footer>
  );
}
