'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    name: 'Stay',
    description: 'Accommodation platform for students and professionals to discover PGs, hostels, and dormitories.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Google OAuth'],
    features: ['Property listings', 'Dashboard', 'Image uploads', 'CRUD operations', 'Inquiry management'],
    demo: 'https://stay-wm8p.vercel.app',
    github: 'https://github.com/hariharan-vp-14',
    tone: 'from-violet-500/30 via-sky-500/10 to-cyan-400/20'
  },
  {
    name: 'TalentConnectPro',
    description: 'Inclusive virtual conference platform for differently-abled students to showcase talent.',
    stack: ['React', 'Express', 'MongoDB', 'Accessibility', 'Real-time chat'],
    features: ['Authentication', 'Events', 'Profiles', 'Community', 'Responsive UI'],
    demo: 'https://frontrct.vercel.app',
    github: 'https://github.com/hariharan-vp-14',
    tone: 'from-cyan-500/20 via-blue-500/15 to-violet-500/20'
  },
  {
    name: 'CrickVerse',
    description: 'Premium cricket ecommerce application with catalog search, cart, and checkout flows.',
    stack: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    features: ['Shopping cart', 'Checkout', 'Authentication', 'Search', 'Orders'],
    demo: 'https://cricket-dun.vercel.app',
    github: 'https://github.com/hariharan-vp-14',
    tone: 'from-emerald-500/20 via-cyan-500/15 to-sky-500/20'
  },
  {
    name: 'FixMyOoru',
    description: 'Service booking platform for local repair and maintenance professionals.',
    stack: ['React', 'Node.js', 'SSR', 'MongoDB', 'Responsive UI'],
    features: ['Bookings', 'Scheduling', 'Technician assignment', 'Tracking', 'Authentication'],
    demo: 'https://fixmyooru.vercel.app',
    github: 'https://github.com/hariharan-vp-14',
    tone: 'from-orange-500/20 via-violet-500/15 to-cyan-500/20'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-violet-300">Projects</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Featured work</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">High-impact digital products built to feel premium, fast, and intuitive for real users.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1220]/80 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${project.tone}`} />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-200">
                  <span className="pill px-3 py-2">Project {index + 1}</span>
                  <span className="pill px-3 py-2">Featured</span>
                </div>

                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
                  <div className={`relative flex h-40 items-end justify-between overflow-hidden rounded-[1.15rem] border border-white/10 bg-gradient-to-br ${project.tone} p-4`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="relative flex h-full w-full items-end justify-between">
                      <div className="space-y-2">
                        <div className="h-3 w-16 rounded-full bg-white/40" />
                        <div className="h-3 w-28 rounded-full bg-white/25" />
                        <div className="h-3 w-20 rounded-full bg-white/25" />
                      </div>
                      <div className="flex h-24 w-24 items-center justify-center rounded-[1.4rem] border border-white/15 bg-slate-950/25 backdrop-blur-sm">
                        <span className="text-lg font-semibold text-white">{project.name.slice(0, 2).toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-2xl font-semibold text-white transition hover:text-violet-300">
                      {project.name}
                    </a>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-200">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="futuristic-button bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
                    <Eye className="h-4 w-4" /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="futuristic-button px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="futuristic-button px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    <ExternalLink className="h-4 w-4" /> Visit Site
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
