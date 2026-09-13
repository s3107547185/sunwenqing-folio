import { useEffect, useRef } from 'react'
import { site } from '../content/site'
import useReveal from '../hooks/useReveal'
import useScramble from '../hooks/useScramble'

export default function Hero() {
  const ref = useReveal(0.05)
  const bodyRef = useRef(null)
  const videoRef = useRef(null)
  const tag = useScramble(site.heroTag, { delay: 1900 })

  // 移动端自动播放兜底：显式调用 play()
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p) p.catch(() => {})
  }, [])

  // 视差：滚动时内容缓慢上移并淡出
  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        el.style.transform = `translateY(${y * 0.28}px)`
        el.style.opacity = String(Math.max(1 - y / 640, 0))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero-media" aria-hidden="true">
        <video ref={videoRef} className="hero-video" src="/assets/video/hero.mp4" muted loop playsInline preload="metadata" poster="/assets/images/hero-poster.jpg" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-top">
        <div className="wrap hero-top-inner">
          <span className="label scramble">{tag}</span>
          <span className="label available">
            <span className="dot" />
            {site.available}
          </span>
        </div>
      </div>

      <div className="wrap hero-body" ref={bodyRef}>
        <p className="label hero-role reveal">{site.role}</p>
        <h1 className="hero-title">
          {site.heroLines.map((l, li) => (
            <span key={l.text} className={`hero-line line-${l.style}`}>
              {l.text.split('').map((ch, ci) => (
                <span key={ci} className="char" style={{ '--i': li * 4 + ci }}>
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <div className="hero-foot reveal d4">
          <p className="hero-sub">{site.heroSub}</p>
          <div className="hero-meta">
            <span className="label">JINAN · CN</span>
            <span className="label">VISUAL / IMAGE / AIGC</span>
            <span className="label">OPEN FOR PROJECTS</span>
          </div>
          <div className="hero-scroll">
            <span className="label">SCROLL</span>
            <span className="scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}
