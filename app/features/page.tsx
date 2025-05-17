import { FeatureSection } from "@/components/feature-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Code, Globe, Sparkles, Users, Zap, Shield, Lightbulb, Heart, BarChart } from "lucide-react"

export default function FeaturesPage() {
  return (
    <main className="flex-1 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover all the powerful tools and features that make InnovVerse X the ultimate platform for student
            innovation and collaboration.
          </p>
        </div>

        <div className="space-y-24">
          <FeatureSection
            icon={<Globe className="h-8 w-8" />}
            title="Idea Constellation Map"
            description="Visualize projects like galaxies. Nodes represent team members, tech stack, features, and mentors. You can fork ideas, join other constellations, or explore nearby innovation universes."
            align="right"
          />

          <FeatureSection
            icon={<Brain className="h-8 w-8" />}
            title="AI SkillFusion Engine"
            description="Our AI engine deeply analyzes your GitHub commits, hackathon records, LinkedIn data, academic projects, and personal interests to match you with perfect co-founders, mentors, open projects, and cross-domain experts."
            align="left"
          />

          <FeatureSection
            icon={<Sparkles className="h-8 w-8" />}
            title="Global Problem Generator"
            description="No more aimless hacking. This GPT-powered system pulls from NGO/UN datasets, local civic problems, and GovTech challenges to generate meaningful problems to solve."
            align="right"
          />

          <FeatureSection
            icon={<Zap className="h-8 w-8" />}
            title="Real-World Challenge Lab"
            description="Join real missions posted by NGOs, startups, and governments. Solve these quests to win grants, mentorship, and pilot opportunities."
            align="left"
          />

          <FeatureSection
            icon={<Code className="h-8 w-8" />}
            title="Live Collab Studio"
            description="Build in-browser in real-time with integrated code editor, GitHub sync, whiteboard, sticky notes, video calls, chat, Gantt charts, and multiplayer 'Hack Mode'."
            align="right"
          />

          <FeatureSection
            icon={<Users className="h-8 w-8" />}
            title="MentorVerse"
            description="Browse domain-specific mentors, host live office hours, invite mentors to join your galaxy, and get guidance from AI mentor-bot for async support."
            align="left"
          />

          <FeatureSection
            icon={<Lightbulb className="h-8 w-8" />}
            title="Innovation Quest Mode"
            description="Follow a gamified multi-stage track from idea to launch, with themes like Sustainable Tech, EdTech, AI for Social Good, PeaceTech, and Health for All."
            align="right"
          />

          <FeatureSection
            icon={<Shield className="h-8 w-8" />}
            title="Open IP + ForkIt Framework"
            description="Let anyone suggest features, fork MVPs, or improve your project with automatic attribution and changelog tracking. Optional blockchain integration for proof-of-innovation."
            align="left"
          />

          <FeatureSection
            icon={<Heart className="h-8 w-8" />}
            title="EmotionVerse: Wellness for Builders"
            description="Take care of your mental health with emotional journaling assistant, mental health mentors, founder burnout check-in tool, and 'Stories Behind the Pitch' podcast."
            align="right"
          />

          <FeatureSection
            icon={<BarChart className="h-8 w-8" />}
            title="Impact Dashboard + SDG Heatmap"
            description="Track your innovation's real-world use, beneficiaries reached, SDG alignment, and educational credits earned."
            align="left"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your innovation journey?</h2>
          <Button size="lg" className="group">
            Join InnovVerse X
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </main>
  )
}
