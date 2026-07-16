import Icon from '../ui/Icon.jsx'
import { experience } from '../../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title font-space">
            Work <span className="gradient-text-animated">Experience</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Internships and hands-on roles where I've applied my skills to real-world projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((job) => (
            <div key={`${job.org}-${job.role}`} className="card-hover fade-in-up">
              <div className="flex items-start gap-4">
                <div className="activity-icon">
                  <Icon name={job.icon} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{job.role}</h4>
                      <p className="text-blue-400 font-medium">{job.org}</p>
                    </div>
                    <span className="badge-year">{job.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{job.meta}</p>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
