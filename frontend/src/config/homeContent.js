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
    extra: 'The first screen is designed for a quick daily review: what is active now, what is next, and what should stay visible.',
    stat: '1',
    statLabel: 'daily home',
    tone: 'blue',
  },
  {
    title: 'Structure without friction',
    body: 'Category, priority, repeat rhythm, and time stay close to the task without turning capture into administration.',
    extra: 'Reminders, habits, plans, and events each have a different purpose, but they belong in one calm system.',
    stat: '4',
    statLabel: 'core item types',
    tone: 'green',
  },
  {
    title: 'Notifications stay intentional',
    body: 'Pinned reminders, recurring habits, and scheduled events stay visible in context instead of becoming a noisy stream.',
    extra: 'Notifications should be intentional. The app should help the user return to the day, not pull them deeper into the app.',
    stat: '0',
    statLabel: 'extra noise',
    tone: 'purple',
  },
];

export const flowSteps = [
  {
    title: 'Capture',
    body: 'Add a reminder, task, habit, plan, or event as soon as it appears.',
    extra: 'Capture should be fast enough to use before the thought disappears. Remindly keeps entry simple so the system starts with less friction.',
    meta: 'Quick entry',
  },
  {
    title: 'Shape',
    body: 'Assign category, priority, repeat rules, and reminder style.',
    extra: 'Categories, priority, repeat rhythm, and reminder style stay close to the item, but they should not slow down the moment of capture.',
    meta: 'Smart structure',
  },
  {
    title: 'Surface',
    body: "Today's overview brings the next relevant item into view.",
    extra: 'The home view surfaces what matters next instead of forcing the user to search through every item manually.',
    meta: 'Home timeline',
  },
  {
    title: 'Finish',
    body: 'Complete, pin, archive, or revisit with a lightweight action menu.',
    extra: 'Finishing an item should feel lightweight: complete it, pin it, archive it, or return to it later without breaking focus.',
    meta: 'Calm closure',
  },
];

export const roadmapItems = [
  {
    phase: '01',
    title: 'Service integrations',
    body: 'Bring calendar events, external reminders, and productivity APIs into one focused daily view.',
    meta: 'Connected calendar',
  },
  {
    phase: '02',
    title: 'AI productivity layer',
    body: 'Turn voice notes, rough thoughts, and quick ideas into structured reminders, tasks, plans, and notes.',
    meta: 'Assisted capture',
  },
  {
    phase: '03',
    title: 'Personalized habits',
    body: 'Let routines adjust over time, so habits stay realistic instead of becoming another system to manage.',
    meta: 'Adaptive routines',
  },
  {
    phase: '04',
    title: 'Smarter daily direction',
    body: 'Surface priorities, daily structure, and next steps without adding another layer of noise.',
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
    extra: 'Remindly keeps the first screen focused on what helps immediately. Instead of showing every possible action, it reveals the next useful layer: what is active now, what needs attention, and what can wait.',
    readTime: '3 min',
  },
  {
    tag: 'Design notes',
    title: 'Designed around the first useful glance',
    body: 'The interface gives priority to what helps the next decision: the active moment, the top priority, and the few reminders worth seeing now.',
    extra: 'The interface is built around the first useful glance. The goal is not to show more controls, but to make the next decision easier without forcing the user to search through the app.',
    readTime: '4 min',
  },
  {
    tag: 'Workflow',
    title: 'From notification to completion',
    body: 'Pinned reminders and recent notifications create a short loop: notice, decide, act, and return to the day without getting stuck inside the app.',
    extra: 'Reminders, pinned items, and recent notifications create a short loop: notice, decide, complete, and return to the day. The app should help without becoming the task itself.',
    readTime: '5 min',
  },
];
