import { useState } from 'react'
import './Contact.css'

const links = [
  {
    label: 'github',
    icon: 'GH',
    iconSrc: '/icons/github.svg',
    href: 'https://github.com/quinnie-o3',
  },
  {
    label: 'linkedin',
    icon: 'in',
    iconSrc: '/icons/linkedin.svg',
    href: 'https://linkedin.com/in/nhi-quynh-nguyen-6505bb407',
  },
  {
    label: 'nhiqng03@gmail.com',
    icon: '@',
    href: 'mailto:nhiqng03@gmail.com',
  },
  {
    label: '0765 628 670',
    icon: 'TEL',
    href: 'tel:+84765628670',
  },
  {
    label: 'facebook',
    icon: 'f',
    iconSrc: '/icons/facebook.svg',
    href: 'https://www.facebook.com/quinnie.o3/',
  },
  {
    label: 'instagram',
    icon: 'IG',
    iconSrc: '/icons/instagram.svg',
    href: 'https://www.instagram.com/nhiqng/',
  },
]

type ContactIconProps = {
  icon: string
  iconSrc?: string
}

function ContactIcon({ icon, iconSrc }: ContactIconProps) {
  const [hasError, setHasError] = useState(false)

  if (iconSrc && !hasError) {
    return (
      <span className="contact-icon contact-icon--brand" aria-hidden="true">
        <img
          src={iconSrc}
          alt=""
          className="contact-icon-img"
          onError={() => setHasError(true)}
        />
      </span>
    )
  }

  return (
    <span className="contact-icon contact-icon--fallback" aria-hidden="true">
      {icon}
    </span>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="dashed-line" />
      <h2 className="sec-title">contact.</h2>

      <div className="contact-layout">
        <div className="contact-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-pill"
            >
              <ContactIcon icon={l.icon} iconSrc={l.iconSrc} />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
