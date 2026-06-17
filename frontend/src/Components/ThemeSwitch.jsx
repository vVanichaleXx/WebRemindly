import { Moon } from 'lucide-react';

const themeOptions = [
  {
    id: 'dark',
    label: 'Dark',
    description: 'The landing page is presented in Remindly’s dark product mood.',
  },
];

export default function ThemeSwitch({ activeTheme, onThemeChange, compact = false }) {
  return (
    <div className={compact ? 'theme-switch theme-switch-compact' : 'theme-switch'} aria-label="Theme switcher">
      {themeOptions.map((theme) => {
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
            <Moon size={compact ? 15 : 17} strokeWidth={2.2} />
            {!compact ? <span>{theme.label}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
