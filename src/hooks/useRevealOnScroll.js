import { useEffect, useRef, useState } from 'react'

// Mirrors the old projectObserver in script.js: element starts hidden,
// fades/slides in once it scrolls into view, then stops observing.
export default function useRevealOnScroll(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
