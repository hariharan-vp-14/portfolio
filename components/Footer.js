'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-20 pb-10 pt-8">
      <div className="futuristic-panel rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-violet-300">Hariharan V P</p>
            <p className="mt-3 max-w-md text-sm text-slate-300">Full Stack Developer crafting premium digital experiences and scalable product systems.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <a href="https://github.com/hariharan-vp-14" target="_blank" rel="noreferrer" className="pill gap-2 px-3 py-2.5 transition hover:border-violet-400/60 hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/vp-hariharan14" target="_blank" rel="noreferrer" className="pill gap-2 px-3 py-2.5 transition hover:border-cyan-400/60 hover:text-white">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:hariharanvp14@gmail.com" className="pill gap-2 px-3 py-2.5 transition hover:border-sky-400/60 hover:text-white">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Hariharan V P. Crafted for premium product roles.</p>
          <a href="#home" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 transition hover:border-violet-400/60 hover:bg-white/10">
            <ArrowUp className="h-3.5 w-3.5" /> Back To Top
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
