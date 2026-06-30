import { useEffect, useRef, useState } from 'react'

type UseCountUpOptions = {
  end: number
  durationMs?: number
}

export function useCountUp({ end, durationMs = 1200 }: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || started) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) {
      return
    }

    const startTs = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTs) / durationMs, 1)
      setValue(Math.round(progress * end))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [durationMs, end, started])

  return { ref, value }
}
