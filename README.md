# Ayush Thakur — Portfolio

Personal portfolio site, rebuilt as a React + Vite app with a proper, modular
folder structure (previously everything lived flat at the repo root).

## Stack

- React 18 + Vite
- Tailwind CSS (for utility classes) + a small custom stylesheet (for the
  bespoke effects — animated blobs, gradient text, glow cards — ported
  1:1 from the original design)

## Project structure

```
portfolio/
├── public/
│   ├── favicon.jpg
│   └── resume/
│       └── AyushThakur_resume.pdf      # single canonical resume file
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg
│   ├── components/
│   │   ├── layout/                     # header, footer, background — shared shell
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/                   # one component per page section
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/                         # small reusable pieces
│   │       ├── Icon.jsx                # single icon component, name-driven
│   │       ├── ProjectCard.jsx
│   │       ├── SkillCard.jsx
│   │       └── CertCard.jsx
│   ├── data/                           # all content lives here, not in JSX
│   │   ├── profile.js                  # name, contact info, nav links
│   │   ├── education.js                # education, certifications, leadership
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── projects.js
│   ├── hooks/                          # behavior extracted from the old script.js
│   │   ├── useScrollHeader.js
│   │   ├── useActiveSection.js
│   │   ├── useTypingEffect.js
│   │   └── useRevealOnScroll.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                       # Tailwind directives + custom design system
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

**Why this shape:** content (`data/`) is separated from presentation
(`components/`), so updating a project, adding a certification, or fixing a
typo means editing one line in a data file — not hunting through 1,000+
lines of markup. Sections are one file each, cards are reusable, and the old
`script.js` behaviors (scroll header, active-nav highlighting, typing effect,
scroll-reveal on project cards) are now small, isolated hooks instead of one
365-line file wired to DOM queries.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages (thakur-027.github.io)

This repo is a **user/org page** (`thakur-027.github.io`), which GitHub Pages
serves straight from a branch — it does not build for you, so the built
`dist/` output needs to end up on the branch GitHub Pages serves.

Two ways to do it:

### Option A — GitHub Actions (recommended, fully automatic)

Add `.github/workflows/deploy.yml` (included in this project) and set your
repo's **Settings → Pages → Source** to "GitHub Actions". Every push to
`main` will build and deploy automatically.

### Option B — `gh-pages` package (manual trigger)

```bash
npm run deploy
```

This runs `vite build` then pushes `dist/` to the `gh-pages` branch using
the `gh-pages` npm package already listed in `devDependencies`. Point
**Settings → Pages → Source** at the `gh-pages` branch, `/ (root)`.

## Content changes cheat sheet

| Want to change...          | Edit this file                     |
|-----------------------------|-------------------------------------|
| Name, email, phone, socials | `src/data/profile.js`              |
| Education / certifications  | `src/data/education.js`            |
| Skills grid                 | `src/data/skills.js`               |
| Work experience             | `src/data/experience.js`           |
| Projects                    | `src/data/projects.js`             |
| Resume PDF                  | replace `public/resume/AyushThakur_resume.pdf` (keep the filename, or update `resumeUrl` in `profile.js`) |
| Profile photo               | replace `src/assets/images/profile.jpg` |

## Notes on cleanup from the old repo

- Removed two duplicate resume PDFs (`My_Resume.pdf`, `My_Resume_1.pdf`) —
  `AyushThakur_resume.pdf` is now the single source of truth.
- Removed two unused loose images (`1728903472565.jpeg`, `pfp1.jpg`) —
  only `profile.jpg` (formerly `profile_pic.jpg`) is actually referenced.
- Fixed a broken favicon link (`pfp.png` was referenced in the old
  `index.html` but never existed in the repo).
