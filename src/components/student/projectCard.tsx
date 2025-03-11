interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition cursor-pointer bg-[#141414]">
      <img src={imageUrl || "/api/placeholder/240/120"} alt={title} className="w-full h-24 object-cover" />
      <div className="p-3">
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;