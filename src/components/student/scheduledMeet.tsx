import SectionHeader from "./sectionHeader";

const ScheduledMeetsSection: React.FC = () => {
    return (
      <div className="mb-6">
        <SectionHeader title="Scheduled Meets" />
        <div className="border border-gray-700 rounded-xl p-10 flex justify-center items-center min-h-48 bg-[#141414]">
          <p className="text-gray-500">No meetings scheduled for today</p>
        </div>
      </div>
    );
  };
  
  export default ScheduledMeetsSection;