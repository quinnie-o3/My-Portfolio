import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import './Projects.css'

// Put project thumbnails in /public/images/projects and set each thumb path here.
const projects = [
  {
    title: 'MyHealthCare',
    tags: ['#JavaScript', '#HTML/CSS', '#Figma', '#PostgreSQL'],
    desc: 'Hospital management web app — patients book appointments, doctors manage schedules.',
    url: 'https://myhealthcareme.vercel.app/', thumb: './images/projects/prj_myhealthcare.png',
  },
  {
    title: 'Conscia',
    tags: ['#Java', '#AndroidStudio', '#Retrofit', '#Figma'],
    desc: 'Android app tracking real-time app usage with smart digital wellness notifications.',
    url: '', thumb: './images/projects/prj_conscia.png',
  },
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
        <button className="carousel-btn" onClick={prev}><ChevronLeft size={20} /></button>
        <div className="carousel-track">
          {visible.map((p, i) => (
            <div key={i} className="proj-card">
              <div className="proj-thumb">
                {p.thumb
                  ? <img src={p.thumb} alt={p.title} />
                  : <div className="proj-thumb-empty"><span>Add thumbnail</span></div>
                }
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">{p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}</div>
                {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="proj-link"><ExternalLink size={13} /> View Live</a>}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={next}><ChevronRight size={20} /></button>
      </div>
    </section>
  )
}
