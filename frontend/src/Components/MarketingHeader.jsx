import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navItems, productNavItems } from '../config/homeContent.js';

function sectionIdFromHref(href) {
  return href.replace(/^#/, '');
}

export default function MarketingHeader({ currentRoute, onHomeSectionNavigate, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 28);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  return (
    <header className={isScrolled ? 'marketing-header is-scrolled' : 'marketing-header'}>
      <a
        href="/"
        className="header-brand"
        aria-label="Remindly home"
        onClick={(event) => {
          event.preventDefault();
          onNavigate('home');
        }}
      >
        <span>Remindly</span>
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        <div
          className={isProductOpen ? 'header-product is-open' : 'header-product'}
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          <button
            type="button"
            aria-expanded={isProductOpen}
            aria-haspopup="true"
            onClick={() => setIsProductOpen((value) => !value)}
          >
            Product <ChevronDown size={14} strokeWidth={2.2} />
          </button>

          <div className="header-dropdown" role="menu">
            {productNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                role="menuitem"
                onClick={(event) => {
                  event.preventDefault();
                  setIsProductOpen(false);
                  onHomeSectionNavigate(sectionIdFromHref(item.href));
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={currentRoute === item.route ? 'is-active' : ''}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.route);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          href="/pricing"
          className="header-cta"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('pricing');
          }}
        >
          <span className="header-cta-full">Get early access</span>
          <span className="header-cta-compact">Get</span>
        </a>
      </div>
    </header>
  );
}
