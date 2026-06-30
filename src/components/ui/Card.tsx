import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: 'article' | 'div' | 'section'
  glass?: boolean
}

export function Card({ children, className, as = 'article', glass = true, ...props }: CardProps) {
  const Tag = as

  return (
    <Tag
      className={cn(
        'rounded-xl border border-white/10 bg-primary-surface/50 p-4 sm:p-6',
        glass && 'backdrop-blur-xl bg-white/5 border-white/20',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
