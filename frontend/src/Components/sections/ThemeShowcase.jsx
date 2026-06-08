import ThemeSwitch from '../ThemeSwitch.jsx';
import { palette, themeOptions } from '../../config/homeContent.js';

export default function ThemeShowcase({ activeTheme, onThemeChange }) {
  const active = themeOptions.find((theme) => theme.id === activeTheme);

  return (
    <section id="themes" className="site-section theme-section" aria-labelledby="themes-title">
      <div className="theme-copy">
        <div className="section-kicker">Color system</div>
        <h3 id="themes-title">White, light, and dark modes from the same Remindly palette.</h3>
        <p>
          The website can shift mood without changing brand: blue stays primary, category colors
          stay recognizable, and surfaces move from editorial white to deep focus mode.
        </p>
        <ThemeSwitch activeTheme={activeTheme} onThemeChange={onThemeChange} />
        <small>{active?.description}</small>
      </div>

      <div className="palette-grid">
        {palette.map((item) => (
          <article key={item.name} className="palette-card">
            <span className="palette-swatch" style={{ '--swatch': item.value }} />
            <strong>{item.name}</strong>
            <code>{item.value}</code>
            <p>{item.usage}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
