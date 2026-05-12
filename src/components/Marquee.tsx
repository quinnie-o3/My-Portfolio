import { Sparkles } from 'lucide-react'
import './Marquee.css'

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <span className="marquee-line" />
      <div className="marquee-center">
        <Sparkles size={16} strokeWidth={2.4} />
        <span className="marquee-dot" />
        <Sparkles size={16} strokeWidth={2.4} />
      </div>
      <span className="marquee-line" />
    </div>
  )
}
