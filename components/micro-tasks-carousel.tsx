"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  CheckCircle,
  BookOpen,
  MessageSquare,
  ThumbsUp,
  FileText,
  Users,
} from "lucide-react"

export function MicroTasksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const microTasks = [
    {
      id: "task1",
      title: "Review a Project Proposal",
      description: "Provide constructive feedback on a new project idea",
      category: "Collaboration",
      xpReward: 50,
      timeEstimate: "10 min",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "task2",
      title: "Complete AI Ethics Quiz",
      description: "Test your knowledge on responsible AI development",
      category: "Learning",
      xpReward: 75,
      timeEstimate: "15 min",
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
    },
    {
      id: "task3",
      title: "Mentor a New Member",
      description: "Help onboard a new platform member with a quick chat",
      category: "Community",
      xpReward: 100,
      timeEstimate: "20 min",
      icon: <Users className="h-5 w-5 text-purple-500" />,
    },
    {
      id: "task4",
      title: "Answer Community Questions",
      description: "Share your expertise by answering 3 community questions",
      category: "Community",
      xpReward: 60,
      timeEstimate: "15 min",
      icon: <MessageSquare className="h-5 w-5 text-amber-500" />,
    },
    {
      id: "task5",
      title: "Test a Prototype",
      description: "Try out and provide feedback on a new project prototype",
      category: "Collaboration",
      xpReward: 80,
      timeEstimate: "25 min",
      icon: <ThumbsUp className="h-5 w-5 text-red-500" />,
    },
  ]

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < microTasks.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleCompleteTask = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId])

      // Simulate XP animation
      const xpElement = document.createElement("div")
      xpElement.className = "fixed text-primary font-bold text-lg z-50"
      xpElement.style.pointerEvents = "none"
      xpElement.textContent = `+${microTasks.find((t) => t.id === taskId)?.xpReward} XP`
      document.body.appendChild(xpElement)

      // Get position of the button
      const button = document.querySelector(`[data-task-id="${taskId}"]`) as HTMLElement
      if (button) {
        const rect = button.getBoundingClientRect()
        xpElement.style.left = `${rect.left + rect.width / 2 - 30}px`
        xpElement.style.top = `${rect.top}px`

        // Animate
        let start: number | null = null
        const duration = 1500

        function animate(timestamp: number) {
          if (!start) start = timestamp
          const progress = timestamp - start
          const percent = Math.min(progress / duration, 1)

          xpElement.style.transform = `translateY(${-100 * percent}px)`
          xpElement.style.opacity = `${1 - percent}`

          if (progress < duration) {
            window.requestAnimationFrame(animate)
          } else {
            document.body.removeChild(xpElement)
          }
        }

        window.requestAnimationFrame(animate)
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const cardWidth = container.querySelector(".task-card")?.clientWidth || 0
      const gap = 24 // gap-6 = 1.5rem = 24px
      container.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div ref={containerRef} className="flex gap-6 transition-transform duration-500 ease-in-out">
          {microTasks.map((task) => (
            <motion.div
              key={task.id}
              className="task-card w-full md:w-[calc(33.333%-16px)] flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{task.icon}</div>
                    <Badge>{task.category}</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{task.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{task.timeEstimate}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{task.xpReward} XP</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button
                    className="w-full"
                    data-task-id={task.id}
                    variant={completedTasks.includes(task.id) ? "secondary" : "default"}
                    onClick={() => handleCompleteTask(task.id)}
                    disabled={completedTasks.includes(task.id)}
                  >
                    {completedTasks.includes(task.id) ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Completed
                      </>
                    ) : (
                      "Complete Task"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentIndex === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex >= microTasks.length - 3}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-primary mr-2" />
            <div>
              <div className="text-sm font-medium">Daily XP Progress</div>
              <div className="flex items-center gap-2">
                <Progress value={completedTasks.length * 20} className="w-32 h-2" />
                <span className="text-xs text-muted-foreground">
                  {completedTasks.reduce((total, taskId) => {
                    const task = microTasks.find((t) => t.id === taskId)
                    return total + (task?.xpReward || 0)
                  }, 0)}
                  /500 XP
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline" size="sm">
            View All Tasks
          </Button>
        </div>
      </div>
    </div>
  )
}
