import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Award,
  Calendar,
  Clock,
  Compass,
  FileText,
  Folder,
  Heart,
  Lightbulb,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import { GeographicImpactMap } from "@/components/geographic-impact-map"
import { ImpactGrowthChart } from "@/components/impact-growth-chart"
import { AIAssistantWidget } from "@/components/ai-assistant-widget"
import { impactDashboardData } from "@/lib/impact-dashboard-data"

export const metadata: Metadata = {
  title: "Impact Dashboard | InnovVerse",
  description: "Track your impact and contributions to sustainable development goals",
}

export default function ImpactDashboardPage() {
  const { user, metrics, teamMembers, activeProjects, currentChallenges, ngoPartners, learningPaths } =
    impactDashboardData

  return (
    <main className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Impact Dashboard</h1>
            <p className="text-muted-foreground">Track your contributions to sustainable development goals</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Calendar className="mr-2 h-4 w-4" />
              This Month
            </Button>
            <Button size="sm" className="h-9">
              <FileText className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* User Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-primary/10">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Level {user.level}
                    </Badge>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                      <Star className="mr-1 h-3 w-3 fill-amber-500 text-amber-500" />
                      {user.xp} XP
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Level Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {user.xp}/{user.nextLevel} XP
                    </span>
                  </div>
                  <Progress value={(user.xp / user.nextLevel) * 100} className="h-2" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-2 w-16 h-16"
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-xs text-center mt-1 leading-tight">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-bold">{metric.value}</h3>
                      <span className={`text-xs font-medium ${metric.change > 0 ? "text-green-500" : "text-red-500"}`}>
                        {metric.change > 0 ? "+" : ""}
                        {metric.change}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    {metric.icon === "trending-up" && <TrendingUp className="h-5 w-5 text-primary" />}
                    {metric.icon === "folder" && <Folder className="h-5 w-5 text-primary" />}
                    {metric.icon === "award" && <Award className="h-5 w-5 text-primary" />}
                    {metric.icon === "star" && <Star className="h-5 w-5 text-primary" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <GeographicImpactMap />
          <ImpactGrowthChart />
        </div>

        {/* Projects and Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Active Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Active Projects
              </CardTitle>
              <CardDescription>Projects you're currently contributing to</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Impact: {project.impact}
                      </Badge>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((teamId, index) => (
                          <Avatar key={teamId} className="border-2 border-background h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Team member" />
                            <AvatarFallback>{index + 1}</AvatarFallback>
                          </Avatar>
                        ))}
                        {project.team.length > 3 && (
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Due {new Date(project.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {project.sdgs.map((sdg) => (
                        <Badge key={sdg} variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                          {sdg}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Details
                      </Button>
                      <Button size="sm">Contribute</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-5 w-5" />
                Current Challenges
              </CardTitle>
              <CardDescription>Challenges you can participate in to earn XP and impact points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentChallenges.map((challenge) => (
                  <div key={challenge.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          challenge.difficulty === "easy"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : challenge.difficulty === "medium"
                              ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                              : "bg-red-500/10 text-red-500 border-red-500/20"
                        }
                      >
                        {challenge.difficulty}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">XP</p>
                        <p className="font-semibold">{challenge.xp}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Impact</p>
                        <p className="font-semibold">{challenge.impact}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2 text-center">
                        <p className="text-xs text-muted-foreground">Participants</p>
                        <p className="font-semibold">{challenge.participants}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <Badge variant="outline">{challenge.category}</Badge>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Due {new Date(challenge.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        Learn More
                      </Button>
                      <Button size="sm">Join Challenge</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team and Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Team Members */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members
              </CardTitle>
              <CardDescription>People you're collaborating with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Impact: {member.impact}</p>
                      <p className="text-xs text-muted-foreground">Last active: {member.lastActive}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Users className="mr-2 h-4 w-4" />
                View All Team Members
              </Button>
            </CardContent>
          </Card>

          {/* Learning Paths */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Learning Paths
              </CardTitle>
              <CardDescription>Structured learning to enhance your impact skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningPaths.map((path) => (
                  <div key={path.id} className="border rounded-lg p-4">
                    <div>
                      <h4 className="font-semibold">{path.title}</h4>
                      <p className="text-sm text-muted-foreground">{path.description}</p>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">
                          {path.completed}/{path.modules} Modules
                        </span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {path.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-purple-500/10 text-purple-500 border-purple-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        View Path
                      </Button>
                      <Button size="sm">Continue Learning</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NGO Partners */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              NGO Partners
            </CardTitle>
            <CardDescription>Organizations you're collaborating with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ngoPartners.map((ngo) => (
                <div key={ngo.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted/50 rounded-full p-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={ngo.logo || "/placeholder.svg"} alt={ngo.name} />
                        <AvatarFallback>
                          {ngo.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className="font-semibold">{ngo.name}</h4>
                      <p className="text-sm text-muted-foreground">{ngo.focus}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-muted/50 rounded-lg p-2 text-center">
                      <p className="text-xs text-muted-foreground">Projects</p>
                      <p className="font-semibold">{ngo.projects}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2 text-center">
                      <p className="text-xs text-muted-foreground">Impact</p>
                      <p className="font-semibold">{ngo.impact}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <Badge variant="outline">{ngo.region}</Badge>
                    <Button size="sm">View Projects</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant Widget */}
      <AIAssistantWidget />
    </main>
  )
}
