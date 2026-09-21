import { profile, coreTechnologies } from '../../data/profile.js'
import profileImg from '../../assets/images/profile.jpg'

export default function Hero() {
  return (
    <section id="overview" className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-space-2xl w-full">
      {/* Top Micro Tag */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface">
          <span className="font-label-sm text-label-sm text-primary">/* 01 • Portico */</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            {profile.titleSnippet}
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-xs border border-surface-variant/40">
          <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#ccff00]"></span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {profile.status}
          </span>
        </div>
      </div>

      {/* Editorial Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] text-on-surface tracking-tight leading-[1.08] font-serif">
            Crafting{' '}
            <span className="italic font-normal text-primary">purpose-built</span>{' '}
            android &amp; and full-stack web apps.
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-inverse-surface text-inverse-on-surface hover:bg-primary-container hover:text-on-primary-fixed transition-all duration-300 shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container group-hover:bg-inverse-surface transition-colors"></span>
              <span className="font-label-md text-label-md tracking-wider font-semibold">
                Explore Featured Work
              </span>
              <span className="material-symbols-outlined text-base group-hover:translate-y-0.5 transition-transform">
                arrow_downward
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all duration-200"
            >
              <span className="material-symbols-outlined text-base text-primary">description</span>
              <span className="font-label-md text-label-md font-medium">Download Resume (PDF)</span>
            </a>
          </div>

          {/* Metric Stat Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-variant/30"
              >
                <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface mt-1">
                  {stat.value}
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Editorial Portrait Centerpiece */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          {/* Radial Glow Aura Background */}
          <div className="absolute -inset-4 bg-primary-container/30 rounded-3xl blur-2xl -z-10"></div>
          <div className="w-full max-w-md bg-surface-container-lowest p-4 rounded-2xl shadow-xl border border-surface-variant/40 flex flex-col gap-3 relative">
            {/* Card Diagnostics Bar */}
            <div className="flex items-center justify-between px-2 py-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Fig. 01 • Portrait Artifact
              </span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                LIVE // DEV_READY
              </span>
            </div>

            {/* Profile Photo Frame */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container flex flex-col justify-end group">
              <img
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={profileImg}
                alt={profile.name}
                onError={(e) => {
                  // Fallback if local image needs default styling
                  e.currentTarget.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjz_ApEsSfswbRdA0bTfPp8YEAkmEh5cuZ97vpm9Q03kkr6NuHuiXV8n3t_zpAQhDvt7eAn4hDwx4G3BAbuxhv56D5nEYExmuGd_R4VNfAYO2HATpSmLRmfwEh_o6WOOtO7XSrIj-q4mJ0wjNAwB3AsNM1JxHRfNS42CgAKqQB7DQDdf1wYMY81-olZX7MqMQ1wsevxYQv9LtFpcRI9WHOrWGvrU7D6GyCIKIugR5Z0grhVhLr2sRHag'
                }}
              />
              {/* Atmospheric Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/20 to-transparent pointer-events-none"></div>
              {/* Inset Badge on Image */}
              <div className="relative z-10 p-5 flex flex-col text-inverse-on-surface">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#ccff00]"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold">
                    {profile.name}
                  </span>
                </div>
                <p className="font-headline-sm text-lg sm:text-xl font-semibold text-inverse-on-surface">
                  ECE Undergrad &amp; Full Stack Developer
                </p>
                <p className="font-body-sm text-xs sm:text-sm text-inverse-on-surface/80 mt-1">
                  {profile.location} • Remote
                </p>
              </div>
            </div>

            {/* Bottom Meta Strip */}
            <div className="flex items-center justify-between px-2 pt-1 font-label-sm text-[11px] text-on-surface-variant">
              <span>Terminal: zsh / bash</span>
              <span className="text-on-surface font-medium">Stack: Kotlin • MERN • C++</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ticker Strip */}
      <div className="mt-space-xl pt-8 pb-2">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
            /* Core Technologies */
          </span>
          <div className="h-px flex-1 bg-surface-container-high"></div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {coreTechnologies.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest font-label-md text-xs text-on-surface shadow-xs border border-surface-variant/40 hover:bg-primary-container hover:text-on-primary-fixed transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
