import type { Project, Mentor, Challenge, TeamMember, Notification, NGO, ThematicRoom } from "./types"

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

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Maya Patel",
    title: "AI Research Scientist at Stanford",
    bio: "Specializing in machine learning applications for social good with 10+ years of experience mentoring student innovators.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science", "Ethics"],
    location: "California, USA",
    availability: "Weekends",
    reviewCount: 48,
  },
  {
    id: "2",
    name: "Carlos Rodriguez",
    title: "Senior Software Engineer at Google",
    bio: "Full-stack developer passionate about mentoring the next generation of tech innovators. Focused on scalable architecture and clean code.",
    expertise: ["Web Development", "Cloud Architecture", "System Design", "JavaScript"],
    location: "Remote",
    availability: "Evenings",
    reviewCount: 36,
  },
  {
    id: "3",
    name: "Dr. Aisha Kwame",
    title: "Climate Scientist & Entrepreneur",
    bio: "Founder of two climate tech startups and advisor to the UN on sustainable development. Passionate about youth-led climate innovation.",
    expertise: ["Climate Science", "Sustainability", "Social Entrepreneurship", "Impact Measurement"],
    location: "Nairobi, Kenya",
    availability: "Flexible",
    reviewCount: 29,
  },
  {
    id: "4",
    name: "Hiroshi Tanaka",
    title: "UX Research Director",
    bio: "15+ years of experience in human-centered design. Specializes in creating accessible and inclusive digital experiences for diverse users.",
    expertise: ["UX Design", "Accessibility", "User Research", "Product Design"],
    location: "Tokyo, Japan",
    availability: "Mornings",
    reviewCount: 42,
  },
  {
    id: "5",
    name: "Sophia Chen",
    title: "Blockchain Developer & Educator",
    bio: "Passionate about decentralized technologies and their application for social impact. Teaches blockchain development to underrepresented groups.",
    expertise: ["Blockchain", "Smart Contracts", "Web3", "Cryptocurrency"],
    location: "Singapore",
    availability: "Weekends",
    reviewCount: 31,
  },
  {
    id: "6",
    name: "Dr. Miguel Santos",
    title: "Public Health Specialist",
    bio: "Works at the intersection of technology and healthcare access. Has led multiple digital health initiatives in Latin America.",
    expertise: ["Public Health", "Telemedicine", "Health Equity", "Medical Devices"],
    location: "Brazil",
    availability: "Evenings",
    reviewCount: 27,
  },
]

export const ngos: NGO[] = [
  {
    id: "1",
    name: "Global Climate Initiative",
    focus: "Climate Action & Sustainability",
    description:
      "Working with communities worldwide to implement sustainable solutions to climate change and environmental degradation.",
    location: "Global (HQ: Geneva)",
    sdgs: ["13", "7", "11"],
    projectsCount: 24,
    impactCount: 15000,
  },
  {
    id: "2",
    name: "Education For All",
    focus: "Quality Education & Digital Literacy",
    description:
      "Bridging educational gaps through technology and innovative teaching methods in underserved communities.",
    location: "Africa, Asia, Latin America",
    sdgs: ["4", "10", "5"],
    projectsCount: 18,
    impactCount: 25000,
  },
  {
    id: "3",
    name: "Health Access Network",
    focus: "Healthcare & Wellbeing",
    description:
      "Improving healthcare access in remote and underserved regions through telemedicine and community health initiatives.",
    location: "Sub-Saharan Africa, South Asia",
    sdgs: ["3", "6", "10"],
    projectsCount: 15,
    impactCount: 12000,
  },
  {
    id: "4",
    name: "Peace Bridge",
    focus: "Conflict Resolution & Peace Building",
    description:
      "Creating dialogue and understanding between communities in conflict through technology and youth engagement.",
    location: "Middle East, Eastern Europe",
    sdgs: ["16", "10", "17"],
    projectsCount: 12,
    impactCount: 8000,
  },
  {
    id: "5",
    name: "Clean Water Coalition",
    focus: "Water Access & Sanitation",
    description:
      "Developing and implementing solutions for clean water access, sanitation, and water resource management.",
    location: "Africa, Southeast Asia",
    sdgs: ["6", "3", "11"],
    projectsCount: 20,
    impactCount: 30000,
  },
  {
    id: "6",
    name: "Digital Inclusion Alliance",
    focus: "Technology Access & Digital Rights",
    description:
      "Promoting digital inclusion, internet access, and digital rights for marginalized communities worldwide.",
    location: "Global",
    sdgs: ["9", "10", "17"],
    projectsCount: 14,
    impactCount: 18000,
  },
]

export const thematicRooms: ThematicRoom[] = [
  {
    id: "1",
    name: "Climate Innovation Lab",
    theme: "Climate Action",
    description:
      "Collaborative space for developing technological solutions to climate change challenges, from early warning systems to sustainable energy.",
    status: "Active",
    membersCount: 45,
    projectsCount: 8,
    nextSession: "Tomorrow, 3PM UTC",
  },
  {
    id: "2",
    name: "EdTech Innovators",
    theme: "Education",
    description:
      "Focused on creating accessible educational technologies for diverse learning needs and resource-constrained environments.",
    status: "Active",
    membersCount: 38,
    projectsCount: 6,
    nextSession: "Friday, 2PM UTC",
  },
  {
    id: "3",
    name: "Global Health Tech Hub",
    theme: "Health",
    description:
      "Developing digital health solutions for underserved communities, from telemedicine platforms to health education tools.",
    status: "Active",
    membersCount: 42,
    projectsCount: 7,
    nextSession: "Thursday, 4PM UTC",
  },
  {
    id: "4",
    name: "PeaceTech Workshop",
    theme: "Peace & Justice",
    description:
      "Creating technologies that foster dialogue, understanding, and conflict resolution between divided communities.",
    status: "Active",
    membersCount: 32,
    projectsCount: 5,
    nextSession: "Monday, 1PM UTC",
  },
  {
    id: "5",
    name: "Sustainable Cities Lab",
    theme: "Urban Sustainability",
    description: "Designing solutions for more sustainable, inclusive, and resilient urban environments worldwide.",
    status: "Active",
    membersCount: 36,
    projectsCount: 6,
    nextSession: "Wednesday, 5PM UTC",
  },
  {
    id: "6",
    name: "Digital Inclusion Workshop",
    theme: "Technology Access",
    description:
      "Working on projects that bridge digital divides and ensure technology access for marginalized communities.",
    status: "Active",
    membersCount: 29,
    projectsCount: 4,
    nextSession: "Tuesday, 3PM UTC",
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

export const demoUsers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    password: "password123",
    role: "Student",
  },
  {
    id: "2",
    name: "Alex Chen",
    email: "alex@example.com",
    password: "password123",
    role: "Student",
  },
]
