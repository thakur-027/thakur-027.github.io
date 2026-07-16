import Icon from './Icon.jsx'

export default function SkillCard({ category, delay = 0 }) {
  return (
    <div className="skill-card fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <div className="skill-card-header">
        <div className="skill-icon" style={{ background: category.gradient }}>
          <Icon name={category.icon} size={24} />
        </div>
        <h3 className="skill-title">{category.title}</h3>
      </div>
      <ul className="skill-list">
        {category.items.map((item) => (
          <li key={item} className="skill-item">
            <span className="skill-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
