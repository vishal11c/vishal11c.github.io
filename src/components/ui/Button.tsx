import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'outline' | 'ghost'

type SharedProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

const variants: Record<Variant, string> = {
  primary: 'bg-primary-main text-white hover:bg-primary-secondary',
  outline: 'border border-white/20 text-text-light hover:border-primary-main',
  ghost: 'text-text-gray hover:text-text-light hover:bg-white/5',
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps | AnchorProps) {
  const baseClass = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-200 sm:px-5 sm:py-3',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props
    return (
      <a className={baseClass} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={baseClass} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {children}
    </button>
  )
}
