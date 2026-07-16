import SkillCard from '../ui/SkillCard.jsx'
import { skillCategories } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title font-space">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>
          <p className="section-subtitle">
            A diverse skill set spanning software development, web technologies, and circuit design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
