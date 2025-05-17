"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Search, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Demo data for problems
const problems = [
  {
    id: 1,
    title: "Flood Early Warning System for Rural Communities",
    description:
      "Design a low-cost, community-operated early warning system for flood-prone regions with limited internet connectivity in Southeast Asia.",
    category: "Climate Action",
    organization: "Disaster Relief Foundation",
    location: "Southeast Asia",
    sdgs: ["13", "11", "9"],
    urgency: "High",
    teamSize: "3-5",
    difficulty: "Intermediate",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    title: "Accessible STEM Education for Visually Impaired Students",
    description:
      "Create innovative tools to make STEM education more accessible for students with visual impairments in resource-constrained educational settings.",
    category: "Education",
    organization: "Global Education Initiative",
    location: "Global",
    sdgs: ["4", "10", "17"],
    urgency: "Medium",
    teamSize: "2-4",
    difficulty: "Advanced",
    likes: 18,
    comments: 5,
  },
  {
    id: 3,
    title: "Mental Health Support for Refugee Youth",
    description:
      "Develop a multilingual digital solution to provide mental health support and resources for displaced youth and refugees in crisis regions.",
    category: "Health",
    organization: "Refugee Support Network",
    location: "Middle East, Europe",
    sdgs: ["3", "10", "16"],
    urgency: "High",
    teamSize: "4-6",
    difficulty: "Intermediate",
    likes: 32,
    comments: 12,
  },
  {
    id: 4,
    title: "Clean Water Access Monitoring System",
    description:
      "Build a community-based monitoring system to track clean water access and quality in rural communities, with offline capabilities and simple reporting tools.",
    category: "Water & Sanitation",
    organization: "Clean Water Alliance",
    location: "Sub-Saharan Africa",
    sdgs: ["6", "3", "11"],
    urgency: "High",
    teamSize: "3-5",
    difficulty: "Intermediate",
    likes: 27,
    comments: 9,
  },
  {
    id: 5,
    title: "Cross-Border Youth Dialogue Platform",
    description:
      "Create a digital platform that facilitates meaningful dialogue between youth from regions in conflict, with translation, moderation, and collaborative project features.",
    category: "Peace & Justice",
    organization: "Peace Building Network",
    location: "Global",
    sdgs: ["16", "10", "17"],
    urgency: "Medium",
    teamSize: "4-8",
    difficulty: "Advanced",
    likes: 21,
    comments: 7,
  },
  {
    id: 6,
    title: "Sustainable Agriculture Knowledge Sharing App",
    description:
      "Design a mobile application that helps small-scale farmers share sustainable farming practices, access market information, and adapt to changing climate conditions.",
    category: "Agriculture",
    organization: "Sustainable Farming Coalition",
    location: "South America, Africa",
    sdgs: ["2", "13", "15"],
    urgency: "Medium",
    teamSize: "3-5",
    difficulty: "Intermediate",
    likes: 19,
    comments: 6,
  },
]

// Demo data for organizations
const organizations = [
  {
    id: 1,
    name: "UN Sustainable Development Solutions Network",
    logo: "/placeholder.svg?height=64&width=64",
    problems: 24,
    focus: "Global Sustainability",
  },
  {
    id: 2,
    name: "World Health Organization",
    logo: "/placeholder.svg?height=64&width=64",
    problems: 18,
    focus: "Global Health",
  },
  {
    id: 3,
    name: "UNESCO",
    logo: "/placeholder.svg?height=64&width=64",
    problems: 15,
    focus: "Education & Culture",
  },
  {
    id: 4,
    name: "Local Government Innovation Network",
    logo: "/placeholder.svg?height=64&width=64",
    problems: 32,
    focus: "Civic Technology",
  },
]

