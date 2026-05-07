import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-dashed" />
      <ul className="nav-links">
        {['Home', 'About', 'Projects', 'Contact'].map((l) => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}
