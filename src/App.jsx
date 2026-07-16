import AnimatedBackground from './components/layout/AnimatedBackground.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
