import { useEffect, useMemo, useState } from 'react'

type UseTypewriterOptions = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}

export function useTypewriter({
  words,
  typingSpeed = 55,
  deletingSpeed = 35,
  pauseMs = 1400,
}: UseTypewriterOptions) {
  const safeWords = useMemo(() => words.filter(Boolean), [words])
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!safeWords.length) {
      return
    }

    const currentWord = safeWords[index % safeWords.length]

    if (!deleting && text === currentWord) {
      const pauseTimer = window.setTimeout(() => setDeleting(true), pauseMs)
      return () => window.clearTimeout(pauseTimer)
    }

    if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % safeWords.length)
      return
    }

    const speed = deleting ? deletingSpeed : typingSpeed

    const timer = window.setTimeout(() => {
      setText((prev) => {
        if (deleting) {
          return prev.slice(0, -1)
        }

        return currentWord.slice(0, prev.length + 1)
      })
    }, speed)

    return () => window.clearTimeout(timer)
  }, [deleting, deletingSpeed, index, pauseMs, safeWords, text, typingSpeed])

  return `${text}|`
}
