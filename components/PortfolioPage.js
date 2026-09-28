'use client'

import AnimatedBackground from './AnimatedBackground'
import CursorFollower from './CursorFollower'
import ScrollIndicator from './ScrollIndicator'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Research from './Research'
import Achievements from './Achievements'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#050816] text-slate-50">
      <AnimatedBackground />
      <CursorFollower />
      <ScrollIndicator />
      <Navbar />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-28 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
