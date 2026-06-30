import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Lock, Database, Zap, ChevronDown } from 'lucide-react'
import { profileData } from '../../data/portfolioData'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

const iconByType = {
  infrastructure: Cloud,
  security: Lock,
  observability: Database,
  operations: Zap,
} as const

const accentByType = {
  infrastructure: 'text-primary-main border-primary-main/30 bg-primary-main/10',
  security: 'text-red-400 border-red-400/30 bg-red-400/10',
  observability: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  operations: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
} as const

const serviceMapCategories = [
  {
    label: '🖥️ Compute & Infrastructure',
    color: 'text-primary-main',
    services: ['EC2', 'Auto Scaling', 'ELB', 'Lambda', 'ECS', 'Elastic Beanstalk'],
  },
  {
    label: '💾 Storage Services',
    color: 'text-primary-secondary',
    services: ['S3', 'EBS', 'EFS', 'Glacier', 'DataSync', 'AWS Backup'],
  },
  {
    label: '🗄️ Database Services',
    color: 'text-cyan-400',
    services: ['RDS', 'Aurora', 'DynamoDB', 'ElastiCache', 'DocumentDB', 'Neptune'],
  },
  {
    label: '🔐 Security & Identity',
    color: 'text-red-400',
    services: ['IAM', 'Secrets Manager', 'KMS', 'Security Groups', 'ACL', 'Certificate Manager'],
  },
  {
    label: '🤖 AI & Machine Learning',
    color: 'text-orange-400',
    services: ['SageMaker', 'Bedrock', 'Rekognition', 'Textract', 'Translate', 'Comprehend'],
  },
  {
    label: '📊 Monitoring & Operations',
    color: 'text-green-400',
    services: ['CloudWatch', 'X-Ray', 'CloudTrail', 'Systems Manager', 'Trusted Advisor', 'Cost Explorer'],
  },
]

export function CloudExpertiseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="cloud" className="space-y-6">
      <div className="space-y-2">
        <SectionTitle>Cloud Expertise</SectionTitle>
        <p className="text-text-gray">
          Hands-on delivery across AWS infrastructure, security, storage, AI/ML, and operations.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          {/* ── Card header ─────────────────────────────────────── */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-text-light">AWS Service Expertise Map</h3>
              <p className="mt-1 text-sm text-text-gray">
                Production experience across compute, storage, database, security, and AI services.
                Expand an area to see detailed capabilities.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-primary-main/30 bg-primary-main/10 px-3 py-1 text-xs font-medium text-primary-main">
              {profileData.cloudExpertise.length} Areas
            </span>
          </div>

          {/* ── Accordion — expertise areas ─────────────────────── */}
          <div className="mb-6 space-y-2">
            {profileData.cloudExpertise.map((area, index) => {
              const Icon = iconByType[area.type as keyof typeof iconByType]
              const accent = accentByType[area.type as keyof typeof accentByType]
              const isOpen = openIndex === index

              return (
                <div
                  key={area.title}
                  className="overflow-hidden rounded-xl border border-white/10 transition-colors duration-200 hover:border-white/20"
                >
                  {/* Row trigger */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center gap-3 px-4 py-3.5 text-left focus:outline-none"
                  >
                    {/* Icon badge */}
                    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium ${accent}`}>
                      <Icon size={13} />
                      {area.title}
                    </span>

                    {/* Service pill strip (hidden when open) */}
                    <AnimatePresence>
                      {!isOpen && (
                        <motion.div
                          key="pills"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="hidden flex-1 flex-wrap gap-1.5 sm:flex"
                        >
                          {area.services.slice(0, 4).map((svc) => (
                            <span
                              key={svc}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-text-gray"
                            >
                              {svc}
                            </span>
                          ))}
                          {area.services.length > 4 && (
                            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-text-gray">
                              +{area.services.length - 4} more
                            </span>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Chevron */}
                    <motion.span
                      className="ml-auto shrink-0 text-text-gray"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="border-t border-white/10 px-4 pb-4 pt-4 space-y-4">
                          {/* Description */}
                          <p className="text-sm text-text-gray">{area.description}</p>

                          {/* All services */}
                          <div className="flex flex-wrap gap-2">
                            {area.services.map((svc) => (
                              <span
                                key={svc}
                                className="rounded-full border border-primary-main/30 bg-primary-main/10 px-3 py-1 text-xs font-medium text-primary-main"
                              >
                                {svc}
                              </span>
                            ))}
                          </div>

                          {/* Sub-categories */}
                          {area.subCategories && area.subCategories.length > 0 && (
                            <div className="grid gap-3 pt-1 sm:grid-cols-2 lg:grid-cols-3">
                              {area.subCategories.map((sub) => (
                                <div
                                  key={sub.name}
                                  className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                                >
                                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-secondary">
                                    {sub.name}
                                  </p>
                                  <ul className="space-y-1">
                                    {sub.items.map((item) => (
                                      <li key={item} className="flex items-start gap-2 text-xs text-text-gray">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-main/60" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* ── Divider ─────────────────────────────────────────── */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-primary-surface px-3 text-xs uppercase tracking-widest text-text-gray">
                Full Service Coverage
              </span>
            </div>
          </div>

          {/* ── Service map grid ────────────────────────────────── */}
          <div className="grid gap-4 md:grid-cols-2">
            {serviceMapCategories.map((cat) => (
              <div key={cat.label} className="space-y-2">
                <p className={`text-xs font-bold uppercase tracking-wider ${cat.color}`}>
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.services.map((svc) => (
                    <span
                      key={svc}
                      className="rounded border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-text-gray transition hover:border-white/20 hover:text-text-light"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

