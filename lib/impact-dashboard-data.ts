// Geographic impact data
export interface GeoImpactData {
  region: string
  projects: number
  users: number
  impact: number
  topSDGs: string[]
}

// Impact metrics data
export interface ImpactMetric {
  id: string
  title: string
  value: number
  change: number
  icon: string
  description: string
}

// Team member data
export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  impact: number
  projects: number
  lastActive: string
}

// Project data
export interface Project {
  id: string
  title: string
  description: string
  progress: number
  impact: number
  team: string[]
  sdgs: string[]
  deadline: string
}

// Challenge data
export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  xp: number
  impact: number
  category: string
  deadline: string
  participants: number
}

// NGO Partner data
export interface NGOPartner {
  id: string
  name: string
  focus: string
  projects: number
  impact: number
  logo: string
  region: string
}

// Notification data
export interface Notification {
  id: string
  type: "challenge" | "project" | "achievement" | "message"
  title: string
  description: string
  time: string
  read: boolean
}

// Learning path data
export interface LearningPath {
  id: string
  title: string
  description: string
  progress: number
  modules: number
  completed: number
  skills: string[]
}

// Impact dashboard data
export const impactDashboardData = {
  // User summary
  user: {
    name: "Alex Johnson",
    role: "Climate Innovation Lead",
    impactScore: 78,
    level: 12,
    xp: 1200,
    nextLevel: 1500,
    joinDate: "2023-01-15",
    badges: [
      { id: "b1", name: "Climate Champion", icon: "🌍" },
      { id: "b2", name: "Team Leader", icon: "👥" },
      { id: "b3", name: "Innovation Star", icon: "💡" },
      { id: "b4", name: "Community Builder", icon: "🏙️" },
    ],
  },

  // Impact metrics
  metrics: [
    {
      id: "m1",
      title: "Impact Score",
      value: 78,
      change: 12,
      icon: "trending-up",
      description: "Your overall contribution to SDGs",
    },
    {
      id: "m2",
      title: "Projects",
      value: 8,
      change: 2,
      icon: "folder",
      description: "Active projects you're contributing to",
    },
    {
      id: "m3",
      title: "Challenges",
      value: 15,
      change: 5,
      icon: "award",
      description: "Challenges completed this month",
    },
    {
      id: "m4",
      title: "XP",
      value: 1200,
      change: 350,
      icon: "star",
      description: "Experience points earned",
    },
  ],

  // Geographic impact
  geoImpact: [
    {
      region: "North America",
      projects: 3,
      users: 120,
      impact: 25,
      topSDGs: ["Climate Action", "Clean Energy", "Sustainable Cities"],
    },
    {
      region: "Europe",
      projects: 2,
      users: 85,
      impact: 18,
      topSDGs: ["Quality Education", "Gender Equality", "Innovation"],
    },
    {
      region: "Asia",
      projects: 2,
      users: 110,
      impact: 22,
      topSDGs: ["Clean Water", "Zero Hunger", "Good Health"],
    },
    {
      region: "Africa",
      projects: 1,
      users: 45,
      impact: 13,
      topSDGs: ["No Poverty", "Quality Education", "Clean Water"],
    },
  ],

  // Team members
  teamMembers: [
    {
      id: "tm1",
      name: "Sarah Chen",
      role: "Data Scientist",
      avatar: "/placeholder.svg?height=40&width=40",
      impact: 65,
      projects: 3,
      lastActive: "2 hours ago",
    },
    {
      id: "tm2",
      name: "Miguel Rodriguez",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      impact: 58,
      projects: 2,
      lastActive: "1 day ago",
    },
    {
      id: "tm3",
      name: "Aisha Patel",
      role: "Project Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      impact: 72,
      projects: 4,
      lastActive: "3 hours ago",
    },
    {
      id: "tm4",
      name: "David Kim",
      role: "Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      impact: 61,
      projects: 3,
      lastActive: "5 hours ago",
    },
  ],

  // Active projects
  activeProjects: [
    {
      id: "p1",
      title: "Clean Water Initiative",
      description: "Developing affordable water filters for rural communities",
      progress: 65,
      impact: 18,
      team: ["tm1", "tm3", "tm4"],
      sdgs: ["Clean Water", "Good Health"],
      deadline: "2023-08-15",
    },
    {
      id: "p2",
      title: "Solar Power for Schools",
      description: "Installing solar panels in underfunded schools",
      progress: 42,
      impact: 15,
      team: ["tm2", "tm4"],
      sdgs: ["Clean Energy", "Quality Education"],
      deadline: "2023-09-30",
    },
    {
      id: "p3",
      title: "Urban Garden Network",
      description: "Creating community gardens in urban food deserts",
      progress: 78,
      impact: 12,
      team: ["tm1", "tm2"],
      sdgs: ["Zero Hunger", "Sustainable Cities"],
      deadline: "2023-07-20",
    },
  ],

  // Current challenges
  currentChallenges: [
    {
      id: "c1",
      title: "Plastic Reduction Challenge",
      description: "Develop solutions to reduce single-use plastics",
      difficulty: "medium" as const,
      xp: 150,
      impact: 8,
      category: "Environment",
      deadline: "2023-07-15",
      participants: 45,
    },
    {
      id: "c2",
      title: "Digital Literacy Workshop",
      description: "Create educational content for digital skills",
      difficulty: "easy" as const,
      xp: 100,
      impact: 6,
      category: "Education",
      deadline: "2023-07-10",
      participants: 28,
    },
    {
      id: "c3",
      title: "Healthcare Access Mapping",
      description: "Map healthcare deserts and propose solutions",
      difficulty: "hard" as const,
      xp: 200,
      impact: 10,
      category: "Health",
      deadline: "2023-07-25",
      participants: 32,
    },
  ],

  // NGO partners
  ngoPartners: [
    {
      id: "ngo1",
      name: "GreenEarth Alliance",
      focus: "Environmental Conservation",
      projects: 12,
      impact: 45,
      logo: "/placeholder.svg?height=60&width=60",
      region: "Global",
    },
    {
      id: "ngo2",
      name: "EduForAll",
      focus: "Education Access",
      projects: 8,
      impact: 38,
      logo: "/placeholder.svg?height=60&width=60",
      region: "Africa, Asia",
    },
    {
      id: "ngo3",
      name: "TechBridge",
      focus: "Digital Inclusion",
      projects: 10,
      impact: 42,
      logo: "/placeholder.svg?height=60&width=60",
      region: "Global",
    },
  ],

  // Recent notifications
  notifications: [
    {
      id: "n1",
      type: "challenge",
      title: "New Challenge Available",
      description: "Food Waste Reduction Challenge is now open for participation",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "n2",
      type: "project",
      title: "Project Update",
      description: "Clean Water Initiative has reached 65% completion",
      time: "1 day ago",
      read: true,
    },
    {
      id: "n3",
      type: "achievement",
      title: "Badge Earned",
      description: 'You\'ve earned the "Climate Champion" badge',
      time: "3 days ago",
      read: true,
    },
    {
      id: "n4",
      type: "message",
      title: "Message from Aisha",
      description: "Can we discuss the project timeline tomorrow?",
      time: "5 hours ago",
      read: false,
    },
  ],

  // Learning paths
  learningPaths: [
    {
      id: "lp1",
      title: "Sustainable Development Fundamentals",
      description: "Learn the basics of sustainable development and SDGs",
      progress: 75,
      modules: 8,
      completed: 6,
      skills: ["SDG Knowledge", "Sustainability Analysis", "Impact Assessment"],
    },
    {
      id: "lp2",
      title: "Climate Innovation",
      description: "Develop skills for climate-focused innovation and solutions",
      progress: 40,
      modules: 10,
      completed: 4,
      skills: ["Climate Science", "Green Technology", "Carbon Footprint Analysis"],
    },
    {
      id: "lp3",
      title: "Social Entrepreneurship",
      description: "Build and scale social impact ventures",
      progress: 20,
      modules: 12,
      completed: 2,
      skills: ["Business Modeling", "Impact Measurement", "Stakeholder Management"],
    },
  ],

  // Impact growth data (monthly)
  impactGrowth: {
    monthly: [
      { month: "Jan", impact: 42, projects: 5, xp: 350 },
      { month: "Feb", impact: 48, projects: 6, xp: 420 },
      { month: "Mar", impact: 55, projects: 7, xp: 510 },
      { month: "Apr", impact: 62, projects: 8, xp: 580 },
      { month: "May", impact: 70, projects: 10, xp: 650 },
      { month: "Jun", impact: 78, projects: 12, xp: 720 },
    ],
    weekly: [
      { week: "Week 1", impact: 70, projects: 10, xp: 650 },
      { week: "Week 2", impact: 72, projects: 10, xp: 670 },
      { week: "Week 3", impact: 74, projects: 11, xp: 690 },
      { week: "Week 4", impact: 78, projects: 12, xp: 720 },
    ],
  },

  // Skill development
  skillDevelopment: [
    { skill: "Project Management", level: 8, progress: 80 },
    { skill: "Data Analysis", level: 6, progress: 65 },
    { skill: "Sustainable Design", level: 7, progress: 75 },
    { skill: "Community Engagement", level: 9, progress: 90 },
    { skill: "Climate Science", level: 5, progress: 50 },
  ],
}
