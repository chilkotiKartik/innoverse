"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Demo events
  const events = [
    { day: 5, title: "Team Meeting", type: "meeting" },
    { day: 8, title: "Mentor Session", type: "mentor" },
    { day: 12, title: "Project Deadline", type: "deadline" },
    { day: 15, title: "NGO Workshop", type: "workshop" },
    { day: 20, title: "Hackathon", type: "event" },
    { day: 25, title: "Demo Day", type: "presentation" },
  ]

  const getEventForDay = (day: number) => {
    return events.find((event) => event.day === day)
  }

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-500/20 text-blue-700 dark:text-blue-400"
      case "mentor":
        return "bg-purple-500/20 text-purple-700 dark:text-purple-400"
      case "deadline":
        return "bg-red-500/20 text-red-700 dark:text-red-400"
      case "workshop":
        return "bg-green-500/20 text-green-700 dark:text-green-400"
      case "event":
        return "bg-amber-500/20 text-amber-700 dark:text-amber-400"
      case "presentation":
        return "bg-primary/20 text-primary"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Calendar</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-medium">
            {monthName} {year}
          </div>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-xs font-medium text-muted-foreground py-1">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-14 p-1"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const event = getEventForDay(day)
            const isToday =
              day === new Date().getDate() &&
              currentMonth.getMonth() === new Date().getMonth() &&
              currentMonth.getFullYear() === new Date().getFullYear()

            return (
              <motion.div
                key={`day-${day}`}
                className={`h-14 p-1 rounded-md border ${isToday ? "border-primary" : "border-transparent"} hover:bg-muted/50 transition-colors`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full flex flex-col">
                  <div className={`text-xs ${isToday ? "font-bold text-primary" : "text-muted-foreground"}`}>{day}</div>
                  {event && (
                    <div className="mt-auto">
                      <Badge className={`text-xs w-full justify-center ${getEventBadgeColor(event.type)}`}>
                        {event.title}
                      </Badge>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
