import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Stars from './components/Stars'

export default function App() {
  return (
    <div className="app">
      <Stars />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Projects />
      <Contact />
      <Marquee />
    </div>
  )
}

