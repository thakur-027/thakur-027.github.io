import { technicalMatrix } from '../../data/skills.js'

export default function Skills() {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl border-y border-surface-container-high/60" id="stack">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12">
          <div className="space-y-2">
            <span className="font-label-sm text-label-sm text-primary font-semibold">
              /* Core Competencies */
            </span>
            <h2 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] font-serif text-on-surface tracking-tight leading-none">
              Technical Matrix
            </h2>
          </div>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-sm leading-relaxed">
            A balanced synthesis of system-level hardware foundations and modern reactive full-stack runtimes.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalMatrix.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-variant/40 flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div
                  className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shadow-xs`}
                >
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider font-mono">
                    {item.tier}
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-surface-container/60 space-y-2">
                {item.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between text-on-surface font-label-sm text-xs py-0.5"
                  >
                    <span className="text-on-surface/90 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span
                        className={`font-semibold text-[11px] ${
                          skill.level === 'Advanced' || skill.level === 'Daily Driver'
                            ? 'text-primary'
                            : 'text-on-surface-variant'
                        }`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
