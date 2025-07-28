import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import machine_learning from "./machine_learning.gif";
import ai_integrate from "./ai_integrate.gif";
import cognos from "./cognos.gif";
import ITAutomationPlatform from "./Whatwedo";
import SolutionsSection from "./solutions";


function Dataandai() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
          duration: 1000,
          once: true,
        });
  }, []);

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

  return (
    <div className="bg-black min-h-screen">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
     {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center text-center pt-10 px-4 sm:px-6 lg:px-8 bg-black">
  <div data-aos="fade-up" className="max-w-3xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
      Empower your  <span className="text-red-500">Buisness</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto">
      With Trusted <span className="text-red-400">AI Solutions</span>
    </p>
    <button
      onClick={() => setShowPopup(true)}
      className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border-2 border-red-500 text-white rounded bg-black hover:bg-red-500 transition-all duration-600"
    >
      <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-800 ease-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-white">Request a Demo</span>
    </button>
  </div>
</section>


     {/* Demo Request Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
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

      <ITAutomationPlatform  />
<br /><br /><br />
{/* What We Do */}

    {/* Section Header */}
    <SolutionsSection />

  {/* What We Do */}

      {/* Final Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Everything You Need to Accelerate Data & AI
          <br className="hidden md:block" />
           in One Unified Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Data Integration",
            "AI Model Development",
            "Data Governance",
            "Intelligent Automation",
            "Real-Time Analytics",
            "Scalable Data Infrastructure",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              >
              <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
              <p className="text-sm text-gray-300">
                {
                  {
                    "Data Integration":
                      "Seamlessly connect, ingest, and unify data from diverse sources to create a trusted foundation for AI and analytics initiatives.",
                    "AI Model Development":
                      "Build, train, and deploy machine learning and foundation models using collaborative tools and enterprise-grade frameworks.",
                    "Data Governance":
                      "Ensure data quality, lineage, and compliance across the organization with automated policies and role-based access control.",
                    "Intelligent Automation":
                    "Combine AI with automation to optimize business processes, improve decision-making, and drive operational efficiency.",
                    "Real-Time Analytics":
                      "Analyze data in real-time to uncover insights, detect anomalies, and respond instantly to changing business conditions.",
                    "Scalable Data Infrastructure":
                    "Leverage cloud-native and hybrid data platforms to store, process, and serve AI workloads at scale with high performance.",
                  }[title]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
            Your data holds the power.
            <br />
            Now let AI unlock its potential.
          </h2>
          <button 
             onClick={() => setShowPopup(true)} 
            className="relative inline-block px-6 cursor-pointer py-3 font-medium group overflow-hidden border bg-black text-white rounded"
          >
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black ">unlock</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dataandai;