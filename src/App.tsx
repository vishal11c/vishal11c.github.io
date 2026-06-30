import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { AnimatedBackground } from './components/ui/AnimatedBackground'

const About = lazy(() => import('./components/About/About').then((m) => ({ default: m.About })))
const CareerTimeline = lazy(() =>
  import('./components/Timeline/CareerTimeline').then((m) => ({ default: m.CareerTimeline })),
)
const ProjectsSection = lazy(() =>
  import('./components/Projects/ProjectsSection').then((m) => ({ default: m.ProjectsSection })),
)
const CloudExpertiseSection = lazy(() =>
  import('./components/Cloud/CloudExpertiseSection').then((m) => ({ default: m.CloudExpertiseSection })),
)
const SkillsAchievementsSection = lazy(() =>
  import('./components/Skills/SkillsAchievementsSection').then((m) => ({ default: m.SkillsAchievementsSection })),
)
const ContactSection = lazy(() =>
  import('./components/Contact/ContactSection').then((m) => ({ default: m.ContactSection })),
)
const FooterSection = lazy(() =>
  import('./components/Footer/FooterSection').then((m) => ({ default: m.FooterSection })),
)

function App() {
  return (
    // ❶ Root: no bg-class here — body CSS handles #030712 base.
    //    No overflow-hidden — that would create a stacking context
    //    that buries negative-z children behind its own background.
    <div className="relative min-h-screen text-text-light" style={{ overflowX: 'hidden' }}>

      {/* ── Background layer (z-index: 0) ───────────────────── */}
      <AnimatedBackground />

      {/* ── Soft dot-grid accent (sits above bg, below content) */}
      <div className="pointer-events-none fixed inset-0 opacity-30" style={{ zIndex: 1 }}>
        <div className="soft-grid absolute inset-0" />
      </div>

      {/* ── UI chrome ────────────────────────────────────────── */}
      <ScrollProgress />
      <a href="#hero" className="skip-link">Skip to content</a>

      {/* Navbar needs to float above everything */}
      <div className="relative" style={{ zIndex: 50 }}>
        <Navbar />
      </div>

      {/* ── Page content (above background, below navbar) ────── */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 md:gap-24 md:py-14"
        style={{ zIndex: 10, willChange: 'opacity' }}
      >
        <Hero />

        <Suspense
          fallback={<div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-text-gray">Loading sections...</div>}
        >
          <About />

          <CareerTimeline />

          <ProjectsSection />

          <CloudExpertiseSection />

          <SkillsAchievementsSection />

          <ContactSection />
        </Suspense>
      </motion.main>

      <Suspense fallback={null}>
        <div className="relative" style={{ zIndex: 10 }}>
          <FooterSection />
        </div>
      </Suspense>
    </div>
  )
}

export default App
