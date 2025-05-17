"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Search,
  Filter,
  MapPin,
  Users,
  Calendar,
  Award,
  Clock,
  Briefcase,
  Heart,
  Globe,
  CheckCircle,
} from "lucide-react"
import { challengeLabData } from "@/lib/challenge-lab-data"

export default function ChallengeLabPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedImpact, setSelectedImpact] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>([])
  const [showJoinDialog, setShowJoinDialog] = useState(false)
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleJoinChallenge = (challengeId: string) => {
    const challenge = challengeLabData.challenges.find((c) => c.id === challengeId)
    setSelectedChallenge(challenge)
    setShowJoinDialog(true)
  }

  const confirmJoin = () => {
    if (selectedChallenge) {
      setJoinedChallenges((prev) => [...prev, selectedChallenge.id])
      setShowJoinDialog(false)
    }
  }

  const filteredChallenges = challengeLabData.challenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || challenge.category === selectedCategory
    const matchesLocation = selectedLocation === "all" || challenge.location === selectedLocation
    const matchesImpact = selectedImpact === "all" || challenge.impactAreas.includes(selectedImpact)

    return matchesSearch && matchesCategory && matchesLocation && matchesImpact
  })

  const alternativeActivities = challengeLabData.alternativeActivities

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Real-World Challenge Lab</h1>
            <p className="text-muted-foreground">Apply your skills to meaningful projects and make a real impact</p>
          </div>
          <Button className="mt-4 md:mt-0" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search challenges by keyword, organization, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            {showFilters && (
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="local">Local</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedImpact} onValueChange={setSelectedImpact}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Impact Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Impact Areas</SelectItem>
                    <SelectItem value="sdg1">No Poverty</SelectItem>
                    <SelectItem value="sdg4">Quality Education</SelectItem>
                    <SelectItem value="sdg6">Clean Water</SelectItem>
                    <SelectItem value="sdg13">Climate Action</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <TabsTrigger
              value="challenges"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Live Challenges
            </TabsTrigger>
            <TabsTrigger
              value="alternatives"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Alternative Contributions
            </TabsTrigger>
            <TabsTrigger
              value="joined"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              My Contributions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="mb-2">
                          {challenge.category}
                        </Badge>
                        <Badge
                          variant={
                            challenge.difficulty === "Beginner"
                              ? "default"
                              : challenge.difficulty === "Intermediate"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{challenge.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={`/placeholder.svg?height=24&width=24`} />
                          <AvatarFallback>{challenge.organization[0]}</AvatarFallback>
                        </Avatar>
                        {challenge.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm line-clamp-3 mb-4">{challenge.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 opacity-70" />
                          <span>{challenge.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 opacity-70" />
                          <span>{challenge.teamSize}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 opacity-70" />
                          <span>{challenge.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 opacity-70" />
                          <span>{challenge.impactPoints} Impact Points</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={joinedChallenges.includes(challenge.id) ? "secondary" : "default"}
                        onClick={() => handleJoinChallenge(challenge.id)}
                        disabled={joinedChallenges.includes(challenge.id)}
                      >
                        {joinedChallenges.includes(challenge.id) ? "Joined" : "Join Challenge"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredChallenges.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No challenges match your filters</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or check back later for new challenges.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedLocation("all")
                    setSelectedImpact("all")
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="alternatives" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alternativeActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="mb-2">
                          {activity.category}
                        </Badge>
                        <Badge variant="secondary">{activity.timeCommitment}</Badge>
                      </div>
                      <CardTitle>{activity.title}</CardTitle>
                      <CardDescription>{activity.organization}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm mb-4">{activity.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 opacity-70" />
                          <span>{activity.frequency}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 opacity-70" />
                          <span>{activity.skillsGained.join(", ")}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2 opacity-70" />
                          <span>{activity.impactPoints} Impact Points</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="joined" className="space-y-6">
            {joinedChallenges.length > 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {challengeLabData.challenges
                    .filter((challenge) => joinedChallenges.includes(challenge.id))
                    .map((challenge, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader>
                          <CardTitle>{challenge.title}</CardTitle>
                          <CardDescription>{challenge.organization}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>25%</span>
                              </div>
                              <Progress value={25} className="h-2" />
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-medium">Next Steps:</h4>
                              <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                  <Checkbox id="task1" />
                                  <label
                                    htmlFor="task1"
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Join the orientation call (Tomorrow, 3PM EST)
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Checkbox id="task2" />
                                  <label
                                    htmlFor="task2"
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Complete the skills assessment
                                  </label>
                                </div>
                                <div className="flex items-start space-x-2">
                                  <Checkbox id="task3" />
                                  <label
                                    htmlFor="task3"
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Review project brief and resources
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline">Team Chat</Button>
                          <Button>Continue</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Impact Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h3 className="text-2xl font-bold">{joinedChallenges.length}</h3>
                        <p className="text-sm text-muted-foreground">Active Contributions</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h3 className="text-2xl font-bold">
                          {joinedChallenges.reduce((total, id) => {
                            const challenge = challengeLabData.challenges.find((c) => c.id === id)
                            return total + (challenge?.impactPoints || 0)
                          }, 0)}
                        </h3>
                        <p className="text-sm text-muted-foreground">Impact Points</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h3 className="text-2xl font-bold">0</h3>
                        <p className="text-sm text-muted-foreground">Completed Challenges</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">You haven't joined any challenges yet</h3>
                <p className="text-muted-foreground mb-4">
                  Browse the available challenges and find one that matches your skills and interests.
                </p>
                <Button onClick={() => document.querySelector('[data-value="challenges"]')?.click()}>
                  Explore Challenges
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>

      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Challenge</DialogTitle>
            <DialogDescription>
              You're about to join "{selectedChallenge?.title}" by {selectedChallenge?.organization}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <h4 className="font-medium">What to expect:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>You'll be added to a team of like-minded contributors</li>
                <li>Orientation call will be scheduled within 48 hours</li>
                <li>Estimated time commitment: {selectedChallenge?.duration}</li>
                <li>You'll earn {selectedChallenge?.impactPoints} impact points upon completion</li>
              </ul>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I understand the commitment required and will do my best to contribute meaningfully to this challenge.
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowJoinDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmJoin}>Confirm & Join</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
