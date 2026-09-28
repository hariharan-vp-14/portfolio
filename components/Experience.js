'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Deepwoods Trust',
    role: 'Full Stack Developer',
    duration: 'Dec 2025 – Mar 2026',
    bullets: [
      'Developed a talent showcase platform with modern UI and community features.',
      'Built frontend interfaces, backend REST APIs, and MongoDB integration.',
      'Implemented authentication, property management, and secure deployment.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-container mx-auto max-w-6xl px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.37em] text-primary">Experience</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Professional timeline</h2>
          </div>
          <p className="max-w-xl text-sm text-white/60">A concise timeline highlighting the most recent full stack role and production work on modern web applications.</p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-primary to-secondary/40" />
          <div className="space-y-8 pl-10">
            {experiences.map((item) => (
              <motion.div key={item.company} className="relative rounded-[2rem] border border-white/10 bg-card p-8 shadow-glow backdrop-blur-xl">
                <div className="absolute -left-5 top-8 h-10 w-10 rounded-full bg-[#0F172A] border border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                  <span className="text-sm font-semibold">01</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="text-sm text-white/50">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/70">{item.duration}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/70 list-disc list-inside">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
