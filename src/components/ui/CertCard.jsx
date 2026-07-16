import Icon from './Icon.jsx'

export default function CertCard({ cert }) {
  return (
    <a href={cert.url} target="_blank" rel="noreferrer" className="cert-card group">
      <div className="flex items-start gap-3">
        <div className="cert-icon">
          <Icon name="check" size={20} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.title}</h4>
          <p className="text-sm text-gray-400">{cert.issuer}</p>
        </div>
      </div>
    </a>
  )
}
