"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Globe, Heart, MessageSquare } from "lucide-react"
import type { NGO } from "@/lib/types"

interface NGOCardProps {
  ngo: NGO
}

export function NGOCard({ ngo }: NGOCardProps) {
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
              {ngo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="font-bold">{ngo.name}</h3>
              <p className="text-sm text-muted-foreground">{ngo.focus}</p>
              <div className="flex items-center mt-1">
                <Globe className="h-3 w-3 mr-1 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{ngo.location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1 mb-4">
            {ngo.sdgs.map((sdg, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                SDG {sdg}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4">{ngo.description}</p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Building className="h-3 w-3 mr-1" />
            <span>{ngo.projectsCount} active projects</span>
            <span className="mx-2">•</span>
            <Heart className="h-3 w-3 mr-1" />
            <span>{ngo.impactCount} people impacted</span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex gap-2">
          <Button variant="outline" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button className="flex-1">View Projects</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
