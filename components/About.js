'use client'

import { motion } from 'framer-motion'
import { Award, Layers, Sparkles, Terminal } from 'lucide-react'

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '4+', label: 'Projects Built' },
  { value: '2', label: 'Core Tech Tracks' },
  { value: '100%', label: 'Product Focus' }
]

const strengths = [
  'Full Stack Developer',
  'Production-grade applications',
  'Problem solver',
  'Clean UX & motion',
  'Scalable backend systems',
  'Modern web technologies'
]

const timeline = [
  {
    year: '2025',
    title: 'Full Stack Developer',
    company: 'Deepwoods Trust',
    description: 'Built a talent showcase platform with end-to-end UI and backend integration.'
  },
  {
    year: '2024',
    title: 'Completed M.Sc Computer Science',
    company: "St. Joseph's University",
    description: 'Focused on adaptive systems, AI, and scalable web architectures.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-violet-300">About</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Professional introduction</h2>
          </div>
          <div className="pill px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
            UI/UX + scalable systems
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.96fr_0.72fr]">
          <div className="futuristic-panel rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-slate-200">
              I design and build elegant, production-grade web applications with a premium SaaS polish. My work blends clean UI, robust backend systems, and delightful motion to deliver interfaces that feel fast, intuitive, and highly refined.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="futuristic-panel rounded-[2rem] p-6">
              <div className="mb-4 flex items-center gap-3 text-slate-100">
                <Award className="h-5 w-5 text-violet-300" />
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-200">Research foundation</p>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Developed a smart navigation system for autonomous cars using GPS and AI, combining obstacle detection, adaptive routing, and real-time decision making for safer travel.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="futuristic-panel rounded-[1.7rem] p-5">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="futuristic-panel rounded-[2rem] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3 text-slate-100">
            <Layers className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-semibold text-white">Career timeline</h3>
          </div>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative rounded-[1.7rem] border border-white/10 bg-[#111827]/80 p-6 pl-8 text-slate-200">
                <div className="absolute -left-[0.22rem] top-8 h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.38em] text-violet-300">{item.year}</p>
                <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
