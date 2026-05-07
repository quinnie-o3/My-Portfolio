import './Marquee.css'

const items = ['Frontend Developer', '✦✦', 'in Ho Chi Minh City', '❋❋', 'Information Systems', '✦✦', 'VNU-HCM', '❋❋']

export default function Marquee() {
  const all = [...items, ...items, ...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
      </div>
    </div>
  )
}

