import { profile } from '../../data/profile.js'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-2xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-2xl pb-space-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-space-xl border-b border-surface-container-high/60">
          <div className="space-y-4">
            <p className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant font-mono">
              Crafting resilient systems • Web to App
            </p>
            <h2 className="font-display-lg text-3xl sm:text-5xl lg:text-[56px] font-serif font-bold text-on-surface tracking-tight leading-none">
              {profile.name}.
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8 font-label-md text-xs sm:text-sm">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
              href={profile.social.github}
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base">terminal</span>
              <span>GitHub</span>
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
              href={profile.social.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base">share</span>
              <span>LinkedIn</span>
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1.5"
              href={`mailto:${profile.email}`}
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-[11px]">© {new Date().getFullYear()} {profile.name}</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-label-sm text-[11px]">
            <span className="text-on-surface-variant">Engineered with Modern Web Standards</span>
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="text-on-surface font-medium">{profile.location} / Remote</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
