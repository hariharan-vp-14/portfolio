'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const features = ['Node.js', 'React', 'Next.js', 'MongoDB']

const orbitDots = Array.from({ length: 16 }, (_, index) => {
  const angle = (index / 16) * Math.PI * 2
  const radius = 110 + (index % 3) * 18
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle * 1.4) * 40
  const z = Math.sin(angle) * radius

  return { x, y, z, index }
})

export default function Hero() {
  return (
    <section id="home" className="section-container relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center gap-10 pb-16 pt-16">
      <div className="futuristic-panel relative overflow-hidden rounded-[2.5rem] p-6 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_34%),radial-gradient(circle_at_80%_18%,_rgba(6,182,212,0.12),_transparent_25%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="space-y-8">
            <span className="pill px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.38em] text-violet-200">
              Premium Developer Portfolio
            </span>

            <div className="space-y-5">
              <div className="space-y-4">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-slate-300">Hello, I’m</p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
                  Hariharan V P
                </h1>
                <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.26em] text-cyan-200">
                  Full Stack Developer
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Full Stack Developer building production-ready web experiences with React, Next.js, Node.js, and MongoDB.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                {features.map((item) => (
                  <span key={item} className="pill px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="futuristic-button bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_36px_rgba(124,58,237,0.25)] hover:shadow-[0_12px_42px_rgba(34,211,238,0.2)]">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="futuristic-button px-6 py-3 text-sm font-semibold text-slate-100">
                View Resume
              </a>
              <a href="#contact" className="futuristic-button bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-200">
                Hire Me
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-slate-300">
              <a href="https://github.com/hariharan-vp-14" target="_blank" rel="noreferrer" className="pill gap-2 px-4 py-2.5 transition hover:border-violet-400/50 hover:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/vp-hariharan14" target="_blank" rel="noreferrer" className="pill gap-2 px-4 py-2.5 transition hover:border-cyan-400/50 hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:hariharanvp14@gmail.com" className="pill gap-2 px-4 py-2.5 transition hover:border-sky-400/50 hover:text-white">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, ease: 'easeOut' }} className="relative order-first sm:order-last">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1120]/80 p-4 shadow-[0_35px_90px_rgba(2,6,23,0.5)] md:p-6">
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative h-[22rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0a1120] via-[#101a2b] to-[#0d1321]">
                <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/30 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.8),rgba(34,211,238,0.45)_30%,rgba(15,23,42,0.15)_55%,rgba(15,23,42,0.7)_100%)] shadow-[0_0_40px_rgba(56,189,248,0.45)]"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25"
                  />
                  {orbitDots.map(({ x, y, z, index }) => (
                    <motion.span
                      key={index}
                      animate={{
                        x: [0, x * 0.6, x * 0.9, x],
                        y: [0, y * 0.6, y * 0.9, y],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 6 + (index % 4),
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15
                      }}
                      className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
                      style={{
                        transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                        background: index % 2 === 0 ? 'linear-gradient(135deg, #a78bfa, #67e8f9)' : 'linear-gradient(135deg, #67e8f9, #7c3aed)',
                        boxShadow: index % 2 === 0 ? '0 0 18px rgba(167,139,250,0.8)' : '0 0 18px rgba(103,232,249,0.8)'
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between bg-slate-950/30 p-5 backdrop-blur-[2px]">
                  <div className="space-y-4">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.34em] text-slate-200">
                      Featured Case Study
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-white">Built for impact</h2>
                      <p className="max-w-md text-sm leading-7 text-slate-300">
                        Crafting premium digital products with thoughtful motion, scalable architecture, and product-first problem solving.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Projects</p>
                      <p className="mt-2 text-2xl font-semibold text-white">4+</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Experience</p>
                      <p className="mt-2 text-2xl font-semibold text-white">1 Yr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
