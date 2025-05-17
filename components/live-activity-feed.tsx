"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Award, MessageSquare, Heart, Star, Globe, Lightbulb } from "lucide-react"

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<any[]>([])
  const [showNewActivity, setShowNewActivity] = useState(false)

  const activityTypes = [
    {
      type: "project_created",
      icon: <Rocket className="h-4 w-4 text-primary" />,
      getMessage: (data: any) => `${data.user} created a new project: "${data.project}"`,
      getBadge: () => "New Project",
    },
    {
      type: "team_joined",
      icon: <Users className="h-4 w-4 text-blue-500" />,
      getMessage: (data: any) => `${data.user} joined ${data.teamOwner}'s team for "${data.project}"`,
      getBadge: () => "Team Formation",
    },
    {
      type: "challenge_completed",
      icon: <Award className="h-4 w-4 text-green-500" />,
      getMessage: (data: any) => `${data.user} completed the "${data.challenge}" challenge`,
      getBadge: () => "Challenge",
    },
    {
      type: "mentor_session",
      icon: <Star className="h-4 w-4 text-amber-500" />,
      getMessage: (data: any) => `${data.user} scheduled a mentoring session with ${data.mentor}`,
      getBadge: () => "Mentorship",
    },
    {
      type: "impact_milestone",
      icon: <Globe className="h-4 w-4 text-purple-500" />,
      getMessage: (data: any) => `${data.project} reached ${data.milestone} beneficiaries`,
      getBadge: () => "Impact",
    },
    {
      type: "idea_shared",
      icon: <Lightbulb className="h-4 w-4 text-yellow-500" />,
      getMessage: (data: any) => `${data.user} shared a new idea: "${data.idea}"`,
      getBadge: () => "Ideation",
    },
  ]

  const generateRandomActivity = () => {
    const users = [
      { name: "Alex Chen", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Maya Rodriguez", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Jamal Ibrahim", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "Raj Patel", avatar: "/placeholder.svg?height=40&width=40" },
    ]

    const projects = ["EcoTrack", "LearnLink", "MediConnect", "PeaceDialogue", "FarmSmart", "AccessEd"]

    const challenges = [
      "Flood Early Warning System",
      "Accessible Learning for Visual Impairment",
      "Mental Health Support for Refugees",
      "Cross-Border Digital Dialogue",
    ]

    const mentors = ["Dr. Maya Patel", "Carlos Rodriguez", "Dr. Aisha Kwame", "Hiroshi Tanaka"]

    const ideas = [
      "A blockchain-based microfinance platform for rural entrepreneurs",
      "AR-powered educational content for hands-on learning",
      "Community-based disaster response coordination system",
      "Peer-to-peer mental health support network for students",
    ]

    const milestones = ["1,000", "5,000", "10,000", "25,000"]

    const randomUser = users[Math.floor(Math.random() * users.length)]
    const randomProject = projects[Math.floor(Math.random() * projects.length)]
    const randomType = activityTypes[Math.floor(Math.random() * activityTypes.length)]

    const activityData: any = {
      id: Date.now(),
      type: randomType.type,
      user: randomUser.name,
      userAvatar: randomUser.avatar,
      timestamp: "Just now",
      project: randomProject,
    }

    if (randomType.type === "team_joined") {
      const teamOwner = users.find((u) => u.name !== randomUser.name)
      activityData.teamOwner = teamOwner?.name
    } else if (randomType.type === "challenge_completed") {
      activityData.challenge = challenges[Math.floor(Math.random() * challenges.length)]
    } else if (randomType.type === "mentor_session") {
      activityData.mentor = mentors[Math.floor(Math.random() * mentors.length)]
    } else if (randomType.type === "impact_milestone") {
      activityData.milestone = milestones[Math.floor(Math.random() * milestones.length)]
    } else if (randomType.type === "idea_shared") {
      activityData.idea = ideas[Math.floor(Math.random() * ideas.length)]
    }

    return activityData
  }

  useEffect(() => {
    // Initial activities
    const initialActivities = Array(5)
      .fill(null)
      .map(() => {
        const activity = generateRandomActivity()
        // Randomize timestamp for initial activities
        const times = ["2m ago", "5m ago", "15m ago", "30m ago", "1h ago"]
        activity.timestamp = times[Math.floor(Math.random() * times.length)]
        return activity
      })

    setActivities(initialActivities)

    // Add new activities periodically
    const interval = setInterval(() => {
      const newActivity = generateRandomActivity()
      setActivities((prev) => [newActivity, ...prev.slice(0, 4)])
      setShowNewActivity(true)

      setTimeout(() => {
        setShowNewActivity(false)
      }, 3000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-primary/20 overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const activityType = activityTypes.find((t) => t.type === activity.type)

            return (
              <AnimatePresence key={activity.id} mode="popLayout">
                <motion.div
                  initial={index === 0 && showNewActivity ? { opacity: 0, height: 0, y: -20 } : false}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    index === 0 && showNewActivity ? "bg-primary/5 border border-primary/20" : ""
                  }`}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.userAvatar || "/placeholder.svg"} alt={activity.user} />
                    <AvatarFallback>{activity.user[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex items-center">
                        {activityType?.icon}
                        <span className="ml-1 text-sm font-medium">{activityType?.getMessage(activity)}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {activityType?.getBadge()}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
                  </div>

                  <div className="flex gap-1">
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
