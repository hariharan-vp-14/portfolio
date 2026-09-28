'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 220, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleHoverState = (event) => {
      const target = event.target
      if (target.closest('a, button, input, textarea')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    document.addEventListener('mouseover', handleHoverState)
    document.addEventListener('mouseout', handleHoverState)

    return () => {
      document.removeEventListener('mouseover', handleHoverState)
      document.removeEventListener('mouseout', handleHoverState)
    }
  }, [])

  return (
    <motion.div
      className={`cursor-follower ${isHovered ? 'active' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}
