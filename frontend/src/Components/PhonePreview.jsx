import {
  Bell,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flag,
  Flame,
  Home,
  ListChecks,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  Target,
} from 'lucide-react';

const filters = ['Tasks', 'Reminders', 'Events', 'Habits', 'Plans'];

const reminders = [
  {
    title: 'Review project plan',
    description: 'Prepare the next focus block',
    time: '9:15',
    repeat: 'today',
    tone: 'work',
    icon: ListChecks,
    urgent: true,
  },
  {
    title: 'Send weekly update',
    description: 'Wrap the notes into one message',
    time: '11:30',
    repeat: 'once',
    tone: 'life',
    icon: CheckCircle2,
  },
  {
    title: 'Plan evening reset',
    description: 'Clear tomorrow before dinner',
    time: '18:00',
    repeat: 'daily',
    tone: 'plans',
    icon: Flag,
  },
];

const habits = [
  { label: 'Water', icon: '💧', tone: 'work', done: true },
  { label: 'Read', icon: '📖', tone: 'life' },
  { label: 'Walk', icon: '🚶', tone: 'sport' },
  { label: 'Review', icon: '✓', tone: 'plans' },
];

const tabs = [
  { label: 'Home', icon: Home, selected: true },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Add', icon: Plus },
  { label: 'Stats', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

function HabitItem({ habit }) {
  return (
    <span className={`app-habit app-tone-${habit.tone}`}>
      <span className="app-habit-ring">
        <span>{habit.done ? <CheckCircle2 size={14} strokeWidth={2.5} /> : habit.icon}</span>
      </span>
      <small>{habit.label}</small>
    </span>
  );
}

function ReminderRow({ reminder }) {
  const Icon = reminder.icon;

  return (
    <article className={`app-reminder-row app-tone-${reminder.tone}`}>
      <span className="app-row-icon"><Icon size={14} strokeWidth={2.4} /></span>
      <div>
        <h5>
          {reminder.title}
          {reminder.urgent ? <em>Urgent</em> : null}
        </h5>
        <p>{reminder.description}</p>
        <small><Clock3 size={10} strokeWidth={2.3} /> {reminder.time} · {reminder.repeat}</small>
      </div>
      <button type="button" aria-label={`Edit ${reminder.title}`}>
        <SlidersHorizontal size={12} strokeWidth={2.4} />
      </button>
    </article>
  );
}

export default function PhonePreview() {
  return (
    <div id="preview" className="phone-preview" aria-label="Remindly iPhone Home screen preview">
      <div className="phone-shell">
        <div className="phone-side-button phone-side-button-left" aria-hidden="true" />
        <div className="phone-side-button phone-side-button-right" aria-hidden="true" />

        <div className="phone-frame">
          <div className="phone-screen">
            <div className="phone-dynamic-island" aria-hidden="true" />

            <div className="app-status">
              <span>9:41</span>
              <span>5G&nbsp;&nbsp;100%</span>
            </div>

            <div className="app-home-screen">
              <header className="app-header">
                <button type="button" aria-label="Recent notifications">
                  <Bell size={18} fill="currentColor" strokeWidth={0} />
                </button>
                <strong>Remindly</strong>
                <span>VA</span>
              </header>

              <section className="app-title">
                <p>Good morning</p>
                <h3>Today's Overview</h3>
              </section>

              <nav className="app-segmented" aria-label="Home filters">
                {filters.map((filter) => (
                  <span key={filter} className={filter === 'Tasks' ? 'is-active' : ''}>
                    {filter}
                  </span>
                ))}
              </nav>

              <div className="app-search">
                <Search size={14} strokeWidth={2.2} />
                <span>Search...</span>
              </div>

              <main className="app-content">
                <article className="app-now-card">
                  <div className="app-card-topline">
                    <span><Target size={11} strokeWidth={2.5} /> Now</span>
                    <small>Focus</small>
                  </div>
                  <div className="app-now-main">
                    <span><Target size={18} strokeWidth={2.4} /></span>
                    <div>
                      <h4>Review project plan</h4>
                      <p>Prepare the next focus block before the day fills up.</p>
                    </div>
                  </div>
                  <div className="app-now-detail">
                    <Clock3 size={12} strokeWidth={2.3} />
                    9:15 today
                  </div>
                </article>

                <section className="app-priority-section">
                  <h4>Today's Top Priority</h4>
                  <article className="app-priority-card">
                    <span className="app-progress-ring"><Flag size={14} strokeWidth={2.4} /></span>
                    <div>
                      <h5>Weekly roadmap</h5>
                      <p>2 of 5 stages complete</p>
                      <span><span /></span>
                    </div>
                  </article>
                </section>

                <section className="app-habits-card">
                  <div className="app-section-heading">
                    <h4>Today's Habits</h4>
                    <span>1 of 4</span>
                  </div>
                  <div className="app-habit-row">
                    {habits.map((habit) => (
                      <HabitItem key={habit.label} habit={habit} />
                    ))}
                  </div>
                </section>

                <section className="app-reminders-section">
                  <div className="app-section-heading">
                    <h4>To Do</h4>
                    <span>3</span>
                  </div>
                  <div className="app-reminder-list">
                    {reminders.map((reminder) => (
                      <ReminderRow key={reminder.title} reminder={reminder} />
                    ))}
                  </div>
                </section>

                <section className="app-mini-grid" aria-label="Plans and events">
                  <article>
                    <CalendarDays size={15} strokeWidth={2.4} />
                    <strong>1 event</strong>
                    <span>Team sync</span>
                  </article>
                  <article>
                    <Flame size={15} strokeWidth={2.4} />
                    <strong>2 habits</strong>
                    <span>Still open</span>
                  </article>
                </section>
              </main>

              <nav className="app-tabbar" aria-label="App tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <span key={tab.label} className={tab.selected ? 'is-selected' : ''}>
                      <Icon size={tab.label === 'Add' ? 20 : 18} strokeWidth={2.35} />
                      <small>{tab.label}</small>
                    </span>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
