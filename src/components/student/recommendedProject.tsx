import ProjectCard from "../../components/student/projectCard";
import SearchBar from "./searchBar";
import SectionHeader from "./sectionHeader";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface RecommendedProjectsSectionProps {
  projects: Project[];
}

const RecommendedProjectsSection: React.FC<RecommendedProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <div className="mb-10">
      <SectionHeader title="Recommended projects" />
      <div className="mb-4">
        <SearchBar placeholder="Search for projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
        {projects.slice(4, 8).map((project, index) => (
          <ProjectCard
            key={index + 4}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProjectsSection;