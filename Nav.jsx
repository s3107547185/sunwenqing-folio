import { useEffect, useState } from 'react'
import { site } from '../content/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          {site.logo}
          <sup>®</sup>
        </a>
        <nav className="nav-links">
          {site.nav.map((n, i) => (
            <a key={n.href} href={n.href}>
              <i>0{i + 1}</i>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href="#contact"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - r.left - r.width / 2
            const y = e.clientY - r.top - r.height / 2
            e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = ''
          }}
        >
          联系我
        </a>
      </div>
    </header>
  )
}
