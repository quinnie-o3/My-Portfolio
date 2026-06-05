import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'MyHealthCare',
    period: 'Oct 2025 - Jan 2026',
    role: 'Frontend Developer',
    tags: ['JavaScript', 'HTML/CSS', 'Figma', 'PostgreSQL', 'Vercel'],
    desc: 'Hospital management web app for appointment booking and doctor schedule management, built with responsive interfaces from Figma designs.',
    url: 'https://my-health-care-six.vercel.app/',
    thumb: './images/projects/prj_myhealthcare.png',
  },
  {
    title: 'Conscia',
    period: 'Mar 2026 - May 2026',
    role: 'Android Developer',
    tags: ['Java', 'Android Studio', 'MongoDB Atlas', 'Figma', 'Render', 'OOP'],
    desc: 'A mobile application for usage and intent tracking with real-time screen time analytics, warning alerts, and scalable background processing.',
    url: 'https://github.com/quinnie-o3/Conscia-monorepo',
    thumb: './images/projects/prj_conscia.png',
  },
  {
    title: 'Digital Notebook',
    period: 'Jun 2026 - May 2026',
    role: 'Fullstack Developer',
    tags: ['ReactJS', 'HTML/CSS', 'Spring Boot', 'MongoDB Atlas', 'Vercel', 'Render'],
    desc: 'Interactive digital notebook application for scheduling, note-taking and organization for students.',
    url: 'https://digital-notebook-rho.vercel.app/',
    thumb: './images/projects/prj_digital_notebook.png',
  }
]

export default function Projects() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setIdx((i) => (i + 1) % projects.length)
  const visible = [
    projects[idx % projects.length],
    projects[(idx + 1) % projects.length],
  ]

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="proj-header">
        <div style={{ flex: 1 }} />
        <h2 className="sec-title">projects.</h2>
      </div>
      <div className="carousel">
        <button className="carousel-btn" onClick={prev}>
          <ChevronLeft size={20} />
        </button>
        <div className="carousel-track">
          {visible.map((p, i) => (
            <div key={i} className="proj-card">
              <div className="proj-thumb">
                {p.thumb ? (
                  <img src={p.thumb} alt={p.title} />
                ) : (
                  <div className="proj-thumb-empty">
                    <span>Add thumbnail</span>
                  </div>
                )}
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-meta">
                  {p.period} | {p.role}
                </p>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="proj-link">
                    <ExternalLink size={13} /> View Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={next}>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
