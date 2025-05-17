"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimals?: number
}

export function AnimatedCounter({ value, duration = 2, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef({ value: 0 })

  useEffect(() => {
    if (!isInView) return

    countRef.current.value = 0
    const step = value / (duration * 60)
    let animationFrame: number

    const updateCount = () => {
      if (countRef.current.value < value) {
        countRef.current.value += step
        if (countRef.current.value > value) {
          countRef.current.value = value
        }
        setCount(countRef.current.value)
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
}
