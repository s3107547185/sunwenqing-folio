import { site } from '../content/site'

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={`${t}-${i}`}>
            {t}
            <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  )
}
