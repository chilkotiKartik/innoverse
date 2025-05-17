"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AtSign, FileText, MessageSquare, Send, ThumbsUp } from "lucide-react"

export function ProjectDiscussion() {
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("discussions")

  const discussions = [
    {
      id: "1",
      user: "Sarah Johnson",
      userInitial: "SJ",
      time: "2 days ago",
      content:
        "I've completed the initial wireframes for the user dashboard. Please take a look and provide feedback on the layout and information hierarchy.",
      likes: 3,
      replies: [
        {
          id: "1-1",
          user: "Alex Chen",
          userInitial: "AC",
          time: "1 day ago",
          content:
            "The wireframes look great! I especially like how you've organized the environmental data visualization. One suggestion: could we add a filter for different time periods?",
          likes: 2,
        },
        {
          id: "1-2",
          user: "Dr. Maya Patel",
          userInitial: "MP",
          time: "1 day ago",
          content:
            "Excellent work on the wireframes. From a UX perspective, I'd recommend simplifying the navigation menu to focus on the most critical features for our target users.",
          likes: 4,
        },
      ],
    },
    {
      id: "2",
      user: "Alex Chen",
      userInitial: "AC",
      time: "3 days ago",
      content:
        "I've set up the initial backend architecture using Node.js and MongoDB. The repository is now available on GitHub with basic API endpoints for user authentication and data storage.",
      likes: 5,
      replies: [
        {
          id: "2-1",
          user: "Sarah Johnson",
          userInitial: "SJ",
          time: "3 days ago",
          content: "Thanks for setting this up so quickly! I'll connect the frontend to these endpoints this week.",
          likes: 1,
        },
      ],
    },
  ]

  const documents = [
    {
      id: "1",
      title: "Project Requirements Document",
      type: "Google Doc",
      updatedBy: "Sarah Johnson",
      updatedAt: "May 28, 2025",
    },
    {
      id: "2",
      title: "Technical Architecture Diagram",
      type: "Figma",
      updatedBy: "Alex Chen",
      updatedAt: "June 15, 2025",
    },
    {
      id: "3",
      title: "User Research Findings",
      type: "PDF",
      updatedBy: "Maya Rodriguez",
      updatedAt: "June 10, 2025",
    },
    {
      id: "4",
      title: "API Documentation",
      type: "Markdown",
      updatedBy: "Alex Chen",
      updatedAt: "July 5, 2025",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the message to the backend
    console.log("Sending message:", message)
    setMessage("")
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Team Discussions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="space-y-4"
                >
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>{discussion.userInitial}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">{discussion.user}</span>
                          <span className="text-xs text-muted-foreground ml-2">{discussion.time}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {discussion.likes}
                        </Button>
                      </div>
                      <p className="text-sm">{discussion.content}</p>

                      {/* Replies */}
                      <div className="pl-6 border-l space-y-4 mt-4">
                        {discussion.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">{reply.userInitial}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-medium text-sm">{reply.user}</span>
                                  <span className="text-xs text-muted-foreground ml-2">{reply.time}</span>
                                </div>
                                <Button variant="ghost" size="sm" className="h-6 px-2">
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  {reply.likes}
                                </Button>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                            </div>
                          </div>
                        ))}

                        <div className="flex gap-3 items-center">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">SJ</AvatarFallback>
                          </Avatar>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < discussions.length - 1 && <div className="border-t my-4" />}
                </motion.div>
              ))}

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <Textarea
                      placeholder="Add to the discussion..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-between items-center">
                      <Button type="button" variant="ghost" size="sm">
                        <AtSign className="h-4 w-4 mr-1" />
                        Mention
                      </Button>
                      <Button type="submit" disabled={!message.trim()}>
                        <Send className="h-4 w-4 mr-1" />
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Project Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <motion.div
                    key={document.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-md mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{document.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {document.type} • Updated by {document.updatedBy} on {document.updatedAt}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-1" />
                  Upload Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
