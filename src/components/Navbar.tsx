import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for transparent to solid background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50  transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-full mx-auto px-6 sm:px-12 lg:px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Explicitly pushed to the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              CollabNest
            </Link>
          </div>

          {/* Auth Buttons (Desktop) - Right aligned and properly spaced */}
          <div className="hidden md:flex items-center space-x-4">
          <Link 
  to="/login" 
  className="border-2 border-white px-4 py-2 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
>
  Log In
</Link>
<Link 
  to="/contact_us" 
  className="border-2 border-white px-4 py-2 text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
>
  Contact US
</Link>



          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4 bg-black bg-opacity-90 rounded-b-lg">
            <Link to="/login" className="border-2 border-white px-4 py-2 text-white font-medium hover:bg-black hover:text-grey transition-colors rounded-lg">Log In</Link>
            <Link to="/contact_us" className="border-2 border-white px-4 py-2 text-white font-medium hover:bg-black hover:text-grey transition-colors rounded-lg">Contact US</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;