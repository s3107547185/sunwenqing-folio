import { site } from '../content/site'
import useReveal from '../hooks/useReveal'

export default function Strengths() {
  const ref = useReveal()
  const s = site.strengths
  return (
    <section className="section strengths" id="strengths" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="section-title">{s.sectionTitle}</h2>
          <span className="label">{s.sectionLabel}</span>
        </div>

        <div className="strengths-grid reveal">
          {s.items.map((item, i) => (
            <div
              className="strength"
              key={item.title}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
            >
              <span className="label strength-num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p className="strength-tags">{item.tags.join(' / ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
