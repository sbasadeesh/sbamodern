import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cloud_migration from "./cloud_migration.gif";
import multi_cloud from "./multi_cloud.gif";
import container_solution from "./container_solution.gif";
import { CloudCheck, ShieldUserIcon, Workflow } from "lucide-react";
import ITAutomationPlatform from "./Whatwedo";
import SolutionsSection from "./Solutions";

function Open_hybrid_cloud() {

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
    <>

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

      <section className=" flex items-center justify-center text-center pt-50 px-4 sm:px-6 lg:px-8 bg-black pb-20">
          <div data-aos="fade-up" className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Open hybrid<span className="text-red-500"> Cloud</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
              integrated Cloud<span className="text-red-400"> Solutions</span>
            </p>
            <button className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
              <span>Schedule a Strategy Session</span>
              {/* <ArrowRight className="w-5 h-5" /> */}
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


      {/* Open Hybrid Cloud Strategy Section */}

<ITAutomationPlatform />
<br /><br /><br />
{/* Powered By */}
<SolutionsSection />
      {/* Powered By */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white"
          data-aos="fade-up"
          // data-aos-delay="900"
        >
          Everything You Need to Build an Open Hybrid Cloud
          <br className="hidden md:block" />
          in One Unified Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1000"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Unified Cloud Management
            </h3>
            <p className="text-sm text-gray-300">
              Centrally manage workloads across private, public, and edge
              environments to ensure consistency, visibility, and governance.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1100"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Cloud-Native Flexibility
            </h3>
            <p className="text-sm text-gray-300">
              Empower developers with Kubernetes, containers, and microservices
              to build and scale cloud-native applications across any cloud.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1200"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Interoperability & Portability
            </h3>
            <p className="text-sm text-gray-300">
              Avoid vendor lock-in with open standards that allow apps and data
              to move freely across hybrid and multicloud ecosystems.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Security & Compliance
            </h3>
            <p className="text-sm text-gray-300">
              Maintain enterprise-grade security and meet regulatory needs with
              built-in controls, identity federation, and audit-ready policies.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1400"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Cost Optimization</h3>
            <p className="text-sm text-gray-300">
              Gain insights into usage and spend across hybrid environments with
              intelligent cost tracking, forecasting, and chargeback models.
            </p>
          </div>

          <div
            className="bg-neutral-900 p-6 rounded-xl"
            data-aos="fade-up"
            // data-aos-delay="1500"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Edge-to-Core Integration</h3>
            <p className="text-sm text-gray-300">
              Extend hybrid capabilities to the edge, enabling real-time
              processing, AI at the edge, and always-on connectivity from core
              to cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA for Open Hybrid Cloud */}
      <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-medium text-black mb-8">
            Secure and Sustainable Hybrid Cloud Solutions.
            <br />
            Build resilient infrastructure while reducing your environmental impact.
          </h2>
           <button onClick={() => setShowPopup(true)} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Discover</span>
          </button>
        </div>
      </section>

    </>
  );
}

export default Open_hybrid_cloud;
