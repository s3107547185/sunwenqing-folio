import { useEffect, useRef } from 'react'

// 进入视口后为元素添加 .on，触发 CSS 过渡动画
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.classList.contains('reveal') ? [el] : Array.from(el.querySelectorAll('.reveal'))
    if (el.classList.contains('reveal') === false && targets.length === 0) targets.push(el)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            io.unobserve(e.target)
          }
        })
      },
      { threshold },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [threshold])
  return ref
}
