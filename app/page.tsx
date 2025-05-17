import Link from "next/link"
import { ArrowRight, Sparkles, Globe, Code, Users, Brain, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { FloatingParticles } from "@/components/floating-particles"
import { FeatureCard } from "@/components/feature-card"
import { HeroGalaxy } from "@/components/hero-galaxy"
import { TimeCapsuleGuidance } from "@/components/time-capsule-guidance"
import { EnhancedHeader } from "@/components/enhanced-header"
import { MicroTasksCarousel } from "@/components/micro-tasks-carousel"
import { SuccessStories } from "@/components/success-stories"
import { LiveActivityFeed } from "@/components/live-activity-feed"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 px-4">
        <FloatingParticles />
        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Where Ideas Become Impact</span>
          </div>

          <AnimatedText text="InnovVerse X" className="text-5xl md:text-7xl font-bold tracking-tighter" />

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            The Infinite Student Innovation Galaxy
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Connect with brilliant minds across the globe, solve real-world problems, and build innovations that matter
            — all in one collaborative metaverse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="group">
              Join the Universe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/explore">Explore Projects</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none">
          <HeroGalaxy />
        </div>
      </section>

      {/* Time Capsule Guidance Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Innovation Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered Time Capsule guides your innovation path, providing personalized recommendations and
              tracking your progress.
            </p>
          </div>

          <TimeCapsuleGuidance />
        </div>
      </section>

      {/* Micro Tasks Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Impact Tasks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete these micro-tasks to earn XP, build your skills, and make an immediate impact.
            </p>
          </div>

          <MicroTasksCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the tools that make InnovVerse X the ultimate platform for student innovation and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Idea Constellation Map"
              description="Visualize projects like galaxies. Connect with team members, explore tech stacks, and discover nearby innovation universes."
              link="/constellation-map"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="AI SkillFusion Engine"
              description="Our AI analyzes your skills and matches you with perfect co-founders, mentors, and cross-domain experts."
              link="/skill-fusion"
            />
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Live Collab Studio"
              description="Build in real-time with integrated code editor, whiteboard, and multiplayer 'Hack Mode'."
              link="/collab-studio"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="MentorVerse"
              description="Connect with domain-specific mentors, host live office hours, and get guidance from experts worldwide."
              link="/mentor-verse"
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Global Problem Generator"
              description="Find meaningful challenges from NGOs, local civic problems, and GovTech initiatives to solve."
              link="/problem-generator"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="EmotionVerse: Wellness for Builders"
              description="Take care of your mental health with emotional journaling, burnout check-in tools, and wellness resources."
              link="/emotion-verse"
            />
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how students like you are making a real impact through InnovVerse X.
            </p>
          </div>

          <SuccessStories />
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Universe Activity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See real-time updates from across the InnovVerse X ecosystem.
            </p>
          </div>

          <LiveActivityFeed />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Innovation Galaxy?</h2>
              <p className="text-muted-foreground mb-8">
                Connect with brilliant minds, solve real problems, and build your innovation portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  <Star className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <FloatingParticles count={20} />
      </section>
    </main>
  )
}
