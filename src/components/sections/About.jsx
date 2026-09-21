import { profile } from '../../data/profile.js'

export default function About() {
  return (
    <section id="philosophy" className="w-full bg-surface-container-low py-space-2xl border-y border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-label-sm text-label-sm text-primary font-semibold">
            /* Engineering Philosophy */
          </span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Architecture Manifesto
          </span>
        </div>

        <div className="max-w-5xl">
          <p className="font-display-lg text-2xl sm:text-4xl lg:text-[48px] text-on-surface leading-tight tracking-tight font-serif">
            My approach combines{' '}
            <span className="inline-flex items-center px-3.5 py-0.5 rounded-full bg-primary-container text-on-primary-fixed font-label-md text-xs sm:text-sm align-middle mx-1 shadow-xs">
              Hardware Empathy
            </span>
            ,{' '}
            <span className="inline-flex items-center px-3.5 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-xs sm:text-sm align-middle mx-1 shadow-xs border border-surface-variant/40">
              Clean Architecture
            </span>
            , and{' '}
            <span className="inline-flex items-center px-3.5 py-0.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-xs sm:text-sm align-middle mx-1 shadow-xs">
              Modern Web &amp; Mobile
            </span>{' '}
            to build software that is fast, resilient, and human-centric.
          </p>

          <p className="mt-6 text-on-surface-variant text-base sm:text-lg max-w-3xl leading-relaxed">
            {profile.editorialBio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-surface-container-high/60">
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                01 • Hardware First
              </span>
              <h4 className="font-headline-sm text-xl font-bold text-on-surface">
                Physical Rigor
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Understanding memory limits, register-level communication, and real-time clock cycles creates leaner, zero-waste applications.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                02 • Deterministic Scale
              </span>
              <h4 className="font-headline-sm text-xl font-bold text-on-surface">
                Systems Resiliency
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Designing backend APIs and native clients with idempotent routines, structured error hierarchies, and persistent state management.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-primary uppercase font-semibold">
                03 • Expressive UX
              </span>
              <h4 className="font-headline-sm text-xl font-bold text-on-surface">
                Tactile Simplicity
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Translating complex data models and real-time signals into immediate, accessible visual feedback that users act on instinctively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
