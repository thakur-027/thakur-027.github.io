import { useState } from 'react'
import { navLinks, profile } from '../../data/profile.js'
import useScrollHeader from '../../hooks/useScrollHeader.js'
import useActiveSection from '../../hooks/useActiveSection.js'

const sectionIds = ['overview', 'philosophy', 'projects', 'stack', 'experience', 'contact']

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 80
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Header() {
  const scrolled = useScrollHeader()
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-surface-variant/50 py-3.5'
          : 'bg-surface/80 backdrop-blur-sm py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <a
            href="#overview"
            onClick={(e) => handleNavClick(e, 'overview')}
            className="group flex flex-col"
          >
            <span className="font-headline-md text-2xl lg:text-[28px] font-bold text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">
              {profile.name}
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant tracking-wider uppercase mt-1">
              {profile.titleSnippet}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-variant">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">Available for work</span>
          </div>
        </div>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-surface-container-high/60">
          {navLinks.map((link) => {
            const isActive = active === link.id || (link.id === 'overview' && (!active || active === 'home'))
            return (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3.5 py-1.5 transition-all text-xs font-medium rounded-full ${isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-surface-variant px-6 py-4 mt-2 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.id)}
              className="block py-2 px-4 rounded-xl text-sm font-medium text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-surface-variant flex flex-col gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-xs"
            >
              <span className="material-symbols-outlined text-sm">description</span>
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
