"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardWelcome } from "@/components/dashboard-welcome"
import { ImpactMetric } from "@/components/impact-metric"
import { CalendarView } from "@/components/calendar-view"
import { NotificationsList } from "@/components/notifications-list"
import { TeamMembersList } from "@/components/team-members-list"
import { RecommendedProjects } from "@/components/recommended-projects"
import { ProjectCard } from "@/components/project-card"
import { ChallengeCard } from "@/components/challenge-card"
import { Brain, Building, Calendar, Filter, Globe, Heart, Lightbulb, Plus, Search, Users } from "lucide-react"
import { projects, challenges, teamMembers, notifications } from "@/lib/enhanced-demo-data"

export default function EnhancedDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Filter for user's projects
  const userProjects = projects.slice(0, 3)

  return (
    <main className="flex-1 py-8">
      <div className="container mx-auto px-4">
        <DashboardWelcome />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <TabsList className="h-10">
              <TabsTrigger value="overview" className="px-4">
                Overview
              </TabsTrigger>
              <TabsTrigger value="projects" className="px-4">
                Projects
              </TabsTrigger>
              <TabsTrigger value="impact" className="px-4">
                Impact
              </TabsTrigger>
              <TabsTrigger value="team" className="px-4">
                Team
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button className="h-10">
                <Plus className="mr-2 h-4 w-4" />
                New
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactMetric
                title="Innovation XP"
                value={1250}
                icon={<Brain className="h-5 w-5 text-primary" />}
                description="65% to next level"
                color="primary"
              />
              <ImpactMetric
                title="Projects"
                value={5}
                icon={<Lightbulb className="h-5 w-5 text-blue-500" />}
                description="3 active, 2 completed"
                color="blue"
              />
              <ImpactMetric
                title="Team Members"
                value={12}
                icon={<Users className="h-5 w-5 text-green-500" />}
                description="From 5 countries"
                color="green"
              />
              <ImpactMetric
                title="NGO Partners"
                value={3}
                icon={<Building className="h-5 w-5 text-purple-500" />}
                description="Active collaborations"
                color="purple"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Your Projects</CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="/projects">View All</a>
                      </Button>
                    </div>
                    <CardDescription>Current projects you're working on</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userProjects.slice(0, 2).map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <ProjectCard project={project} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <CalendarView />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <NotificationsList notifications={notifications} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-primary" />
                      Impact Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm">Environmental</span>
                        </div>
                        <span className="font-medium">42%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-sm">Educational</span>
                        </div>
                        <span className="font-medium">28%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                          <span className="text-sm">Health</span>
                        </div>
                        <span className="font-medium">18%</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                          <span className="text-sm">Peace & Justice</span>
                        </div>
                        <span className="font-medium">12%</span>
                      </div>

                      <div className="pt-2 flex justify-center">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          View Full Impact Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <RecommendedProjects projects={projects.slice(3)} />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">My Projects</h2>
                <p className="text-muted-foreground">Manage and track your innovation projects</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
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

          <TabsContent value="impact" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Impact Dashboard</h2>
                <p className="text-muted-foreground">Track your contribution to the UN Sustainable Development Goals</p>
              </div>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                View Timeline
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactMetric
                title="Beneficiaries Reached"
                value={1250}
                icon={<Users className="h-5 w-5 text-primary" />}
                description="Direct impact through projects"
                color="primary"
              />
              <ImpactMetric
                title="SDGs Addressed"
                value={7}
                icon={<Globe className="h-5 w-5 text-green-500" />}
                description="Across all projects"
                color="green"
              />
              <ImpactMetric
                title="Communities Served"
                value={5}
                icon={<Building className="h-5 w-5 text-blue-500" />}
                description="In 3 countries"
                color="blue"
              />
              <ImpactMetric
                title="Challenges Completed"
                value={12}
                icon={<Lightbulb className="h-5 w-5 text-amber-500" />}
                description="Real-world problems solved"
                color="amber"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Active Challenges</CardTitle>
                  <CardDescription>Current challenges you're working on</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {challenges.slice(0, 4).map((challenge, index) => (
                      <motion.div
                        key={challenge.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <ChallengeCard challenge={challenge} />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SDG Alignment</CardTitle>
                  <CardDescription>Your contribution to global goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs mr-2">
                          13
                        </div>
                        <span className="text-sm">Climate Action</span>
                      </div>
                      <span className="font-medium">35%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs mr-2">
                          4
                        </div>
                        <span className="text-sm">Quality Education</span>
                      </div>
                      <span className="font-medium">25%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs mr-2">
                          3
                        </div>
                        <span className="text-sm">Good Health</span>
                      </div>
                      <span className="font-medium">20%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mr-2">
                          16
                        </div>
                        <span className="text-sm">Peace & Justice</span>
                      </div>
                      <span className="font-medium">15%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xs mr-2">
                          17
                        </div>
                        <span className="text-sm">Partnerships</span>
                      </div>
                      <span className="font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <TeamMembersList members={teamMembers} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
