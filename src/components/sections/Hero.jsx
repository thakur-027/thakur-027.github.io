import Icon from '../ui/Icon.jsx'
import useTypingEffect from '../../hooks/useTypingEffect.js'
import { profile } from '../../data/profile.js'
import profileImg from '../../assets/images/profile.jpg'

export default function Hero() {
  const { typed, done } = useTypingEffect(profile.role)

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in-up">
            <div className="inline-block mb-4">
              <span className="status-badge">
                <span className="status-dot" />
                Available for work
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 font-space leading-tight">
              Hi, I'm <br />
              <span className="gradient-text-animated">{profile.name}</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 typing-container">
              <span className="typing-text" style={done ? { borderRight: '3px solid var(--primary-amber)' } : undefined}>
                {typed}
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">{profile.tagline}</p>
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary group">
                <span>View My Work</span>
                <Icon name="arrow-right" size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary group">
                <Icon name="download" size={18} />
                <span>Download Resume</span>
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                <Icon name="github" size={22} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <Icon name="linkedin" size={22} />
              </a>
              <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
                <Icon name="mail" size={22} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black">
                  <img src={profileImg} alt={profile.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
