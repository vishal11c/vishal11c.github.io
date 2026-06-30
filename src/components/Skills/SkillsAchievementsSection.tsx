import { motion } from 'framer-motion'
import { Award, BadgeCheck, Trophy, Bot, Cpu, Layers, Zap } from 'lucide-react'
import { profileData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

const toolIconMap = {
  blue:   { icon: Cpu,    border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-400',   tag: 'bg-blue-500/15 text-blue-300 border-blue-500/25'   },
  orange: { icon: Bot,    border: 'border-orange-400/30', bg: 'bg-orange-400/10', text: 'text-orange-400', tag: 'bg-orange-400/15 text-orange-300 border-orange-400/25' },
  violet: { icon: Layers, border: 'border-violet-400/30', bg: 'bg-violet-400/10', text: 'text-violet-400', tag: 'bg-violet-400/15 text-violet-300 border-violet-400/25' },
  cyan:   { icon: Zap,    border: 'border-cyan-400/30',   bg: 'bg-cyan-400/10',   text: 'text-cyan-400',   tag: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/25'   },
} as const

export function SkillsAchievementsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-2">
        <SectionTitle>Skills & Achievements</SectionTitle>
        <p className="text-text-gray">Technical depth across full-stack engineering, cloud, AI tooling, and enterprise delivery.</p>
      </div>

      {/* ── Skill progress bars ─────────────────────────── */}
      <div className="grid gap-4 md:grid-cols-2">
        {profileData.skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Card className="h-full p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="font-semibold text-primary-secondary">{skillGroup.category}</h3>
                <span className="text-xs text-text-gray">{skillGroup.level}%</span>
              </div>

              <div className="mb-4 h-2 rounded-full bg-white/10">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-primary-main to-primary-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skillGroup.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ── AI Developer Toolkit ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-text-light">
                <Bot size={18} className="text-violet-400" />
                AI Developer Toolkit
              </h3>
              <p className="mt-1 text-sm text-text-gray">
                Tools I use daily and build with — from AI coding assistants to custom MCP servers and LLM API integration.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
              Active Practice
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profileData.aiTools.map((tool, i) => {
              const theme = toolIconMap[tool.color]
              const Icon = theme.icon
              return (
                <motion.div
                  key={tool.name}
                  className={`rounded-xl border p-4 ${theme.border} ${theme.bg} transition-colors hover:brightness-110`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className={theme.text} />
                      <span className="font-semibold text-text-light">{tool.name}</span>
                    </div>
                    <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${theme.tag}`}>
                      {tool.tag}
                    </span>
                  </div>

                  {/* Category */}
                  <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${theme.text}`}>
                    {tool.category}
                  </p>

                  {/* Use-case bullets */}
                  <ul className="space-y-1.5">
                    {tool.uses.map((use) => (
                      <li key={use} className="flex items-start gap-2 text-xs text-text-gray">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bg.replace('/10', '/60')} border ${theme.border}`} />
                        {use}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </Card>
      </motion.div>

      {/* ── Achievements & Certifications ──────────────── */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold">
            <Trophy size={18} className="text-primary-accent" /> Achievements
          </h3>
          <ul className="space-y-2 text-text-gray">
            {profileData.achievements.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold">
            <Award size={18} className="text-primary-secondary" /> Certifications
          </h3>

          <div className="space-y-3">
            {profileData.certifications.map((cert) => (
              <div key={cert.title} className="rounded-lg border border-primary-main/30 bg-primary-main/10 p-4">
                <p className="inline-flex items-center gap-2 font-semibold text-text-light">
                  {cert.featured && <BadgeCheck size={16} className="text-primary-accent" />} {cert.title}
                </p>
                <p className="mt-1 text-sm text-text-gray">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-primary-secondary hover:text-primary-accent"
                  >
                    Verify Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

