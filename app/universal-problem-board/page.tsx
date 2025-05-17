"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FloatingParticles } from "@/components/floating-particles"
import { Building, Filter, MessageSquare, Plus, Search, ThumbsUp } from "lucide-react"

export default function UniversalProblemBoardPage() {
  const [activeTab, setActiveTab] = useState("all")

  const problems = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
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
    {
      id: "7",
      title: "Women's Safety Navigation Tool",
      description:
        "Develop a mobile application that helps women navigate urban areas safely, with community reporting of unsafe areas, emergency alerts, and resource connections.",
      category: "Gender Equality",
      organization: "Women's Safety Initiative",
      location: "Urban Centers Globally",
      sdgs: ["5", "11", "16"],
      urgency: "High",
      teamSize: "3-6",
      difficulty: "Intermediate",
      likes: 35,
      comments: 14,
    },
    {
      id: "8",
      title: "Plastic Waste Reduction Tracker",
      description:
        "Create a citizen science app that helps communities track, measure, and reduce plastic waste through gamification and community challenges.",
      category: "Waste Management",
      organization: "Ocean Conservation Group",
      location: "Coastal Communities",
      sdgs: ["14", "12", "11"],
      urgency: "Medium",
      teamSize: "2-4",
      difficulty: "Beginner",
      likes: 16,
      comments: 4,
    },
  ]

  const filteredProblems =
    activeTab === "all" ? problems : problems.filter((p) => p.category.toLowerCase() === activeTab.toLowerCase())

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
      case "gender equality":
        return "bg-pink-500/20 text-pink-700 dark:text-pink-400"
      case "waste management":
        return "bg-teal-500/20 text-teal-700 dark:text-teal-400"
      default:
        return "bg-primary/20 text-primary"
    }
  }

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

  return (
    <main className="flex-1 py-12 relative">
      <FloatingParticles count={20} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Universal Problem Board
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover real-world challenges from NGOs, governments, and communities that need innovative solutions
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search problems..." className="pl-8 w-full" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Submit Problem
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="flex overflow-x-auto pb-2 mb-2">
            <TabsTrigger value="all">All Problems</TabsTrigger>
            <TabsTrigger value="climate action">Climate Action</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="water & sanitation">Water & Sanitation</TabsTrigger>
            <TabsTrigger value="peace & justice">Peace & Justice</TabsTrigger>
            <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
            <TabsTrigger value="gender equality">Gender Equality</TabsTrigger>
            <TabsTrigger value="waste management">Waste Management</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className={getCategoryColor(problem.category)}>{problem.category}</Badge>
                      <Badge className={getUrgencyColor(problem.urgency)}>{problem.urgency} Priority</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 mt-2">{problem.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Building className="h-3 w-3 mr-1" />
                      {problem.organization}
                    </CardDescription>
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

                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span className="mr-4">Location: {problem.location}</span>
                      <span>Team: {problem.teamSize} members</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{problem.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{problem.comments}</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Tabs>
      </div>
    </main>
  )
}
