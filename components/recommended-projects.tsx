"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Lightbulb } from "lucide-react"
import type { Project } from "@/lib/types"

interface RecommendedProjectsProps {
  projects: Project[]
}

export function RecommendedProjects({ projects }: RecommendedProjectsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-primary" />
          Recommended Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-md border-primary/10 hover:border-primary/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge
                      className={`${
                        project.status === "In Progress"
                          ? "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                          : project.status === "Active"
                            ? "bg-green-500/20 text-green-700 dark:text-green-400"
                            : project.status === "Planning"
                              ? "bg-blue-500/20 text-blue-700 dark:text-blue-400"
                              : "bg-purple-500/20 text-purple-700 dark:text-purple-400"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="font-medium mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {project.teamSize} members • {project.location}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
