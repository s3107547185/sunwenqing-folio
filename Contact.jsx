import { site } from '../content/site'
import useReveal from '../hooks/useReveal'
import DotField from './DotField'

export default function Contact() {
  const ref = useReveal()
  const c = site.contact
  return (
    <section className="section contact" id="contact" ref={ref}>
      <DotField />
      <div className="wrap contact-body">
        <span className="label reveal">{c.sectionLabel}</span>
        <a className="contact-mail shiny reveal d1" href={`mailto:${c.email}`}>
          {c.email}
        </a>

        <div className="socials reveal d2">
          {c.contacts.map((s) => (
            <div className="social" key={s.label}>
              <span className="label">{s.label}</span>
              {s.href ? (
                <p>
                  <a href={s.href}>{s.value}</a>
                </p>
              ) : (
                <p>{s.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap footer-bar">
        <span className="label">{site.footer}</span>
        <a className="label top-link" href="#top">
          BACK TO TOP ↑
        </a>
      </div>
    </section>
  )
}
