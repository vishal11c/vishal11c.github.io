import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { profileData } from '../../data/portfolioData'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-text-gray">Enterprise-focused full-stack and cloud project work.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {profileData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-primary-main/40">
              <div className="flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="rounded-md border border-primary-main/30 bg-primary-main/10 px-2 py-1 text-xs text-primary-secondary">
                    {project.category}
                  </span>
                </div>

                <p className="text-text-gray">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.links.code && (
                    <Button href={project.links.code} variant="outline" className="px-3 py-2 text-xs" target="_blank" rel="noreferrer">
                      <Github size={14} /> Code
                    </Button>
                  )}
                  {project.links.live && (
                    <Button href={project.links.live} variant="ghost" className="px-3 py-2 text-xs" target="_blank" rel="noreferrer">
                      <ExternalLink size={14} /> Live
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
