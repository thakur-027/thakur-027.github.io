import interviewgenImg from '../assets/images/projects/interviewgen.png'
import bankLedgerImg from '../assets/images/projects/bank-ledger.png'
import blogAppImg from '../assets/images/projects/blog-app.png'
import secureAuthImg from '../assets/images/projects/secure-auth.png'

export const projects = [
  {
    num: '01',
    key: 'interviewgen',
    title: 'InterviewGen — AI Report Generator',
    category: 'Full Stack • AI',
    year: '2026',
    image: interviewgenImg,
    imageAlt: 'InterviewGen AI Evaluation Dashboard and live interface on Vercel',
    description:
      'An AI-powered interview assessment system that converts candidate responses into structured, actionable feedback reports using Gemini AI with PDF export and split cloud deployment.',
    features: [
      'Gemini-powered structured feedback engine',
      'JWT authentication & session security',
      'Automated PDF report export with Puppeteer',
      'Modular client architecture deployed on Vercel + Render',
    ],
    stack: ['React 19', 'Express 5', 'MongoDB', 'Gemini API', 'Puppeteer', 'JWT'],
    githubUrl: 'https://github.com/thakur-027/interview-ai',
    demoUrl: 'https://interview-ai-zeta-eight.vercel.app',
    demoLabel: 'Live Platform',
    icon: 'smart_toy',
  },
  {
    num: '02',
    key: 'bank-ledger',
    title: 'Bank Transaction & Ledger System',
    category: 'Backend Architecture',
    year: '2026',
    image: bankLedgerImg,
    imageAlt: 'Banking transaction ledger service dashboard and API interface',
    description:
      'A high-reliability RESTful backend service for financial transaction processing and ledger tracking, engineered with robust concurrency handling, accounts management, and bcrypt security.',
    features: [
      'JWT authentication & cookie-based authorization',
      'Double-entry transaction and ledger data modeling',
      'Automated transaction receipt dispatch via Nodemailer',
      'Structured error hierarchies & validation layers',
    ],
    stack: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'JWT', 'Nodemailer'],
    githubUrl: 'https://github.com/thakur-027/bank-transaction-system-backend',
    demoUrl: 'https://github.com/thakur-027/bank-transaction-system-backend',
    demoLabel: 'API Docs & Code',
    icon: 'account_balance',
  },
  {
    num: '03',
    key: 'blog-app',
    title: 'The Blog App & Realtime Room',
    category: 'Android Native • Firebase',
    year: '2026',
    image: blogAppImg,
    imageAlt: 'Android application interface with Jetpack Compose mobile design and user feeds',
    description:
      'Modern native Android platform built with Kotlin and Jetpack Compose, featuring MVVM architecture, Firebase Cloud Firestore real-time sync, and rich social interactions.',
    features: [
      'Declarative UI built with Jetpack Compose',
      'Real-time document synchronization with Cloud Firestore',
      'MVVM pattern with StateFlow and Coroutines',
      'Instant group communication & dynamic chat channels',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'MVVM', 'Coroutines'],
    githubUrl: 'https://github.com/thakur-027/The-Blog-App',
    demoUrl: 'https://github.com/thakur-027/Chat-Room-App',
    demoLabel: 'Explore Android Repos',
    icon: 'smartphone',
  },
  {
    num: '04',
    key: 'secure-auth',
    title: 'C++ Secure Auth & Crypto Hashing',
    category: 'Systems • Security',
    year: '2025',
    image: secureAuthImg,
    imageAlt: 'Secure C++ Authentication System GitHub README, badges, and features table',
    description:
      'High-performance terminal authentication system built from first principles in C++, featuring custom SHA-256 cryptographic hashing, CSV persistence, and zero external dependencies.',
    features: [
      'Custom SHA-256 cryptographic bit manipulation',
      'Zero-leak memory allocation and file handling',
      'Multi-user credentials storage & verification',
      'Modular object-oriented architecture in modern C++',
    ],
    stack: ['C++', 'SHA-256', 'Crypto Hashing', 'File Systems', 'Memory Management'],
    githubUrl: 'https://github.com/thakur-027/cpp-auth-system',
    demoUrl: 'https://github.com/thakur-027/cpp-auth-system',
    demoLabel: 'Source Code',
    icon: 'security',
  },
]
