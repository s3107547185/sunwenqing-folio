import { useEffect, useRef, useState } from 'react'

// 进入视口后数字从 0 滚动到目标值
export default function useCountUp(target, duration = 1400) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const step = (t) => {
          const p = Math.min((t - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(target * eased))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])
  return [ref, val]
}
