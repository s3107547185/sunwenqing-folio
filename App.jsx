import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  return (
    <div id="top">
      <Preloader />
      <div className="noise" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </div>
  )
}
