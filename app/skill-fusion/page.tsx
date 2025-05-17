"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Brain, Users, Sparkles, Zap, Award, Lightbulb, Puzzle, Briefcase, BookOpen, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Demo data
const skills = [
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 78, category: "Frontend" },
  { name: "Node.js", level: 72, category: "Backend" },
  { name: "Python", level: 65, category: "Backend" },
  { name: "UI/UX Design", level: 80, category: "Design" },
  { name: "Data Analysis", level: 60, category: "Data" },
  { name: "Project Management", level: 75, category: "Soft Skills" },
  { name: "Communication", level: 90, category: "Soft Skills" },
  { name: "Problem Solving", level: 88, category: "Soft Skills" },
  { name: "Machine Learning", level: 45, category: "Data" },
]

const recommendedCoFounders = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Backend Developer",
    skills: ["Python", "Django", "AWS", "Database Design"],
    matchScore: 92,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Experienced backend developer with a passion for scalable architecture and clean code.",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "UX/UI Designer",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    matchScore: 88,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Creative designer focused on building intuitive and accessible user experiences.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Data Scientist",
    skills: ["Machine Learning", "Data Visualization", "Python", "TensorFlow"],
    matchScore: 85,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Data scientist with expertise in predictive modeling and AI applications.",
  },
]

const recommendedMentors = [
  {
    id: 1,
    name: "Dr. Emily Wong",
    role: "CTO at TechVision",
    expertise: ["System Architecture", "Tech Leadership", "Scaling Startups"],
    matchScore: 94,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "15+ years of experience scaling tech companies from seed to IPO.",
  },
  {
    id: 2,
    name: "James Harrison",
    role: "Serial Entrepreneur",
    expertise: ["Business Strategy", "Fundraising", "Product-Market Fit"],
    matchScore: 89,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Founded 3 successful startups with 2 exits. Angel investor and advisor.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Lead at GlobalTech",
    expertise: ["Product Strategy", "User Research", "Go-to-Market"],
    matchScore: 86,
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Product leader who has launched 10+ successful products in global markets.",
  },
]

const recommendedProjects = [
  {
    id: 1,
    title: "EcoTrack",
    category: "Climate Tech",
    skillsNeeded: ["React", "Node.js", "Data Visualization", "UI/UX Design"],
    matchScore: 91,
    description: "Platform for tracking and reducing carbon footprint through behavioral changes.",
  },
  {
    id: 2,
    title: "MindfulAI",
    category: "Health Tech",
    skillsNeeded: ["Machine Learning", "Python", "React", "UX Research"],
    matchScore: 87,
    description: "AI-powered mental health assistant for personalized wellness recommendations.",
  },
  {
    id: 3,
    title: "LearnConnect",
    category: "EdTech",
    skillsNeeded: ["JavaScript", "React", "Node.js", "Project Management"],
    matchScore: 93,
    description: "Peer-to-peer skill sharing platform connecting learners with experts.",
  },
]

const skillGaps = [
  { skill: "DevOps", importance: "High", resources: ["Docker Fundamentals Course", "CI/CD Pipeline Workshop"] },
  {
    skill: "Mobile Development",
    importance: "Medium",
    resources: ["React Native Tutorial", "Mobile UX Best Practices"],
  },
  { skill: "Blockchain", importance: "Low", resources: ["Web3 Basics", "Smart Contract Development"] },
]

