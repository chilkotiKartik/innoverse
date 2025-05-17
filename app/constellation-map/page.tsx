"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Network, Users, Code, Lightbulb, Zap, Globe, ArrowRight, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { projects } from "@/lib/demo-data"

export default function ConstellationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const [zoomLevel, setZoomLevel] = useState([50])

  // Enhanced project data with positions
  const enhancedProjects = projects.map((project, index) => {
    // Create a spiral pattern
    const angle = index * 0.5
    const radius = 100 + index * 20
    const x = Math.cos(angle) * radius + 400
    const y = Math.sin(angle) * radius + 400

    return {
      ...project,
      x,
      y,
      radius: 20 + (project.teamSize || 3) * 2,
      color: getProjectColor(project.category),
      connections: getRandomConnections(index),
    }
  })

  function getProjectColor(category: string) {
    const colors: Record<string, string> = {
      "Climate Tech": "#4ade80",
      "Health Tech": "#60a5fa",
      EdTech: "#f97316",
      FinTech: "#a78bfa",
      "AI & ML": "#f43f5e",
      Blockchain: "#facc15",
      "Social Impact": "#06b6d4",
    }
    return colors[category] || "#94a3b8"
  }

  function getRandomConnections(index: number) {
    // Create 2-4 random connections to other projects
    const connections = []
    const numConnections = Math.floor(Math.random() * 3) + 2

    for (let i = 0; i < numConnections; i++) {
      let connectedIndex
      do {
        connectedIndex = Math.floor(Math.random() * projects.length)
      } while (connectedIndex === index)

      connections.push(connectedIndex)
    }

    return connections
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 800
    canvas.height = 800

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections first (so they appear behind nodes)
    ctx.strokeStyle = "rgba(148, 163, 184, 0.2)"
    ctx.lineWidth = 1

    enhancedProjects.forEach((project, index) => {
      project.connections.forEach((connectedIndex) => {
        const connectedProject = enhancedProjects[connectedIndex]
        ctx.beginPath()
        ctx.moveTo(project.x, project.y)
        ctx.lineTo(connectedProject.x, connectedProject.y)
        ctx.stroke()
      })
    })

    // Draw project nodes
    enhancedProjects.forEach((project) => {
      // Skip if filtered out
      if (filter !== "all" && project.category !== filter) return

      // Skip if not matching search
      if (searchTerm && !project.title.toLowerCase().includes(searchTerm.toLowerCase())) return

      // Draw project circle
      ctx.beginPath()
      ctx.arc(project.x, project.y, project.radius, 0, Math.PI * 2)
      ctx.fillStyle = project.color
      ctx.fill()

      // Draw glow effect
      ctx.beginPath()
      ctx.arc(project.x, project.y, project.radius + 5, 0, Math.PI * 2)
      ctx.fillStyle = `${project.color}33` // Add transparency
      ctx.fill()

      // Add pulsing effect to selected project
      if (selectedProject && selectedProject.id === project.id) {
        ctx.beginPath()
        ctx.arc(project.x, project.y, project.radius + 10, 0, Math.PI * 2)
        ctx.fillStyle = `${project.color}22` // More transparent
        ctx.fill()
      }
    })

    // Add click handler to canvas
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if a project was clicked
      for (const project of enhancedProjects) {
        const dx = project.x - x
        const dy = project.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < project.radius) {
          setSelectedProject(project)
          return
        }
      }

      // If no project was clicked, clear selection
      setSelectedProject(null)
    }

    canvas.addEventListener("click", handleCanvasClick)

    return () => {
      canvas.removeEventListener("click", handleCanvasClick)
    }
  }, [enhancedProjects, selectedProject, filter, searchTerm])

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Idea Constellation Map</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Visualize projects like galaxies. Connect with team members, explore tech stacks, and discover nearby
          innovation universes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card rounded-xl p-4 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search projects..."
                className="w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Climate Tech">Climate Tech</SelectItem>
                  <SelectItem value="Health Tech">Health Tech</SelectItem>
                  <SelectItem value="EdTech">EdTech</SelectItem>
                  <SelectItem value="FinTech">FinTech</SelectItem>
                  <SelectItem value="AI & ML">AI & ML</SelectItem>
                  <SelectItem value="Blockchain">Blockchain</SelectItem>
                  <SelectItem value="Social Impact">Social Impact</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Zoom:</span>
              <Slider className="w-32" value={zoomLevel} onValueChange={setZoomLevel} max={100} step={1} />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background h-[600px] flex items-center justify-center">
            <canvas ref={canvasRef} className="cursor-pointer" style={{ transform: `scale(${zoomLevel[0] / 50})` }} />

            <div className="absolute bottom-4 right-4 flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Search for connections</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Filter connections</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="absolute top-4 left-4 flex gap-2">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#4ade80]"></div>
                  <span className="text-xs">Climate Tech</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#60a5fa]"></div>
                  <span className="text-xs">Health Tech</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#f97316]"></div>
                  <span className="text-xs">EdTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border shadow-sm">
          {selectedProject ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: selectedProject.color }}></div>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">{selectedProject.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Team Size</span>
                    </div>
                    <p className="text-lg font-semibold">{selectedProject.teamSize || "N/A"}</p>
                  </div>

                  <div className="bg-background rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Tech Stack</span>
                    </div>
                    <p className="text-lg font-semibold">{selectedProject.techStack?.join(", ") || "N/A"}</p>
                  </div>

                  <div className="bg-background rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Innovation Score</span>
                    </div>
                    <p className="text-lg font-semibold">{Math.floor(Math.random() * 30) + 70}/100</p>
                  </div>

                  <div className="bg-background rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Connections</span>
                    </div>
                    <p className="text-lg font-semibold">{selectedProject.connections.length}</p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <h3 className="text-lg font-semibold mb-2">Connected Projects</h3>
                  <ul className="space-y-2">
                    {selectedProject.connections.map((connIndex: number) => (
                      <li key={connIndex} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: enhancedProjects[connIndex].color }}
                        ></div>
                        <span>{enhancedProjects[connIndex].title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">View Team</Button>
                  <Button asChild>
                    <Link href={`/projects/${selectedProject.id}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <Globe className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Explore the Constellation</h3>
              <p className="text-muted-foreground mb-6">
                Click on any project node to view detailed information and connections.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Button variant="outline" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Discover
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  Connect
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
