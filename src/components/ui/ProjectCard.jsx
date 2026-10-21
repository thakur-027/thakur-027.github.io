import { useState, useEffect, useCallback } from 'react'

export default function ProjectCard({ project }) {
  const slides = project.images && project.images.length > 0 ? project.images : [project.image]
  const hasMultiple = slides.length > 1

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (idx) => {
      setCurrent((idx + slides.length) % slides.length)
    },
    [slides.length]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (!hasMultiple || isPaused) return
    const timer = setInterval(next, 3800)
    return () => clearInterval(timer)
  }, [hasMultiple, isPaused, next])

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-surface-variant/40 transition-all duration-300">
      {/* Mockup Visual Frame / Slideshow */}
      <div
        className="relative aspect-[16/10] bg-surface-container overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {hasMultiple ? (
          <>
            {slides.map((src, i) => (
              <img
                key={i}
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-102"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'scale(1)' : 'scale(1.03)',
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
                src={src}
                alt={`${project.imageAlt || project.title} — screenshot ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}

            {/* Subtle Gradient Scrim for indicators */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-inverse-surface/60 to-transparent pointer-events-none z-[2]"></div>

            {/* Prev / Next Arrows on Hover */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous screenshot"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-inverse-surface/60 backdrop-blur-md text-inverse-on-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-inverse-surface/90 hover:scale-105 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                next()
              }}
              aria-label="Next screenshot"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-inverse-surface/60 backdrop-blur-md text-inverse-on-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-inverse-surface/90 hover:scale-105 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>

            {/* Dots navigation */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-inverse-surface/60 backdrop-blur-md">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goTo(idx)
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? 'w-5 h-1.5 bg-primary-container shadow-[0_0_6px_#ccff00]'
                      : 'w-1.5 h-1.5 bg-inverse-on-surface/50 hover:bg-inverse-on-surface/90'
                  }`}
                />
              ))}
            </div>

            {/* Slide Count Badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-inverse-surface/85 text-inverse-on-surface font-label-sm text-[11px] backdrop-blur-md font-mono tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-xs text-primary-container">photo_library</span>
              <span className="font-semibold">{current + 1}</span>
              <span className="opacity-50">/</span>
              <span>{slides.length}</span>
            </div>
          </>
        ) : (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
          />
        )}

        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="px-2.5 py-1 rounded-full bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-[11px] backdrop-blur-md font-mono">
            [ {project.num} ]
          </span>
          <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-fixed font-label-sm text-[11px] font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="space-y-3">
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-label-sm text-[11px] px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="font-headline-md text-2xl sm:text-[26px] font-serif font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {project.description}
          </p>

          {/* Key Features List */}
          {project.features && project.features.length > 0 && (
            <ul className="pt-2 grid sm:grid-cols-2 gap-2 text-xs text-on-surface-variant/90 border-t border-surface-container pt-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project Links & CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-surface-container/60">
          {project.demoUrl && (
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface hover:bg-primary hover:text-on-primary font-label-sm text-xs font-semibold transition-colors"
              href={project.demoUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span>{project.demoLabel || 'Live Preview'}</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          )}
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-sm text-xs font-semibold transition-colors"
            href={project.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  )
}
