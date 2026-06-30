import { motion } from 'framer-motion'
import { FaAws, FaAngular, FaDocker, FaJava, FaReact } from 'react-icons/fa'
import { SiDotnet, SiTypescript } from 'react-icons/si'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { ProfilePhotoCard } from '../ui/ProfilePhotoCard'
import { profileData } from '../../data/portfolioData'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useTypewriter } from '../../hooks/useTypewriter'
import profilePhoto from '../../assets/Vishal_profile_photo.jpeg'

const heroWords = [
  'Cloud Native Applications',
  'Enterprise Software',
  'Microservices & APIs',
  'AWS Infrastructure',
]

const floatingIcons = [
  { icon: FaAws, className: 'left-2 top-2 text-orange-400', delay: 0.1 },
  { icon: SiDotnet, className: 'right-2 top-12 text-purple-400', delay: 0.2 },
  { icon: FaAngular, className: 'left-8 bottom-10 text-red-400', delay: 0.3 },
  { icon: FaDocker, className: 'right-10 bottom-6 text-cyan-400', delay: 0.4 },
  { icon: FaReact, className: 'left-1/2 top-0 -translate-x-1/2 text-sky-400', delay: 0.5 },
  { icon: FaJava, className: 'right-1/3 top-1/2 text-amber-300', delay: 0.6 },
  { icon: SiTypescript, className: 'left-1/3 bottom-0 text-blue-400', delay: 0.7 },
]

export function Hero() {
  const { x, y } = useMousePosition()
  const typedText = useTypewriter({ words: heroWords })

  return (
    <section id="hero" className="glow-container relative grid items-center gap-6 py-2 md:gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-primary-secondary sm:text-sm sm:tracking-[0.2em]">{profileData.role}</p>
        <h1 className="font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-6xl">
          <span className="text-gradient">Vishal Chauhan</span>
        </h1>

        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            Building <span className="text-gradient">Cloud-Native</span> Solutions
          </p>
          <p className="h-6 text-sm font-medium text-primary-accent sm:text-base md:h-7 md:text-lg">
            Architecting {typedText}
          </p>
        </div>

        <p className="max-w-2xl text-base text-text-gray leading-relaxed">{profileData.summaryShort}</p>

        <div className="flex flex-wrap gap-3">
          <Button href="https://drive.google.com/file/d/1XOes72z3DpyVnlPaRalfLPl_K4VXuPI8/view" target="_blank" rel="noreferrer">
            View Resume
          </Button>
          <Button href={profileData.links.github} variant="outline" target="_blank" rel="noreferrer">
            View GitHub
          </Button>
          <Button href={profileData.links.linkedin} variant="ghost" target="_blank" rel="noreferrer">
            LinkedIn
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {profileData.highlights.slice(0, 10).map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <Card as="div" className="relative min-h-[280px] overflow-hidden p-5 sm:min-h-[320px] sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-main/20 via-transparent to-primary-secondary/20" />

          <div
            className="glow-effect"
            style={{
              left: `${x / 15}px`,
              top: `${y / 18}px`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-text-gray">Building With</p>
              <h3 className="mt-2 text-2xl font-semibold">Secure · Scalable · Cloud-first</h3>

              <div className="mt-6 space-y-4">
                <ProfilePhotoCard
                  src={profilePhoto}
                  alt="Vishal Chauhan profile"
                  name="Vishal Indradev Chauhan"
                  title="Associate Software Engineer @ NICE"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 text-sm text-text-gray sm:grid-cols-2 sm:gap-3">
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">.NET + Microservices</div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">Angular + React UI</div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">AWS + IaC</div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">Observability + Security</div>
            </div>
          </div>

          {floatingIcons.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.className}
                className={`absolute hidden text-xl sm:block ${item.className}`}
                animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
              >
                <Icon />
              </motion.div>
            )
          })}
        </Card>
      </motion.div>
    </section>
  )
}
