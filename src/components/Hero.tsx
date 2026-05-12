import { Download } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-hello">Hello, I'm</p>
        <h1 className="hero-name">Quynh Nhi</h1>
        <p className="hero-role">full-stack developer</p>
        <p className="hero-bio">
          Information Systems student focused on responsive web apps, Android products, and
          practical system design.
        </p>
        <a href="./Resume_NguyenThiQuynhNhi.pdf" download className="hero-btn">
          <Download size={15} /> Download Resume
        </a>
      </div>
      <div className="hero-right">
        <div className="hero-avatar-ring">
          <div className="hero-avatar">
            <img
              src="/images/profile/thumbnail.jpg"
              alt="Quynh Nhi"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            {/*<span className="avatar-fallback">NQN</span>*/}
          </div>
        </div>
        <span className="deco deco1">✦</span>
        <span className="deco deco2">+</span>
        <span className="deco deco3">+</span>
        <span className="deco deco4">✦</span>
      </div>
    </section>
  )
}
