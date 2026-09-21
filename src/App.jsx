import AnimatedBackground from './components/layout/AnimatedBackground.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import Experience from './components/sections/Experience.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-on-primary-fixed">
      <AnimatedBackground />
      <Header />
      <main className="w-full pt-20 bg-background">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
