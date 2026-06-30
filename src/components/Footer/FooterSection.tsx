import { Github, Linkedin, Mail } from 'lucide-react'
import { profileData } from '../../data/portfolioData'

export function FooterSection() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-base font-semibold">{profileData.name}</p>
          <p className="text-sm text-text-gray">Associate Software Engineer · Cloud & Full Stack</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-gray">
          {profileData.quickNav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-text-light">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-text-gray">
          <a href={`mailto:${profileData.links.email}`} aria-label="Email" className="rounded-md border border-white/15 p-2.5 hover:border-primary-main hover:text-text-light">
            <Mail size={16} />
          </a>
          <a href={profileData.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md border border-white/15 p-2.5 hover:border-primary-main hover:text-text-light">
            <Github size={16} />
          </a>
          <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/15 p-2.5 hover:border-primary-main hover:text-text-light">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-text-gray sm:px-6">
        © {new Date().getFullYear()} Vishal Indradev Chauhan. Built with React, TypeScript, Vite, Tailwind, and Framer Motion.
      </p>
    </footer>
  )
}
