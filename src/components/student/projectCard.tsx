interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void; // Add onClick handler
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, onClick }) => {
  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition cursor-pointer bg-[#141414]"
      onClick={onClick} // Call onClick when the card is clicked
    >
      <div className="p-3">
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;