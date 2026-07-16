import Icon from '../ui/Icon.jsx'
import { profile, navLinks } from '../../data/profile.js'

export default function Footer() {
  const footerLinks = navLinks.filter((l) => l.id !== 'home')

  return (
    <footer className="relative pt-16 pb-8 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3 font-space">
              <span className="gradient-text-animated">{profile.name}</span>
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">Android Development · DSA · Problem Solving</p>
            <div className="flex gap-4 mt-6">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="social-link-footer" aria-label="GitHub">
                <Icon name="github" size={20} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="social-link-footer" aria-label="LinkedIn">
                <Icon name="linkedin" size={20} />
              </a>
              <a href={`mailto:${profile.email}`} className="social-link-footer" aria-label="Email">
                <Icon name="mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <a href={`mailto:${profile.email}`} className="btn-primary inline-flex">
              <span>Let's Connect</span>
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. Crafted with{' '}
            <span className="text-red-500">❤</span> and <span className="text-amber-500">☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
