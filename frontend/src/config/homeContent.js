export const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Flow', href: '#flow' },
  { label: 'Interface', href: '#themes' },
  { label: 'Thinking', href: '#journal' },
];

export const heroCopy = {
  eyebrow: 'Remindly for iOS',
  title: 'A calmer way to keep your day in motion.',
  body: 'Reminders, tasks, habits, plans, and scheduled events share one quiet home, so your next decision is visible without making the day feel heavier.',
};

export const themeOptions = [
  {
    id: 'dark',
    label: 'Dark',
    description: 'A composed focus surface for evenings, travel, and low-light planning.',
  },
  {
    id: 'light',
    label: 'Light',
    description: 'Soft iOS surfaces for everyday planning, quick review, and calm task entry.',
  },
  {
    id: 'white',
    label: 'White',
    description: 'A crisp neutral mode for screenshots, sharing, and clear daily review.',
  },
];

export const categories = [
  { name: 'Tasks', count: 5, color: '#3075e0' },
  { name: 'Habits', count: 3, color: '#45ba87' },
  { name: 'Plans', count: 2, color: '#8559d6' },
  { name: 'Events', count: 1, color: '#e36b1f' },
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
    body: 'Reminders, habits, plans, and timed events sit together so the day can be understood at a glance.',
    stat: '1',
    statLabel: 'daily home',
    tone: 'blue',
  },
  {
    title: 'Structure without friction',
    body: 'Tasks can carry category, priority, repeat rhythm, and time while the interface still feels light enough for quick capture.',
    stat: '4',
    statLabel: 'core item types',
    tone: 'green',
  },
  {
    title: 'Notifications stay intentional',
    body: 'Pinned reminders, recurring habits, and scheduled events are visible in context instead of becoming a noisy stream.',
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

export const articles = [
  {
    tag: 'Product thinking',
    title: 'Why Remindly keeps the first screen calm',
    body: 'A reminder app should lower cognitive load before it asks for action. The home screen shows the next useful layer, not every possible control.',
    readTime: '3 min',
  },
  {
    tag: 'Design notes',
    title: 'Light and dark without changing the product',
    body: 'The app can shift from bright planning to quiet evening review while preserving the same hierarchy, controls, and sense of place.',
    readTime: '4 min',
  },
  {
    tag: 'Workflow',
    title: 'From notification to completion',
    body: 'Pinned reminders and recent notifications create a short loop: notice, decide, act, and return to the day without getting stuck inside the app.',
    readTime: '5 min',
  },
];
