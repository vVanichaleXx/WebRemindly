import { useMemo, useState } from 'react';
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flag,
  Home,
  Layers3,
  ListChecks,
  MinusCircle,
  Plus,
  Settings,
  SlidersHorizontal,
  Target,
} from 'lucide-react';

const tutorialTabs = [
  {
    id: 'home',
    label: 'Home',
    title: 'Start from today.',
    text: 'The Home screen opens with the current activity, habits, and simple reminders in one calm view.',
    explanations: [
      {
        title: 'Current activity',
        text: 'The Now card keeps the active part of the day visible first.',
        target: 'current',
      },
      {
        title: 'Habits',
        text: 'Small habit rings make completed routines quick to mark.',
        target: 'habits',
      },
      {
        title: 'Reminders',
        text: 'Simple reminders stay visible below the daily overview.',
        target: 'reminders',
      },
    ],
  },
  {
    id: 'reminders',
    label: 'Reminders',
    title: 'Filter what needs attention.',
    text: 'Reminders use category cards, timeline sections, compact rows, and a small edit control so each task stays easy to open.',
    explanations: [
      {
        title: 'Categories',
        text: 'Category cards help sort reminders without adding a heavy sidebar.',
        target: 'categories',
      },
      {
        title: 'Reminder cards',
        text: 'Open a row to view or edit the reminder details.',
        target: 'cards',
      },
      {
        title: 'Future swipe actions',
        text: 'Pin and delete gestures can stay as native swipe actions later.',
        target: 'note',
      },
    ],
  },
  {
    id: 'habits',
    label: 'Habits',
    title: 'Mark routines quickly.',
    text: 'Habits are built for quick progress: tap the ring to add a completion, adjust it, or open the habit for more detail.',
    explanations: [
      {
        title: 'Quick check',
        text: 'Tap the progress control when a routine is done.',
        target: 'check',
      },
      {
        title: 'Progress',
        text: 'The ring shows how much of the daily target is complete.',
        target: 'progress',
      },
      {
        title: 'Routine clarity',
        text: 'Repeated actions stay visible without becoming a dashboard.',
        target: 'clarity',
      },
    ],
  },
  {
    id: 'plans',
    label: 'Plans',
    title: 'Keep bigger goals close.',
    text: 'Plans group long-term goals into progress cards with destination, stages, health, and the next step.',
    explanations: [
      {
        title: 'Bigger goals',
        text: 'Plans hold longer-term direction outside quick reminders.',
        target: 'goals',
      },
      {
        title: 'Plan cards',
        text: 'Each card carries progress, stages, and the current direction.',
        target: 'cards',
      },
      {
        title: 'Progress/context',
        text: 'Context stays visible so the next step is easier to choose.',
        target: 'context',
      },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    title: 'See what belongs to time.',
    text: 'Events are scheduled blocks with status, category, countdown, and reminder details alongside the rest of the day.',
    explanations: [
      {
        title: 'Time-based items',
        text: 'Events belong to a specific date, time, or recurring block.',
        target: 'time',
      },
      {
        title: 'Schedule context',
        text: 'Status and countdown keep the day connected to time.',
        target: 'schedule',
      },
      {
        title: 'Event cards',
        text: 'Open an event card when the schedule needs a closer look.',
        target: 'cards',
      },
    ],
  },
];

const appSegments = [
  { id: 'home', label: 'Tasks' },
  { id: 'reminders', label: 'Reminders' },
  { id: 'events', label: 'Events' },
  { id: 'habits', label: 'Habits' },
  { id: 'plans', label: 'Plans' },
];

const bottomTabs = [
  { label: 'Home', icon: Home },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Add', icon: Plus },
  { label: 'Stats', icon: Target },
  { label: 'Settings', icon: Settings },
];

const categoryCards = [
  { label: 'All', count: 14, tone: 'blue' },
  { label: 'Work', count: 6, tone: 'blue' },
  { label: 'Life', count: 4, tone: 'green' },
  { label: 'Plans', count: 3, tone: 'purple' },
];

const bottomCards = [
  {
    title: 'Choose',
    text: 'Move between the main app filters without losing the day context.',
  },
  {
    title: 'Open',
    text: 'Rows and cards are designed to open into focused edit or detail sheets.',
  },
  {
    title: 'Follow',
    text: 'Return to the Home overview when you need the next useful action.',
  },
];

function StatusPill({ children, tone = 'blue' }) {
  return <span className={`tutorial-app-pill tone-${tone}`}>{children}</span>;
}

function SectionTitle({ title, count, tone = 'blue' }) {
  return (
    <div className="tutorial-section-title">
      <h4>{title}</h4>
      {count ? <span className={`tone-${tone}`}>{count}</span> : null}
    </div>
  );
}

function ReminderRow({ title, description, time, tone = 'blue', urgent = false, pinned = false }) {
  return (
    <article className={`tutorial-remindly-row tone-${tone}`}>
      <span className="tutorial-row-icon">
        <ListChecks size={13} strokeWidth={2.3} />
      </span>
      <div>
        <strong>
          {title}
          {pinned ? <small className="tutorial-pin">Pinned</small> : null}
          {urgent ? <small className="tutorial-urgent">Urgent</small> : null}
        </strong>
        <p>{description}</p>
        <small>
          <Clock3 size={10} strokeWidth={2.4} />
          {time} · once
        </small>
      </div>
      <button type="button" aria-label={`Edit ${title}`}>
        <SlidersHorizontal size={12} strokeWidth={2.3} />
      </button>
    </article>
  );
}

function HabitRow({ title, meta, icon, progress = 66, done = false }) {
  return (
    <article className="tutorial-habit-row">
      <span className="tutorial-habit-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{meta}</p>
      </div>
      <div className="tutorial-habit-actions">
        <MinusCircle size={19} strokeWidth={2.1} />
        <span style={{ '--progress': `${progress}%` }} className={done ? 'is-done' : ''}>
          {done ? <CheckCircle2 size={15} strokeWidth={2.4} /> : <Plus size={15} strokeWidth={2.4} />}
        </span>
      </div>
    </article>
  );
}

function CompactHabit({ icon, title, progress = 55, done = false }) {
  return (
    <span className="tutorial-compact-habit">
      <i style={{ '--progress': `${progress}%` }} className={done ? 'is-done' : ''}>
        {done ? <CheckCircle2 size={13} strokeWidth={2.6} /> : icon}
      </i>
      <small>{title}</small>
    </span>
  );
}

function PlanCard({ compact = false }) {
  return (
    <article className={compact ? 'tutorial-plan-card is-compact' : 'tutorial-plan-card'}>
      <div className="tutorial-plan-header">
        <span className="tutorial-row-icon tone-purple">
          <Flag size={14} strokeWidth={2.3} />
        </span>
        <div>
          <strong>Weekly roadmap</strong>
          <p>Monthly · Jun 28</p>
        </div>
        <em>42%</em>
      </div>
      <div className="tutorial-progress">
        <span style={{ width: '42%' }} />
      </div>
      <div className="tutorial-plan-meta">
        <span>Done 2</span>
        <span>Stages 5</span>
        <span>Healthy</span>
      </div>
      {!compact ? (
        <p className="tutorial-plan-next">
          <ChevronRight size={12} strokeWidth={2.5} />
          Next: Write launch checklist
        </p>
      ) : null}
    </article>
  );
}

function EventCard({ live = false }) {
  return (
    <article className={live ? 'tutorial-event-card is-live' : 'tutorial-event-card'}>
      <div className="tutorial-event-topline">
        <span><i /> Work</span>
        <StatusPill tone={live ? 'green' : 'purple'}>{live ? 'In Progress' : 'Upcoming'}</StatusPill>
      </div>
      <div className="tutorial-event-title">
        <CalendarDays size={17} strokeWidth={2.3} />
        <strong>{live ? 'Focus block' : 'Design review'}</strong>
      </div>
      <p>{live ? 'Today, 09:00-10:30' : 'Today, 14:30-15:15'} · Bell 10 min before</p>
      <div className="tutorial-time-row">
        <Clock3 size={11} strokeWidth={2.3} />
        {live ? 'Ends in 22:14' : 'Starts in 04:18:00'}
      </div>
    </article>
  );
}

function HomeContent() {
  return (
    <>
      <article className="tutorial-now-card tutorial-highlight-current">
        <div className="tutorial-card-line">
          <StatusPill><Target size={10} strokeWidth={2.3} /> Now</StatusPill>
          <small>Focus</small>
        </div>
        <div className="tutorial-card-main">
          <span><Target size={17} strokeWidth={2.3} /></span>
          <div>
            <h4>Review project plan</h4>
            <p>Prepare the next focus block.</p>
          </div>
        </div>
        <div className="tutorial-time-row">
          <Clock3 size={11} strokeWidth={2.3} />
          9:15 today
        </div>
      </article>

      <section className="tutorial-home-habits tutorial-highlight-habits">
        <SectionTitle title="Today's Habits" count="1/4" />
        <div>
          <CompactHabit icon="💧" title="Water" progress={75} done />
          <CompactHabit icon="📖" title="Read" progress={45} />
          <CompactHabit icon="🚶" title="Walk" progress={20} />
        </div>
      </section>

      <section className="tutorial-reminder-list tutorial-highlight-reminders">
        <SectionTitle title="To Do" count="3" />
        <ReminderRow title="Send weekly update" description="Share notes and next steps" time="11:30" />
        <ReminderRow title="Review project plan" description="Confirm next steps before lunch" time="12:45" urgent />
      </section>
    </>
  );
}

function RemindersContent() {
  return (
    <>
      <section className="tutorial-category-cards tutorial-highlight-categories">
        {categoryCards.map((category) => (
          <article key={category.label} className={`tone-${category.tone}`}>
            <span>{category.label[0]}</span>
            <strong>{category.label}</strong>
            <small>{category.count}</small>
          </article>
        ))}
      </section>

      <section className="tutorial-reminder-list tutorial-highlight-cards">
        <SectionTitle title="Today" count="3" />
        <ReminderRow title="Review project plan" description="Confirm next steps before lunch" time="9:15" urgent pinned />
        <ReminderRow title="Send weekly update" description="Share notes and blockers" time="11:30" />
      </section>

      <p className="tutorial-outside-note">Open a reminder to review or edit details. Swipe actions stay part of the native app interaction model.</p>
    </>
  );
}

function HabitsContent() {
  return (
    <section className="tutorial-habit-list tutorial-highlight-check tutorial-highlight-progress tutorial-highlight-clarity">
      <SectionTitle title="Current Habits" count="4" tone="green" />
      <HabitRow title="Drink water" meta="Goal: 4 · Done 3 times" icon="💧" progress={75} done />
      <HabitRow title="Read 20 minutes" meta="Goal: 1 · Done 0 times" icon="📖" progress={18} />
      <HabitRow title="Evening walk" meta="3 day streak" icon="🚶" progress={54} />
    </section>
  );
}

function PlansContent() {
  return (
    <section className="tutorial-plan-list tutorial-highlight-goals tutorial-highlight-cards tutorial-highlight-context">
      <SectionTitle title="In Progress" count="2" tone="purple" />
      <PlanCard />
      <article className="tutorial-plan-card is-compact">
        <div className="tutorial-plan-header">
          <span className="tutorial-row-icon tone-purple">
            <Flag size={14} strokeWidth={2.3} />
          </span>
          <div>
            <strong>Build calmer routines</strong>
            <p>Yearly · healthy</p>
          </div>
          <em>64%</em>
        </div>
        <div className="tutorial-progress">
          <span style={{ width: '64%' }} />
        </div>
      </article>
    </section>
  );
}

function EventsContent() {
  return (
    <section className="tutorial-event-list tutorial-highlight-time tutorial-highlight-schedule tutorial-highlight-cards">
      <SectionTitle title="Live & Upcoming" count="2" tone="green" />
      <EventCard live />
      <SectionTitle title="All Events" count="4" tone="purple" />
      <EventCard />
    </section>
  );
}

function TutorialPhonePreview({ activeTab }) {
  return (
    <div className={`tutorial-phone tutorial-phone-${activeTab.id}`} aria-label="Remindly tutorial phone preview">
      <div className="tutorial-phone-frame">
        <div className="tutorial-phone-screen">
          <div className="tutorial-dynamic-island" aria-hidden="true" />
          <div className="tutorial-app-status">
            <span>9:41</span>
            <span>5G&nbsp;&nbsp;100%</span>
          </div>

          <div className="tutorial-app-ui">
            <header className="tutorial-app-header">
              <button type="button" aria-label="Recent notifications">
                <Bell size={16} fill="currentColor" strokeWidth={0} />
              </button>
              <strong>Remindly</strong>
              <span>VA</span>
            </header>

            <section className="tutorial-app-title">
              <p>Good morning</p>
              <h3>Today's Overview</h3>
            </section>

            <nav className="tutorial-app-segments" aria-label="Remindly filters">
              {appSegments.map((item) => (
                <span key={item.id} className={activeTab.id === item.id ? 'is-active' : ''}>
                  {item.label}
                </span>
              ))}
            </nav>

            <main key={activeTab.id} className="tutorial-phone-content">
              {activeTab.id === 'home' ? <HomeContent /> : null}
              {activeTab.id === 'reminders' ? <RemindersContent /> : null}
              {activeTab.id === 'habits' ? <HabitsContent /> : null}
              {activeTab.id === 'plans' ? <PlansContent /> : null}
              {activeTab.id === 'events' ? <EventsContent /> : null}
            </main>

            <nav className="tutorial-app-tabbar" aria-label="App tabs">
              {bottomTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <span key={tab.label} className={tab.label === 'Home' ? 'is-selected' : ''}>
                    <Icon size={tab.label === 'Add' ? 19 : 17} strokeWidth={2.35} />
                    <small>{tab.label}</small>
                  </span>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function TutorialExplanations({ activeTab }) {
  return (
    <aside key={activeTab.id} className="tutorial-explanation-stack" aria-label={`${activeTab.label} explanations`}>
      <div className="tutorial-explanation-heading">
        <span>{activeTab.label}</span>
        <h2>{activeTab.title}</h2>
        <p>{activeTab.text}</p>
      </div>

      <div className="tutorial-explanation-list">
        {activeTab.explanations.map((item, index) => (
          <article
            key={item.title}
            className={`tutorial-explanation-card target-${item.target}`}
            style={{ '--card-index': index }}
          >
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default function TutorialView() {
  const [activeTabId, setActiveTabId] = useState('home');
  const activeTab = useMemo(
    () => tutorialTabs.find((tab) => tab.id === activeTabId) ?? tutorialTabs[0],
    [activeTabId]
  );

  return (
    <div className="page-view tutorial-view" aria-label="Remindly tutorial">
      <section className="tutorial-hero page-hero page-hero-wide" aria-labelledby="tutorial-page-title">
        <div>
          <div className="section-kicker">Tutorial</div>
          <h1 id="tutorial-page-title">Learn Remindly by using it.</h1>
          <p>
            Switch between the main parts of the app and see how your day is organized.
          </p>
        </div>
      </section>

      <section id="tutorial" className="tutorial-walkthrough" aria-label="Interactive Remindly tutorial">
        <div className="tutorial-step-rail" role="tablist" aria-label="Tutorial tabs">
          {tutorialTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab.id === tab.id}
              className={activeTab.id === tab.id ? 'is-active' : ''}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tutorial-stage">
          <TutorialPhonePreview activeTab={activeTab} />
          <TutorialExplanations activeTab={activeTab} />
        </div>
      </section>

      <section className="tutorial-bottom-cards" aria-label="Remindly tutorial summary">
        {bottomCards.map((card) => (
          <article key={card.title}>
            <Layers3 size={18} strokeWidth={2.2} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
