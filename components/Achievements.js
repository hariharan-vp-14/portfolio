'use client'

import { motion } from 'framer-motion'
import { Trophy, Sparkles, Award, GraduationCap } from 'lucide-react'

const cards = [
  { title: 'Production Projects', subtitle: 'Delivered polished web applications with modern SaaS workflows.', icon: <Trophy className="h-5 w-5" /> },
  { title: 'Research', subtitle: 'Built AI-driven navigation systems and academic solutions.', icon: <Sparkles className="h-5 w-5" /> },
  { title: 'Full Stack Internship', subtitle: 'Designed end-to-end frontend and backend solutions for user platforms.', icon: <Award className="h-5 w-5" /> },
  { title: 'Certifications', subtitle: 'AWS Academy, Udemy Full Stack Web Development, Cloud Computing.', icon: <GraduationCap className="h-5 w-5" /> }
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-container mx-auto max-w-6xl px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.37em] text-primary">Achievements</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Milestones & recognition</h2>
          </div>
          <p className="max-w-xl text-sm text-white/60">High-impact outcomes that reinforce product readiness and career growth.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="rounded-[2rem] border border-white/10 bg-card p-8 shadow-glow backdrop-blur-xl">
              <div className="inline-flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-white/80">
                {item.icon}
                <span className="text-sm uppercase tracking-[0.35em] text-primary">{item.title}</span>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/75">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
