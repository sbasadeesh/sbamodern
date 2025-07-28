import React, { useState, useEffect, useRef } from 'react';
import logo from "./logo.png"

const ResponsiveNavbar = () => {

  const [display, Updatedisply] = useState("Media")

  const [showPopup, setShowPopup] = useState(false);
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          message: ''
        });

   const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = () => {
        if (formData.name && formData.email) {
          alert("Demo booked successfully!");
          setShowPopup(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        } else {
          alert("Please fill in required fields (Name and Email)");
        }
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  // Close dropdown on outside click
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  
  let data_and_ai = {
    BFSI: [
      { id: 1, name: "Fraud Detection", discription: "Detect fraudulent transactions in real-time using AI and machine learning algorithms" },
    { id: 2, name: "Credit Risk Scoring", discription: "Analyze creditworthiness with predictive models to improve lending decisions" }
  ],
  Media: [
    { id: 1, name: "Content Recommendation", discription: "Enhance user engagement with personalized AI-driven content suggestions" },
    { id: 2, name: "Audience Analytics", discription: "Use data and AI to understand audience behavior and optimize content strategy" }
  ],
  Telecommunication: [
    { id: 1, name: "Network Optimization", discription: "Predict and manage network congestion using advanced analytics" },
    { id: 2, name: "Churn Prediction", discription: "Identify customers at risk of leaving and take proactive retention measures" }
  ],
  Manufacturing: [
    { id: 1, name: "Predictive Maintenance", discription: "Reduce downtime by forecasting equipment failures using AI models" },
    { id: 2, name: "Quality Control", discription: "Automate defect detection and ensure consistent product quality with computer vision" }
  ],
  Healthcare: [
    { id: 1, name: "Disease Prediction", discription: "Leverage patient data to forecast health risks and enable early intervention" },
    { id: 2, name: "Medical Imaging Analysis", discription: "Improve diagnostic accuracy through AI-based image interpretation" }
  ],
  IT_ITES: [
    { id: 1, name: "IT Operations Analytics", discription: "Enhance system reliability by using AI to monitor and resolve IT issues" },
    { id: 2, name: "Chatbots & Virtual Assistants", discription: "Automate customer support and internal helpdesk with AI-powered bots" }
  ],
  Media:[
     { id: 1, name: "Machine Learning", discription:"Build intelligent applications with advanced ML algorithms and predictive analytics" },
     { id: 2, name: "AI Integration", discription:"Seamlessly integrate AI capabilities into your existing business processes" }
  ]
};


let it_and_business_automation = {
  BFSI: [
    { id: 1, name: "Robotic Process Automation (RPA)", discription: "Automate loan processing, compliance, and back-office operations" },
    { id: 2, name: "Document Management", discription: "Digitize and manage large volumes of financial documents efficiently" }
  ],
  Media: [
    { id: 1, name: "Content Publishing Automation", discription: "Automatically schedule and distribute content across platforms" },
    { id: 2, name: "Rights Management", discription: "Automate licensing workflows and content usage tracking" }
  ],
  Telecommunication: [
    { id: 1, name: "Service Provisioning", discription: "Accelerate customer onboarding with automated network setup" },
    { id: 2, name: "Billing Automation", discription: "Streamline complex billing processes and reduce manual errors" }
  ],
  Manufacturing: [
    { id: 1, name: "Inventory Automation", discription: "Automate inventory tracking and reduce stock inconsistencies" },
    { id: 2, name: "Production Scheduling", discription: "Optimize factory operations with real-time scheduling systems" }
  ],
  Healthcare: [
    { id: 1, name: "Patient Record Automation", discription: "Digitally manage patient data and streamline administrative tasks" },
    { id: 2, name: "Claims Processing", discription: "Automate health insurance claims for faster settlements" }
  ],
  IT_ITES: [
    { id: 1, name: "Workflow Automation", discription: "Automate ticketing systems and project management pipelines" },
    { id: 2, name: "System Integration", discription: "Create seamless connections between enterprise applications and services" }
  ]
};


 let security_and_sustainability = [
  { id:1, name:"Cybersecurity", discription:"Protect your digital assets with advanced threat detection and prevention"},
  { id:2, name:"Green Technology", discription:"Reduce environmental impact with sustainable and energy-efficient solutions"},
  { id:3, name:"Complaince Management", discription:"Ensure regulatory compliance with automated monitoring and reporting"},
]

let Open_hybrid_cloud = [
  
  { id:1, name:"Cloud Migration", discription:"Seamlessly transition your infrastructure to flexible cloud environments"},
  { id:2, name:"Multi-Cloud Management", discription:"Seamlessly transition your infrastructure to flexible cloud environments"},
  { id:3, name:"Cloud Migration", discription:"Seamlessly transition your infrastructure to flexible cloud environments"},
 ]
  return (
    <>


  {/* Demo Request Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100 p-4 animate-fadeIn">
          <div className=" rounded-lg p-6 w-full max-w-md relative animate-scaleIn transform">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Request a Demo</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-100  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-white border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-white border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 text-white border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 border border-gray-100 text-gray-100 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



    <nav className="sticky top-0 z-50  bg-black border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>

        {/* Center nav - Desktop */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-8 font-medium">
            <li>
              <a href="/" className="relative block py-2 px-3 text-gray-100 hover:text-red-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </a>
            </li>
            <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                ref={toggleRef}
                onClick={toggleDropdown}
                className="relative flex cursor-pointer items-center py-2 px-3 font-medium text-gray-100 hover:text-red-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 group focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Solutions
                <svg className={`w-2.5 h-2.5 ms-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>
            </li>
            <li>
              <a href="Company" className="relative block py-2 px-3 text-gray-100 hover:text-red-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 group">
                Who we Are
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </a>
            </li>
            <li>
              <a href="/Join-with-us" className="relative block py-2 px-3 text-gray-100 hover:text-red-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 group">
                Join with us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </a>
            </li>
            <li>
              <a href="/Connect-with-us" className="relative block py-2 px-3 text-gray-100 hover:text-red-600 dark:text-white dark:hover:text-blue-500 transition-colors duration-200 group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded">
            Sign In
          </button> */}
          <button onClick={() => setShowPopup(true)} className="px-6 py-2 text-sm font-medium cursor-pointer text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-black dark:bg-gray-800">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
            Home
          </a>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Services
            <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          
          {/* Mobile Dropdown Items */}
          {isDropdownOpen && (
            <div className="pl-4 space-y-1 border-l-2  border-blue-200 ml-3">
              <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 transi1ion-all duration-200">
                Data and AI
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
                 IT and Buisness Automation
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
                Security and Sustainability
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
                Open Hybrid Cloud 
              </a>
            </div>
          )}
          
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
            Who we are
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
            Join with us
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 transition-all duration-200">
            Contact
          </a>
          <div className="pt-4 space-y-2">
            {/* <button className="w-full px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-gray-100 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700 rounded-md transition-all duration-200 focus:outline-none">
              Sign In
            </button> */}
            <button onClick={() => setShowPopup(true)} className="w-full px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 focus:outline-none">
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
    className="absolute left-0 right-0 z-50 bg-[#1F1D1A] border-gray-200 shadow-lg border-t dark:bg-gray-800 dark:border-gray-600 transition-all duration-300 ease-in-out"
  >
    <div className="flex max-w-screen-xl px-4 py-8 mx-auto text-sm text-gray-500 dark:text-gray-400 gap-8 overflow-x-auto">
      
       {/* Fifth Column (Example Content) */}
      <div className="space-y-4 min-w-[200px]">
        <h3 className="font-semibold text-white text-lg mb-3 cursor-pointer">Solutions By Industries</h3>
        
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("Media")
          }}>
            Media
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("BFSI")
          }}>
            BFSI
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("Manufacturing")
          }}>
            Manufacturing
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("Healthcare")
          }}>
            Healthcare
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("IT_ITES")
          }}>
            IT/ITES
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1" onMouseEnter={()=>{
            Updatedisply("Telecommunication")
          }}>
            Telecommunications
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Upskill your team with tailored technology training
          </p>
        </a>
      </div>

      {/* Data and AI Column */}
      <div className="space-y-4 min-w-[200px]">
        <h3 className="font-semibold text-white text-lg mb-3 cursor-pointer" onClick={() => { window.location.href = "/Data-and-ai" }}>
          Data and AI
        </h3>
        {
          data_and_ai[display].map((list)=>(
            <>
              <a href="#" className="block group">
                <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
                  {list.name}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {list.discription}
                </p>
              </a>
            </>
          ))
        }
        {/* <a href="Data-and-ai#machinelearning" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Machine Learning
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Build intelligent applications with advanced ML algorithms and predictive analytics
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            AI Integration
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Seamlessly integrate AI capabilities into your existing business processes
          </p>
        </a> */}
      </div>

      {/* IT and Business Automation Column */}
      <div className="space-y-4 min-w-[200px]">
        <h3 className="font-semibold text-white text-lg mb-3 cursor-pointer" onClick={() => { window.location.href = "/It_and_buisness_automation" }}>
          IT & Business Automation
        </h3>
        {
          data_and_ai[display].map((list)=>(
            <>
              <a href="#" className="block group">
                <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
                  {list.name}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {list.discription}
                </p>
              </a>
            </>
          ))
        }
        {/* <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Workflow Automation
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Streamline repetitive tasks and optimize business processes automatically
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            System Integration
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Connect disparate systems and create unified digital ecosystems
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Process Optimization
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Identify bottlenecks and improve operational efficiency across departments
          </p>
        </a> */}
      </div>

      {/* Security and Sustainability Column */}
      <div className="space-y-4 min-w-[200px]">
        <h3 className="font-semibold text-white text-lg mb-3 cursor-pointer" onClick={() => { window.location.href = "/Security_and_sustainability" }}>
          Security & Sustainability
        </h3>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Cybersecurity
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Protect your digital assets with advanced threat detection and prevention
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Green Technology
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Reduce environmental impact with sustainable and energy-efficient solutions
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Compliance Management
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Ensure regulatory compliance with automated monitoring and reporting
          </p>
        </a>
      </div>

      {/* Open Hybrid Cloud Column */}
      <div className="space-y-4 min-w-[200px]">
        <h3 className="font-semibold text-white text-lg cursor-pointer mb-3" onClick={() => { window.location.href = "/Open_hybrid_cloud" }}>
          Open Hybrid Cloud
        </h3>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Cloud Migration
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Seamlessly transition your infrastructure to flexible cloud environments
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Multi-Cloud Management
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Manage workloads across multiple cloud providers with unified control
          </p>
        </a>
        <a href="#" className="block group">
          <div className="text-white hover:text-red-600 transition-colors duration-200 font-medium mb-1">
            Container Solutions
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Deploy and scale applications efficiently with containerization technology
          </p>
        </a>
      </div>

    </div>

    {/* Bottom CTA Section */}
    <div className="border-t border-gray-700 bg-[#171512] px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="text-white font-semibold mb-1">Ready to transform your business?</h4>
          <p className="text-gray-400 text-sm">Discover how our solutions can drive your success</p>
        </div>
        <a href="#" className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200">
          Explore All Solutions
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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