'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    year: '2024',
    title: 'M.Sc Computer Science',
    institution: "St. Joseph's University",
    detail: 'Focused on adaptive systems, AI, and scalable web architectures.'
  },
  {
    year: '2022',
    title: 'B.Sc Computer Science',
    institution: 'Academic Foundation',
    detail: 'Developed strong fundamentals in programming, algorithms, and software design.'
  }
]

export default function Education() {
  return (
    <section id="education" className="section-container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-violet-300">Education</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Academic background</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">A concise record of the studies that shaped my engineering and product thinking.</p>
        </div>

        <div className="futuristic-panel rounded-[2rem] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3 text-slate-100">
            <GraduationCap className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-semibold text-white">Education timeline</h3>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.year} className="relative rounded-[1.7rem] border border-white/10 bg-[#111827]/75 p-6 pl-8 text-slate-200">
                <div className="absolute -left-[0.24rem] top-8 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.38em] text-cyan-300">{item.year}</p>
                <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
