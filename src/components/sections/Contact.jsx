import Icon from '../ui/Icon.jsx'
import { profile } from '../../data/profile.js'

const contactItems = [
  {
    icon: 'mail',
    title: 'Email',
    value: profile.email,
    action: { label: 'Send email', href: `mailto:${profile.email}` },
  },
  {
    icon: 'phone',
    title: 'Phone',
    value: profile.phone,
    action: { label: 'Call now', href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  },
  {
    icon: 'map-pin',
    title: 'Location',
    value: profile.location,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title font-space">
            Get In <span className="gradient-text-animated">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {contactItems.map((item, i) => (
            <div key={item.title} className="contact-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="contact-icon-wrapper">
                <Icon name={item.icon} size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 mb-2">{item.value}</p>
                {item.action && (
                  <a
                    href={item.action.href}
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.action.label}
                    <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
