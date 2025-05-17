"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Paperclip, Smile, X, Maximize2, Minimize2 } from "lucide-react"

export function TeamChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<any[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const teamMembers = [
    { id: "user1", name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: "user2", name: "Alex Chen", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
    { id: "user3", name: "Maya Rodriguez", avatar: "/placeholder.svg?height=40&width=40", isOnline: false },
    { id: "user4", name: "Jamal Ibrahim", avatar: "/placeholder.svg?height=40&width=40", isOnline: true },
  ]

  const initialMessages = [
    {
      id: "msg1",
      sender: teamMembers[1],
      text: "Hey team, I've just pushed the latest updates to our repository. Can someone review the changes?",
      time: "10:30 AM",
    },
    {
      id: "msg2",
      sender: teamMembers[2],
      text: "I'll take a look at it this afternoon. By the way, did everyone see the feedback from our mentor?",
      time: "10:45 AM",
    },
    {
      id: "msg3",
      sender: teamMembers[3],
      text: "Yes, I've already started implementing some of the suggestions. The UI improvements look promising!",
      time: "11:15 AM",
    },
  ]

  const aiResponses = [
    "I can help review those changes, Alex. What specific areas should I focus on?",
    "The mentor's feedback was really insightful. I especially liked the suggestions about improving the data visualization.",
    "Great work on the UI improvements, Jamal! The new dashboard layout is much more intuitive.",
  ]

  useEffect(() => {
    setMessages(initialMessages)

    // Simulate new messages
    const interval = setInterval(() => {
      if (!isOpen || isMinimized) {
        const randomMember = teamMembers[Math.floor(Math.random() * teamMembers.length)]
        const newMessage = {
          id: `msg${Date.now()}`,
          sender: randomMember,
          text: `${Math.random() > 0.7 ? "Hey Sarah, " : ""}${
            [
              "How's the progress on the environmental data module?",
              "Just finished the user testing session. Got some great feedback!",
              "Anyone available for a quick call to discuss the API integration?",
              "I found a great resource for our project. Sharing the link in our docs.",
              "The NGO partner just confirmed they can provide the test data we need.",
            ][Math.floor(Math.random() * 5)]
          }`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }

        setMessages((prev) => [...prev, newMessage])
        setUnreadCount((prev) => prev + 1)
        setNotificationMessage(
          `${randomMember.name}: ${newMessage.text.substring(0, 30)}${newMessage.text.length > 30 ? "..." : ""}`,
        )
        setShowNotification(true)

        setTimeout(() => {
          setShowNotification(false)
        }, 5000)
      }
    }, 45000) // New message every 45 seconds

    return () => clearInterval(interval)
  }, [isOpen, isMinimized])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (message.trim()) {
      const newMessage = {
        id: `msg${Date.now()}`,
        sender: teamMembers[0], // Current user (Sarah)
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, newMessage])
      setMessage("")

      // Simulate AI response
      if (Math.random() > 0.5) {
        setTimeout(
          () => {
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
            const aiMessage = {
              id: `msg${Date.now()}`,
              sender: teamMembers[Math.floor(Math.random() * (teamMembers.length - 1)) + 1],
              text: randomResponse,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            }

            setMessages((prev) => [...prev, aiMessage])
          },
          2000 + Math.random() * 3000,
        )
      }
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setUnreadCount(0)
  }

  return (
    <>
      <Button
        variant="outline"
        className="fixed bottom-6 left-6 shadow-lg bg-background z-50 border-primary"
        onClick={handleOpen}
      >
        <MessageSquare className="h-5 w-5 mr-2 text-primary" />
        Team Chat
        {unreadCount > 0 && <Badge className="ml-2 bg-primary text-primary-foreground">{unreadCount}</Badge>}
      </Button>

      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-6 z-50 max-w-xs"
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notificationMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">Click to open chat</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? "auto" : "500px",
              width: isMinimized ? "300px" : "400px",
            }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-50 shadow-xl rounded-lg overflow-hidden"
          >
            <Card className="h-full flex flex-col border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
                <CardTitle className="text-base flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                  Team Chat
                  <Badge variant="outline" className="ml-2 bg-green-500/20 text-green-700 dark:text-green-400">
                    3 online
                  </Badge>
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsMinimized(!isMinimized)}>
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender.id === "user1" ? "justify-end" : "justify-start"}`}
                      >
                        {msg.sender.id !== "user1" && (
                          <Avatar className="h-8 w-8 mr-2 mt-1">
                            <AvatarImage src={msg.sender.avatar || "/placeholder.svg"} alt={msg.sender.name} />
                            <AvatarFallback>{msg.sender.name[0]}</AvatarFallback>
                          </Avatar>
                        )}

                        <div
                          className={`max-w-[75%] rounded-lg p-3 ${
                            msg.sender.id === "user1" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {msg.sender.id !== "user1" && (
                            <div className="font-medium text-xs mb-1">{msg.sender.name}</div>
                          )}
                          <p className="text-sm">{msg.text}</p>
                          <div
                            className={`text-xs mt-1 ${
                              msg.sender.id === "user1" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </CardContent>

                  <div className="p-3 border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <div className="flex-grow relative">
                        <Input
                          placeholder="Type a message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="pr-20"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                          <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                            <Smile className="h-4 w-4 text-muted-foreground" />
                          </Button>
                          <Button type="button" variant="ghost" size="icon" className="h-8 w-8">
                            <Paperclip className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" size="icon" disabled={!message.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
