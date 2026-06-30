import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type SectionTitleProps = {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return <h2 className={cn('text-2xl font-semibold sm:text-3xl', className)}>{children}</h2>
}
