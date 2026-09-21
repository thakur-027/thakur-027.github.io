import { profile } from '../../data/profile.js'

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full" id="contact">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-primary-container via-tertiary-container to-surface-container-low shadow-xl border border-primary/20">
        {/* Decorative Micro Background Elements */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              <span>Initiate Transmission</span>
            </div>
            <h2 className="font-display-lg text-3xl sm:text-5xl lg:text-[56px] font-serif text-on-surface tracking-tight leading-tight">
              Let&apos;s build something <span className="italic font-normal">exceptional.</span>
            </h2>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Have an open engineering role, an ambitious project, or a Full-stack / Android collaboration? Let&apos;s connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
            <a
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-inverse-surface text-inverse-on-surface hover:bg-surface-container-lowest hover:text-on-surface font-label-md text-xs sm:text-sm font-semibold shadow-lg transition-all duration-300"
              href={`mailto:${profile.email}`}
            >
              <span className="material-symbols-outlined text-base text-primary-container">mail</span>
              <span>{profile.email}</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                className="p-3.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors shadow-xs border border-surface-variant/40"
                href={profile.social.github}
                rel="noreferrer"
                target="_blank"
                title="GitHub: @thakur-027"
              >
                <span className="material-symbols-outlined text-base">terminal</span>
              </a>
              <a
                className="p-3.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors shadow-xs border border-surface-variant/40"
                href={profile.social.linkedin}
                rel="noreferrer"
                target="_blank"
                title="LinkedIn Profile"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </a>
              <a
                className="p-3.5 rounded-full bg-surface-container-lowest text-on-surface hover:bg-inverse-surface hover:text-inverse-on-surface transition-colors shadow-xs border border-surface-variant/40"
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                title="Phone / Direct Call"
              >
                <span className="material-symbols-outlined text-base">call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
