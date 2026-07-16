import { useEffect, useState } from 'react'

// Mirrors the old typing animation from script.js
export default function useTypingEffect(text, { delay = 500, speed = 100 } = {}) {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTyped(text)
      setDone(true)
      return
    }

    let charIndex = 0
    let intervalId
    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex++
        setTyped(text.slice(0, charIndex))
        if (charIndex >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(intervalId)
    }
  }, [text, delay, speed])

  return { typed, done }
}