export default function ProblemGenerator() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("explore")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [teamSizeRange, setTeamSizeRange] = useState([3, 6])
  const [showAIGenerated, setShowAIGenerated] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedProblem, setGeneratedProblem] = useState<any>(null)

  // Filter problems based on search and filters
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.organization.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || problem.category === selectedCategory

    const matchesDifficulty = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty

    const teamSize = Number.parseInt(problem.teamSize.split("-")[0])
    const matchesTeamSize = teamSize >= teamSizeRange[0] && teamSize <= teamSizeRange[1]

    return matchesSearch && matchesCategory && matchesDifficulty && matchesTeamSize
  })

  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "climate action":
        return "bg-green-500/20 text-green-700 dark:text-green-400"
      case "education":
        return "bg-blue-500/20 text-blue-700 dark:text-blue-400"
      case "health":
        return "bg-red-500/20 text-red-700 dark:text-red-400"
      case "water & sanitation":
        return "bg-cyan-500/20 text-cyan-700 dark:text-cyan-400"
      case "peace & justice":
        return "bg-purple-500/20 text-purple-700 dark:text-purple-400"
      case "agriculture":
        return "bg-amber-500/20 text-amber-700 dark:text-amber-400"
      default:
        return "bg-primary/20 text-primary"
    }
  }

  // Function to get urgency color
  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "high":
        return "bg-red-500/20 text-red-700 dark:text-red-400"
      case "medium":
        return "bg-amber-500/20 text-amber-700 dark:text-amber-400"
      case "low":
        return "bg-green-500/20 text-green-700 dark:text-green-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  // Function to get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-500/20 text-green-700 dark:text-green-400"
      case "intermediate":
        return "bg-amber-500/20 text-amber-700 dark:text-amber-400"
      case "advanced":
        return "bg-red-500/20 text-red-700 dark:text-red-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  // Function to simulate AI problem generation
  const generateProblem = () => {
    setIsGenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      const newProblem = {
        id: Math.floor(Math.random() * 1000),
        title: "AI-Generated: Microplastic Detection System for Community Water Sources",
        description:
          "Design a low-cost, portable system that communities can use to detect microplastics in their water sources. The solution should be easy to use, provide clear results, and include educational components about plastic pollution.",
        category: "Water & Sanitation",
        organization: "AI-Generated Problem",
        location: "Global",
        sdgs: ["6", "14", "4"],
        urgency: "Medium",
        teamSize: "3-5",
        difficulty: "Intermediate",
        likes: 0,
        comments: 0,
        aiGenerated: true,
      }

      setGeneratedProblem(newProblem)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Global Problem Generator</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find meaningful challenges from NGOs, local civic problems, and GovTech initiatives to solve.
        </p>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <TabsList className="h-10">
            <TabsTrigger value="explore" className="px-4">
              Explore Problems
            </TabsTrigger>
            <TabsTrigger value="generate" className="px-4">
              Generate Problem
            </TabsTrigger>
            <TabsTrigger value="organizations" className="px-4">
              Organizations
            </TabsTrigger>
            <TabsTrigger value="my-problems" className="px-4">
              My Problems
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="explore" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search problems..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Climate Action">Climate Action</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Water & Sanitation">Water & Sanitation</SelectItem>
                  <SelectItem value="Peace & Justice">Peace & Justice</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">More filters</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-lg">
            <div className="flex-1">
              <Label htmlFor="team-size" className="text-sm font-medium mb-2 block">
                Team Size: {teamSizeRange[0]} - {teamSizeRange[1]} members
              </Label>
              <Slider id="team-size" min={1} max={10} step={1} value={teamSizeRange} onValueChange={setTeamSizeRange} />
            </div>
            <div className="flex items-center gap-2">
              <Switch id="ai-generated" checked={showAIGenerated} onCheckedChange={setShowAIGenerated} />
              <Label htmlFor="ai-generated">Show AI-generated</Label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedProblem && showAIGenerated && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-md border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={getCategoryColor(generatedProblem.category)}>{generatedProblem.category}</Badge>
                      <Badge className="bg-primary/20 text-primary">AI-Generated</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2">{generatedProblem.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {generatedProblem.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">{generatedProblem.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {generatedProblem.sdgs.map((sdg: string) => (
                        <Badge key={sdg} variant="outline" className="text-xs">
                          SDG {sdg}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge className={getUrgencyColor(generatedProblem.urgency)}>{generatedProblem.urgency}</Badge>
                        <Badge className={getDifficultyColor(generatedProblem.difficulty)}>
                          {generatedProblem.difficulty}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{generatedProblem.teamSize} members</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {filteredProblems.map((problem) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: problem.id * 0.05 }}
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={getCategoryColor(problem.category)}>{problem.category}</Badge>
                      <span className="text-xs text-muted-foreground">{problem.location}</span>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2">{problem.title}</CardTitle>
                    <CardDescription>{problem.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 mb-4">{problem.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {problem.sdgs.map((sdg) => (
                        <Badge key={sdg} variant="outline" className="text-xs">
                          SDG {sdg}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Badge className={getUrgencyColor(problem.urgency)}>{problem.urgency}</Badge>
                        <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{problem.teamSize} members</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="generate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate a Custom Problem</CardTitle>
              <CardDescription>
                Use our AI to generate a custom problem based on your interests and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="interests">Your Interests</Label>
                <Input id="interests" placeholder="e.g., climate change, education, healthcare..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Your Skills</Label>
                <Input id="skills" placeholder="e.g., programming, design, data analysis..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Target Location</Label>
                <Input id="location" placeholder="e.g., global, Southeast Asia, urban areas..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Preferred Difficulty</Label>
                <Select defaultValue="intermediate">
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={generateProblem} disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Generate Problem"}
              </Button>
            </CardContent>
          </Card>

          {generatedProblem && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={getCategoryColor(generatedProblem.category)}>{generatedProblem.category}</Badge>
                    <Badge className="bg-primary/20 text-primary">AI-Generated</Badge>
                  </div>
                  <CardTitle className="mt-2">{generatedProblem.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{generatedProblem.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">SDGs</h4>
                      <div className="flex flex-wrap gap-1">
                        {generatedProblem.sdgs.map((sdg: string) => (
                          <Badge key={sdg} variant="outline">
                            SDG {sdg}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Details</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Urgency:</span>
                          <span>{generatedProblem.urgency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Difficulty:</span>
                          <span>{generatedProblem.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team Size:</span>
                          <span>{generatedProblem.teamSize}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Location:</span>
                          <span>{generatedProblem.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline">Regenerate</Button>
                    <Button>Save Problem</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="organizations" className="space-y-6">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search organizations..." className="pl-8 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map((org) => (
              <Card key={org.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
                      <img src={org.logo || "/placeholder.svg"} alt={org.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{org.name}</CardTitle>
                      <CardDescription>{org.focus}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{org.problems} active problems</span>
                    <Button variant="outline" size="sm">
                      View Problems
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-problems" className="space-y-6">
          <div className="flex justify-center items-center p-12 bg-muted/50 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">No Saved Problems Yet</h3>
              <p className="text-muted-foreground mb-4">
                Explore problems or generate a custom problem to get started.
              </p>
              <Button onClick={() => setActiveTab("explore")}>Explore Problems</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
