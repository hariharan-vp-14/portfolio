'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Moon, SunMedium } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')
    const activeTheme = storedTheme || 'dark'
    setTheme(activeTheme)
    document.documentElement.dataset.theme = activeTheme
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem('portfolio-theme', next)
  }

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full px-4 py-4 transition-all duration-300 sm:px-6 ${scrolled ? 'pt-3' : ''}`}>
      <div className={`mx-auto max-w-6xl rounded-full border border-white/10 bg-[#09111d]/70 px-3 py-2 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl transition-all ${scrolled ? 'shadow-[0_20px_80px_rgba(59,130,246,0.15)]' : ''}`}>
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-mono text-[0.72rem] text-white shadow-lg shadow-violet-500/30">HV</span>
            <span className="hidden sm:inline">Hariharan</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${activeSection === item.href.slice(1) ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {activeSection === item.href.slice(1) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 ring-1 ring-white/10" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10 md:inline-flex"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="mailto:hariharanvp14@gmail.com?subject=Resume%20Request" className="hidden items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-100 transition hover:border-violet-400 hover:bg-violet-500/20 md:inline-flex">
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-[1.6rem] border border-white/10 bg-[#07101c]/90 p-5 shadow-[0_20px_50px_rgba(2,6,23,0.5)] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="mailto:hariharanvp14@gmail.com?subject=Resume%20Request" className="inline-flex items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-100">
              Request Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
