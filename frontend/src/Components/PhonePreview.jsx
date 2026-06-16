import {
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
  Home,
  ListChecks,
  Plus,
  Settings,
  Target,
} from 'lucide-react';
import { categories, reminders, tabItems } from '../config/homeContent.js';

const tabIcons = {
  home: Home,
  calendar: CalendarDays,
  add: Plus,
  stats: ChartNoAxesColumnIncreasing,
  settings: Settings,
};

const typeIcons = {
  Task: ListChecks,
  Habit: Target,
  Event: CalendarDays,
  Plan: Flag,
};

function ReminderCard({ reminder, index }) {
  const Icon = typeIcons[reminder.type] || Circle;

  return (
    <article className="phone-reminder-card" style={{ '--card-index': index }}>
      <span className="phone-category-icon" style={{ '--item-color': reminder.color }}>
        <Icon size={15} strokeWidth={2.3} />
      </span>
      <div className="phone-card-body">
        <div className="phone-card-title-row">
          <h4>{reminder.title}</h4>
          {reminder.pinned ? <span className="pin-indicator">Pinned</span> : null}
        </div>
        <p>{reminder.description}</p>
        <div className="phone-card-meta">
          <span><Clock3 size={11} strokeWidth={2.3} /> {reminder.time}</span>
          <span>{reminder.type}</span>
        </div>
      </div>
      <button type="button" aria-label={`Complete ${reminder.title}`}>
        <CheckCircle2 size={15} strokeWidth={2.4} />
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
              <span>5G&nbsp;&nbsp;100%</span>
            </div>

            <div className="phone-app-header">
              <div>
                <span>Tuesday, 16 June</span>
                <strong>Today</strong>
              </div>
              <button type="button" className="phone-add-button" aria-label="Add reminder">
                <Plus size={19} strokeWidth={2.5} />
              </button>
            </div>

            <section className="phone-overview-card">
              <div>
                <span>Calm productivity overview</span>
                <h3>8 items planned</h3>
                <p>5 tasks, 2 habits, 1 event</p>
              </div>
              <div className="phone-progress-ring" aria-label="62 percent complete">
                <span>62%</span>
              </div>
            </section>

            <div className="phone-focus-row" aria-label="Today progress">
              <span><CheckCircle2 size={13} strokeWidth={2.4} /> 5 complete</span>
              <span><Clock3 size={13} strokeWidth={2.4} /> Next at 9:15</span>
            </div>

            <div className="phone-segmented" role="tablist" aria-label="Task filters">
              {['Today', 'Tasks', 'Habits', 'Events'].map((item) => (
                <button key={item} type="button" className={item === 'Today' ? 'is-active' : ''}>
                  {item}
                </button>
              ))}
            </div>

            <div className="phone-category-row">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="phone-category-chip"
                  style={{ '--item-color': category.color }}
                >
                  <span />
                  <strong>{category.count}</strong>
                  <small>{category.name}</small>
                </div>
              ))}
            </div>

            <section className="phone-list-section">
              <div className="phone-section-heading">
                <span>Next reminders</span>
                <strong>Calm focus</strong>
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
                    return index === 2 ? (
                      <span className="phone-tab-add"><Plus size={18} strokeWidth={2.5} /></span>
                    ) : (
                      <Icon size={19} strokeWidth={2.3} />
                    );
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
