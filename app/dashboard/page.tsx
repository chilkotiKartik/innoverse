"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { ChallengeCard } from "@/components/challenge-card"
import { NGOCard } from "@/components/ngo-card"
import { ThematicRoomCard } from "@/components/thematic-room-card"
import { ImpactMetric } from "@/components/impact-metric"
import { AnimatedCounter } from "@/components/animated-counter"
import { FloatingParticles } from "@/components/floating-particles"
import { DashboardWelcome } from "@/components/dashboard-welcome"
import { CalendarView } from "@/components/calendar-view"
import { NotificationsList } from "@/components/notifications-list"
import { TeamMembersList } from "@/components/team-members-list"
import { RecommendedProjects } from "@/components/recommended-projects"
import { EmotionSensor } from "@/components/emotion-sensor"
import { TeamChat } from "@/components/team-chat"
import { MicroTasksWidget } from "@/components/micro-tasks-widget"
import { AIAssistantWidget } from "@/components/ai-assistant-widget"
import { GeographicImpactMap } from "@/components/geographic-impact-map"
import { ImpactGrowthChart } from "@/components/impact-growth-chart"
import {
  Activity,
  Award,
  BookOpen,
  Clock,
  Code,
  Lightbulb,
  Plus,
  Rocket,
  Users,
  Globe,
  BarChart,
  Heart,
  MessageSquare,
  Target,
  Sparkles,
  Filter,
  Share,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { projects, challenges, ngos, thematicRooms, teamMembers, notifications } from "@/lib/demo-data"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [progressValue, setProgressValue] = useState(0)
  const [impactStats, setImpactStats] = useState({
    projectsCompleted: 0,
    peopleImpacted: 0,
    sdgsAddressed: 0,
    collaborators: 0,
  })
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>([])
  const [joinedNGOs, setJoinedNGOs] = useState<string[]>([])
  const [joinedRooms, setJoinedRooms] = useState<string[]>([])
  const [showJoinDialog, setShowJoinDialog] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [selectedItemType, setSelectedItemType] = useState<string>("")

  // Animate progress bars on load
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(65), 500)
    return () => clearTimeout(timer)
  }, [])

  // Animate impact stats
  useEffect(() => {
    const timer = setTimeout(() => {
      setImpactStats({
        projectsCompleted: 12,
        peopleImpacted: 2450,
        sdgsAddressed: 5,
        collaborators: 28,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Filter for user's projects (in a real app, this would be based on user data)
  const userProjects = projects.slice(0, 3)
  const recommendedProjects = projects.slice(3, 6)

  const handleJoinChallenge = (challengeId: string) => {
    const challenge = challenges.find((c) => c.id === challengeId)
    setSelectedItem(challenge)
    setSelectedItemType("challenge")
    setShowJoinDialog(true)
  }

  const handleJoinNGO = (ngoId: string) => {
    const ngo = ngos.find((n) => n.id === ngoId)
    setSelectedItem(ngo)
    setSelectedItemType("ngo")
    setShowJoinDialog(true)
  }

  const handleJoinRoom = (roomId: string) => {
    const room = thematicRooms.find((r) => r.id === roomId)
    setSelectedItem(room)
    setSelectedItemType("room")
    setShowJoinDialog(true)
  }

  const confirmJoin = () => {
    if (selectedItem) {
      if (selectedItemType === "challenge") {
        setJoinedChallenges((prev) => [...prev, selectedItem.id])
      } else if (selectedItemType === "ngo") {
        setJoinedNGOs((prev) => [...prev, selectedItem.id])
      } else if (selectedItemType === "room") {
        setJoinedRooms((prev) => [...prev, selectedItem.id])
      }

      // Add notification
      const newNotification = {
        id: `notif-${Date.now()}`,
        title: `You joined ${selectedItem.title || selectedItem.name}`,
        message: `You have successfully joined ${
          selectedItemType === "challenge"
            ? "the challenge"
            : selectedItemType === "ngo"
              ? "the NGO partnership"
              : "the thematic room"
        }. Check your dashboard for next steps.`,
        time: "Just now",
        type: "update",
        sender: "System",
      }

      // In a real app, we would update the notifications state
      // For demo purposes, we'll just close the dialog
      setShowJoinDialog(false)
    }
  }

  return (
    <main className="flex-1 py-8 relative">
      <FloatingParticles count={15} />
      <div className="container mx-auto px-4 relative z-10">
        <DashboardWelcome />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 mt-8">
          <div className="bg-card rounded-lg border shadow-sm p-1">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="challenges"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Challenges
              </TabsTrigger>
              <TabsTrigger
                value="ngos"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                NGO Partners
              </TabsTrigger>
              <TabsTrigger
                value="rooms"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Thematic Rooms
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                My Team
              </TabsTrigger>
              <TabsTrigger
                value="impact"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Impact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-t-4 border-t-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Innovation XP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter value={1250} duration={1.5} />
                      <span> XP</span>
                    </div>
                    <Progress value={progressValue} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">65% to next level</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-green-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter value={3} duration={1} />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Activity className="mr-1 h-3 w-3" />
                      <span>8 contributions this week</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-blue-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Challenges Completed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter value={7} duration={1} />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Award className="mr-1 h-3 w-3" />
                      <span>2 awards received</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="overflow-hidden border-t-4 border-t-amber-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">InnovXP Tokens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <AnimatedCounter value={580} duration={1.5} />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <Sparkles className="mr-1 h-3 w-3" />
                      <span>+45 earned this month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>Your Active Projects</CardTitle>
                      <CardDescription>Current projects you're working on</CardDescription>
                    </div>
                    <Button size="sm" className="h-8">
                      <Plus className="mr-1 h-3 w-3" />
                      New
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div
                            className={`bg-gradient-to-br ${
                              project.category === "Climate Tech"
                                ? "from-green-500/20 to-green-600/20"
                                : project.category === "EdTech"
                                  ? "from-blue-500/20 to-blue-600/20"
                                  : project.category === "Health"
                                    ? "from-red-500/20 to-red-600/20"
                                    : "from-amber-500/20 to-amber-600/20"
                            } p-3 rounded-md`}
                          >
                            <Rocket
                              className={`h-5 w-5 ${
                                project.category === "Climate Tech"
                                  ? "text-green-500"
                                  : project.category === "EdTech"
                                    ? "text-blue-500"
                                    : project.category === "Health"
                                      ? "text-red-500"
                                      : "text-amber-500"
                              }`}
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <h3 className="font-medium">{project.title}</h3>
                                <Badge variant="outline" className="ml-2">
                                  {project.category}
                                </Badge>
                              </div>
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
                            <p className="text-sm text-muted-foreground">{project.description.substring(0, 120)}...</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Users className="mr-1 h-3 w-3" />
                                <span className="mr-3">{project.teamSize} members</span>
                                <Clock className="mr-1 h-3 w-3" />
                                <span>Updated 2 days ago</span>
                              </div>
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/projects/${project.id}`}>View</Link>
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/projects">View All Projects</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Hackathons and workshops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Climate Hack 2025</div>
                          <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">In 5 days</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">48-hour hackathon focused on climate solutions</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Register
                        </Button>
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">AI Ethics Workshop</div>
                          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400">In 2 weeks</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Learn about responsible AI development</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Register
                        </Button>
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">EdTech Showcase</div>
                          <Badge className="bg-amber-500/20 text-amber-700 dark:text-amber-400">In 3 weeks</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Present your education projects to investors</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">NGO Collaboration Day</div>
                          <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-400">In 1 month</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Connect with NGOs for project partnerships</p>
                        <Button variant="outline" size="sm" className="w-full">
                          RSVP
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Micro Tasks Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <MicroTasksWidget />
            </motion.div>

            {/* Notifications and Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <NotificationsList notifications={notifications} />
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <CalendarView />
              </motion.div>
            </div>

            {/* AI Assistant Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <AIAssistantWidget />
            </motion.div>

            {/* Challenges and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Challenges</CardTitle>
                    <CardDescription>Based on your skills and interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {challenges.slice(0, 3).map((challenge, index) => (
                        <motion.div
                          key={challenge.id}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div
                            className={`bg-gradient-to-br ${
                              challenge.category === "Climate Tech"
                                ? "from-green-500/20 to-green-600/20"
                                : challenge.category === "EdTech"
                                  ? "from-blue-500/20 to-blue-600/20"
                                  : challenge.category === "Health"
                                    ? "from-red-500/20 to-red-600/20"
                                    : "from-amber-500/20 to-amber-600/20"
                            } p-3 rounded-md`}
                          >
                            <Lightbulb
                              className={`h-5 w-5 ${
                                challenge.category === "Climate Tech"
                                  ? "text-green-500"
                                  : challenge.category === "EdTech"
                                    ? "text-blue-500"
                                    : challenge.category === "Health"
                                      ? "text-red-500"
                                      : "text-amber-500"
                              }`}
                            />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h3 className="font-medium">{challenge.title}</h3>
                            <p className="text-sm text-muted-foreground">{challenge.description.substring(0, 80)}...</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Badge variant="outline" className="mr-2">
                                  {challenge.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {challenge.difficulty} • {challenge.duration}
                                </span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleJoinChallenge(challenge.id)}
                                disabled={joinedChallenges.includes(challenge.id)}
                              >
                                {joinedChallenges.includes(challenge.id) ? (
                                  <>
                                    <CheckCircle className="mr-1 h-3 w-3" />
                                    Joined
                                  </>
                                ) : (
                                  "Join"
                                )}
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/challenge-lab">View All Challenges</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                    <CardDescription>Your skill development journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Code className="mr-2 h-4 w-4" />
                            <span className="font-medium">Full-Stack Development</span>
                          </div>
                          <span className="text-sm">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span className="font-medium">AI & Machine Learning</span>
                          </div>
                          <span className="text-sm">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4" />
                            <span className="font-medium">Project Management</span>
                          </div>
                          <span className="text-sm">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <Lightbulb className="mr-2 h-4 w-4" />
                            <span className="font-medium">Design Thinking</span>
                          </div>
                          <span className="text-sm">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </motion.div>

                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/learning-path">
                          View Learning Path
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recommended Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <RecommendedProjects projects={recommendedProjects} />
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">My Projects</h2>
                <p className="text-muted-foreground">Manage your innovation projects</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Available Challenges</h2>
                <p className="text-muted-foreground">Join real-world innovation challenges</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/challenge-lab">
                    <Globe className="mr-2 h-4 w-4" />
                    Browse All
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <ChallengeCard
                    challenge={challenge}
                    onJoin={() => handleJoinChallenge(challenge.id)}
                    isJoined={joinedChallenges.includes(challenge.id)}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ngos" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">NGO Partners</h2>
                <p className="text-muted-foreground">Collaborate with organizations making real impact</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Region
                </Button>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact NGOs
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ngos.map((ngo, index) => (
                <motion.div
                  key={ngo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <NGOCard ngo={ngo} onJoin={() => handleJoinNGO(ngo.id)} isJoined={joinedNGOs.includes(ngo.id)} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Thematic Innovation Rooms</h2>
                <p className="text-muted-foreground">Join specialized collaboration spaces</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter by Theme
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Room
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thematicRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <ThematicRoomCard
                    room={room}
                    onJoin={() => handleJoinRoom(room.id)}
                    isJoined={joinedRooms.includes(room.id)}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">My Team</h2>
                <p className="text-muted-foreground">Manage your collaborators and mentors</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Team Chat
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Invite Member
                </Button>
              </div>
            </div>

            <TeamMembersList members={teamMembers} />
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Impact Dashboard</h2>
                <p className="text-muted-foreground">Track your innovation impact metrics</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <BarChart className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
                <Button variant="outline">
                  <Share className="mr-2 h-4 w-4" />
                  Share Impact
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactMetric
                title="Projects Completed"
                value={impactStats.projectsCompleted}
                icon={<Rocket className="h-5 w-5 text-primary" />}
                description="Successfully delivered innovations"
                color="primary"
              />
              <ImpactMetric
                title="People Impacted"
                value={impactStats.peopleImpacted}
                icon={<Users className="h-5 w-5 text-green-500" />}
                description="Beneficiaries reached"
                color="green"
              />
              <ImpactMetric
                title="SDGs Addressed"
                value={impactStats.sdgsAddressed}
                icon={<Target className="h-5 w-5 text-blue-500" />}
                description="Sustainable Development Goals"
                color="blue"
              />
              <ImpactMetric
                title="Collaborators"
                value={impactStats.collaborators}
                icon={<Heart className="h-5 w-5 text-red-500" />}
                description="Team members and partners"
                color="red"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>SDG Impact Distribution</CardTitle>
                <CardDescription>Your contribution to Sustainable Development Goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                        <span className="font-medium">SDG 13: Climate Action</span>
                      </div>
                      <span className="text-sm">35%</span>
                    </div>
                    <Progress value={35} className="h-2 bg-muted" indicatorColor="bg-green-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                        <span className="font-medium">SDG 4: Quality Education</span>
                      </div>
                      <span className="text-sm">25%</span>
                    </div>
                    <Progress value={25} className="h-2 bg-muted" indicatorColor="bg-blue-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                        <span className="font-medium">SDG 3: Good Health & Well-being</span>
                      </div>
                      <span className="text-sm">20%</span>
                    </div>
                    <Progress value={20} className="h-2 bg-muted" indicatorColor="bg-red-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                        <span className="font-medium">SDG 16: Peace, Justice & Strong Institutions</span>
                      </div>
                      <span className="text-sm">15%</span>
                    </div>
                    <Progress value={15} className="h-2 bg-muted" indicatorColor="bg-amber-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                        <span className="font-medium">SDG 5: Gender Equality</span>
                      </div>
                      <span className="text-sm">5%</span>
                    </div>
                    <Progress value={5} className="h-2 bg-muted" indicatorColor="bg-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GeographicImpactMap />
              <ImpactGrowthChart />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Components */}
      <EmotionSensor />
      <TeamChat />
    </main>
  )
}
