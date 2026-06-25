import './About.css'

const timeline = [
  { period: 'Apr 2025 - Present', name: 'FUNiX', role: 'Tutor & Mentor', icon: '/images/about/FUNiX.png', color: '#00d4ff' },
  { period: '2023 - Present', name: 'University of Information Technology (VNU-HCM)', role: 'B.Sc. in Information Systems | GPA: 8.21/10.0', icon: '/images/about/uit.svg', color: '#3d8ef8' },
]

const skills = [
  'System Design',
  'Agile/Scrum',
  'Problem Solving',
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'Python',
  'C++',
  'Microservices',
  'RESTful API',
  'OOP',
  'AWS',
  'Visual Studio',
  'Android Studio',
  'Git/GitHub',
  'Figma',
  'MongoDB Atlas',
  'MS SQL Server',
  'Oracle',
]

const certificates = [
  {
    name: 'TOEIC Listening & Reading',
    issuedOn: 'Sep 25, 2025',
    details: 'Score: 795/990',
    color: '#00d4ff',
  },
  {
    name: 'TOEIC Speaking & Writing',
    issuedOn: 'May 15, 2026',
    details: 'Score: 300/400',
    color: '#00d4ff',
  },
    {
    name: 'Foundations of User Experience (UX) Design',
    issuedOn: 'June 4, 2026',
    details: '',
    href: 'https://coursera.org/share/b1f18b34e2876e76ce21c87f633b966f',
    color: '#00d4ff',
  },
  {
    name: 'Foundations: Data, Data, Everywhere',
    issuedOn: 'June 5, 2026',
    details: '',
    href: 'https://coursera.org/share/925f426a84c23bdfd2d975181f0a7156',
    color: '#00d4ff',
  },
  {
    name: 'AWS Academy Graduate - Microservices and CI/CD Pipeline Builder',
    issuedOn: 'Feb 5, 2026',
    details: '',
    href: 'https://www.credly.com/badges/ae063e88-3fa1-4671-86cc-6a2f172fe8b0/public_url',
    color: '#00d4ff',
  },
  {
    name: 'Crash Course on Python',
    issuedOn: '23 June, 2026',
    details: '',
    href: 'https://coursera.org/share/9adce459f7fd836e3481bc2ae1540db2',
    color: '#00d4ff',
  },

    {
    name: 'AWS Academy Graduate - Cloud Architecting',
    issuedOn: 'Apr 27, 2026',
    details: '',
    href: 'https://www.credly.com/badges/6443d5fd-3174-4d00-83a4-f8544c7317b3/public_url',
    color: '#00d4ff',
  }
]

export default function About() {
  return (
    <section id="about" className="about-section" style={{ position: 'relative' }}>
      <div className="dashed-line" />
      <h2 className="sec-title">about.</h2>
      <p className="sec-subtitle">EXPERIENCE & EDUCATION</p>

      <div className="timeline">
        {timeline.map((t, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot" style={{ borderColor: t.color }} />
            <div className="tl-period">{t.period}</div>
            <div className="tl-card">
              <img className="tl-icon" src={t.icon} alt={t.name} />
              <div>
                <h3 className="tl-name" style={{ color: t.color }}>
                  {t.name}
                </h3>
                <p className="tl-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="sec-subtitle" style={{ marginTop: 46 }}>
        SKILLS.
      </p>
      <div className="skills-cloud">
        {skills.map((s) => (
          <span key={s} className="skill-pill">
            {s}
          </span>
        ))}
      </div>

      <p className="sec-subtitle" style={{ marginTop: 36 }}>
        CERTIFICATES.
      </p>
      <div className="cert-list">
        {certificates.map((cert) => (
          <div className="cert-item" key={cert.name}>
            <div className="cert-dot" style={{ borderColor: cert.color }} />
            <div className="cert-card">
              <a
                className="cert-name"
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: cert.color }}
              >
                {cert.name}
              </a>
              <p className="cert-meta">Issued on: {cert.issuedOn}</p>
              {cert.details ? <p className="cert-meta">{cert.details}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
