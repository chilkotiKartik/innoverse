"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Database, Download, ExternalLink, FileText, Globe, ImageIcon, Link, Video } from "lucide-react"

export function ProjectResources() {
  return (
    <Tabs defaultValue="code">
      <TabsList className="grid grid-cols-4 w-full">
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="datasets">Datasets</TabsTrigger>
        <TabsTrigger value="learning">Learning</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
      </TabsList>

      <TabsContent value="code" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Code Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="font-medium mb-3">Repositories</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Main Project Repository</h4>
                      <p className="text-xs text-muted-foreground">GitHub • Last updated 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Backend API</h4>
                      <p className="text-xs text-muted-foreground">GitHub • Last updated 5 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Frontend Application</h4>
                      <p className="text-xs text-muted-foreground">GitHub • Last updated 1 day ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-medium mb-3">Documentation</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">API Documentation</h4>
                      <p className="text-xs text-muted-foreground">Swagger • Complete reference for all endpoints</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Development Setup Guide</h4>
                      <p className="text-xs text-muted-foreground">Markdown • Instructions for local development</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="datasets" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Datasets & APIs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="font-medium mb-3">Project Datasets</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-green-500/10 p-2 rounded-md mr-3">
                      <Database className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Environmental Monitoring Data</h4>
                      <p className="text-xs text-muted-foreground">CSV • 250MB • Last updated June 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-blue-500/10 p-2 rounded-md mr-3">
                      <Database className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">User Research Interviews</h4>
                      <p className="text-xs text-muted-foreground">JSON • 50MB • Last updated May 28, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-medium mb-3">External APIs</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-amber-500/10 p-2 rounded-md mr-3">
                      <Link className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Weather Data API</h4>
                      <p className="text-xs text-muted-foreground">
                        OpenWeatherMap • Used for environmental forecasting
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Docs
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-purple-500/10 p-2 rounded-md mr-3">
                      <Link className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">UN SDG Indicators API</h4>
                      <p className="text-xs text-muted-foreground">United Nations • Used for impact measurement</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Docs
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="learning" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="font-medium mb-3">Courses & Tutorials</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Environmental Data Analysis</h4>
                      <p className="text-xs text-muted-foreground">Video Course • 12 lessons • 4.5 hours</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Start Learning
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">React for Social Impact Projects</h4>
                      <p className="text-xs text-muted-foreground">Interactive Tutorial • 8 modules • 3 hours</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Start Learning
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-medium mb-3">Reference Materials</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">UN Sustainable Development Goals</h4>
                      <p className="text-xs text-muted-foreground">PDF • Framework for measuring project impact</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-md mr-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Best Practices for NGO Collaboration</h4>
                      <p className="text-xs text-muted-foreground">PDF • Guide for effective partnerships</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="media" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Media Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h3 className="font-medium mb-3">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-md bg-muted/50">
                  <div className="aspect-video bg-black/20 rounded-md flex items-center justify-center mb-3">
                    <Video className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium">Project Introduction</h4>
                  <p className="text-xs text-muted-foreground mb-2">5:32 • Uploaded June 5, 2025</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Watch Video
                  </Button>
                </div>

                <div className="p-3 rounded-md bg-muted/50">
                  <div className="aspect-video bg-black/20 rounded-md flex items-center justify-center mb-3">
                    <Video className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium">Technical Demo</h4>
                  <p className="text-xs text-muted-foreground mb-2">12:45 • Uploaded July 10, 2025</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Watch Video
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="font-medium mb-3">Images & Graphics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 rounded-md bg-muted/50">
                  <div className="aspect-square bg-black/20 rounded-md flex items-center justify-center mb-3">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium text-sm">Project Logo</h4>
                  <p className="text-xs text-muted-foreground mb-2">PNG • 1200x1200px</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>

                <div className="p-3 rounded-md bg-muted/50">
                  <div className="aspect-square bg-black/20 rounded-md flex items-center justify-center mb-3">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium text-sm">UI Mockups</h4>
                  <p className="text-xs text-muted-foreground mb-2">ZIP • 15 files</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>

                <div className="p-3 rounded-md bg-muted/50">
                  <div className="aspect-square bg-black/20 rounded-md flex items-center justify-center mb-3">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium text-sm">Infographics</h4>
                  <p className="text-xs text-muted-foreground mb-2">PDF • 5 pages</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
