'use client'

import { motion } from 'framer-motion'
import { BookOpen, Cpu, Globe, MapPin } from 'lucide-react'

export default function Research() {
  return (
    <section id="research" className="section-container mx-auto max-w-6xl px-2 sm:px-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.37em] text-primary">Research</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Academic focus</h2>
          </div>
          <p className="max-w-xl text-sm text-white/60">A concise research summary that reinforces technical depth and product thinking.</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-card p-8 shadow-glow backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.37em] text-primary">Smart Navigation System</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Autonomous cars using GPS and AI</h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">Research badge</span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_0.5fr]">
            <div className="space-y-5 text-white/75">
              <p className="text-lg leading-8">
                Designed a navigation system combining GPS, obstacle detection, and adaptive routing logic to support safer autonomous driving decisions in dynamic environments.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li>• AI-assisted route optimization for real-time adjustments.</li>
                <li>• GPS integration for accurate vehicle positioning.</li>
                <li>• Obstacle detection and adaptive navigation logic.</li>
                <li>• Applied academic insights to production-quality system design.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0F172A]/90 p-6">
              <div className="space-y-4">
                {[
                  { icon: <Globe className="h-5 w-5" />, label: 'GPS' },
                  { icon: <Cpu className="h-5 w-5" />, label: 'AI' },
                  { icon: <BookOpen className="h-5 w-5" />, label: 'Obstacle Detection' },
                  { icon: <MapPin className="h-5 w-5" />, label: 'Adaptive Navigation' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-primary/10 text-primary">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
