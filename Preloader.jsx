import { useEffect, useState } from 'react'
import useScramble from '../hooks/useScramble'

// 进场动画（reactbits Preloader 风格）：百分比计数 + 解码文字，幕布上移揭示页面
export default function Preloader() {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('loading') // loading -> done -> gone
  const tag = useScramble('SUN WENQING — VISUAL / IMAGE / AIGC', {
    delay: 150,
    frames: 34,
  })

  useEffect(() => {
    let raf = 0
    const t0 = performance.now()
    const dur = 1500
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 2.2)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        document.body.classList.add('loaded')
        setPhase('done')
        setTimeout(() => setPhase('gone'), 1000)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (phase === 'gone') return null
  return (
    <div className={`preloader ${phase === 'done' ? 'done' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <span className="label preloader-tag">{tag}</span>
        <div className="preloader-count">
          {count}
          <em>%</em>
        </div>
        <div className="preloader-bar">
          <span style={{ width: `${count}%` }} />
        </div>
      </div>
    </div>
  )
}
