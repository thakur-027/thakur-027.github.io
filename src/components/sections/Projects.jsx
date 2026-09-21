import { projects } from '../../data/projects.js'
import ProjectCard from '../ui/ProjectCard.jsx'

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl w-full" id="projects">
      {/* Header with Diagnostic Alignment */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12">
        <div className="space-y-2">
          <span className="font-label-sm text-label-sm text-primary font-semibold">
            /* Selected Projects */
          </span>
          <h2 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] font-serif text-on-surface tracking-tight leading-none">
            Engineered with purpose.
          </h2>
        </div>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-sm leading-relaxed">
          Production full-stack applications, Android platforms, and systems software built from first principles.
        </p>
      </div>

      {/* 2x2 Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  )
}
