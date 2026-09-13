import { useEffect, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// 文字“扫描解码”效果：随机字符逐步落定为最终文本
export default function useScramble(text, { delay = 0, frames = 40 } = {}) {
  const [out, setOut] = useState(() => text.replace(/[^\s]/g, ' '))
  useEffect(() => {
    let frame = 0
    let raf = 0
    const tick = () => {
      frame += 1
      const progress = frame / frames
      const reveal = Math.floor(progress * text.length)
      let s = ''
      for (let i = 0; i < text.length; i++) {
        const ch = text[i]
        if (/\s/.test(ch)) s += ch
        else if (i < reveal) s += ch
        else s += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      setOut(s)
      if (frame < frames) raf = requestAnimationFrame(tick)
      else setOut(text)
    }
    const t = setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [text, delay, frames])
  return out
}
