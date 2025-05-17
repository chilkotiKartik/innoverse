"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

// Sample data for the impact growth chart
const monthlyData = [
  { month: "Jan", impact: 42, projects: 5, xp: 350 },
  { month: "Feb", impact: 48, projects: 6, xp: 420 },
  { month: "Mar", impact: 55, projects: 7, xp: 510 },
  { month: "Apr", impact: 62, projects: 8, xp: 580 },
  { month: "May", impact: 70, projects: 10, xp: 650 },
  { month: "Jun", impact: 78, projects: 12, xp: 720 },
  { month: "Jul", impact: 85, projects: 14, xp: 800 },
  { month: "Aug", impact: 92, projects: 15, xp: 880 },
  { month: "Sep", impact: 98, projects: 16, xp: 950 },
  { month: "Oct", impact: 105, projects: 18, xp: 1020 },
  { month: "Nov", impact: 112, projects: 20, xp: 1100 },
  { month: "Dec", impact: 120, projects: 22, xp: 1200 },
]

const weeklyData = [
  { week: "Week 1", impact: 105, projects: 18, xp: 1020 },
  { week: "Week 2", impact: 108, projects: 19, xp: 1050 },
  { week: "Week 3", impact: 110, projects: 20, xp: 1080 },
  { week: "Week 4", impact: 112, projects: 20, xp: 1100 },
  { week: "Week 5", impact: 115, projects: 21, xp: 1120 },
  { week: "Week 6", impact: 118, projects: 21, xp: 1150 },
  { week: "Week 7", impact: 120, projects: 22, xp: 1180 },
  { week: "Week 8", impact: 122, projects: 22, xp: 1200 },
]

export function ImpactGrowthChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Impact Growth Over Time
        </CardTitle>
        <CardDescription>Track your progress and growth in making a positive impact</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))]"></div>
                <span className="text-xs">Impact Score</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))]"></div>
                <span className="text-xs">Projects</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-3))]"></div>
                <span className="text-xs">XP</span>
              </div>
            </div>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <ChartContainer
              config={{
                impact: {
                  label: "Impact Score",
                  color: "hsl(var(--chart-1))",
                },
                projects: {
                  label: "Projects",
                  color: "hsl(var(--chart-2))",
                },
                xp: {
                  label: "XP",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="impact"
                    stroke="var(--color-impact)"
                    yAxisId="left"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="var(--color-projects)"
                    yAxisId="right"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="xp"
                    stroke="var(--color-xp)"
                    yAxisId="right"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Impact</p>
                    <p className="text-xl font-bold">120</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p className="text-xl font-bold">22</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total XP</p>
                    <p className="text-xl font-bold">1,200</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <ChartContainer
              config={{
                impact: {
                  label: "Impact Score",
                  color: "hsl(var(--chart-1))",
                },
                projects: {
                  label: "Projects",
                  color: "hsl(var(--chart-2))",
                },
                xp: {
                  label: "XP",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="week" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="impact"
                    stroke="var(--color-impact)"
                    yAxisId="left"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="var(--color-projects)"
                    yAxisId="right"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="xp"
                    stroke="var(--color-xp)"
                    yAxisId="right"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly Growth</p>
                    <p className="text-xl font-bold">+2.5%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Time</p>
                    <p className="text-xl font-bold">18h 30m</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/40">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly XP</p>
                    <p className="text-xl font-bold">120</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
