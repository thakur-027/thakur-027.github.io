import { useEffect, useState } from 'react'

// Mirrors the old highlightNavLink() logic from script.js
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    let ticking = false

    const highlight = () => {
      const scrollPosition = window.pageYOffset
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        const top = section.offsetTop - 150
        const height = section.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(id)
          break
        }
      }
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          highlight()
          ticking = false
        })
        ticking = true
      }
    }

    highlight()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return active
}
