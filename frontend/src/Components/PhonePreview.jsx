import {
  Bell,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Home,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
} from 'lucide-react';
import { categories, reminders, tabItems } from '../config/homeContent.js';

const tabIcons = {
  home: Home,
  calendar: CalendarDays,
  add: Plus,
  stats: ChartNoAxesColumnIncreasing,
  settings: Settings,
};

function ReminderCard({ reminder, index }) {
  return (
    <article className="phone-reminder-card" style={{ '--card-index': index }}>
      <span className="phone-category-icon" style={{ '--item-color': reminder.color }}>
        {reminder.icon}
      </span>
      <div className="phone-card-body">
        <div className="phone-card-title-row">
          <h4>{reminder.title}</h4>
          {reminder.pinned ? <span className="pin-indicator">◆</span> : null}
          {reminder.priority === 'High' ? <span className="priority-pill">H</span> : null}
        </div>
        <p>{reminder.description}</p>
        <div className="phone-card-meta">
          <span>◷ {reminder.time}</span>
          <span>{reminder.repeat}</span>
        </div>
      </div>
      <button type="button" aria-label={`Edit ${reminder.title}`}>
        <SlidersHorizontal size={12} strokeWidth={2.4} />
      </button>
    </article>
  );
}

export default function PhonePreview() {
  return (
    <div id="preview" className="phone-preview" aria-label="Remindly app preview">
      <div className="phone-shell">
        <div className="phone-frame">
          <div className="phone-sensor" />
          <div className="phone-screen">
            <div className="phone-status">
              <span>9:41</span>
              <span>5G  ▰</span>
            </div>

            <div className="phone-app-header">
              <button type="button" className="phone-bell-button" aria-label="Recent notifications">
                <Bell size={20} fill="currentColor" strokeWidth={2.4} />
              </button>
              <strong>Remindly</strong>
              <span className="phone-avatar">V</span>
            </div>

            <section className="phone-title-section">
              <span>Good morning</span>
              <h3>Today's Overview</h3>
            </section>

            <div className="phone-segmented" role="tablist" aria-label="Task filters">
              {['Tasks', 'Reminders', 'Events', 'Habits', 'Plans'].map((item) => (
                <button key={item} type="button" className={item === 'Tasks' ? 'is-active' : ''}>
                  {item}
                </button>
              ))}
            </div>

            <div className="phone-search">
              <Search size={13} strokeWidth={2.2} />
              Search reminders
            </div>

            <div className="phone-category-row">
              {categories.map((category) => (
                <div key={category.name} className="phone-category-chip">
                  <span style={{ '--item-color': category.color }}>{category.icon}</span>
                  <strong>{category.count}</strong>
                  <small>{category.name}</small>
                </div>
              ))}
            </div>

            <section className="phone-list-section">
              <div className="phone-section-heading">
                <span>Today</span>
                <strong>{reminders.length}</strong>
              </div>
              <div className="phone-reminder-list">
                {reminders.map((reminder, index) => (
                  <ReminderCard key={reminder.title} reminder={reminder} index={index} />
                ))}
              </div>
            </section>

            <nav className="phone-tabbar" aria-label="App tabs">
              {tabItems.map((item, index) => (
                <span key={`${item}-${index}`} className={index === 0 ? 'is-selected' : ''}>
                  {(() => {
                    const Icon = tabIcons[item];
                    return <Icon size={index === 2 ? 23 : 19} strokeWidth={2.3} />;
                  })()}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
