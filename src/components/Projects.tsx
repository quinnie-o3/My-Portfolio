import { ExternalLink } from 'lucide-react'
import './Projects.css'

type Project = {
  title: string
  period: string
  role: string
  tags: string[]
  summary: string
  responsibilities: string[]
  url?: string
  linkLabel?: string
}

type ProjectGroup = {
  title: string
  projects: Project[]
}

const projectGroups: ProjectGroup[] = [
  {
    title: 'Web / Mobile application projects',
    projects: [
      {
        title: 'Digital Notebook',
        period: 'Apr 2026 - Present',
        role: 'Full-stack Developer',
        tags: ['Spring Boot', 'Vite', 'HTML/CSS', 'MongoDB Atlas', 'Vercel', 'Render'],
        url: 'https://digital-notebook-rho.vercel.app/',
        linkLabel: 'View Live',
        summary: 'Scheduling and note-taking platform for UIT students.',
        responsibilities: [
          'Designed a synchronized platform that connects academic schedules with personal notes, helping students manage deadlines, study plans, and learning materials in one place.',
          'Built RESTful APIs with Spring Boot and developed the Vite-based frontend to keep features scalable and data consistent.',
        ],
      },
      {
        title: 'Conscia',
        period: 'Mar 2026 - May 2026',
        role: 'Full-stack Developer',
        tags: ['Java', 'Android Studio', 'MongoDB Atlas', 'Figma', 'Render'],
        url: 'https://github.com/quinnie-o3/Conscia-monorepo',
        linkLabel: 'View Repository',
        summary: 'Screen time and app usage tracking application.',
        responsibilities: [
          'Developed real-time app usage monitoring to help users analyze and manage digital habits.',
          'Implemented background warning and notification features while optimizing performance and reducing battery consumption.',
          'Planned user flows for screen-time tracking, usage reflection, weekly reports, and habit-improvement reminders.',
        ],
      },
      {
        title: 'MyHealthCare',
        period: 'Oct 2025 - Jan 2026',
        role: 'Front-end Developer',
        tags: ['JavaScript', 'HTML/CSS', 'Figma', 'PostgreSQL', 'MongoDB Atlas', 'Vercel'],
        url: 'https://my-health-care-six.vercel.app/',
        linkLabel: 'View Live',
        summary: 'Hospital appointment booking website.',
        responsibilities: [
          'Developed patient-facing interfaces for online appointment scheduling and doctor dashboards for managing appointment calendars.',
          'Designed user flows for appointment booking, medical service access, and doctor schedule management.',
          'Built reusable UI components and improved rendering performance and cross-browser compatibility.',
        ],
      },
    ],
  },
  {
    title: 'Data analysis projects',
    projects: [
      {
        title: 'Telecom Churn Prediction',
        period: 'Nov 2025',
        role: 'Data Analyst',
        tags: ['Python', 'SQL', 'Statistical Analysis', 'Data Visualization', 'Machine Learning'],
        summary: 'Customer behavior analysis for telecom churn prediction.',
        responsibilities: [
          'Cleaned, preprocessed, and analyzed customer behavior data from more than 2 million telecom subscribers to identify churn patterns.',
          'Performed statistical analysis and visualized key factors affecting customer retention.',
          'Evaluated predictive models, including Random Forest, and interpreted feature importance to support business decisions.',
          'Proposed data-driven recommendations such as customer segmentation, retention campaigns, and loyalty improvements.',
        ],
      },
    ],
  },
  {
    title: 'System analysis projects',
    projects: [
      {
        title: 'LapZone',
        period: 'Oct 2025 - Dec 2025',
        role: 'System Analyst',
        tags: ['Requirement Gathering', 'UML', 'Business Process Analysis', 'Relational Data Modeling'],
        summary: 'System analysis and design for a laptop e-commerce platform.',
        responsibilities: [
          'Conducted stakeholder interviews and analyzed existing retail workflows to identify issues in product, order, voucher, inventory, and revenue management.',
          'Gathered and documented functional and non-functional requirements for customer and administrator roles.',
          'Designed end-to-end business processes for product management, cart, order processing, payment, inventory control, voucher management, and revenue analytics.',
          'Created use cases, activity diagrams, sequence diagrams, class diagrams, and relational data models to support implementation.',
        ],
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="proj-header">
        <h2 className="sec-title">projects.</h2>
      </div>

      <div className="project-groups">
        {projectGroups.map((group) => (
          <div key={group.title} className="project-group">
            <h3 className="project-group-title">{group.title}</h3>
            <div className="project-list">
              {group.projects.map((project) => (
                <article key={project.title} className="project-item">
                  <div className="project-item-head">
                    <div>
                      <h4 className="project-title">{project.title}</h4>
                      <p className="project-meta">
                        {project.period} | {project.role}
                      </p>
                    </div>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                        <ExternalLink size={14} />
                        {project.linkLabel}
                      </a>
                    )}
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  <ul className="project-responsibilities">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
