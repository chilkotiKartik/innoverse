"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react"

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stories = [
    {
      id: "story1",
      title: "CleanWater AI",
      description:
        "We developed an AI-powered water quality monitoring system that's now deployed in 5 countries, helping communities identify contamination risks in real-time.",
      impact: "15,000+ people now have access to safer drinking water",
      team: [
        { name: "Sarah Chen", role: "Team Lead", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Miguel Rodriguez", role: "AI Engineer", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Aisha Okoye", role: "Hardware Designer", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      category: "Clean Water & Sanitation",
      quote:
        "InnovVerse X connected us with mentors and NGO partners that made our project possible. We went from idea to implementation in just 6 months.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "story2",
      title: "EduAccess",
      description:
        "Our platform provides free, offline-accessible educational content to students in remote areas with limited internet connectivity.",
      impact: "Reached 8,000+ students across rural communities",
      team: [
        { name: "Raj Patel", role: "Project Lead", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Emma Wilson", role: "Content Creator", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "David Kim", role: "Mobile Developer", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      category: "Quality Education",
      quote:
        "The mentorship and technical resources we received through InnovVerse X transformed our simple idea into a scalable solution that's making real impact.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "story3",
      title: "GreenEnergy Hub",
      description:
        "We created a community-based renewable energy sharing platform that allows neighborhoods to generate, store, and trade solar energy.",
      impact: "Reduced carbon emissions by 120 tons annually",
      team: [
        { name: "Liam Johnson", role: "Energy Engineer", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Sofia Garcia", role: "Software Developer", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Jamal Ibrahim", role: "Community Manager", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      category: "Affordable Clean Energy",
      quote:
        "The connections we made through InnovVerse X helped us secure pilot funding and find our first community partners. Now we're expanding to 5 new neighborhoods.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={stories[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <Badge className="mb-4">{stories[currentIndex].category}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{stories[currentIndex].title}</h3>
                  <p className="text-muted-foreground mb-4">{stories[currentIndex].description}</p>

                  <div className="bg-primary/10 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <Quote className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <p className="italic text-sm">{stories[currentIndex].quote}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Impact</h4>
                    <p className="text-sm font-medium text-primary">{stories[currentIndex].impact}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Team</h4>
                    <div className="flex flex-wrap gap-3">
                      {stories[currentIndex].team.map((member, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button>
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-muted relative h-[300px] md:h-auto">
                  <img
                    src={stories[currentIndex].image || "/placeholder.svg"}
                    alt={stories[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full bg-background/80" onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full bg-background/80" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {stories.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
