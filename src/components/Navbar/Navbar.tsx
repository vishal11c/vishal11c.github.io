import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-dark/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#hero" className="font-heading text-base font-bold tracking-wide sm:text-lg">
          VISHAL CHAUHAN
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-text-gray transition hover:text-text-light">
              {item}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="min-h-11 min-w-11 rounded-md border border-white/20 p-2 text-text-light md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-primary-dark/95 px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-2 py-2 text-sm text-text-gray hover:bg-white/5 hover:text-text-light"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              href="#contact"
              variant="outline"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
