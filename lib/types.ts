export interface Project {
  id: string
  title: string
  description: string
  category: string
  status: string
  teamSize: number
  location: string
}

export interface Mentor {
  id: string
  name: string
  title: string
  bio: string
  expertise: string[]
  location: string
  availability: string
  reviewCount: number
}

export interface Challenge {
  id: string
  title: string
  description: string
  category: string
  difficulty: string
  duration: string
  deadline: string
  reward: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  skills: string[]
  type: "team" | "mentor" | "ngo"
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  type: string
  sender?: string
}

export interface NGO {
  id: string
  name: string
  focus: string
  description: string
  location: string
  sdgs: string[]
  projectsCount: number
  impactCount: number
}

export interface ThematicRoom {
  id: string
  name: string
  theme: string
  description: string
  status: string
  membersCount: number
  projectsCount: number
  nextSession: string
}
