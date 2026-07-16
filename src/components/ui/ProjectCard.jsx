import Icon from './Icon.jsx'
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js'

export default function ProjectCard({ project, imageOnRight = true }) {
  const { ref, visible } = useRevealOnScroll()

  return (
    <div
      ref={ref}
      className="project-card fade-in-up"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease',
      }}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className={imageOnRight ? 'order-2 lg:order-1' : 'order-2'}>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-year">{project.year}</span>
            <span className="badge-category">{project.category}</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-space">{project.title}</h3>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">{project.description}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Key Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-400">
                  <Icon name="check" size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-sm text-gray-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary group inline-flex"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Icon name="github" size={18} />
            <span>View Code</span>
            <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className={imageOnRight ? 'order-1 lg:order-2' : 'order-1'}>
          <div className="project-image-wrapper">
            <div className="project-image-glow" />
            <div className="project-image">
              <Icon name={project.icon} size={100} className="text-primary-amber" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
