"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Filter, Globe, MapPin, Search, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mentors } from "@/lib/demo-data"

export default function MentorVerse() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("browse")
  const [selectedExpertise, setSelectedExpertise] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")

  // Filter mentors based on search term and filters
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesExpertise =
      selectedExpertise === "all" || mentor.expertise.some((skill) => skill.includes(selectedExpertise))

    const matchesAvailability = selectedAvailability === "all" || mentor.availability === selectedAvailability

    return matchesSearch && matchesExpertise && matchesAvailability
  })

  // Upcoming sessions data
  const upcomingSessions = [
    {
      id: 1,
      mentor: "Dr. Maya Patel",
      topic: "AI Ethics in Social Impact Projects",
      date: "Tomorrow",
      time: "3:00 PM - 4:00 PM",
      attendees: 12,
    },
    {
      id: 2,
      mentor: "Carlos Rodriguez",
      topic: "Scaling Your Web Application",
      date: "May 20, 2025",
      time: "2:00 PM - 3:30 PM",
      attendees: 8,
    },
    {
      id: 3,
      mentor: "Dr. Aisha Kwame",
      topic: "Climate Tech Innovation Workshop",
      date: "May 25, 2025",
      time: "10:00 AM - 12:00 PM",
      attendees: 15,
    },
  ]

  // Past sessions data
  const pastSessions = [
    {
      id: 1,
      mentor: "Hiroshi Tanaka",
      topic: "Accessible Design for Global Users",
      date: "May 5, 2025",
      recording: true,
      notes: true,
    },
    {
      id: 2,
      mentor: "Sophia Chen",
      topic: "Blockchain for Social Good",
      date: "April 28, 2025",
      recording: true,
      notes: false,
    },
    {
      id: 3,
      mentor: "Dr. Miguel Santos",
      topic: "Healthcare Tech in Low-Resource Settings",
      date: "April 15, 2025",
      recording: false,
      notes: true,
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">MentorVerse</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Connect with domain-specific mentors, host live office hours, and get guidance from experts worldwide.
        </p>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <TabsList className="h-10">
            <TabsTrigger value="browse" className="px-4">
              Browse Mentors
            </TabsTrigger>
            <TabsTrigger value="sessions" className="px-4">
              My Sessions
            </TabsTrigger>
            <TabsTrigger value="office-hours" className="px-4">
              Office Hours
            </TabsTrigger>
            <TabsTrigger value="ai-mentor" className="px-4">
              AI Mentor
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="browse" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search mentors by name, expertise, or keywords..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Expertise</SelectItem>
                  <SelectItem value="AI">Artificial Intelligence</SelectItem>
                  <SelectItem value="Web">Web Development</SelectItem>
                  <SelectItem value="Climate">Climate Tech</SelectItem>
                  <SelectItem value="UX">UX Design</SelectItem>
                  <SelectItem value="Blockchain">Blockchain</SelectItem>
                  <SelectItem value="Health">Healthcare</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Availability</SelectItem>
                  <SelectItem value="Weekends">Weekends</SelectItem>
                  <SelectItem value="Evenings">Evenings</SelectItem>
                  <SelectItem value="Mornings">Mornings</SelectItem>
                  <SelectItem value="Flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">More filters</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img
                        src={mentor.avatar || "/placeholder.svg?height=80&width=80"}
                        alt={mentor.name}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <CardTitle>{mentor.name}</CardTitle>
                        <CardDescription>{mentor.title}</CardDescription>
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

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{mentor.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{mentor.availability}</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(mentor.reviewCount / 10)
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                      </div>
                      <span className="text-xs ml-2 text-muted-foreground">({mentor.reviewCount} reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View Profile</Button>
                    <Button>Schedule Session</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="sessions" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session) => (
                <Card key={session.id}>
                  <CardHeader>
                    <CardTitle>{session.topic}</CardTitle>
                    <CardDescription>with {session.mentor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{session.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{session.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{session.attendees} attendees</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Add to Calendar</Button>
                    <Button>Join Session</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Past Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSessions.map((session) => (
                <Card key={session.id}>
                  <CardHeader>
                    <CardTitle>{session.topic}</CardTitle>
                    <CardDescription>with {session.mentor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{session.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {session.recording && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                          Recording
                        </Badge>
                      )}
                      {session.notes && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Notes
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {session.recording && <Button variant="outline">View Recording</Button>}
                    {session.notes && <Button variant="outline">View Notes</Button>}
                    <Button>Request Follow-up</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="office-hours" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Host Your Office Hours</h2>
            <Button>Schedule New Session</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Office Hours</CardTitle>
              <CardDescription>Share your expertise with the InnovVerse community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-12 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Office Hours Scheduled</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Share your knowledge and expertise by hosting office hours for the InnovVerse community.
                  </p>
                  <Button>Schedule Your First Session</Button>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Benefits of Hosting Office Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Build your reputation as a domain expert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Connect with innovative projects and teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Earn InnovXP tokens for your contributions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Help shape the next generation of innovators</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Office Hours</CardTitle>
              <CardDescription>Popular upcoming sessions from our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">Web3 for Social Impact</h3>
                    <p className="text-sm text-muted-foreground">with Sophia Chen • Tomorrow, 4:00 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Join
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">Scaling Your Climate Tech Startup</h3>
                    <p className="text-sm text-muted-foreground">with Dr. Aisha Kwame • May 22, 2:00 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Join
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <h3 className="font-medium">UX Research for Global Products</h3>
                    <p className="text-sm text-muted-foreground">with Hiroshi Tanaka • May 24, 10:00 AM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Join
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-mentor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Mentor Bot</CardTitle>
              <CardDescription>Get instant guidance and feedback on your projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-12 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">MentorBot</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Your AI assistant for project guidance, code reviews, and learning resources. Available 24/7 to help
                    with your innovation journey.
                  </p>
                  <Button>Start Conversation</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Project Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant feedback on your project ideas, technical architecture, and implementation plans.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Code Reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit code snippets for review, optimization suggestions, and best practices guidance.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Learning Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized recommendations for tutorials, documentation, and learning materials.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border-primary/20 border p-4 rounded-lg">
                <h3 className="font-medium mb-2">Recent AI Mentor Interactions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="text-sm">Code review for EcoTrack API</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-sm">Project architecture feedback</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm">Learning path for ML basics</span>
                    </div>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
