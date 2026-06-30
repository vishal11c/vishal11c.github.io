import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Trophy } from 'lucide-react'
import { profileData } from '../../data/portfolioData'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionTitle } from '../ui/SectionTitle'

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6 pb-6">
      <div className="space-y-2">
        <SectionTitle>Let&apos;s Connect</SectionTitle>
        <p className="text-text-gray">Open to software engineering, cloud, and full-stack opportunities.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="h-full p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold">Contact Channels</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button href={`mailto:${profileData.links.email}`} variant="outline" className="justify-start break-all text-left">
                <Mail size={16} /> {profileData.links.email}
              </Button>
              <Button href={profileData.links.github} variant="outline" className="justify-start" target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub
              </Button>
              <Button href={profileData.links.linkedin} variant="outline" className="justify-start" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </Button>
              <Button href={profileData.links.leetcode} variant="outline" className="justify-start" target="_blank" rel="noreferrer">
                <Trophy size={16} /> LeetCode
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold">Details</h3>
            <div className="space-y-3 text-sm text-text-gray">
              <p className="inline-flex items-center gap-2">
                <MapPin size={15} /> {profileData.location}
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone size={15} /> {profileData.phone}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
