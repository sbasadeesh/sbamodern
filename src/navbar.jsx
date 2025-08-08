import React, { useState, useEffect, useRef } from 'react';
import logo from "./logo.png";

const ResponsiveNavbar = () => {
  const [display, setDisplay] = useState("Media");
  const [isOpenIndustries, setIsOpenIndustries] = useState(false);
  const [isOpenDepartments, setIsOpenDepartments] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added missing state
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
        // Use environment variable or relative path for production
        const response = await fetch('http://localhost:5000/demo/send-mail', {
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
          // Fixed: Reset all form fields consistently
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
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
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

  // Data objects with department-wise content
  let data_and_ai = {
    BFSI: [
      { id: 1, name: "Fraud Detection", discription: "Detect fraudulent transactions in real-time using AI algorithms" },
      { id: 2, name: "Credit Risk Scoring", discription: "Analyze creditworthiness with predictive models" }
    ],
    Media: [
      { id: 1, name: "Content Recommendation", discription: "Personalized AI-driven content suggestions" },
      { id: 2, name: "Audience Analytics", discription: "Optimize content strategy with data insights" }
    ],
    Telecommunication: [
      { id: 1, name: "Network Optimization", discription: "Predict and manage network congestion" },
      { id: 2, name: "Churn Prediction", discription: "Identify at-risk customers for retention" }
    ],
    Manufacturing: [
      { id: 1, name: "Predictive Maintenance", discription: "Forecast equipment failures with AI" },
      { id: 2, name: "Quality Control", discription: "Automate defect detection with computer vision" }
    ],
    Healthcare: [
      { id: 1, name: "Disease Prediction", discription: "Forecast health risks with patient data" },
      { id: 2, name: "Medical Imaging Analysis", discription: "Improve diagnostics with AI imaging" }
    ],
    IT_ITES: [
      { id: 1, name: "IT Operations Analytics", discription: "Monitor and resolve IT issues with AI" },
      { id: 2, name: "Chatbots & Virtual Assistants", discription: "Automate support with AI-powered bots" }
    ],
    HR: [
      { id: 1, name: "Talent Acquisition AI", discription: "Screen resumes and identify top candidates" },
      { id: 2, name: "Employee Engagement Analytics", discription: "Improve retention with sentiment analysis" }
    ],
    Accounting: [
      { id: 1, name: "Financial Forecasting", discription: "Predict revenue and expenses with AI" },
      { id: 2, name: "Fraud Detection in Transactions", discription: "Identify anomalies in financial data" }
    ],
    Telecalling: [
      { id: 1, name: "Call Sentiment Analysis", discription: "Analyze customer emotions during calls" },
      { id: 2, name: "Lead Scoring", discription: "Prioritize high-potential leads with AI" }
    ]
  };

  let it_and_business_automation = {
    BFSI: [
      { id: 1, name: "Robotic Process Automation", discription: "Automate loan processing and compliance" },
      { id: 2, name: "Document Management", discription: "Digitize and manage financial documents" }
    ],
    Media: [
      { id: 1, name: "Content Publishing Automation", discription: "Schedule and distribute content" },
      { id: 2, name: "Rights Management", discription: "Automate licensing workflows" }
    ],
    Telecommunication: [
      { id: 1, name: "Service Provisioning", discription: "Automate network setup for customers" },
      { id: 2, name: "Billing Automation", discription: "Streamline billing to reduce errors" }
    ],
    Manufacturing: [
      { id: 1, name: "Inventory Automation", discription: "Track inventory with automation" },
      { id: 2, name: "Production Scheduling", discription: "Optimize factory operations" }
    ],
    Healthcare: [
      { id: 1, name: "Patient Record Automation", discription: "Streamline patient data management" },
      { id: 2, name: "Claims Processing", discription: "Automate insurance claims" }
    ],
    IT_ITES: [
      { id: 1, name: "Workflow Automation", discription: "Automate ticketing and project pipelines" },
      { id: 2, name: "System Integration", discription: "Connect enterprise applications" }
    ],
    HR: [
      { id: 1, name: "Payroll Automation", discription: "Streamline salary processing" },
      { id: 2, name: "Onboarding Workflow", discription: "Automate employee onboarding" }
    ],
    Accounting: [
      { id: 1, name: "Invoice Processing", discription: "Automate invoice workflows" },
      { id: 2, name: "Expense Management", discription: "Track expenses with automation" }
    ],
    Telecalling: [
      { id: 1, name: "Auto-Dialer Systems", discription: "Automate outbound calls" },
      { id: 2, name: "CRM Integration", discription: "Sync call data with CRM" }
    ]
  };

  let security_and_sustainability = {
    BFSI: [
      { id: 1, name: "Cybersecurity", discription: "Protect financial data with threat detection" },
      { id: 2, name: "Compliance Management", discription: "Ensure regulatory compliance" }
    ],
    Media: [
      { id: 1, name: "Content Protection", discription: "Prevent piracy with DRM" },
      { id: 2, name: "Sustainable Broadcasting", discription: "Energy-efficient media infrastructure" }
    ],
    Telecommunication: [
      { id: 1, name: "Network Security", discription: "Secure telecom infrastructure" },
      { id: 2, name: "Energy Optimization", discription: "Reduce data center energy use" }
    ],
    Manufacturing: [
      { id: 1, name: "Industrial Cybersecurity", discription: "Protect IoT and OT systems" },
      { id: 2, name: "Sustainable Manufacturing", discription: "Reduce waste with smart systems" }
    ],
    Healthcare: [
      { id: 1, name: "Patient Data Protection", discription: "HIPAA-compliant data security" },
      { id: 2, name: "Eco-friendly Healthcare IT", discription: "Sustainable IT practices" }
    ],
    IT_ITES: [
      { id: 1, name: "Endpoint Security", discription: "Protect devices in IT environments" },
      { id: 2, name: "Green IT Practices", discription: "Optimize data center energy use" }
    ],
    HR: [
      { id: 1, name: "Employee Data Security", discription: "Encrypt sensitive HR data" },
      { id: 2, name: "Sustainable HR Practices", discription: "Paperless HR processes" }
    ],
    Accounting: [
      { id: 1, name: "Financial Data Security", discription: "Secure accounting systems" },
      { id: 2, name: "Green Accounting", discription: "Digital financial reporting" }
    ],
    Telecalling: [
      { id: 1, name: "Call Data Security", discription: "Encrypt customer call data" },
      { id: 2, name: "Energy-Efficient Call Centers", discription: "Optimize call center energy use" }
    ]
  };

  let open_hybrid_cloud_by_industry = {
    BFSI: [
      { id: 1, name: "Secure Cloud Migration", discription: "Migrate financial data securely" },
      { id: 2, name: "Hybrid Infrastructure", discription: "Integrate banking systems with cloud" }
    ],
    Media: [
      { id: 1, name: "Content Delivery in Cloud", discription: "Fast media rendering and streaming" },
      { id: 2, name: "Multi-Cloud Management", discription: "Manage content across platforms" }
    ],
    Telecommunication: [
      { id: 1, name: "Cloud-Native Network", discription: "Modernize telecom with NFV" },
      { id: 2, name: "Edge Cloud Integration", discription: "Deploy latency-sensitive workloads" }
    ],
    Manufacturing: [
      { id: 1, name: "Smart Factory Cloud", discription: "Connect shop floors to cloud" },
      { id: 2, name: "Data Mobility", discription: "Analyze production data across plants" }
    ],
    Healthcare: [
      { id: 1, name: "Secure Health Data Storage", discription: "Compliant cloud storage for records" },
      { id: 2, name: "Cloud Interoperability", discription: "Enable data exchange across systems" }
    ],
    IT_ITES: [
      { id: 1, name: "Multi-Cloud Operations", discription: "Manage apps across AWS, Azure" },
      { id: 2, name: "DevOps in Hybrid Cloud", discription: "Run CI/CD pipelines efficiently" }
    ],
    HR: [
      { id: 1, name: "Cloud-Based HR Systems", discription: "Scalable HR applications in cloud" },
      { id: 2, name: "Employee Data Integration", discription: "Sync HR data across systems" }
    ],
    Accounting: [
      { id: 1, name: "Cloud Accounting Software", discription: "Real-time accounting in cloud" },
      { id: 2, name: "Financial Data Backup", discription: "Resilient hybrid cloud backups" }
    ],
    Telecalling: [
      { id: 1, name: "Cloud-Based Call Centers", discription: "Flexible call center software" },
      { id: 2, name: "Call Data Analytics", discription: "Analyze call data in cloud" }
    ]
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
                <a href="/" className="relative block py-2 px-3 text-gray-300 hover:text-red-500 transition-colors duration-200 group">
                  Home
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
              Get Started
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
            <a href="/Connect-with-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200">
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
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 right-0 z-50 bg-black border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="flex max-w-screen-xl px-6 py-8 mx-auto text-sm gap-6">
              {/* Solutions By Industries and Departments */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-semibold text-white text-lg mb-4 pt-1">Our Solutions</h3>
                <div className="space-y-4">
                  <div>
                    <button
                      onClick={() => setIsOpenIndustries(!isOpenIndustries)}
                      className="text-gray-300 cursor-pointer hover:text-red-500 py-2 rounded transition-colors duration-200 flex items-center w-full"
                      aria-label={isOpenIndustries ? "Collapse industries menu" : "Expand industries menu"}
                    >
                      <span className="mr-2">Solutions By Industries</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isOpenIndustries ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenIndustries ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-3 border-l-2 border-red-500">
                        {['Media', 'BFSI', 'Manufacturing', 'Healthcare', 'IT/ITES', 'Telecommunications'].map((industry) => (
                          <a key={industry} href="#" className="block group" onMouseEnter={() => setDisplay(industry)}>
                            <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                              {industry}
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                              Specialized solutions for {industry.toLowerCase()} sector
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsOpenDepartments(!isOpenDepartments)}
                      className="text-gray-300 cursor-pointer hover:text-red-500 py-2 rounded transition-colors duration-200 flex items-center w-full"
                      aria-label={isOpenDepartments ? "Collapse departments menu" : "Expand departments menu"}
                    >
                      <span className="mr-2">Solutions By Departments</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isOpenDepartments ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpenDepartments ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-3 border-l-2 border-red-500">
                        {['HR', 'Accounting', 'Telecalling'].map((department) => (
                          <a key={department} href="#" className="block group" onMouseEnter={() => setDisplay(department)}>
                            <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                              {department}
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                              Tailored solutions for {department.toLowerCase()} department
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Data and AI */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-semibold text-white text-lg mb-4 cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={() => window.location.href = "/Data-and-ai"}>
                  Data and AI
                </h3>
                <div className="space-y-4">
                  {data_and_ai[display]?.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {item.discription}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
              {/* IT and Business Automation */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-semibold text-white text-lg mb-4 cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={() => window.location.href = "/It_and_buisness_automation"}>
                  IT & Business Automation
                </h3>
                <div className="space-y-4">
                  {it_and_business_automation[display]?.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {item.discription}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
              {/* Security and Sustainability */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-semibold text-white text-lg mb-4 cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={() => window.location.href = "/Security_and_sustainability"}>
                  Security & Sustainability
                </h3>
                <div className="space-y-4">
                  {security_and_sustainability[display]?.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {item.discription}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
              {/* Open Hybrid Cloud */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="font-semibold text-white text-lg mb-4 cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={() => window.location.href = "/Open_hybrid_cloud"}>
                  Open Hybrid Cloud
                </h3>
                <div className="space-y-4">
                  {open_hybrid_cloud_by_industry[display]?.map((item, index) => (
                    <a key={index} href="#" className="block group">
                      <div className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium mb-1">
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {item.discription}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 bg-gray-950 px-6 py-6">
              <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">Ready to transform your business?</h4>
                  <p className="text-gray-400 text-sm">Discover how our solutions can drive your success</p>
                </div>
                <a href="/Our-solutions" className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 group">
                  Explore All Solutions
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ResponsiveNavbar;