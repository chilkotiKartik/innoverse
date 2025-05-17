import type { Project, Challenge, TeamMember, Notification } from "./types"

export const projects: Project[] = [
  {
    id: "1",
    title: "EcoTrack: Real-time Environmental Monitoring",
    description:
      "A platform that uses IoT sensors to monitor air quality, water pollution, and noise levels in urban areas, providing real-time data to citizens and policymakers.",
    category: "Climate Tech",
    status: "In Progress",
    teamSize: 4,
    location: "Global",
  },
  {
    id: "2",
    title: "LearnLink: Peer-to-Peer Education Platform",
    description:
      "A platform connecting students from different countries for collaborative learning, language exchange, and cross-cultural education projects.",
    category: "EdTech",
    status: "Active",
    teamSize: 3,
    location: "Remote",
  },
  {
    id: "3",
    title: "MediConnect: Healthcare Access for All",
    description:
      "A telemedicine solution designed for low-resource settings, enabling remote consultations, medical record keeping, and health education for underserved communities.",
    category: "Health",
    status: "Planning",
    teamSize: 5,
    location: "Africa, Asia",
  },
  {
    id: "4",
    title: "PeaceDialogue: Conflict Resolution Platform",
    description:
      "A digital platform facilitating dialogue between youth from conflict regions, using AI-moderated discussions and collaborative projects to build understanding.",
    category: "PeaceTech",
    status: "Active",
    teamSize: 6,
    location: "Middle East",
  },
  {
    id: "5",
    title: "FarmSmart: Sustainable Agriculture Assistant",
    description:
      "An AI-powered mobile app that helps small-scale farmers optimize crop yields, reduce water usage, and adapt to changing climate conditions.",
    category: "Climate Tech",
    status: "Testing",
    teamSize: 4,
    location: "South America",
  },
  {
    id: "6",
    title: "AccessEd: Inclusive Learning Tools",
    description:
      "A suite of assistive technologies designed to make education more accessible for students with various disabilities, including screen readers and alternative input methods.",
    category: "EdTech",
    status: "In Progress",
    teamSize: 3,
    location: "Global",
  },
  {
    id: "7",
    title: "CleanWater: Community Water Purification",
    description:
      "A low-cost, solar-powered water purification system designed for rural communities without access to clean drinking water.",
    category: "Climate Tech",
    status: "Active",
    teamSize: 5,
    location: "Southeast Asia",
  },
  {
    id: "8",
    title: "SafeRoute: Refugee Navigation System",
    description:
      "A mobile app providing safe route planning, multilingual support, and resource location for refugees and displaced persons.",
    category: "PeaceTech",
    status: "Planning",
    teamSize: 4,
    location: "Europe, Middle East",
  },
  {
    id: "9",
    title: "MentalHealth Connect: Youth Support Network",
    description:
      "A peer support platform connecting young people with mental health resources, trained volunteers, and professional support.",
    category: "Health",
    status: "Testing",
    teamSize: 6,
    location: "Global",
  },
]

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Flood Early Warning System",
    description:
      "Design a low-cost, community-operated early warning system for flood-prone regions with limited internet connectivity.",
    category: "Climate Tech",
    difficulty: "Intermediate",
    duration: "6 weeks",
    deadline: "August 15, 2025",
    reward: "Implementation funding + Mentorship",
  },
  {
    id: "2",
    title: "Accessible Learning for Visual Impairment",
    description:
      "Create innovative tools to make STEM education more accessible for students with visual impairments in resource-constrained settings.",
    category: "EdTech",
    difficulty: "Advanced",
    duration: "8 weeks",
    deadline: "September 1, 2025",
    reward: "Grant opportunity + Conference presentation",
  },
  {
    id: "3",
    title: "Mental Health Support for Refugees",
    description:
      "Develop a multilingual digital solution to provide mental health support and resources for displaced youth and refugees.",
    category: "Health",
    difficulty: "Intermediate",
    duration: "4 weeks",
    deadline: "July 30, 2025",
    reward: "NGO partnership + Field testing",
  },
  {
    id: "4",
    title: "Cross-Border Digital Dialogue",
    description:
      "Build a platform that facilitates meaningful dialogue between youth from regions in conflict, with translation, moderation, and collaborative features.",
    category: "PeaceTech",
    difficulty: "Advanced",
    duration: "10 weeks",
    deadline: "October 15, 2025",
    reward: "UN presentation + Implementation support",
  },
  {
    id: "5",
    title: "Plastic Waste Tracker",
    description:
      "Create a citizen science app that helps communities track, measure, and reduce plastic waste through gamification and community challenges.",
    category: "Climate Tech",
    difficulty: "Beginner",
    duration: "3 weeks",
    deadline: "July 10, 2025",
    reward: "Environmental NGO partnership",
  },
  {
    id: "6",
    title: "Rural Healthcare Connectivity",
    description:
      "Design a solution for rural healthcare workers to access medical information, consult specialists, and maintain patient records with intermittent connectivity.",
    category: "Health",
    difficulty: "Intermediate",
    duration: "6 weeks",
    deadline: "August 30, 2025",
    reward: "Pilot implementation + Mentorship",
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Project Lead & Full-Stack Developer",
    skills: ["React", "Node.js", "Project Management", "UI/UX"],
    type: "team",
  },
  {
    id: "2",
    name: "Alex Chen",
    role: "Backend Developer",
    skills: ["Python", "MongoDB", "API Design", "Data Engineering"],
    type: "team",
  },
  {
    id: "3",
    name: "Maya Rodriguez",
    role: "UX Designer",
    skills: ["Figma", "User Research", "Accessibility", "Prototyping"],
    type: "team",
  },
  {
    id: "4",
    name: "Jamal Ibrahim",
    role: "Mobile Developer",
    skills: ["React Native", "Flutter", "Offline-First Design", "UX"],
    type: "team",
  },
  {
    id: "5",
    name: "Dr. Priya Sharma",
    role: "Environmental Science Advisor",
    skills: ["Climate Science", "Data Analysis", "Sensor Technology", "GIS"],
    type: "mentor",
  },
  {
    id: "6",
    name: "Dr. Michael Lee",
    role: "Technical Mentor",
    skills: ["System Architecture", "Scalability", "Cloud Infrastructure", "Security"],
    type: "mentor",
  },
  {
    id: "7",
    name: "Emma Wilson",
    role: "NGO Partnership Coordinator",
    skills: ["Project Management", "Stakeholder Engagement", "Impact Assessment", "Grant Writing"],
    type: "ngo",
  },
  {
    id: "8",
    name: "Carlos Mendez",
    role: "Community Outreach Manager",
    skills: ["Community Building", "Training", "Localization", "Field Testing"],
    type: "ngo",
  },
]

export const notifications: Notification[] = [
  {
    id: "1",
    title: "Project Update",
    message: "The EcoTrack project has reached 65% completion. New sensor data is now available for analysis.",
    time: "2 hours ago",
    type: "update",
    sender: "Alex Chen",
  },
  {
    id: "2",
    title: "Mentor Session Scheduled",
    message: "Your mentor session with Dr. Priya Sharma has been confirmed for tomorrow at 3:00 PM.",
    time: "5 hours ago",
    type: "message",
    sender: "System",
  },
  {
    id: "3",
    title: "New Challenge Available",
    message: "A new challenge 'Sustainable Urban Mobility' has been posted that matches your skills and interests.",
    time: "Yesterday",
    type: "challenge",
    sender: "InnovVerse Team",
  },
  {
    id: "4",
    title: "Team Member Request",
    message: "Jamal Ibrahim has requested to join your EcoTrack project team as a Mobile Developer.",
    time: "2 days ago",
    type: "mention",
    sender: "Jamal Ibrahim",
  },
  {
    id: "5",
    title: "Project Review",
    message: "Dr. Michael Lee has provided feedback on your technical architecture. Click to view comments.",
    time: "3 days ago",
    type: "review",
    sender: "Dr. Michael Lee",
  },
]
