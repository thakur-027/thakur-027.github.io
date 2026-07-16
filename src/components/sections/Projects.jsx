import ProjectCard from '../ui/ProjectCard.jsx'
import { projects } from '../../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title font-space">
            Featured <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating programming skills, problem-solving abilities, and
            innovative thinking.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.key} project={project} imageOnRight={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
