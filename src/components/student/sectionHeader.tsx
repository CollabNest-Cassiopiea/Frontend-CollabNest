interface SectionHeaderProps {
    title: string;
  }
  
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return <h2 className="text-lg font-medium mb-4">{title}</h2>;
  };
  
  export default SectionHeader;