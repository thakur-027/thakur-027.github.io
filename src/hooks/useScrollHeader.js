import { useEffect, useState } from 'react'

// Mirrors the old "#header.scrolled" class toggle from script.js
export default function useScrollHeader(threshold = 100) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > threshold)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
