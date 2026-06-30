import { motion } from 'framer-motion'
import { Building2, CalendarDays, MapPin } from 'lucide-react'
import { profileData } from '../../data/portfolioData'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function CareerTimeline() {
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-2">
        <SectionTitle>Career Timeline</SectionTitle>
        <p className="text-text-gray">A quick view of my professional journey and impact.</p>
      </div>

      <div className="relative">
        <motion.div
          className="absolute left-4 top-0 hidden h-full w-[2px] origin-top bg-gradient-to-b from-primary-main via-primary-secondary to-primary-accent md:block"
          initial={{ scaleY: 0, opacity: 0.6 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        <div className="space-y-5">
          {profileData.experience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative md:pl-14"
            >
              <span className="absolute left-[11px] top-7 hidden h-3 w-3 rounded-full border-2 border-primary-dark bg-primary-secondary md:block" />

              <Card className="transition duration-300 hover:-translate-y-0.5 hover:border-primary-main/40 hover:shadow-lg hover:shadow-primary-main/10">
                <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-text-light">{exp.role}</h3>
                    <p className="inline-flex items-center gap-2 text-text-gray">
                      <Building2 size={16} /> {exp.company}
                    </p>
                  </div>

                  <div className="space-y-1 text-sm text-text-gray">
                    <p className="inline-flex items-center gap-2">
                      <CalendarDays size={14} /> {exp.period}
                    </p>
                    {exp.location && (
                      <p className="inline-flex items-center gap-2">
                        <MapPin size={14} /> {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="list-disc space-y-2 pl-5 text-text-gray marker:text-primary-main">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
