'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST API']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    title: 'Cloud',
    skills: ['AWS']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Linux', 'Render', 'Vercel']
  },
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'C++']
  }
]

const levels = {
  React: 90,
  'Next.js': 88,
  JavaScript: 95,
  'Tailwind CSS': 90,
  HTML: 95,
  CSS: 92,
  'Node.js': 85,
  Express: 82,
  'REST API': 84,
  MongoDB: 86,
  MySQL: 78,
  Firebase: 74,
  AWS: 72,
  Git: 89,
  GitHub: 92,
  Linux: 80,
  Render: 72,
  Vercel: 84,
  Java: 70,
  Python: 75,
  'C++': 68
}

export default function Skills() {
  return (
    <section id="skills" className="section-container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-violet-300">Skills</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Technical expertise</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">A modern skills portfolio shaped around real product work, scalable systems, and polished frontend execution.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="futuristic-panel rounded-[2rem] p-6"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">{group.title}</h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-violet-400/35 hover:bg-white/10">
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm font-medium text-slate-100">
                      <span>{skill}</span>
                      <span className="text-xs uppercase tracking-[0.22em] text-violet-200">{levels[skill]}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800/90">
                      <div className="h-full rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-cyan-300" style={{ width: `${levels[skill]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
