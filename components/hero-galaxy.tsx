"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroGalaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight / 2
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: {
      x: number
      y: number
      radius: number
      color: string
      velocity: number
    }[] = []

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      const hue = Math.random() * 60 + 200 // Blue to purple range
      const color = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.8 + 0.2})`
      const velocity = Math.random() * 0.05 + 0.02

      stars.push({ x, y, radius, color, velocity })
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Move stars
        star.x += star.velocity

        // Reset position when star goes off screen
        if (star.x > canvas.width) {
          star.x = 0
        }
      })

      // Draw galaxy spiral
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4

      for (let i = 0; i < 500; i++) {
        const angle = 0.1 * i
        const radius = (i / 500) * maxRadius
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        const hue = (i / 500) * 60 + 200 // Blue to purple gradient

        ctx.beginPath()
        ctx.arc(x, y, Math.random() * 1.5 + 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.5 + 0.1})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}
