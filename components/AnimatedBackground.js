'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0], opacity: [0.18, 0.95, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 60, 0], opacity: [0.12, 0.6, 0.12] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-6rem] top-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-[40%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/5"
      />
    </div>
  )
}
