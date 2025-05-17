"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Rocket, Award, Users } from "lucide-react"

export function EnhancedHeader() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)

  const announcements = [
    {
      title: "Global Climate Hackathon",
      description: "Join 5,000+ innovators for a 48-hour climate solutions sprint",
      icon: <Rocket className="h-4 w-4" />,
      type: "event",
    },
    {
      title: "New Challenge Posted",
      description: "UN Sustainable Cities Challenge now accepting submissions",
      icon: <Award className="h-4 w-4" />,
      type: "challenge",
    },
    {
      title: "Community Milestone",
      description: "InnovVerse X community reaches 100,000 members!",
      icon: <Users className="h-4 w-4" />,
      type: "milestone",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [announcements.length])

  return (
    <AnimatePresence>
      {showAnnouncement && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-primary/10 border-b border-primary/20 overflow-hidden"
        >
          <div className="container mx-auto py-2 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-4 w-4 text-primary mr-2" />
                <Badge
                  variant="outline"
                  className={`mr-2 ${
                    announcements[currentAnnouncement].type === "event"
                      ? "bg-blue-500/20 text-blue-700 dark:text-blue-400"
                      : announcements[currentAnnouncement].type === "challenge"
                        ? "bg-green-500/20 text-green-700 dark:text-green-400"
                        : "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {announcements[currentAnnouncement].type}
                </Badge>
                <div className="flex items-center">
                  {announcements[currentAnnouncement].icon}
                  <span className="ml-2 font-medium">{announcements[currentAnnouncement].title}:</span>
                  <span className="ml-2 text-muted-foreground hidden sm:inline">
                    {announcements[currentAnnouncement].description}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  Learn More
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowAnnouncement(false)}>
                  <span className="sr-only">Dismiss</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
