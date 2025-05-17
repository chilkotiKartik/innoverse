"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Award, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function MicroTasksWidget() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [xpTotal, setXpTotal] = useState(125)
  const [xpAnimations, setXpAnimations] = useState<{ id: string; x: number; y: number; value: number }[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const microTasks = [
    {
      id: "task1",
      title: "Review a Project Proposal",
      xpReward: 50,
      timeEstimate: "10 min",
      category: "Collaboration",
    },
    {
      id: "task2",
      title: "Complete AI Ethics Quiz",
      xpReward: 75,
      timeEstimate: "15 min",
      category: "Learning",
    },
    {
      id: "task3",
      title: "Mentor a New Member",
      xpReward: 100,
      timeEstimate: "20 min",
      category: "Community",
    },
    {
      id: "task4",
      title: "Share Project Progress",
      xpReward: 25,
      timeEstimate: "5 min",
      category: "Collaboration",
    },
  ]

  const handleCompleteTask = (taskId: string) => {
    if (!completedTasks.includes(taskId)) {
      const task = microTasks.find((t) => t.id === taskId)
      if (!task) return

      setCompletedTasks([...completedTasks, taskId])
      setXpTotal((prev) => prev + task.xpReward)

      // Get position of the button for animation
      const button = document.querySelector(`[data-task-id="${taskId}"]`) as HTMLElement
      if (button && containerRef.current) {
        const rect = button.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()

        // Create XP animation
        const newAnimation = {
          id: `anim-${Date.now()}`,
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
          value: task.xpReward,
        }

        setXpAnimations((prev) => [...prev, newAnimation])

        // Remove animation after it completes
        setTimeout(() => {
          setXpAnimations((prev) => prev.filter((a) => a.id !== newAnimation.id))
        }, 2000)
      }
    }
  }

  // Level calculation
  const level = Math.floor(xpTotal / 100) + 1
  const xpForNextLevel = level * 100
  const xpProgress = ((xpTotal % 100) / 100) * 100

  return (
    <Card className="w-full h-full" ref={containerRef}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Daily Micro Tasks</CardTitle>
            <CardDescription>Complete tasks to earn XP and level up</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Level</div>
            <div className="text-2xl font-bold">{level}</div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1">
            <span>XP: {xpTotal}</span>
            <span>{xpForNextLevel} XP needed</span>
          </div>
          <Progress value={xpProgress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {microTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 border rounded-lg transition-all ${
              completedTasks.includes(task.id) ? "bg-primary/10 border-primary/20" : "hover:border-primary/50"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium flex items-center">
                  {completedTasks.includes(task.id) && <CheckCircle className="h-4 w-4 text-primary mr-2" />}
                  {task.title}
                </h4>
                <div className="flex items-center mt-1 space-x-3 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {task.timeEstimate}
                  </span>
                  <span className="flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    {task.xpReward} XP
                  </span>
                </div>
              </div>
              <Badge variant="outline">{task.category}</Badge>
            </div>
            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                variant={completedTasks.includes(task.id) ? "outline" : "default"}
                onClick={() => handleCompleteTask(task.id)}
                disabled={completedTasks.includes(task.id)}
                data-task-id={task.id}
              >
                {completedTasks.includes(task.id) ? "Completed" : "Complete Task"}
              </Button>
            </div>
          </div>
        ))}

        {/* XP Animations */}
        {xpAnimations.map((anim) => (
          <div
            key={anim.id}
            className="absolute pointer-events-none text-primary font-bold animate-float-up"
            style={{
              left: `${anim.x}px`,
              top: `${anim.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            +{anim.value} XP
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full" size="sm">
          View All Tasks <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
