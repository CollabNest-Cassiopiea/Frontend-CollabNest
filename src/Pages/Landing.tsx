import React from 'react';
import './Landing.css';
import studentImage from '../assets/images/student.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Learn by Doing.
            <br />
            Grow with Mentors.
          </h1>
          <p>
            A structured project-based learning platform connecting
            students with mentors & professors for hands-on
            experience.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="icon globe-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2" />
                <path d="M12 2C16.418 2 20 5.582 20 10C20 14.418 16.418 18 12 18C7.582 18 4 14.418 4 10" stroke="#6366F1" strokeWidth="2" />
                <path d="M2 12H22" stroke="#6366F1" strokeWidth="2" />
                <path d="M12 2V22" stroke="#6366F1" strokeWidth="2" />
              </svg>
            </div>
            <h3>Browse & Apply</h3>
            <p>Students find projects based on their tech stack & apply</p>
          </div>

          <div className="feature-card">
            <div className="icon mentor-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="12" rx="2" stroke="#EC4899" strokeWidth="2" />
                <circle cx="16" cy="10" r="1" fill="#EC4899" />
                <path d="M3 18L7 14" stroke="#EC4899" strokeWidth="2" />
                <path d="M21 18L17 14" stroke="#EC4899" strokeWidth="2" />
              </svg>
            </div>
            <h3>Work with Mentors</h3>
            <p>Mentors guide students through real-world tasks.</p>
          </div>

          <div className="feature-card">
            <div className="icon progress-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="4" height="16" rx="1" stroke="#10B981" strokeWidth="2" />
                <rect x="10" y="8" width="4" height="12" rx="1" stroke="#10B981" strokeWidth="2" />
                <rect x="16" y="6" width="4" height="14" rx="1" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>
            <h3>Track & Submit</h3>
            <p>Students track progress, complete tasks & get feedback.</p>
          </div>
        </div>
      </section>

      {/* Choose Your Role Section */}
<section className="roles-section dark-bg">
  <h2>Choose Your Role, Shape Your Learning</h2>
  <div className="New-role">
  <div className="role-container">
    <div className="role-info">
      <h3>Student</h3>
      <p>
        Students have access to a personalized dashboard where
        they can browse and apply for projects based on their
        selected tech stack. Once accepted, they can track their
        project progress, view assigned tasks, submit work, and
        receive mentor guidance. The dashboard provides clear
        deadlines, milestones, and submission history, ensuring
        structured learning.
      </p>
    </div>
    <div className="role-image">
      <img src={studentImage} alt="Student working on computer" />
    </div>
  </div>
      {/* Pagination Dots */}
      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      </div>

</section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to build real world projects?</h2>
        <p>
          Join thousands of successful mentors and educators on CollabNest and
          transform your expertise into impact. We provide the tools and support you need
          to guide students through real-world projects across various domains, from
          technology to research and innovation.
        </p>
        <button className="signup-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default LandingPage;