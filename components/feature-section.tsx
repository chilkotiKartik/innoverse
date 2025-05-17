"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureSectionProps {
  icon: ReactNode
  title: string
  description: string
  align: "left" | "right"
}

export function FeatureSection({ icon, title, description, align }: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`flex flex-col ${align === "right" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex-1">
          <div className="bg-primary/10 w-16 h-16 rounded-md flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center">
            <div className="text-4xl text-primary/40">{title.split(" ")[0]}</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