export default function SkillFusion() {
  const [activeTab, setActiveTab] = useState("profile")
  const [searchTerm, setSearchTerm] = useState("")
  const [skillCategory, setSkillCategory] = useState("all")
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)

  // Simulate AI analysis
  useEffect(() => {
    if (analysisComplete) return

    const timer = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setAnalysisComplete(true)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => clearInterval(timer)
  }, [analysisComplete])

  // Filter skills based on category
  const filteredSkills = skills.filter((skill) => skillCategory === "all" || skill.category === skillCategory)

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">AI SkillFusion Engine</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI analyzes your skills and matches you with perfect co-founders, mentors, and cross-domain experts.
        </p>
      </div>

      {!analysisComplete ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>AI Skill Analysis in Progress</CardTitle>
            <CardDescription>
              Our AI is analyzing your profile, projects, and contributions to create your personalized skill map.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={analysisProgress} className="h-2" />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Analyzing skill patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Finding optimal matches</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Identifying growth areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Calculating match scores</span>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <p className="font-medium mb-2">Did you know?</p>
              <p>
                Our AI SkillFusion Engine uses over 500 data points to create the most accurate skill profile and
                matches.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 w-[600px]">
              <TabsTrigger value="profile">Skill Profile</TabsTrigger>
              <TabsTrigger value="cofounders">Co-Founders</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Your Skill Profile</CardTitle>
                    <CardDescription>AI-analyzed skills based on your projects and contributions</CardDescription>
                  </div>
                  <Select value={skillCategory} onValueChange={setSkillCategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Frontend">Frontend</SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Data">Data</SelectItem>
                      <SelectItem value="Soft Skills">Soft Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredSkills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Gaps</CardTitle>
                  <CardDescription>Areas to develop for optimal project matching</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillGaps.map((gap) => (
                      <div key={gap.skill} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{gap.skill}</span>
                          <Badge
                            variant={
                              gap.importance === "High"
                                ? "destructive"
                                : gap.importance === "Medium"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {gap.importance}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>Recommended resources:</p>
                          <ul className="list-disc list-inside">
                            {gap.resources.map((resource, i) => (
                              <li key={i}>{resource}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Learning Path</Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Skill Insights</CardTitle>
                <CardDescription>AI-generated insights about your skill profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Top Strengths</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your communication skills and JavaScript expertise make you an excellent frontend team lead.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Growth Opportunities</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developing your Machine Learning skills would complement your data analysis abilities.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Puzzle className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Unique Combination</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your blend of technical and soft skills positions you well for product-focused roles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cofounders">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recommended Co-Founders</h2>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search by skill or name..."
                    className="w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline">Filters</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedCoFounders.map((person) => (
                  <motion.div
                    key={person.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <img
                              src={person.avatar || "/placeholder.svg"}
                              alt={person.name}
                              className="rounded-full w-12 h-12 object-cover"
                            />
                            <div>
                              <CardTitle className="text-lg">{person.name}</CardTitle>
                              <CardDescription>{person.role}</CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-sm font-medium">Match</span>
                            <span className="text-lg font-bold text-primary">{person.matchScore}%</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{person.bio}</p>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {person.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h4 className="text-sm font-medium mb-2">Why you match</h4>
                          <p className="text-sm text-muted-foreground">
                            {person.name.split(" ")[0]}'s skills complement yours perfectly, filling gaps in
                            {person.role.includes("Backend")
                              ? " backend development"
                              : person.role.includes("Designer")
                                ? " design expertise"
                                : " data science capabilities"}
                            .
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View Profile</Button>
                        <Button>Connect</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline">View More Matches</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mentors">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recommended Mentors</h2>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search by expertise..."
                    className="w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline">Filters</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedMentors.map((mentor) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <img
                              src={mentor.avatar || "/placeholder.svg"}
                              alt={mentor.name}
                              className="rounded-full w-12 h-12 object-cover"
                            />
                            <div>
                              <CardTitle className="text-lg">{mentor.name}</CardTitle>
                              <CardDescription>{mentor.role}</CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-sm font-medium">Match</span>
                            <span className="text-lg font-bold text-primary">{mentor.matchScore}%</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{mentor.bio}</p>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h4 className="text-sm font-medium mb-2">Mentorship Focus</h4>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">1:1 Sessions</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Async Feedback</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Career Growth</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View Profile</Button>
                        <Button>Request Mentorship</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline">View More Mentors</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recommended Projects</h2>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search projects..."
                    className="w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline">Filters</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.category}</CardDescription>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-sm font-medium">Match</span>
                            <span className="text-lg font-bold text-primary">{project.matchScore}%</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{project.description}</p>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Skills Needed</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.skillsNeeded.map((skill, i) => (
                              <Badge key={i} variant={skills.some((s) => s.name === skill) ? "default" : "outline"}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <h4 className="text-sm font-medium mb-2">Why it's a good match</h4>
                          <p className="text-sm text-muted-foreground">
                            This project aligns with{" "}
                            {project.skillsNeeded.filter((skill) => skills.some((s) => s.name === skill)).length} of
                            your top skills and offers growth opportunities in areas you're developing.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Learn More</Button>
                        <Button>Join Project</Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button variant="outline">View More Projects</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
