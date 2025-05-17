"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, SmilePlus, Frown, Meh, ThumbsUp, Brain, X, MessageSquare, Lightbulb } from "lucide-react"

export function EmotionSensor() {
  const [isOpen, setIsOpen] = useState(false)
  const [mood, setMood] = useState<string | null>(null)
  const [note, setNote] = useState("")
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [aiResponse, setAIResponse] = useState("")

  const moods = [
    { value: "energized", label: "Energized", icon: <ThumbsUp className="h-5 w-5" />, color: "text-green-500" },
    { value: "focused", label: "Focused", icon: <Brain className="h-5 w-5" />, color: "text-blue-500" },
    { value: "neutral", label: "Neutral", icon: <Meh className="h-5 w-5" />, color: "text-amber-500" },
    { value: "stressed", label: "Stressed", icon: <Frown className="h-5 w-5" />, color: "text-red-500" },
  ]

  const aiResponses = {
    energized:
      "Great to hear you're feeling energized! This is the perfect time to tackle challenging tasks or brainstorm new ideas. Consider working on that project proposal or connecting with potential collaborators.",
    focused:
      "You're in a focused state - perfect for deep work! Try to minimize distractions and use this time for complex problem-solving or detailed design work. The Pomodoro technique (25 minutes of focused work followed by a 5-minute break) can help maintain your productivity.",
    neutral:
      "A neutral mood is a good baseline. This might be a good time for routine tasks or planning your next steps. Consider reviewing your project roadmap or organizing your resources.",
    stressed:
      "I notice you're feeling stressed. Taking short breaks can help reset your mind. Try a quick 5-minute meditation, stepping outside, or switching to a less demanding task. Remember that your wellbeing is important for sustainable innovation.",
  }

  const handleSubmit = () => {
    if (mood) {
      setAIResponse(aiResponses[mood as keyof typeof aiResponses])
      setShowAIResponse(true)
    }
  }

  const handleReset = () => {
    setMood(null)
    setNote("")
    setShowAIResponse(false)
  }

  // Check if user has been active for a while
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && Math.random() > 0.5) {
        setIsOpen(true)
      }
    }, 60000) // Show after 1 minute of activity

    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-background z-50 border-primary"
        onClick={() => setIsOpen(true)}
      >
        <Heart className="h-6 w-6 text-primary" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 md:w-96"
          >
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center">
                  <SmilePlus className="h-5 w-5 mr-2 text-primary" />
                  Emotion Sensor
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                {!showAIResponse ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">How are you feeling right now?</p>
                      <div className="grid grid-cols-4 gap-2">
                        {moods.map((item) => (
                          <Button
                            key={item.value}
                            variant={mood === item.value ? "default" : "outline"}
                            className="flex flex-col h-auto py-3"
                            onClick={() => setMood(item.value)}
                          >
                            <span className={`mb-1 ${item.color}`}>{item.icon}</span>
                            <span className="text-xs">{item.label}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Any specific thoughts? (optional)</p>
                      <Textarea
                        placeholder="I'm feeling..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSubmit} disabled={!mood}>
                        Submit
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm">{aiResponse}</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" onClick={handleReset}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        New Check-in
                      </Button>
                      <Button size="sm" onClick={() => setIsOpen(false)}>
                        Thanks!
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
