export const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Flow', href: '#flow' },
  { label: 'Themes', href: '#themes' },
  { label: 'Journal', href: '#journal' },
];

export const heroCopy = {
  eyebrow: 'Remindly for iOS',
  title: 'A calmer way to keep your day in motion.',
  body: 'Tasks, habits, events, and plans live together in one soft timeline, so every reminder feels easy to catch before it slips away.',
};

export const themeOptions = [
  {
    id: 'dark',
    label: 'Dark',
    description: 'A deep focus mode built around the Remindly blue glow.',
  },
  {
    id: 'light',
    label: 'Light',
    description: 'Soft iOS surfaces for an everyday planning dashboard.',
  },
  {
    id: 'white',
    label: 'White',
    description: 'A crisp editorial mode for app-store pages and press.',
  },
];

export const categories = [
  { name: 'All', count: 14, icon: '▦', color: '#3075e0' },
  { name: 'Work', count: 6, icon: '▣', color: '#3075e0' },
  { name: 'Life', count: 4, icon: '♥', color: '#45ba87' },
  { name: 'Sport', count: 2, icon: '↗', color: '#e36b1f' },
  { name: 'Plans', count: 3, icon: '◷', color: '#8559d6' },
];

export const reminders = [
  {
    title: 'Sprint security',
    description: 'Review open vulnerabilities via snyk',
    time: '9:15',
    repeat: 'once',
    category: 'Work',
    priority: 'High',
    pinned: true,
    color: '#3075e0',
    icon: '▣',
  },
  {
    title: 'Team standup meeting',
    description: 'Daily sync with the dev team',
    time: '9:00',
    repeat: 'daily',
    category: 'Work',
    priority: 'High',
    color: '#3075e0',
    icon: '▣',
  },
  {
    title: 'Evening run',
    description: '5km in the park',
    time: '18:30',
    repeat: 'daily',
    category: 'Sport',
    priority: 'Medium',
    color: '#e36b1f',
    icon: '↗',
  },
  {
    title: 'Call mom',
    description: 'Weekly check-in',
    time: '19:00',
    repeat: 'weekly',
    category: 'Life',
    priority: 'Low',
    color: '#45ba87',
    icon: '♥',
  },
];

export const tabItems = ['home', 'calendar', 'add', 'stats', 'settings'];

export const featureCards = [
  {
    title: 'Everything starts in one timeline',
    body: 'Reminders, habits, plans, and timed events sit together so you can scan the day instead of opening four places.',
    stat: '5',
    statLabel: 'views in one rhythm',
    tone: 'blue',
  },
  {
    title: 'Categories stay visual',
    body: 'Work, Life, Sport, Health, and Plans keep their own colors, counts, and quick filters from the iOS app.',
    stat: '7',
    statLabel: 'built-in categories',
    tone: 'green',
  },
  {
    title: 'Notifications feel controlled',
    body: 'Pinned reminders, repeat routines, and recent notifications are available without making the interface loud.',
    stat: '12',
    statLabel: 'recent alerts',
    tone: 'purple',
  },
];

export const flowSteps = [
  {
    title: 'Capture',
    body: 'Add a task, habit, plan, or event as soon as it appears.',
    meta: 'Quick entry',
  },
  {
    title: 'Shape',
    body: 'Assign category, priority, repeat rules, and reminder style.',
    meta: 'Smart structure',
  },
  {
    title: 'Surface',
    body: 'Today’s Overview brings the next relevant item into view.',
    meta: 'Home timeline',
  },
  {
    title: 'Finish',
    body: 'Complete, pin, archive, or revisit with a lightweight action menu.',
    meta: 'Calm closure',
  },
];

export const palette = [
  { name: 'Accent Blue', value: '#3075e0', usage: 'Primary actions and notification bell' },
  { name: 'Life Green', value: '#45ba87', usage: 'Personal and recurring life reminders' },
  { name: 'Sport Orange', value: '#e36b1f', usage: 'Movement, urgency, and warm highlights' },
  { name: 'Plans Violet', value: '#8559d6', usage: 'Goals, roadmaps, and long-term plans' },
  { name: 'Soft Surface', value: '#f7faff', usage: 'Cards, app screens, and quiet panels' },
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
    title: 'Color as a memory system',
    body: 'The category colors are not decoration. They let Work, Life, Sport, Health, and Plans become recognizable before the user reads a word.',
    readTime: '4 min',
  },
  {
    tag: 'Workflow',
    title: 'From notification to completion',
    body: 'Pinned reminders and recent notifications create a short loop: notice, decide, act, and return to the day without getting stuck inside the app.',
    readTime: '5 min',
  },
];
