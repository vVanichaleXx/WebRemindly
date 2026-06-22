import { useMemo, useRef, useState } from 'react';
import {
  Bell,
  CalendarDays,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flag,
  Home,
  Layers3,
  ListChecks,
  MapPin,
  MessageCircle,
  MinusCircle,
  Pencil,
  Plus,
  Repeat2,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import usePresentationSections, { getPresentationClass } from '../../utils/usePresentationSections.js';

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
    title: 'Capture, then refine.',
    text: 'Reminder setup stays close to the item: title, time, priority, category, repeat rhythm, and notification style stay fast to adjust.',
    explanations: [
      {
        title: 'Flexible setup',
        text: 'A reminder can hold a clear title, date, time, priority, category, repeat rhythm, and alert style without slowing capture.',
        target: 'setup',
      },
      {
        title: 'Open to edit',
        text: 'Compact reminder rows can open into a focused preview or edit sheet when the item needs more context.',
        target: 'cards',
      },
      {
        title: 'Smarter categories',
        text: 'Categories start as simple structure. As a future direction, work, personal, and context-aware signals can help show only useful reminders at the right moment.',
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
        title: 'Time-based events',
        text: 'Events belong to a specific date, time, or recurring block.',
        target: 'time',
      },
      {
        title: 'Calendar structure',
        text: 'Calendar keeps time-based items visible, so events and scheduled reminders do not get lost inside a simple task list.',
        target: 'calendar',
      },
      {
        title: 'Day rhythm',
        text: 'A calm schedule view helps the day feel organized without turning Remindly into a dense calendar app.',
        target: 'rhythm',
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
];

const appSegments = [
  { id: 'home', label: 'Home' },
  { id: 'reminders', label: 'Reminders' },
  { id: 'events', label: 'Events' },
  { id: 'habits', label: 'Habits' },
  { id: 'plans', label: 'Plans' },
];

const bottomTabs = [
  { label: 'Home', icon: Home },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Add', icon: Plus },
  { label: 'Stats', icon: BarChart3 },
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
    title: 'Capture',
    text: 'Start with the thought, then add structure only when it helps.',
  },
  {
    title: 'Schedule',
    text: 'Calendar keeps timed items close to reminders and daily structure.',
  },
  {
    title: 'Measure',
    text: 'Stats should show progress without turning the app into a noisy dashboard.',
  },
];

const deepDiveSections = [
  {
    kicker: 'Reminder detail',
    title: 'Open a reminder without losing speed.',
    text: 'Reminder setup stays flexible without becoming heavy. Category, priority, time, repeat rhythm, and alert style live close to the item.',
  },
  {
    kicker: 'Notifications',
    title: 'Useful reminders, not louder reminders.',
    text: 'The goal is to help a reminder appear in the right context, not to create another notification wall.',
  },
  {
    kicker: 'Calendar',
    title: 'Time belongs next to the rest of the day.',
    text: 'Calendar keeps scheduled events and time-based reminders visible by day, so they do not disappear into a plain task list.',
  },
  {
    kicker: 'Stats',
    title: 'Progress without turning into a dashboard.',
    text: 'Stats can become a calm view of completion, habit consistency, reminders, and weekly rhythm.',
  },
];

function selectedBottomTab(activeTabId) {
  if (activeTabId === 'events') {
    return 'Calendar';
  }

  if (activeTabId === 'habits') {
    return 'Stats';
  }

  return 'Home';
}

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

      <article className="tutorial-reminder-setup tutorial-highlight-setup tutorial-highlight-context">
        <div className="tutorial-setup-topline">
          <StatusPill><SlidersHorizontal size={10} strokeWidth={2.3} /> Quick setup</StatusPill>
          <small>Preview</small>
        </div>
        <strong>Review project plan</strong>
        <p>Reminder settings stay close to the item, so capture stays fast.</p>
        <div className="tutorial-setting-grid">
          <span><Clock3 size={11} strokeWidth={2.4} /> 9:15 today</span>
          <span><Flag size={11} strokeWidth={2.4} /> High</span>
          <span><Layers3 size={11} strokeWidth={2.4} /> Work</span>
          <span><Repeat2 size={11} strokeWidth={2.4} /> Once</span>
          <span><Bell size={11} strokeWidth={2.4} /> Alert</span>
          <span><Sparkles size={11} strokeWidth={2.4} /> Future context</span>
        </div>
      </article>
    </>
  );
}

