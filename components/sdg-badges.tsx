"use client"

import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SDGBadgesProps {
  sdgs: string[]
}

export function SDGBadges({ sdgs }: SDGBadgesProps) {
  const sdgInfo: Record<string, { name: string; color: string }> = {
    "1": { name: "No Poverty", color: "bg-red-500" },
    "2": { name: "Zero Hunger", color: "bg-yellow-500" },
    "3": { name: "Good Health and Well-being", color: "bg-green-500" },
    "4": { name: "Quality Education", color: "bg-red-600" },
    "5": { name: "Gender Equality", color: "bg-orange-500" },
    "6": { name: "Clean Water and Sanitation", color: "bg-blue-400" },
    "7": { name: "Affordable and Clean Energy", color: "bg-yellow-400" },
    "8": { name: "Decent Work and Economic Growth", color: "bg-red-400" },
    "9": { name: "Industry, Innovation and Infrastructure", color: "bg-orange-600" },
    "10": { name: "Reduced Inequalities", color: "bg-pink-500" },
    "11": { name: "Sustainable Cities and Communities", color: "bg-yellow-600" },
    "12": { name: "Responsible Consumption and Production", color: "bg-amber-600" },
    "13": { name: "Climate Action", color: "bg-green-600" },
    "14": { name: "Life Below Water", color: "bg-blue-600" },
    "15": { name: "Life on Land", color: "bg-green-400" },
    "16": { name: "Peace, Justice and Strong Institutions", color: "bg-blue-500" },
    "17": { name: "Partnerships for the Goals", color: "bg-blue-700" },
  }

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {sdgs.map((sdg, index) => {
          const info = sdgInfo[sdg] || { name: `SDG ${sdg}`, color: "bg-gray-500" }

          return (
            <motion.div
              key={sdg}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`w-8 h-8 rounded-full ${info.color} flex items-center justify-center text-white font-bold text-xs cursor-help`}
                  >
                    {sdg}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    SDG {sdg}: {info.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
