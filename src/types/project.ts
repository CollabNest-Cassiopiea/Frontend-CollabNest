export interface Mentor {
    name: string
    avatar?: string
  }
  
  export interface Project {
    id: number
    title: string
    description: string
    mentor: Mentor
    progress: number
    tags: string[]
    techStack: string[]
    status?: "ongoing" | "completed" | "available"
    leaderboard: { name: string; points: number; avatar?: string }[]
    discussion: { user: { name: string; avatar?: string }; text: string; date: string }[]
    tasks: {
      id: number
      text: string
      completed: boolean
    }[]
  }