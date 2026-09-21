export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-surface-variant/40 transition-all duration-300">
      {/* Mockup Visual Frame */}
      <div className="relative aspect-[16/10] bg-surface-container overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.image}
          alt={project.imageAlt || project.title}
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex gap-2">
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
