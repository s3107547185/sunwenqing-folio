import { site } from '../content/site'
import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'

function Stat({ s }) {
  const [ref, val] = useCountUp(parseInt(s.value, 10) || 0)
  return (
    <div className="stat" ref={ref}>
      <p className="stat-value">
        {val}
        <em>{s.suffix}</em>
      </p>
      <p className="label stat-label">{s.label}</p>
    </div>
  )
}

export default function About() {
  const ref = useReveal()
  const a = site.about
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="section-title">{a.sectionTitle}</h2>
          <span className="label">{a.sectionLabel}</span>
        </div>

        <div className="about-grid">
          <figure className="about-photo reveal">
            <img src="/assets/images/avatar.jpg" alt="个人肖像" />
            <figcaption className="label">{a.photoCaption}</figcaption>
          </figure>

          <div className="about-text">
            <p className="about-intro reveal">{a.intro}</p>
            <p className="about-bio reveal d1">{a.bio}</p>
            <ul className="about-contacts reveal d2">
              {a.contacts.map((c) => (
                <li key={c.label}>
                  <span className="label">{c.label}</span>
                  {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="stats reveal d2">
          {a.stats.map((s) => (
            <Stat key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
