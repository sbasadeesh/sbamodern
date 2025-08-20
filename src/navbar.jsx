import React, { useState, useEffect, useRef } from 'react';
import logo from "./logo.png";

const ResponsiveNavbar = () => {
  const [display, setDisplay] = useState("Media");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    subject: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Technical Expertise");
  const [isContentVisible, setIsContentVisible] = useState(true);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('http://localhost:5000/send-mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          alert("Demo booked successfully! We'll contact you soon.");
          setShowPopup(false);
          setFormData({ 
            name: '', 
            email: '', 
            company: '', 
            message: '', 
            phone: '', 
            subject: '' 
          });
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send request');
        }
      } catch (error) {
        console.error('Error sending form:', error);
        alert("Sorry, there was an error sending your request. Please try again later or contact us directly.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in required fields (Name and Email)");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setSelectedSection("Technical Expertise");
    }, 150);
  };

  const handleSectionHover = (sectionName) => {
    if (selectedSection !== sectionName) {
      setIsContentVisible(false);
      setTimeout(() => {
        setSelectedSection(sectionName);
        setIsContentVisible(true);
      }, 150);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setSelectedSection("Technical Expertise");
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Solutions structure
  const solutionsStructure = {
    "Technical Expertise": {
      items: ["Data And AI", "IT & Buisness Automation", "Security & Sustainability", "Open Hybrid Cloud"],
      links:["/Data-and-ai","/It_and_buisness_automation","/Security_and_sustainability","/Open_hybrid_cloud"]
    },
    "Domain Expertise": {
      items: ["Customer Analytics", "Marketing Analytics", "HR Analytics"],
      links:["/Our-solutions/Domain/CustomerAnalytics","/Our-solutions/Domain/MarketingAnalytics","/Our-solutions/Domain/HRAnalytics"]
    },
    "Industry Solutions": {
      items: ["BFSI Solutions", "Media & Entertainment", "Manufacturing", "Healthcare", "IT & ITES", "Telecommunications"],
      links: ["/Our-solutions/BFSI","/Our-solutions/Media","/Our-solutions/Manufacturing","/Our-solutions/Healthcare","/Our-solutions/IT-and-ITES","/Our-solutions/Telecommunication"]
    }
  };
 
  return (
    <>
      {/* Demo Request Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100 p-2 sm:p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative animate-scaleIn max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 z-10"
              >
                ×
              </button>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 pr-8">Request a Demo</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                  <button
                    type="button"
                    onClick={closePopup}
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 shadow-lg">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4 py-4">
          <a href="/" className="flex items-center space-x-3">
            <img src={logo} className="h-10" alt="Company Logo" />
          </a>
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8 font-medium">
              <li>
                <a href="/Our-solutions" className="relative block py-2 px-3 text-gray-300 hover:text-red-500 transition-colors duration-200 group">
                  Industries
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              </li>
              <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                  ref={toggleRef}
                  onClick={toggleDropdown}
                  className="relative flex cursor-pointer items-center py-2 px-3 font-medium text-gray-300 hover:text-red-500 transition-colors duration-200 group focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  Solutions
                  <svg className={`w-2.5 h-2.5 ms-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </button>
              </li>
              <li>
                <a href="/Company" className="relative block py-2 px-3 text-gray-300 hover:text-red-500 transition-colors duration-200 group">
                  Who we Are
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              </li>
              <li>
                <a href="/Join-with-us" className="relative block py-2 px-3 text-gray-300 hover:text-red-500 transition-colors duration-200 group">
                  Join with us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              </li>
              <li>
                <a href="/Connect-with-us" className="relative block py-2 px-3 text-gray-300 hover:text-red-500 transition-colors duration-200 group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <button onClick={() => setShowPopup(true)} className="px-6 py-2 cursor-pointer text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200 transform hover:scale-105 focus:outline-none">
              Request a Demo
            </button>
          </div>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black border-t border-gray-800">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Home
            </a>
            <hr />
            <a href="/Data-and-ai" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Data and AI
            </a>
            <a href="/It_and_buisness_automation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              IT and Business Automation
            </a>
            <a href="/Security_and_sustainability" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Security and Sustainability
            </a>
            <a href="/Open_hybrid_cloud" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Open Hybrid Cloud
            </a>
            <hr />
            <a href="/Company" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Who we are
            </a>
            <hr />
            <a href="/Join-with-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
              Join with us
            </a>
            <hr />
            <a href="/Connect-with-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-505 hover:bg-gray-800 transition-all duration-200">
              Contact
            </a>
            <hr />
            <div className="pt-4">
              <button onClick={() => setShowPopup(true)} className="w-full px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-all duration-200 focus:outline-none">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Solutions Dropdown - Hover-based Mega Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 z-50 bg-black shadow-2xl border-t-4 border-red-500"
          >
            <div className="max-w-screen-xl mx-auto">
              <div className="flex">
                {/* Left Sidebar - Services */}
                <div className="w-1/4 bg-black p-6 border-r border-gray-200">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-100 mb-2">Services</h2>
                    <p className="text-sm text-gray-100">Enabling business leaders to become truly data-driven</p>
                  </div>
                  
                  <div className="space-y-1">
                    {Object.keys(solutionsStructure).map((sectionName, index) => (
                      <div key={sectionName}>
                        {index > 0 && <div className="my-2"></div>}
                        <button
                          onMouseEnter={() => handleSectionHover(sectionName)}
                          className={`w-full text-left py-3 px-3 text-sm cursor-pointer font-medium rounded-md transition-all duration-200 ${
                            selectedSection === sectionName 
                              ? 'bg-red-800 text-white shadow-sm' 
                              : 'text-gray-100 hover:bg-red-800 hover:text-white-100'
                          }`}
                        >
                          {sectionName}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 p-8">
                  <div className={`transition-all duration-300 ease-in-out ${
                    isContentVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-4'
                  }`}>
                    <h3 className="text-2xl font-bold text-gray-100 mb-6">{selectedSection}</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {solutionsStructure[selectedSection].items.map((item, index) => (
                        <div 
                          key={index}  
                          className={`group cursor-pointer transition-all duration-200 ${
                            isContentVisible ? 'delay-75' : ''
                          }`}
                          style={{ 
                            transitionDelay: isContentVisible ? `${index * 50}ms` : '0ms' 
                          }}
                        > 
                          <div onClick={()=>{ window.location.href = solutionsStructure[selectedSection].links[index] }}  className="p-4 border  rounded-lg hover:border-red-300 hover:shadow-md transition-all duration-200 transform hover:scale-105">
                            <h4 className="font-semibold text-gray-100 group-hover:text-red-600 mb-2">
                              {item}
                            </h4>
                            <p className="text-sm text-gray-100">
                              Comprehensive {item.toLowerCase()} solutions tailored to your business needs.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ResponsiveNavbar;