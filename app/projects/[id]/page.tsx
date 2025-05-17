"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectTimeline } from "@/components/project-timeline"
import { ProjectDiscussion } from "@/components/project-discussion"
import { ProjectResources } from "@/components/project-resources"
import { SDGBadges } from "@/components/sdg-badges"
import { FloatingParticles } from "@/components/floating-particles"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Code,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Heart,
  MessageSquare,
  Share2,
  Star,
  Users,
  Video,
} from "lucide-react"
import { projects, teamMembers } from "@/lib/demo-data"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [activeTab, setActiveTab] = useState("overview")

  // Find the project by ID
  const project = projects.find((p) => p.id === projectId) || projects[0]

  // Get team members for this project (in a real app, this would be filtered from the database)
  const projectTeam = teamMembers.slice(0, project.teamSize)

  return (
    <main className="flex-1 py-8 relative">
      <FloatingParticles count={15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
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
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground mt-2 max-w-3xl">{project.description}</p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                <span>Like</span>
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </Button>
              <Button size="sm">
                <Github className="mr-2 h-4 w-4" />
                <span>View Code</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-primary/40 mb-2">{project.title.split(" ")[0]}</div>
                  <p className="text-muted-foreground">Project visualization</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {projectTeam.map((member, i) => (
                        <Avatar key={i} className="border-2 border-background">
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{project.teamSize} team members</span> collaborating
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Globe className="mr-1 h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Updated 2 days ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Team Size</div>
                    <div className="font-medium flex items-center">
                      <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                      {project.teamSize} Members
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Started</div>
                    <div className="font-medium flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                      Mar 15, 2025
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Commits</div>
                    <div className="font-medium flex items-center">
                      <Code className="mr-1 h-4 w-4 text-muted-foreground" />
                      124 Commits
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Discussions</div>
                    <div className="font-medium flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4 text-muted-foreground" />
                      38 Messages
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-sm font-medium mb-2">SDG Alignment</div>
                  <SDGBadges
                    sdgs={
                      project.category === "Climate Tech"
                        ? ["13", "7", "15"]
                        : project.category === "EdTech"
                          ? ["4", "10", "17"]
                          : project.category === "Health"
                            ? ["3", "6", "10"]
                            : ["16", "10", "17"]
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="bg-card rounded-lg border shadow-sm p-1">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Timeline
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Team
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Discussion
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Resources
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>Detailed information about this innovation project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Problem Statement</h3>
                    <p className="text-muted-foreground">
                      {project.category === "Climate Tech" &&
                        "Climate change is causing increasingly severe weather events, including floods, droughts, and storms. Many communities lack the tools to monitor environmental conditions and respond effectively to these threats."}
                      {project.category === "EdTech" &&
                        "Educational resources and opportunities are unevenly distributed, with many students lacking access to quality learning materials and cross-cultural exchange opportunities that could enrich their educational experience."}
                      {project.category === "Health" &&
                        "Healthcare access remains a significant challenge in many regions, with barriers including distance to facilities, shortage of healthcare workers, and limited resources for preventive care and health education."}
                      {project.category === "PeaceTech" &&
                        "Conflict and misunderstanding between communities often stem from lack of communication and shared experiences. Digital divides can exacerbate these divisions, particularly among youth in conflict regions."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Solution Approach</h3>
                    <p className="text-muted-foreground">
                      {project.title} addresses these challenges through an innovative approach that combines
                      technology, community engagement, and sustainable design principles. The platform enables users
                      to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                      {project.category === "Climate Tech" && (
                        <>
                          <li>Collect and analyze environmental data through low-cost sensors</li>
                          <li>Visualize trends and patterns in air quality, water pollution, and climate indicators</li>
                          <li>Receive early warnings about potential environmental hazards</li>
                          <li>Collaborate on community-based environmental initiatives</li>
                          <li>Share best practices for climate adaptation and mitigation</li>
                        </>
                      )}
                      {project.category === "EdTech" && (
                        <>
                          <li>Connect with peers from different cultural and geographic backgrounds</li>
                          <li>Access high-quality educational resources adapted to local contexts</li>
                          <li>Participate in collaborative learning projects across borders</li>
                          <li>Develop language skills through peer-to-peer exchange</li>
                          <li>Build global competencies and cross-cultural understanding</li>
                        </>
                      )}
                      {project.category === "Health" && (
                        <>
                          <li>Access remote medical consultations with healthcare providers</li>
                          <li>Maintain secure digital health records accessible across facilities</li>
                          <li>Receive personalized health education and preventive care guidance</li>
                          <li>Connect with community health workers for local support</li>
                          <li>Track health metrics and medication adherence</li>
                        </>
                      )}
                      {project.category === "PeaceTech" && (
                        <>
                          <li>Engage in facilitated dialogue with peers from different communities</li>
                          <li>Collaborate on shared projects that address common challenges</li>
                          <li>Develop empathy and understanding through digital storytelling</li>
                          <li>Build conflict resolution skills through guided activities</li>
                          <li>Create joint initiatives that promote peace and reconciliation</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">WebRTC</Badge>
                      {project.category === "Climate Tech" && (
                        <>
                          <Badge variant="secondary">IoT Sensors</Badge>
                          <Badge variant="secondary">TensorFlow</Badge>
                          <Badge variant="secondary">GIS Mapping</Badge>
                        </>
                      )}
                      {project.category === "EdTech" && (
                        <>
                          <Badge variant="secondary">WebSockets</Badge>
                          <Badge variant="secondary">NLP</Badge>
                          <Badge variant="secondary">LMS Integration</Badge>
                        </>
                      )}
                      {project.category === "Health" && (
                        <>
                          <Badge variant="secondary">FHIR</Badge>
                          <Badge variant="secondary">Offline-First</Badge>
                          <Badge variant="secondary">End-to-End Encryption</Badge>
                        </>
                      )}
                      {project.category === "PeaceTech" && (
                        <>
                          <Badge variant="secondary">Translation API</Badge>
                          <Badge variant="secondary">Content Moderation</Badge>
                          <Badge variant="secondary">Sentiment Analysis</Badge>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Impact & Metrics</h3>
                    <p className="text-muted-foreground mb-4">
                      Our project aims to create measurable impact in the following areas:
                    </p>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>User Adoption</span>
                          <span>250 users</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Community Engagement</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Problem Resolution</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Sustainability</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Next Steps</h3>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Complete user testing with target communities</li>
                      <li>Integrate feedback from NGO partners</li>
                      <li>Optimize for low-bandwidth environments</li>
                      <li>Develop offline functionality</li>
                      <li>Prepare for pilot deployment in {project.location}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Project Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Github className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">GitHub Repository</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Live Demo</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Documentation</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Project Demo Video</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Download Project Files</span>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="md:col-span-2"
              >
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Project Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <Star className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-2 text-sm font-medium">4.0/5.0</span>
                        </div>
                        <span className="text-sm text-muted-foreground">8 reviews</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <span className="font-medium text-sm">Dr. Jane Doe</span>
                              <span className="text-xs text-muted-foreground ml-2">NGO Partner</span>
                            </div>
                            <div className="flex">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              "This project shows incredible promise for addressing real community needs. The team has
                              been responsive to feedback and the solution is well-designed for our target population."
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>MK</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <span className="font-medium text-sm">Prof. Michael Kim</span>
                              <span className="text-xs text-muted-foreground ml-2">Technical Mentor</span>
                            </div>
                            <div className="flex">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <Star className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              "Strong technical implementation with good attention to accessibility and performance.
                              Could improve on documentation and test coverage, but overall excellent work."
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        View All Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <ProjectTimeline />
            </motion.div>
          </TabsContent>

          <TabsContent value="team">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Project Team</CardTitle>
                  <CardDescription>Meet the innovators behind this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectTeam.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        className="flex items-start space-x-4"
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="text-lg">{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {member.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center mt-2">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              Message
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Profile
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="discussion">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <ProjectDiscussion />
            </motion.div>
          </TabsContent>

          <TabsContent value="resources">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <ProjectResources />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
