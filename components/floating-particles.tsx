"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface FloatingParticlesProps {
  count?: number
}

export function FloatingParticles({ count = 40 }: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const particles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 4 + 1
    const duration = Math.random() * 20 + 10
    const delay = Math.random() * 5
    const initialX = Math.random() * 100
    const initialY = Math.random() * 100

    return {
      id: i,
      size,
      duration,
      delay,
      initialX,
      initialY,
    }
  })

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