function HabitsContent() {
  return (
    <>
      <section className="tutorial-habit-list tutorial-highlight-check tutorial-highlight-progress tutorial-highlight-clarity">
        <SectionTitle title="Current Habits" count="4" tone="green" />
        <HabitRow title="Drink water" meta="Goal: 4 · Done 3 times" icon="💧" progress={75} done />
        <HabitRow title="Read 20 minutes" meta="Goal: 1 · Done 0 times" icon="📖" progress={18} />
        <HabitRow title="Evening walk" meta="3 day streak" icon="🚶" progress={54} />
      </section>

      <StatsConcept compact />
    </>
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
    <section className="tutorial-event-list tutorial-highlight-time tutorial-highlight-calendar tutorial-highlight-rhythm">
      <SectionTitle title="Live & Upcoming" count="2" tone="green" />
      <EventCard live />
      <SectionTitle title="All Events" count="4" tone="purple" />
      <EventCard />
    </section>
  );
}

function StatsConcept({ compact = false }) {
  return (
    <article className={compact ? 'tutorial-stats-card is-compact' : 'tutorial-stats-card'}>
      <div className="tutorial-stats-heading">
        <StatusPill tone="green">
          <BarChart3 size={10} strokeWidth={2.3} />
          Stats concept
        </StatusPill>
        <small>calm progress</small>
      </div>
      <div className="tutorial-stats-body">
        <div className="tutorial-stats-ring" style={{ '--progress': '74%' }}>
          <span>74%</span>
        </div>
        <div className="tutorial-stats-copy">
          <strong>Weekly rhythm</strong>
          <p>Habits, reminders, and focus blocks become a quiet progress overview.</p>
          <div className="tutorial-stats-bars" aria-hidden="true">
            <i style={{ '--bar': '44%' }} />
            <i style={{ '--bar': '70%' }} />
            <i style={{ '--bar': '52%' }} />
            <i style={{ '--bar': '86%' }} />
            <i style={{ '--bar': '64%' }} />
          </div>
        </div>
      </div>
    </article>
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
                const isSelected = tab.label === selectedBottomTab(activeTab.id);
                return (
                  <span key={tab.label} className={isSelected ? 'is-selected' : ''}>
                    <Icon size={tab.label === 'Add' ? 19 : 17} strokeWidth={2.35} />
                    <small>{tab.label}</small>
                  </span>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="tutorial-nav-hints" aria-hidden="true">
        <span className={activeTab.id === 'events' ? 'is-visible' : ''}>
          <CalendarDays size={12} strokeWidth={2.3} />
          Calendar keeps scheduled items visible.
        </span>
        <span className={activeTab.id === 'habits' ? 'is-visible' : ''}>
          <BarChart3 size={12} strokeWidth={2.3} />
          Stats show progress without noise.
        </span>
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

function TutorialSectionIntro({ section }) {
  return (
    <div className="tutorial-deep-copy">
      <div className="section-kicker">{section.kicker}</div>
      <h2>{section.title}</h2>
      <p>{section.text}</p>
    </div>
  );
}

function DetailOption({ icon: Icon, label, value, tone = 'blue' }) {
  return (
    <span className={`tutorial-detail-option tone-${tone}`}>
      <Icon size={13} strokeWidth={2.35} />
      <small>{label}</small>
      <strong>{value}</strong>
    </span>
  );
}

function TutorialInsightCard({ icon: Icon, title, text }) {
  return (
    <article className="tutorial-insight-card">
      <Icon size={17} strokeWidth={2.3} />
      <strong>{title}</strong>
      <p>{text}</p>
    </article>
  );
}

function ReminderDetailSection({ className = '' }) {
  return (
    <section className={`tutorial-deep-section tutorial-detail-section ${className}`} aria-label="Reminder detail tutorial">
      <TutorialSectionIntro section={deepDiveSections[0]} />

      <div className="tutorial-deep-layout">
        <div className="tutorial-detail-visual">
          <div className="tutorial-sheet-card">
            <span className="tutorial-sheet-grabber" aria-hidden="true" />
            <header>
              <div>
                <p>Edit Reminder</p>
                <h3>Review project plan</h3>
              </div>
              <button type="button">Done</button>
            </header>

            <article className="tutorial-detail-preview">
              <span><Pencil size={18} strokeWidth={2.4} /></span>
              <div>
                <strong>Review project plan</strong>
                <p>Update title, details, and reminder settings.</p>
              </div>
            </article>

            <label className="tutorial-field-preview">
              <small>TITLE</small>
              <strong>Review project plan</strong>
            </label>

            <label className="tutorial-field-preview">
              <small>DETAILS</small>
              <span>Confirm the next steps before lunch.</span>
            </label>

            <div className="tutorial-detail-grid">
              <DetailOption icon={Clock3} label="Time" value="9:15" />
              <DetailOption icon={Flag} label="Priority" value="High" tone="red" />
              <DetailOption icon={Layers3} label="Category" value="Work" />
              <DetailOption icon={Repeat2} label="Repeat" value="Daily" tone="green" />
              <DetailOption icon={Bell} label="Alert" value="10 min" />
              <DetailOption icon={Sparkles} label="Style" value="Focused" tone="purple" />
            </div>
          </div>
        </div>

        <div className="tutorial-deep-insights">
          <TutorialInsightCard
            icon={Pencil}
            title="Open to refine"
            text="A row can open into a focused sheet for title, details, and status."
          />
          <TutorialInsightCard
            icon={SlidersHorizontal}
            title="Structure stays close"
            text="Category, priority, time, repeat rhythm, and alert style are near the item."
          />
          <TutorialInsightCard
            icon={CheckCircle2}
            title="Still fast to capture"
            text="The reminder can start simple, then gain detail only when it needs it."
          />
        </div>
      </div>
    </section>
  );
}

function SmartNotificationsSection({ className = '' }) {
  return (
    <section className={`tutorial-deep-section tutorial-notification-section ${className}`} aria-label="Smart notification tutorial">
      <TutorialSectionIntro section={deepDiveSections[1]} />

      <div className="tutorial-message-layout">
        <div className="tutorial-message-stack">
          <article className="tutorial-message-card is-primary">
            <span><Bell size={15} strokeWidth={2.4} /></span>
            <div>
              <strong>Review project plan</strong>
              <p>Work context · 9:15 today</p>
            </div>
            <small>Useful now</small>
          </article>

          <article className="tutorial-message-card is-muted">
            <span><ShieldCheck size={15} strokeWidth={2.4} /></span>
            <div>
              <strong>Personal task</strong>
              <p>Not useful during focus time</p>
            </div>
            <small>Later</small>
          </article>

          <article className="tutorial-message-card is-context">
            <span><MapPin size={15} strokeWidth={2.4} /></span>
            <div>
              <strong>Future context-aware categories</strong>
              <p>Designed to grow toward work, personal, and situation-aware timing.</p>
            </div>
          </article>
        </div>

        <div className="tutorial-deep-insights">
          <TutorialInsightCard
            icon={MessageCircle}
            title="Less notification noise"
            text="Remindly should help decide what matters now, not send everything at once."
          />
          <TutorialInsightCard
            icon={Layers3}
            title="Categories can become smarter"
            text="Future direction: categories can use context to make reminders more relevant."
          />
          <TutorialInsightCard
            icon={ShieldCheck}
            title="Careful by design"
            text="Context should make reminders feel helpful and privacy-conscious, not invasive."
          />
        </div>
      </div>
    </section>
  );
}

function CalendarDeepDiveSection({ className = '' }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <section className={`tutorial-deep-section tutorial-calendar-section ${className}`} aria-label="Calendar tutorial">
      <TutorialSectionIntro section={deepDiveSections[2]} />

      <div className="tutorial-calendar-layout">
        <div className="tutorial-calendar-card">
          <header>
            <div>
              <p>June</p>
              <h3>Today</h3>
            </div>
            <StatusPill><CalendarDays size={10} strokeWidth={2.3} /> Calendar</StatusPill>
          </header>

          <div className="tutorial-week-row">
            {days.map((day, index) => (
              <span key={`${day}-${index}`} className={index === 2 ? 'is-today' : ''}>
                <small>{day}</small>
                <strong>{17 + index}</strong>
              </span>
            ))}
          </div>

          <div className="tutorial-day-timeline">
            <article>
              <time>09:00</time>
              <div>
                <strong>Focus block</strong>
                <p>Scheduled event · active now</p>
              </div>
            </article>
            <article className="is-highlighted">
              <time>11:30</time>
              <div>
                <strong>Send weekly update</strong>
                <p>Reminder connected to the day</p>
              </div>
            </article>
            <article>
              <time>14:30</time>
              <div>
                <strong>Design review</strong>
                <p>Upcoming event</p>
              </div>
            </article>
          </div>
        </div>

        <div className="tutorial-deep-insights">
          <TutorialInsightCard
            icon={CalendarDays}
            title="Time-based overview"
            text="Events and scheduled reminders become easier to understand by day."
          />
          <TutorialInsightCard
            icon={Clock3}
            title="Daily structure"
            text="The timeline connects time with the rest of the daily workspace."
          />
          <TutorialInsightCard
            icon={Target}
            title="One place to return"
            text="Calendar supports the Home view instead of replacing it."
          />
        </div>
      </div>
    </section>
  );
}

function StatsDeepDiveSection({ className = '' }) {
  return (
    <section className={`tutorial-deep-section tutorial-stats-section ${className}`} aria-label="Stats tutorial">
      <TutorialSectionIntro section={deepDiveSections[3]} />

      <div className="tutorial-stats-layout">
        <div className="tutorial-analytics-card">
          <header>
            <div>
              <p>Calm progress</p>
              <h3>Weekly rhythm</h3>
            </div>
            <StatusPill tone="green"><TrendingUp size={10} strokeWidth={2.3} /> Concept</StatusPill>
          </header>

          <div className="tutorial-analytics-main">
            <div className="tutorial-analytics-ring" style={{ '--progress': '78%' }}>
              <span>78%</span>
              <small>Today</small>
            </div>
            <div className="tutorial-line-chart" aria-hidden="true">
              <svg viewBox="0 0 280 110" role="img">
                <path className="chart-grid" d="M8 86 H272 M8 56 H272 M8 26 H272" />
                <path className="chart-line" d="M10 80 C42 58 61 74 91 48 S145 24 172 42 S223 82 270 26" />
              </svg>
            </div>
          </div>

          <div className="tutorial-analytics-metrics">
            <span><strong>12</strong><small>Completed reminders</small></span>
            <span><strong>5 day</strong><small>Habit consistency</small></span>
            <span><strong>4</strong><small>Focus blocks</small></span>
          </div>
        </div>

        <div className="tutorial-deep-insights">
          <TutorialInsightCard
            icon={BarChart3}
            title="Completion without pressure"
            text="Stats should show momentum without making the product feel like a report."
          />
          <TutorialInsightCard
            icon={CheckCircle2}
            title="Habit consistency"
            text="Progress can show what is already done and what rhythm is forming."
          />
          <TutorialInsightCard
            icon={TrendingUp}
            title="Designed to grow"
            text="This is a website concept for where Remindly stats can become stronger."
          />
        </div>
      </div>
    </section>
  );
}

export default function TutorialView() {
  const pageRef = useRef(null);
  const [activeTabId, setActiveTabId] = useState('home');
  const activeSection = usePresentationSections(pageRef);
  const presentationClass = (index) => getPresentationClass(index, activeSection);
  const activeTab = useMemo(
    () => tutorialTabs.find((tab) => tab.id === activeTabId) ?? tutorialTabs[0],
    [activeTabId]
  );

  return (
    <div ref={pageRef} className="page-view tutorial-view presentation-page" aria-label="Remindly tutorial">
      <section className={`tutorial-primary-slide ${presentationClass(0)}`} aria-labelledby="tutorial-page-title">
        <section className="tutorial-hero page-hero page-hero-wide">
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
      </section>

      <div className="tutorial-deep-dive" aria-label="Detailed Remindly tutorial">
        <ReminderDetailSection className={presentationClass(1)} />
        <SmartNotificationsSection className={presentationClass(2)} />
        <CalendarDeepDiveSection className={presentationClass(3)} />
        <StatsDeepDiveSection className={presentationClass(4)} />
      </div>
    </div>
  );
}
