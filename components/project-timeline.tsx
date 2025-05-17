"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  CalendarDays,
  Check,
  Clock,
  FileText,
  Github,
  MessageSquare,
  Rocket,
  Users,
  Paintbrush,
  Code,
} from "lucide-react"

export function ProjectTimeline() {
  const timelineEvents = [
    {
      id: "1",
      date: "May 15, 2025",
      title: "Project Initiated",
      description: "Project proposal submitted and approved by the innovation committee.",
      icon: <Rocket className="h-5 w-5" />,
      status: "completed",
      user: "Sarah Johnson",
      userInitial: "SJ",
    },
    {
      id: "2",
      date: "May 20, 2025",
      title: "Team Formation",
      description: "Core team assembled with members from 3 different countries.",
      icon: <Users className="h-5 w-5" />,
      status: "completed",
      user: "Sarah Johnson",
      userInitial: "SJ",
    },
    {
      id: "3",
      date: "May 28, 2025",
      title: "Requirements Gathering",
      description: "Conducted interviews with 5 NGO partners to understand needs.",
      icon: <FileText className="h-5 w-5" />,
      status: "completed",
      user: "Alex Chen",
      userInitial: "AC",
    },
    {
      id: "4",
      date: "June 10, 2025",
      title: "Design Phase",
      description: "Completed wireframes and technical architecture.",
      icon: <Paintbrush className="h-5 w-5" />,
      status: "completed",
      user: "Maya Rodriguez",
      userInitial: "MR",
    },
    {
      id: "5",
      date: "June 25, 2025",
      title: "Development Started",
      description: "Initial codebase setup and repository created.",
      icon: <Github className="h-5 w-5" />,
      status: "completed",
      user: "Alex Chen",
      userInitial: "AC",
    },
    {
      id: "6",
      date: "July 15, 2025",
      title: "First Prototype",
      description: "MVP features implemented and ready for testing.",
      icon: <Code className="h-5 w-5" />,
      status: "in-progress",
      user: "Sarah Johnson",
      userInitial: "SJ",
    },
    {
      id: "7",
      date: "August 1, 2025",
      title: "User Testing",
      description: "Scheduled testing with target users from partner NGOs.",
      icon: <Users className="h-5 w-5" />,
      status: "upcoming",
      user: "Maya Rodriguez",
      userInitial: "MR",
    },
    {
      id: "8",
      date: "August 15, 2025",
      title: "Final Submission",
      description: "Project completion and handover to implementation partners.",
      icon: <CalendarDays className="h-5 w-5" />,
      status: "upcoming",
      user: "Sarah Johnson",
      userInitial: "SJ",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full border-4 ${
                    event.status === "completed"
                      ? "bg-green-500/20 border-green-500"
                      : event.status === "in-progress"
                        ? "bg-amber-500/20 border-amber-500"
                        : "bg-muted border-muted-foreground/30"
                  }`}
                >
                  {event.status === "completed" ? <Check className="h-5 w-5 text-green-500" /> : event.icon}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge
                        className={`${
                          event.status === "completed"
                            ? "bg-green-500/20 text-green-700 dark:text-green-400"
                            : event.status === "in-progress"
                              ? "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {event.status === "completed"
                          ? "Completed"
                          : event.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span className="mr-3">{event.date}</span>
                      <Avatar className="h-5 w-5 mr-1">
                        <AvatarFallback className="text-[10px]">{event.userInitial}</AvatarFallback>
                      </Avatar>
                      <span>{event.user}</span>
                    </div>
                  </div>

                  {event.status === "in-progress" && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>In progress</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        <span>12 comments</span>
                      </Badge>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
