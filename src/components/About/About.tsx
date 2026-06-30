import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'
import { profileData } from '../../data/portfolioData'
import { useCountUp } from '../../hooks/useCountUp'

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: animated } = useCountUp({ end: value })

  return (
    <div ref={ref}>
      <Card as="div" className="p-5">
        <p className="text-3xl font-bold text-primary-secondary">
          {animated}
          {suffix}
        </p>
        <p className="mt-1 text-sm text-text-gray">{label}</p>
      </Card>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <SectionTitle>About Me</SectionTitle>
        <p className="max-w-4xl leading-8 text-text-gray">{profileData.summary}</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profileData.stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold">Trusted Technologies</h3>
        <Card as="div" className="p-6">
          <div className="flex flex-wrap gap-2">
            {profileData.trustedTechnologies.map((item, idx) => (
              <Badge
                key={item}
                className="animate-float text-sm"
                style={{ animationDelay: `${idx * 0.08}s`, animationDuration: '3.2s' }}
              >
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold">Beyond Work</h3>
        <Card as="div" className="p-6">
          <ul className="space-y-3 text-text-gray">
            {profileData.hobbies.map((hobby) => (
              <li key={hobby} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
                {hobby}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </section>
  )
}
