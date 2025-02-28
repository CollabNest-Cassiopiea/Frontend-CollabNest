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
  
  // If needed, you can add more interfaces for the component props