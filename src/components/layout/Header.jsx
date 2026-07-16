import { useState } from 'react'
import Icon from '../ui/Icon.jsx'
import useScrollHeader from '../../hooks/useScrollHeader.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import { navLinks, profile } from '../../data/profile.js'

const sectionIds = navLinks.map((link) => link.id)

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
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold font-space">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="gradient-text-animated flex items-center gap-2">
              <span className="logo-bracket">&lt;</span>
              {profile.name}
              <span className="logo-bracket">/&gt;</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`nav-link ${active === link.id ? 'active' : ''}`}
              >
                <Icon name={link.icon} size={18} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <span>Hire Me</span>
              <Icon name="arrow-right" size={16} />
            </a>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Icon name="menu" size={24} className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 ${menuOpen ? '' : 'hidden'}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
            className="block py-3 px-6 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
