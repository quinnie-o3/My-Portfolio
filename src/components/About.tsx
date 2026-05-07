import './About.css'

const timeline = [
  { period: 'Apr 2025 – Now', name: 'FUNiX', role: 'English Tutor', icon: '/images/about/FUNiX.png', color: '#00d4ff' },
  { period: '2023 – Now', name: 'University of Information Technology (VNU-HCM)', role: 'B.Sc. Information Systems | GPA: 8.21/10', icon: '/images/about/uit.svg', color: '#3d8ef8' },
  { period: '2020 – 2023', name: 'Nguyen Thi Minh Khai High School', role: 'High School Diploma', icon: '/images/about/ntmk.png', color: '#7eb8e8' },
]

const skills = [
  'JavaScript',
  'Java',
  'Python',
  'C++',
  'OOP',
  'AWS',
  'Android Studio',
  'Figma',
  'MongoDB Atlas',
  'MS SQL Server',
  'Oracle',
]

const certificates = [
  {
    name: 'TOEIC L&R',
    issuedOn: 'Sep 11, 2025',
    details: '795/990',
    href: './images/about/cert-toeic-lr.jpg',
    color: '#00d4ff',
  },
  {
    name: 'AWS Cloud Architecting',
    issuedOn: 'Apr 27, 2026',
    details: '',
    href: 'https://www.credly.com/badges/6443d5fd-3174-4d00-83a4-f8544c7317b3/print',
    color: '#3d8ef8',
  },
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

      <p className="sec-subtitle" style={{ marginTop: 60 }}>
        SKILLS.
      </p>
      <div className="skills-cloud">
        {skills.map((s) => (
          <span key={s} className="skill-pill">
            {s}
          </span>
        ))}
      </div>

      <p className="sec-subtitle" style={{ marginTop: 48 }}>
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
