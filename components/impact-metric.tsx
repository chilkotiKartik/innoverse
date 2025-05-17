"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ImpactMetricProps {
  title: string
  value: number
  icon: ReactNode
  description: string
  color: "primary" | "green" | "blue" | "red" | "amber" | "purple"
}

export function ImpactMetric({ title, value, icon, description, color }: ImpactMetricProps) {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "from-primary/20 to-primary/5 border-primary/20"
      case "green":
        return "from-green-500/20 to-green-500/5 border-green-500/20"
      case "blue":
        return "from-blue-500/20 to-blue-500/5 border-blue-500/20"
      case "red":
        return "from-red-500/20 to-red-500/5 border-red-500/20"
      case "amber":
        return "from-amber-500/20 to-amber-500/5 border-amber-500/20"
      case "purple":
        return "from-purple-500/20 to-purple-500/5 border-purple-500/20"
      default:
        return "from-primary/20 to-primary/5 border-primary/20"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card className={`bg-gradient-to-br ${getColorClasses()}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm">{title}</h3>
            <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">{icon}</div>
          </div>
          <div className="text-3xl font-bold mb-1">
            <AnimatedCounter value={value} />
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
