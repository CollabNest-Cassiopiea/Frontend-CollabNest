import React, { useState } from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  description: string;
  skills: string[];
}

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
}

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 cursor-pointer" onClick={onClick}>
      <img src={certificate.imageSrc} alt={certificate.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-medium">{certificate.title}</h3>
        <p className="text-gray-400 text-sm">Issued by: {certificate.issuer}</p>
        <p className="text-gray-400 text-sm">Date: {certificate.date}</p>
      </div>
    </div>
  );
};

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{certificate.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        {/* Certificate image */}
        <div className="w-full h-56 sm:h-64 md:h-72">
          <img 
            src={certificate.imageSrc} 
            alt={certificate.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Certificate details */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-gray-400 mb-2">
              <span className="font-medium text-white">Issuer:</span> {certificate.issuer}
            </p>
            <p className="text-gray-400 mb-4">
              <span className="font-medium text-white">Issue Date:</span> {certificate.date}
            </p>
          </div>
          
          <h3 className="text-lg font-medium text-white mb-2">Description</h3>
          <p className="text-gray-400 mb-4">{certificate.description}</p>
          
          <h3 className="text-lg font-medium text-white mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {certificate.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Download
            </button>
            <button className="bg-green-500 text-black px-4 py-2 rounded-lg text-sm font-medium">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates: Certificate[] = [
    {
      id: "1",
      title: "Web Development Fundamentals",
      issuer: "CodeAcademy",
      date: "Oct 12, 2022",
      imageSrc: "/api/placeholder/400/320",
      description: "This certificate verifies proficiency in HTML, CSS, and JavaScript fundamentals, including DOM manipulation, responsive design principles, and modern web development practices.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: "2",
      title: "Data Science Essentials",
      issuer: "DataCamp",
      date: "Mar 23, 2022",
      imageSrc: "/api/placeholder/400/320",
      description: "A comprehensive program covering data analysis, visualization, statistical methods, and machine learning fundamentals with hands-on projects using real-world datasets.",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"]
    },
    {
      id: "3",
      title: "UX/UI Design Principles",
      issuer: "DesignLab",
      date: "Jan 05, 2023",
      imageSrc: "/api/placeholder/400/320",
      description: "This certification demonstrates mastery of user experience design methodologies, wireframing, prototyping, user research techniques, and modern interface design principles.",
      skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Adobe XD"]
    },
    {
      id: "4",
      title: "Cloud Computing Architecture",
      issuer: "AWS Academy",
      date: "May 17, 2022",
      imageSrc: "/api/placeholder/400/320",
      description: "Validates expertise in designing, deploying, and managing cloud infrastructure, with focus on scalability, security, and cost optimization strategies.",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Serverless", "Security"]
    },
    {
      id: "5",
      title: "Mobile App Development",
      issuer: "Google Developers",
      date: "Nov 30, 2022",
      imageSrc: "/api/placeholder/400/320",
      description: "Covers cross-platform mobile application development, including UI/UX for mobile, state management, API integration, and deployment to app stores.",
      skills: ["React Native", "Flutter", "Mobile UI", "API Integration"]
    },
    {
      id: "6",
      title: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      date: "Feb 09, 2023",
      imageSrc: "/api/placeholder/400/320",
      description: "Provides comprehensive training in network security, vulnerability assessment, threat detection, encryption technologies, and security compliance frameworks.",
      skills: ["Network Security", "Encryption", "Threat Analysis", "Compliance"]
    }
  ];

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col">
        {/* Avatar and Title */}
        <div className="flex flex-col items-center pt-6 pb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
          <h1 className="text-lg font-medium">Jayden's Projects</h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="px-4 flex-1">
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Home
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            My Projects
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg bg-gray-800 text-white mb-1">
            Certificates
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Profile
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Settings
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">My Certificates</h1>
        
        {/* Featured Certificate */}
        <div className="mb-10">
          <h2 className="text-xl mb-4">Featured Certificate</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src="/api/placeholder/400/320" 
                  alt="Featured Certificate" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
                    <p className="text-gray-400">Issued by: Tech Institute</p>
                    <p className="text-gray-400">Date: Dec 15, 2022</p>
                  </div>
                  <div className="bg-green-500 text-xs uppercase font-bold rounded-full px-3 py-1 text-black">
                    Top Achievement
                  </div>
                </div>
                <p className="text-gray-400 mt-4">
                  This comprehensive certification covers both front-end and back-end development technologies, 
                  with expertise in modern JavaScript frameworks, database design, API development, and DevOps practices.
                </p>
                <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certificates grid */}
        <div>
          <h2 className="text-xl mb-4">All Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map(certificate => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onClick={() => openModal(certificate)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Certificates;