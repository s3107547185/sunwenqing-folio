import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import useReveal from '../hooks/useReveal'

const tiltMove = (e) => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  el.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`
}
const tiltLeave = (e) => {
  e.currentTarget.style.transform = ''
}

function ProjectMedia({ item }) {
  const mediaRef = useRef(null)
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [blocked, setBlocked] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = mediaRef.current
    if (!el || item.type !== 'video') return
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '240px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [item.type])

  useEffect(() => {
    const v = videoRef.current
    if (!v || !shouldLoad) return
    v.muted = true
    const p = v.play()
    if (p) p.catch(() => setBlocked(true))
  }, [shouldLoad])

  const wake = (e) => {
    if (e) e.stopPropagation()
    if (!shouldLoad) {
      setShouldLoad(true)
      return
    }
    const v = videoRef.current
    if (!v) return
    v.muted = true
    setMuted(true)
    const p = v.play()
    if (p) p.then(() => setBlocked(false)).catch(() => {})
  }

  const toggleSound = () => {
    if (item.silent === true) return
    if (blocked) {
      wake()
      return
    }
    const v = videoRef.current
    if (!v) return
    const next = !muted
    v.muted = next
    setMuted(next)
  }

  if (item.type === 'video') {
    const silent = item.silent === true
    return (
      <div
        ref={mediaRef}
        className="project-media is-video"
        onClick={toggleSound}
        onMouseMove={tiltMove}
        onMouseLeave={tiltLeave}
      >
        <video
          ref={videoRef}
          src={shouldLoad ? item.src : undefined}
          poster={item.poster}
          muted
          loop
          playsInline
          preload={shouldLoad ? 'metadata' : 'none'}
        />
        {blocked && (
          <span className="play-overlay" onClick={wake}>
            <span className="play-tri">▶</span> 点击播放
          </span>
        )}
        {!silent && !blocked && (
          <span className="sound-chip">{muted ? '已静音 · 点击播放声音' : '声音开 · 点击静音'}</span>
        )}
      </div>
    )
  }
  return (
    <div
      className="project-media"
      style={item.ratio ? { aspectRatio: item.ratio } : undefined}
      onMouseMove={tiltMove}
      onMouseLeave={tiltLeave}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        style={{ objectPosition: item.position || 'center' }}
      />
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()
  const p = site.projects
  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="section-title">{p.sectionTitle}</h2>
          <span className="label">{p.sectionLabel} — {p.sectionNote}</span>
        </div>

        <div className="projects-grid">
          {p.items.map((item, i) => (
            <article className={`project reveal d${(i % 2) + 1}`} key={item.title}>
              <div className="project-meta">
                <span className="label">0{i + 1}</span>
                <span className="label">{item.year}</span>
              </div>
              <ProjectMedia item={item} />
              <div className="project-info">
                <h3 className="project-title">
                  {item.title}
                  <span className="arrow">→</span>
                </h3>
                <div className="project-tags">
                  {item.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
