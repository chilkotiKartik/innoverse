"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Star } from "lucide-react"
import type { Mentor } from "@/lib/types"

interface MentorCardProps {
  mentor: Mentor
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
              {mentor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="font-bold">{mentor.name}</h3>
              <p className="text-sm text-muted-foreground">{mentor.title}</p>
              <div className="flex items-center mt-1">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs ml-1 text-muted-foreground">({mentor.reviewCount})</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1 mb-4">
            {mentor.expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{mentor.location}</span>
            <span className="mx-2">•</span>
            <Calendar className="h-3 w-3 mr-1" />
            <span>{mentor.availability}</span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button className="w-full">Schedule Session</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
