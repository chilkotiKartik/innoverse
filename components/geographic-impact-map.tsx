"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Globe, Lightbulb, Leaf, Droplet, Sun } from "lucide-react"

interface RegionData {
  id: string
  name: string
  projects: number
  users: number
  impact: number
  sdgs: string[]
  color: string
  position: { x: number; y: number }
}

const regions: RegionData[] = [
  {
    id: "na",
    name: "North America",
    projects: 156,
    users: 2450,
    impact: 78,
    sdgs: ["Clean Water", "Climate Action", "Quality Education"],
    color: "bg-blue-500",
    position: { x: 20, y: 30 },
  },
  {
    id: "sa",
    name: "South America",
    projects: 89,
    users: 1230,
    impact: 65,
    sdgs: ["Zero Hunger", "Life on Land", "Sustainable Cities"],
    color: "bg-green-500",
    position: { x: 30, y: 55 },
  },
  {
    id: "eu",
    name: "Europe",
    projects: 203,
    users: 3120,
    impact: 82,
    sdgs: ["Renewable Energy", "Innovation", "Gender Equality"],
    color: "bg-purple-500",
    position: { x: 48, y: 28 },
  },
  {
    id: "af",
    name: "Africa",
    projects: 112,
    users: 1870,
    impact: 71,
    sdgs: ["Clean Water", "No Poverty", "Quality Education"],
    color: "bg-yellow-500",
    position: { x: 48, y: 45 },
  },
  {
    id: "as",
    name: "Asia",
    projects: 245,
    users: 4230,
    impact: 76,
    sdgs: ["Clean Energy", "Sustainable Cities", "Climate Action"],
    color: "bg-red-500",
    position: { x: 70, y: 35 },
  },
  {
    id: "oc",
    name: "Oceania",
    projects: 67,
    users: 890,
    impact: 69,
    sdgs: ["Life Below Water", "Climate Action", "Clean Energy"],
    color: "bg-teal-500",
    position: { x: 85, y: 60 },
  },
]

export function GeographicImpactMap() {
  const [activeRegion, setActiveRegion] = useState<RegionData | null>(null)
  const [view, setView] = useState<"projects" | "users" | "impact">("projects")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const getIconForSDG = (sdg: string) => {
    switch (sdg) {
      case "Clean Water":
      case "Life Below Water":
        return <Droplet className="h-4 w-4" />
      case "Climate Action":
      case "Life on Land":
        return <Leaf className="h-4 w-4" />
      case "Clean Energy":
      case "Renewable Energy":
        return <Sun className="h-4 w-4" />
      case "Quality Education":
      case "Innovation":
        return <Lightbulb className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Geographic Impact Map
        </CardTitle>
        <CardDescription>Visualize your global impact across different regions</CardDescription>
        <Tabs defaultValue="projects" className="w-full" onValueChange={(v) => setView(v as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="impact">Impact Score</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] w-full bg-slate-100 dark:bg-slate-900 rounded-md overflow-hidden">
          {/* World Map Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=800&width=1200')] bg-no-repeat bg-center bg-contain"></div>

          {/* Region Markers */}
          <TooltipProvider>
            {regions.map((region) => (
              <Tooltip key={region.id}>
                <TooltipTrigger asChild>
                  <button
                    className={`absolute rounded-full border-2 border-white shadow-md transition-all duration-500 ${region.color} ${
                      isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    } ${activeRegion?.id === region.id ? "ring-4 ring-white ring-opacity-50" : ""}`}
                    style={{
                      left: `${region.position.x}%`,
                      top: `${region.position.y}%`,
                      width:
                        view === "projects"
                          ? `${Math.max(20, region.projects / 10)}px`
                          : view === "users"
                            ? `${Math.max(20, region.users / 150)}px`
                            : `${Math.max(20, region.impact / 3)}px`,
                      height:
                        view === "projects"
                          ? `${Math.max(20, region.projects / 10)}px`
                          : view === "users"
                            ? `${Math.max(20, region.users / 150)}px`
                            : `${Math.max(20, region.impact / 3)}px`,
                      transition: "all 0.5s ease-in-out",
                      transitionDelay: `${(Number.parseInt(region.id, 36) % 5) * 100}ms`,
                    }}
                    onClick={() => setActiveRegion(region)}
                  ></button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="p-1">
                    <p className="font-bold">{region.name}</p>
                    <p className="text-sm">{region.projects} Projects</p>
                    <p className="text-sm">{region.users} Users</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          {/* Region Details Panel */}
          {activeRegion && (
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-800 p-4 shadow-lg rounded-t-lg transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{activeRegion.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Projects</p>
                      <p className="text-xl font-bold">{activeRegion.projects}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Users</p>
                      <p className="text-xl font-bold">{activeRegion.users}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Impact</p>
                      <p className="text-xl font-bold">{activeRegion.impact}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Top SDGs:</p>
                  <div className="flex flex-wrap gap-1">
                    {activeRegion.sdgs.map((sdg) => (
                      <Badge key={sdg} variant="outline" className="flex items-center gap-1">
                        {getIconForSDG(sdg)}
                        <span>{sdg}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
