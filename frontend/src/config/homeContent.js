export const productNavItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Flow', href: '#flow' },
  { label: 'Philosophy', href: '#journal' },
  { label: 'Final CTA / Start', href: '#cta' },
];

export const navItems = [
  { label: 'Roadmap', href: '/roadmap', route: 'roadmap' },
  { label: 'Pricing', href: '/pricing', route: 'pricing' },
  { label: 'Tutorial', href: '/tutorial', route: 'tutorial' },
];

export const heroCopy = {
  eyebrow: 'Remindly for iPhone',
  title: 'Less Noise.\nMore Direction.\nEvery Day.',
  body: 'A focused home for reminders, habits, plans, and events — designed to help your day feel clear before it begins.',
};

export const categories = [
  { name: 'All', count: 14, color: '#3075e0', icon: 'layers' },
  { name: 'Work', count: 6, color: '#3075e0', icon: 'briefcase' },
  { name: 'Life', count: 4, color: '#45ba87', icon: 'heart' },
  { name: 'Plans', count: 3, color: '#8559d6', icon: 'flag' },
];

export const reminders = [
  {
    title: 'Review project plan',
    description: 'Confirm next steps before lunch',
    time: '9:15',
    repeat: 'once',
    category: 'Plan',
    priority: 'High',
    pinned: true,
    color: '#3075e0',
    type: 'Task',
  },
  {
    title: 'Morning habit',
    description: 'Water, stretch, review priorities',
    time: '10:00',
    repeat: 'daily',
    category: 'Habits',
    priority: 'Medium',
    color: '#45ba87',
    type: 'Habit',
  },
  {
    title: 'Design review',
    description: 'Prepare notes and questions',
    time: '14:30',
    repeat: 'once',
    category: 'Events',
    priority: 'Medium',
    color: '#e36b1f',
    type: 'Event',
  },
  {
    title: 'Weekly reset',
    description: 'Clear inbox and schedule plans',
    time: '18:00',
    repeat: 'weekly',
    category: 'Plans',
    priority: 'Low',
    color: '#8559d6',
    type: 'Plan',
  },
];

export const tabItems = ['home', 'calendar', 'add', 'stats', 'settings'];

export const featureCards = [
  {
    title: 'One calm overview',
    body: 'Reminders, habits, plans, and timed events sit together in a single home view built for fast daily review.',
    stat: '1',
    statLabel: 'daily home',
    tone: 'blue',
  },
  {
    title: 'Structure without friction',
    body: 'Category, priority, repeat rhythm, and time stay close to the task without turning capture into administration.',
    stat: '4',
    statLabel: 'core item types',
    tone: 'green',
  },
  {
    title: 'Notifications stay intentional',
    body: 'Pinned reminders, recurring habits, and scheduled events stay visible in context instead of becoming a noisy stream.',
    stat: '0',
    statLabel: 'extra noise',
    tone: 'purple',
  },
];

export const flowSteps = [
  {
    title: 'Capture',
    body: 'Add a reminder, task, habit, plan, or event as soon as it appears.',
    meta: 'Quick entry',
  },
  {
    title: 'Shape',
    body: 'Assign category, priority, repeat rules, and reminder style.',
    meta: 'Smart structure',
  },
  {
    title: 'Surface',
    body: "Today's overview brings the next relevant item into view.",
    meta: 'Home timeline',
  },
  {
    title: 'Finish',
    body: 'Complete, pin, archive, or revisit with a lightweight action menu.',
    meta: 'Calm closure',
  },
];

export const roadmapItems = [
  {
    phase: '01',
    title: 'Service integrations',
    body: 'Calendar and productivity integrations will bring external reminders, events, and service APIs into the same calm daily view.',
    meta: 'Calendar sync',
  },
  {
    phase: '02',
    title: 'AI productivity features',
    body: 'Voice notes, rough text, and quick ideas can become structured reminders, tasks, plans, and notes with less manual setup.',
    meta: 'Assisted capture',
  },
  {
    phase: '03',
    title: 'Personalized habits',
    body: 'Habit suggestions and routines will adapt over time, using behavior to reduce configuration and keep routines realistic.',
    meta: 'Adaptive routines',
  },
  {
    phase: '04',
    title: 'Smarter daily planning',
    body: 'Priority suggestions and day-structure recommendations will help surface what matters next without adding noise.',
    meta: 'Calm planning',
  },
];

export const tutorialSteps = [
  {
    title: 'Capture an idea',
    body: 'Start with a quick thought, task, habit, plan, or scheduled event the moment it appears.',
  },
  {
    title: 'Shape it clearly',
    body: 'Add time, repeat rhythm, category, priority, or context so Remindly knows where it belongs.',
  },
  {
    title: 'Follow the day',
    body: 'Use the Home overview to see the active moment, top priority, and the next few items without noise.',
  },
];

export const pricingCopy = {
  plan: 'Free',
  price: '$0/month',
  body: 'Remindly is currently free while the product is being shaped into a calm, reliable iPhone productivity system.',
  bullets: [
    'Reminders, tasks, habits, plans, and events',
    'Calm daily overview',
    'Manual organization',
    'Local-first product experience',
    'Regular product updates',
    'Early access to new features',
  ],
};

export const articles = [
  {
    tag: 'Product thinking',
    title: 'Why Remindly keeps the first screen calm',
    body: 'A reminder app should lower cognitive load before it asks for action. The home screen shows the next useful layer, not every possible control.',
    readTime: '3 min',
  },
  {
    tag: 'Design notes',
    title: 'Designed around the first useful glance',
    body: 'The interface gives priority to what helps the next decision: the active moment, the top priority, and the few reminders worth seeing now.',
    readTime: '4 min',
  },
  {
    tag: 'Workflow',
    title: 'From notification to completion',
    body: 'Pinned reminders and recent notifications create a short loop: notice, decide, act, and return to the day without getting stuck inside the app.',
    readTime: '5 min',
  },
];
