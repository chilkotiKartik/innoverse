"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Rocket,
  Brain,
  Target,
  Award,
  Clock,
  ArrowRight,
  Calendar,
  Sparkles,
  BookOpen,
  Users,
  Star,
} from "lucide-react"

export function TimeCapsuleGuidance() {
  const [activeTab, setActiveTab] = useState("journey")

  return (
    <Card className="border-primary/20 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 rounded-none">
            <TabsTrigger value="journey" className="rounded-none data-[state=active]:bg-primary/10">
              <Rocket className="h-4 w-4 mr-2" />
              Your Journey
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="rounded-none data-[state=active]:bg-primary/10">
              <Brain className="h-4 w-4 mr-2" />
              Recommendations
            </TabsTrigger>
            <TabsTrigger value="milestones" className="rounded-none data-[state=active]:bg-primary/10">
              <Target className="h-4 w-4 mr-2" />
              Milestones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journey" className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Your Innovation Path</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-green-500/20 p-2 rounded-full mr-3">
                          <BookOpen className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">Learning Phase</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">Completed</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium">Team Formation</span>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400">In Progress</Badge>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                          <Rocket className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="font-medium">Project Development</span>
                      </div>
                      <Badge className="bg-muted text-muted-foreground">Upcoming</Badge>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                          <Award className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="font-medium">Impact & Recognition</span>
                      </div>
                      <Badge className="bg-muted text-muted-foreground">Upcoming</Badge>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-muted/30 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                <div className="space-y-4">
                  <motion.div
                    className="bg-card p-3 rounded-lg border shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Complete Your Team</span>
                      </div>
                      <Badge>High Priority</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Find 2 more team members with complementary skills to complete your project team.
                    </p>
                    <Button size="sm" className="w-full">
                      Find Team Members
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </motion.div>

                  <motion.div
                    className="bg-card p-3 rounded-lg border shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="font-medium">Schedule Mentor Session</span>
                      </div>
                      <Badge variant="outline">Medium Priority</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Book a session with a mentor to refine your project concept and technical approach.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Browse Mentors
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Recommended for You</h3>

                <motion.div
                  className="bg-card p-4 rounded-lg border shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Badge className="mb-2 bg-green-500/20 text-green-700 dark:text-green-400">Challenge</Badge>
                  <h4 className="font-bold mb-1">UN Sustainable Cities Challenge</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Perfect match for your urban planning and sustainability interests.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>6 weeks</span>
                    </div>
                    <Button size="sm">View Challenge</Button>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-card p-4 rounded-lg border shadow-sm"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Badge className="mb-2 bg-blue-500/20 text-blue-700 dark:text-blue-400">Mentor</Badge>
                  <h4 className="font-bold mb-1">Dr. Maya Patel</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI Research Scientist with expertise in your project domain.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 mr-1 text-amber-500" />
                      <Star className="h-3 w-3 mr-1 text-amber-500" />
                      <Star className="h-3 w-3 mr-1 text-amber-500" />
                      <Star className="h-3 w-3 mr-1 text-amber-500" />
                      <Star className="h-3 w-3 mr-1 text-amber-500" />
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Skill Development</h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">AI & Machine Learning</span>
                      </div>
                      <span className="text-sm">Recommended</span>
                    </div>
                    <div className="bg-muted h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[35%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current: Beginner</span>
                      <span>Target: Intermediate</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      View Learning Path
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="font-medium">Project Management</span>
                      </div>
                      <span className="text-sm">Recommended</span>
                    </div>
                    <div className="bg-muted h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[60%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current: Intermediate</span>
                      <span>Target: Advanced</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      View Learning Path
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="p-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Your Innovation Milestones</h3>

              <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">Joined InnovVerse X</h4>
                      <Badge variant="outline">2 months ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Started your innovation journey and completed onboarding.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">Completed First Challenge</h4>
                      <Badge variant="outline">1 month ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Successfully completed the "Climate Data Visualization" challenge.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">Started Project Team</h4>
                      <Badge variant="outline">2 weeks ago</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Created "EcoTrack" project and recruited first team member.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border border-dashed">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-muted-foreground">Complete Project Prototype</h4>
                      <Badge variant="outline">Upcoming</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Develop and test the first working prototype of your solution.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] top-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border border-dashed">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-muted-foreground">Present at Innovation Showcase</h4>
                      <Badge variant="outline">Upcoming</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Showcase your project to industry experts and potential partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
