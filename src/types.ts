// Define any interfaces and types here
export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export interface RoleProps {
    title: string;
    description: string;
    imageUrl: string;
    isActive: boolean;
  }
  
  // types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  link?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  projectId?: string;
  imageUrl?: string;
}

export interface ProfileData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  skills?: string[];
  education?: {
    institution: string;
    degree: string;
    year: string;
  }[];
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}