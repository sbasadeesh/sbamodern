import React, { useState, useEffect, useRef } from 'react';

function Shedule(){


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
    

    return(
        <>
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

        <button onClick={() => setShowPopup(true)} className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Schedule a Strategy Session</span>
            {/* <ArrowRight className="w-5 h-5" /> */}
        </button>
        </>
    )
}


export default Shedule
