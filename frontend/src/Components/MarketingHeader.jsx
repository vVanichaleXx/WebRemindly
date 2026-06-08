import { navItems } from '../config/homeContent.js';
import ThemeSwitch from './ThemeSwitch.jsx';

export default function MarketingHeader({ activeTheme, onThemeChange }) {
  return (
    <header className="marketing-header">
      <a href="/" className="header-brand" aria-label="Remindly home">
        <span className="brand-mark" aria-hidden="true">⌁</span>
        <span>Remindly</span>
      </a>

      <nav className="header-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeSwitch activeTheme={activeTheme} onThemeChange={onThemeChange} compact />
        <a href="mailto:hello@remindly.app" className="header-cta">
          Join beta
        </a>
      </div>
    </header>
  );
}
