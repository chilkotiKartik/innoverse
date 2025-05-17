"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Globe, Lightbulb, Users } from "lucide-react"
import type { ThematicRoom } from "@/lib/types"

interface ThematicRoomCardProps {
  room: ThematicRoom
}

export function ThematicRoomCard({ room }: ThematicRoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge
              className={
                room.theme === "Climate Action"
                  ? "bg-green-500/20 text-green-700 dark:text-green-400"
                  : room.theme === "Education"
                    ? "bg-blue-500/20 text-blue-700 dark:text-blue-400"
                    : room.theme === "Health"
                      ? "bg-red-500/20 text-red-700 dark:text-red-400"
                      : room.theme === "Peace & Justice"
                        ? "bg-purple-500/20 text-purple-700 dark:text-purple-400"
                        : "bg-primary/20 text-primary"
              }
            >
              {room.theme}
            </Badge>
            <Badge variant="outline">{room.status}</Badge>
          </div>
          <CardTitle className="line-clamp-1 mt-2">{room.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 mb-4">{room.description}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Users className="h-4 w-4 mr-1" />
            <span>{room.membersCount} members</span>
            <span className="mx-2">•</span>
            <Globe className="h-4 w-4 mr-1" />
            <span>{room.projectsCount} projects</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Next session: {room.nextSession}</span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex gap-2">
          <Button variant="outline" className="flex-1">
            <Lightbulb className="h-4 w-4 mr-2" />
            Learn More
          </Button>
          <Button className="flex-1">Join Room</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
