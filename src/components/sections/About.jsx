import Icon from '../ui/Icon.jsx'
import CertCard from '../ui/CertCard.jsx'
import { education, certifications, leadership } from '../../data/education.js'

export default function About() {
  return (
    <section id="about" className="section py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title font-space">
            About <span className="gradient-text-animated">Me</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Focused on Android development and DSA, I enjoy designing performant mobile apps, websites, and
            tackling algorithmic challenges. I believe in clean architecture, optimized logic, and continuous
            learning. My foundation in Electronics and Communication Engineering adds a structured,
            problem-solving mindset to the way I build software.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-space">
                <div className="icon-wrapper">
                  <Icon name="graduation-cap" size={24} />
                </div>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={`${edu.school}-${edu.degree}`} className="card-hover">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{edu.school}</h4>
                        <p className="text-blue-400 font-medium">{edu.degree}</p>
                        <p className="text-sm text-gray-400 mt-1">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="badge-year">{edu.period}</span>
                        <p className="text-green-400 font-bold mt-2 text-lg">{edu.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-space">
                <div className="icon-wrapper">
                  <Icon name="award" size={24} />
                </div>
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <CertCard key={cert.title} cert={cert} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-space">
              <div className="icon-wrapper">
                <Icon name="users" size={24} />
              </div>
              Leadership & Activities
            </h3>
            <div className="space-y-4">
              {leadership.map((item) => (
                <div key={item.org} className="card-hover">
                  <div className="flex items-start gap-4">
                    <div className="activity-icon">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{item.org}</h4>
                      <p className="text-blue-400 font-medium">{item.role}</p>
                      <p className="text-sm text-gray-400 mt-1">{item.period}</p>
                      <p className="text-sm text-gray-500 mt-3 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
