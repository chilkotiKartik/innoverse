"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Clock } from "lucide-react"
import type { Challenge } from "@/lib/types"

interface ChallengeCardProps {
  challenge: Challenge
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
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
            <Badge variant="outline">{challenge.category}</Badge>
            <Badge
              variant={
                challenge.difficulty === "Beginner"
                  ? "secondary"
                  : challenge.difficulty === "Intermediate"
                    ? "default"
                    : "destructive"
              }
            >
              {challenge.difficulty}
            </Badge>
          </div>
          <CardTitle className="line-clamp-1">{challenge.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 mb-4">{challenge.description}</p>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>{challenge.duration}</span>
            <span className="mx-2">•</span>
            <Calendar className="h-4 w-4 mr-1" />
            <span>{challenge.deadline}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="h-4 w-4 mr-1" />
            <span>{challenge.reward}</span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button className="w-full">Join Challenge</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
