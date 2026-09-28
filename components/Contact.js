'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-violet-300">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Let’s build something great</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">Reach out for product work, collaborations, or ambitious engineering opportunities.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
          <motion.form whileHover={{ y: -3 }} transition={{ duration: 0.3 }} onSubmit={(e) => e.preventDefault()} className="futuristic-panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Name</span>
                <input type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Email</span>
                <input type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20" placeholder="your@email.com" />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-slate-200">
              <span>Subject</span>
              <input type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20" placeholder="Project details" />
            </label>
            <label className="mt-4 block space-y-2 text-sm text-slate-200">
              <span>Message</span>
              <textarea rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20" placeholder="Tell me more about your request..."></textarea>
            </label>
            <button type="submit" className="futuristic-button mt-6 bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-950">
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>

          <div className="futuristic-panel rounded-[2rem] p-6 md:p-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.36em] text-violet-300">Reach out</p>
              <h3 className="text-3xl font-semibold text-white">Stay in touch</h3>
              <p className="text-sm leading-7 text-slate-300">I’m available for full stack roles, freelance collaborations, and research partnerships.</p>
            </div>

            <div className="mt-6 grid gap-4 text-sm text-slate-200">
              <a href="mailto:hariharanvp14@gmail.com" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-violet-400/40 hover:bg-white/10">
                <div className="inline-flex items-center gap-3 text-white">
                  <Mail className="h-5 w-5 text-violet-300" />
                  <span>Email</span>
                </div>
                <p className="mt-3 text-slate-300">hariharanvp14@gmail.com</p>
              </a>
              <a href="https://www.linkedin.com/in/vp-hariharan14" target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-white/10">
                <div className="inline-flex items-center gap-3 text-white">
                  <Linkedin className="h-5 w-5 text-cyan-300" />
                  <span>LinkedIn</span>
                </div>
                <p className="mt-3 text-slate-300">linkedin.com/in/vp-hariharan14</p>
              </a>
              <a href="https://github.com/hariharan-vp-14" target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-violet-400/40 hover:bg-white/10">
                <div className="inline-flex items-center gap-3 text-white">
                  <Github className="h-5 w-5 text-slate-100" />
                  <span>GitHub</span>
                </div>
                <p className="mt-3 text-slate-300">github.com/hariharan-vp-14</p>
              </a>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="inline-flex items-center gap-3 text-white">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  <span>Location</span>
                </div>
                <p className="mt-3 text-slate-300">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
