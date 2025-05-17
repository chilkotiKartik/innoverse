"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import {
  Check,
  CalendarIcon,
  Play,
  Podcast,
  BookOpen,
  Brain,
  Heart,
  Smile,
  Frown,
  Meh,
  ArrowRight,
  MessageSquare,
} from "lucide-react"
import { emotionVerseData } from "@/lib/emotion-verse-data"

export default function EmotionVerse() {
  const [journalEntry, setJournalEntry] = useState("")
  const [mood, setMood] = useState<number>(5)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [loading, setLoading] = useState(true)
  const [sentiment, setSentiment] = useState<string | null>(null)
  const [burnoutScore, setBurnoutScore] = useState(65)
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [aiResponse, setAiResponse] = useState("")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleJournalSubmit = () => {
    // Simulate AI analysis
    setLoading(true)
    setTimeout(() => {
      // Simple sentiment analysis simulation based on keywords
      const lowerCaseEntry = journalEntry.toLowerCase()
      if (lowerCaseEntry.includes("happy") || lowerCaseEntry.includes("excited") || lowerCaseEntry.includes("great")) {
        setSentiment("positive")
        setAiResponse(
          "I notice you're feeling positive today! That's wonderful. Remember to acknowledge your achievements and take time to celebrate your wins, no matter how small they might seem.",
        )
      } else if (
        lowerCaseEntry.includes("sad") ||
        lowerCaseEntry.includes("stressed") ||
        lowerCaseEntry.includes("anxious")
      ) {
        setSentiment("negative")
        setAiResponse(
          "I sense you might be feeling some stress or anxiety. Consider taking a short break to practice deep breathing or mindfulness. Remember that challenges are temporary, and it's okay to ask for support.",
        )
      } else {
        setSentiment("neutral")
        setAiResponse(
          "Thank you for sharing your thoughts. Journaling regularly can help you track patterns in your emotions and productivity. Is there a specific area you'd like to focus on improving?",
        )
      }
      setShowAIResponse(true)
      setLoading(false)
    }, 1500)
  }

  const getMoodIcon = () => {
    if (mood <= 3) return <Frown className="h-8 w-8 text-red-500" />
    if (mood <= 7) return <Meh className="h-8 w-8 text-amber-500" />
    return <Smile className="h-8 w-8 text-green-500" />
  }

  const getBurnoutLevel = () => {
    if (burnoutScore < 30) return { level: "Low", color: "text-green-500" }
    if (burnoutScore < 70) return { level: "Moderate", color: "text-amber-500" }
    return { level: "High", color: "text-red-500" }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">EmotionVerse</h1>
            <p className="text-muted-foreground">Wellness tools for innovators and builders</p>
          </div>
          <Button className="mt-4 md:mt-0">Connect with Mental Health Mentor</Button>
        </div>

        <Tabs defaultValue="journal" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <TabsTrigger
              value="journal"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Emotional Journal
            </TabsTrigger>
            <TabsTrigger
              value="burnout"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Burnout Check-in
            </TabsTrigger>
            <TabsTrigger
              value="stories"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Founder Stories
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Wellness Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Daily Emotional Journal</CardTitle>
                  <CardDescription>
                    Record your thoughts and feelings. Our AI will analyze patterns and offer insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <CalendarIcon className="h-5 w-5 opacity-70" />
                      <div className="flex-1">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>How are you feeling today?</span>
                        <div className="flex items-center">
                          {getMoodIcon()}
                          <span className="ml-2">{mood}/10</span>
                        </div>
                      </div>
                      <Slider value={[mood]} min={1} max={10} step={1} onValueChange={(value) => setMood(value[0])} />
                    </div>

                    <Textarea
                      placeholder="Write about your day, challenges, victories, or anything on your mind..."
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleJournalSubmit} disabled={!journalEntry.trim() || loading} className="w-full">
                    {loading ? "Analyzing..." : "Save & Analyze"}
                  </Button>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>Personalized feedback based on your journal entries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {showAIResponse ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        {sentiment && (
                          <div className="flex items-center space-x-2">
                            <span>Detected mood:</span>
                            <Badge
                              variant={
                                sentiment === "positive"
                                  ? "default"
                                  : sentiment === "negative"
                                    ? "destructive"
                                    : "outline"
                              }
                            >
                              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
                            </Badge>
                          </div>
                        )}
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="italic">{aiResponse}</p>
                        </div>
                        <Button variant="outline" className="w-full">
                          View Emotional Trends
                        </Button>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-40 text-center text-muted-foreground">
                        <Brain className="h-12 w-12 mb-2 opacity-50" />
                        <p>Submit a journal entry to receive AI insights</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Journal Streak</CardTitle>
                    <CardDescription>Track your journaling consistency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Current streak:</span>
                        <span className="text-xl font-bold">7 days</span>
                      </div>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                          <div key={day} className="flex-1 h-2 rounded-full bg-primary" />
                        ))}
                        {[8, 9, 10].map((day) => (
                          <div key={day} className="flex-1 h-2 rounded-full bg-muted" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You're on a roll! Keep journaling daily to maintain your streak.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="burnout" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Founder Burnout Check-in Tool</CardTitle>
                <CardDescription>Monitor your stress levels and get personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Your Current Burnout Risk</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Risk Level:</span>
                        <span className={getBurnoutLevel().color + " font-bold"}>{getBurnoutLevel().level}</span>
                      </div>
                      <Progress value={burnoutScore} className="h-3" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Quick Assessment</h3>
                    <div className="space-y-6">
                      {emotionVerseData.burnoutQuestions.map((question, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-medium">{question}</p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Never</span>
                            <span>Always</span>
                          </div>
                          <Slider
                            defaultValue={[Math.floor(Math.random() * 10) + 1]}
                            max={10}
                            step={1}
                            className="mt-2"
                          />
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Update Assessment</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {emotionVerseData.burnoutRecommendations.map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Wellness Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {emotionVerseData.mentors.slice(0, 4).map((mentor, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                          <Avatar className="h-16 w-16 mb-2">
                            <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{mentor.name}</span>
                          <span className="text-sm text-muted-foreground">{mentor.specialty}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">Book 30-min Session</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Podcast className="mr-2 h-6 w-6" />
                  Stories Behind the Pitch
                </CardTitle>
                <CardDescription>
                  Real founders share their mental health journeys and coping strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {emotionVerseData.founderStories.map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                          <AvatarFallback>{story.founder.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{story.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {story.founder}, {story.company}
                              </p>
                            </div>
                            <Badge variant="outline">{story.duration}</Badge>
                          </div>
                          <p className="text-sm line-clamp-2">{story.description}</p>
                          <div className="flex items-center space-x-2 pt-2">
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Play className="mr-1 h-4 w-4" />
                              Listen
                            </Button>
                            <Button size="sm" variant="ghost">
                              Read Transcript
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Episodes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emotionVerseData.resourceCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {category.icon === "book" && <BookOpen className="mr-2 h-5 w-5" />}
                      {category.icon === "brain" && <Brain className="mr-2 h-5 w-5" />}
                      {category.icon === "heart" && <Heart className="mr-2 h-5 w-5" />}
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.resources.map((resource, idx) => (
                        <li key={idx}>
                          <a href="#" className="flex items-center justify-between hover:underline">
                            <span>{resource.title}</span>
                            <ArrowRight className="h-4 w-4 opacity-70" />
                          </a>
                          <p className="text-sm text-muted-foreground">{resource.source}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      View All {category.name} Resources
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>Connect with other founders and innovators facing similar challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emotionVerseData.supportGroups.map((group, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium">{group.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{group.members} members</p>
                      <div className="flex -space-x-2 mb-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Avatar key={i} className="border-2 border-background h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{group.nextMeeting}</Badge>
                        <Button size="sm">
                          <MessageSquare className="mr-1 h-4 w-4" />
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
