import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn('rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-text-gray', className)}
      {...props}
    >
      {children}
    </span>
  )
}
