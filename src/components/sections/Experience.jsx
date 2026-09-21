import { experience } from '../../data/experience.js'
import { education, certifications, leadership } from '../../data/education.js'
import { profile } from '../../data/profile.js'

export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-2xl w-full" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sticky Section Header */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <span className="font-label-sm text-label-sm text-primary font-semibold">
            /* Journey &amp; Milestones */
          </span>
          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-[48px] font-serif text-on-surface tracking-tight leading-tight">
            Experience &amp; Academic Path.
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Documenting software internships, leadership roles, verified credentials, and academic foundations in Electronics &amp; Communication Engineering.
          </p>

          <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container-high space-y-2 mt-2 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                Active Status
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              {profile.availabilityDetails}
            </p>
            <div className="pt-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View Full Resume</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Tabular Timeline */}
        <div className="lg:col-span-8 space-y-6">
          {/* Work Experience */}
          {experience.map((job) => (
            <div
              key={`${job.org}-${job.role}`}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-variant/40 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-container/60">
                <div>
                  <span className="font-label-sm text-[11px] text-primary uppercase tracking-wider font-semibold">
                    {job.period}
                  </span>
                  <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
                    {job.role}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container font-label-sm text-xs text-on-surface self-start sm:self-auto font-medium">
                  {job.org}
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mt-3 leading-relaxed">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-label-sm text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Degree: B.E. ECE */}
          {education.map((edu, idx) => (
            <div
              key={`${edu.school}-${edu.degree}`}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-variant/40 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-container/60">
                <div>
                  <span className="font-label-sm text-[11px] text-primary uppercase tracking-wider font-semibold">
                    {idx === 0 ? 'Degree • ' : 'High School • '}
                    {edu.period}
                  </span>
                  <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
                    {edu.degree}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container text-on-primary-fixed font-label-sm text-xs self-start sm:self-auto font-bold shadow-xs">
                  {edu.score}
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface font-medium mt-2">
                {edu.school} — <span className="text-on-surface-variant text-xs">{edu.location}</span>
              </p>
              {idx === 0 && (
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="font-label-sm text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface-variant">
                    Digital Signal Processing
                  </span>
                  <span className="font-label-sm text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface-variant">
                    Microprocessors &amp; IoT
                  </span>
                  <span className="font-label-sm text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface-variant">
                    Digital System Design
                  </span>
                  <span className="font-label-sm text-[11px] px-2.5 py-1 rounded bg-surface-container text-on-surface-variant">
                    OOP &amp; Data Structures
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Leadership & Activities */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-variant/40 hover:shadow-md transition-shadow">
            <div className="pb-3 border-b border-surface-container/60">
              <span className="font-label-sm text-[11px] text-primary uppercase tracking-wider font-semibold">
                Campus Impact &amp; Leadership
              </span>
              <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
                Executive &amp; Society Roles
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {leadership.map((lead) => (
                <div key={lead.org} className="p-4 rounded-xl bg-surface-container-low/60 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-on-surface">{lead.org}</h4>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">{lead.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-primary">{lead.role}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Certifications */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-surface-variant/40 hover:shadow-md transition-shadow">
            <div className="pb-3 border-b border-surface-container/60 flex items-center justify-between">
              <div>
                <span className="font-label-sm text-[11px] text-primary uppercase tracking-wider font-semibold">
                  Verified Credentials
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface mt-0.5">
                  Professional Certifications
                </h3>
              </div>
              <span className="font-label-sm text-xs font-mono text-on-surface-variant">
                {certifications.length} Credentials
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-start justify-between gap-2 border border-surface-variant/30"
                >
                  <div>
                    <h4 className="font-semibold text-xs text-on-surface group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-label-sm text-[11px] text-on-surface-variant mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0 mt-0.5">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
