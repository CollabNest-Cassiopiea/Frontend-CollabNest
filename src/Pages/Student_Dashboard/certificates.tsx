import React from "react";

interface Certificate {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  imageUrl?: string;
}

const MyCertificates: React.FC = () => {
  // Sample certificates data
  const certificates: Certificate[] = [
    {
      id: "1",
      title: "CollabNest",
      description: "A structured project-based learning platform connecting students with mentors & professors for hands-on experience.",
      completed: true,
    },
    {
      id: "2",
      title: "Front-End Web Development",
      description: "Comprehensive course covering HTML, CSS, JavaScript, and React for building modern web interfaces.",
      completed: false,
    },
    {
      id: "3",
      title: "Data Structures & Algorithms",
      description: "In-depth study of fundamental data structures and algorithms for efficient problem solving.",
      completed: false,
    },
  ];

  const handleViewCertificate = (certificateId: string) => {
    console.log(`View certificate ${certificateId}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Certificates</h1>
      </div>

      <div className="space-y-4">
        {certificates.map((certificate) => (
          <div 
            key={certificate.id}
            className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-white font-medium">{certificate.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{certificate.description}</p>
            </div>
            {certificate.completed ? (
              <button
                onClick={() => handleViewCertificate(certificate.id)}
                className="px-4 py-1 text-green-400 text-sm rounded-md border border-transparent hover:bg-gray-800 transition"
              >
                View
              </button>
            ) : (
              <span className="px-4 py-1 text-gray-500 text-sm">
                In Progress
              </span>
            )}
          </div>
        ))}

        {/* Empty certificate placeholders to match the design */}
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-12">
          {/* Empty placeholder */}
        </div>
        <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-12">
          {/* Empty placeholder */}
        </div>
      </div>
    </div>
  );
};

export default MyCertificates;