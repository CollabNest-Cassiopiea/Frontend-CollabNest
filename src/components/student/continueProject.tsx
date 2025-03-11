import SectionHeader from "./sectionHeader";

interface ContinueProjectSectionProps {
    title: string;
    description: string;
  }
  
  const ContinueProjectSection: React.FC<ContinueProjectSectionProps> = ({
    title,
    description,
  }) => {
    return (
      <div className="mb-8">
        <SectionHeader title="Continue your project" />
        <div className="border border-gray-700 rounded-xl p-5 flex justify-between items-center bg-[#141414]">
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">{description}</p>
          </div>
          <button
            className="text-white px-4 py-2 rounded-md text-sm font-medium transition"
            style={{ backgroundColor: "#38E078" }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  };
  
  export default ContinueProjectSection;