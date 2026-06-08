import { Moon, Sparkles, Sun } from 'lucide-react';
import { themeOptions } from '../config/homeContent.js';

const icons = {
  dark: Moon,
  light: Sparkles,
  white: Sun,
};

export default function ThemeSwitch({ activeTheme, onThemeChange, compact = false }) {
  return (
    <div className={compact ? 'theme-switch theme-switch-compact' : 'theme-switch'} aria-label="Theme switcher">
      {themeOptions.map((theme) => {
        const Icon = icons[theme.id];
        const isActive = activeTheme === theme.id;

        return (
          <button
            key={theme.id}
            type="button"
            className={isActive ? 'is-active' : ''}
            onClick={() => onThemeChange(theme.id)}
            aria-label={`Use ${theme.label} theme`}
            aria-pressed={isActive}
            title={theme.description}
          >
            <Icon size={compact ? 15 : 17} strokeWidth={2.2} />
            {!compact ? <span>{theme.label}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
