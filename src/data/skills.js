export const technicalMatrix = [
  {
    id: 'frontend',
    tier: 'Client Layer',
    title: 'Frontend & Mobile',
    icon: 'web',
    iconBg: 'bg-primary-container text-on-primary-fixed',
    description:
      'Creating fluid, responsive, state-driven interfaces and Android native apps with pixel precision and clean architecture.',
    skills: [
      { name: 'React 19 / Modern Web' },
      { name: 'Kotlin / Jetpack Compose' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS & Styling' },
    ],
  },
  {
    id: 'backend',
    tier: 'Service Tier',
    title: 'Backend & APIs',
    icon: 'database',
    iconBg: 'bg-inverse-surface text-inverse-on-surface',
    description:
      'Designing scalable RESTful endpoints, event-driven sockets, JWT authentication, and robust data persistence layers.',
    skills: [
      { name: 'Node.js / Express 5' },
      { name: 'MongoDB / Mongoose' },
      { name: 'REST APIs' },
      { name: 'Firebase & Cloud Firestore' },
    ],
  },
  {
    id: 'core',
    tier: 'Hardware & Algo',
    title: 'Core & ECE',
    icon: 'memory',
    iconBg: 'bg-primary-container text-on-primary-fixed',
    description:
      'Low-level memory management, data structures & algorithms, digital logic, and microcontroller interfacing.',
    skills: [
      { name: 'C / C++ Programming' },
      { name: 'Data Structures & Algos' },
      { name: 'Digital Logic & Verilog' },
      { name: 'Microcontrollers & Sensors' },
    ],
  },
  {
    id: 'tools',
    tier: 'Ecosystem',
    title: 'Tools',
    icon: 'deployed_code',
    iconBg: 'bg-surface-container-high text-on-surface',
    description:
      'Workflow automation, version control mastery, UI prototyping, and circuit simulation tooling.',
    skills: [
      { name: 'Git & GitHub Workflows' },
      { name: 'Android Studio / VS Code' },
      { name: 'Figma' },
      { name: 'NI Multisim & LabVIEW' },
    ],
  },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: ['C++', 'C', 'SQL', 'Kotlin', 'JavaScript', 'Python', 'MATLAB'],
  },
  {
    title: 'Mobile Development',
    icon: 'smartphone',
    items: ['Android Development', 'Jetpack Compose', 'Firebase', 'Realtime Database', 'MVVM'],
  },
  {
    title: 'Web Technologies',
    icon: 'globe',
    items: ['React', 'HTML5', 'CSS3 / Tailwind', 'Node.js', 'Express', 'Responsive Design'],
  },
  {
    title: 'Database & Backend',
    icon: 'database',
    items: ['MongoDB', 'Mongoose', 'JWT Authentication', 'REST APIs', 'Cloud Firestore'],
  },
  {
    title: 'Hardware & Tools',
    icon: 'memory',
    items: ['NI Multisim', 'Verilog', 'Keil Microvision', 'Git / GitHub', 'Figma', 'VS Code'],
  },
]
