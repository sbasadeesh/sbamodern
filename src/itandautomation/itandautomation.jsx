import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import workflow_automation from "./workflow_automation.gif";
import system_integration from "./system_integration.gif";
import process_optimization from "./process_optimization.gif";
import { Activity, Cloud, Settings } from "lucide-react";
import ITAutomationPlatform from "./Whatwedo";
import SolutionsSection from "./solutions";

function It_and_buisness_automation() {

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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center pt-10 px-4 sm:px-6 lg:px-8 bg-black">
  <div data-aos="fade-up" className="max-w-3xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
      IT  <span className="text-red-500">Automation</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto">
      Empower Your <span className="text-red-400">Operation</span>
    </p>
    <button
      onClick={() => setShowPopup(true)}
      className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border-2 border-red-500 text-white rounded bg-black hover:bg-red-500 transition-all duration-300"
    >
      <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-500 ease-out group-hover:w-full"></span>
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



      {/* Feature Grid 1 */}
<ITAutomationPlatform />
<br /><br /><br />
      {/* Powered By Heading */}
      <SolutionsSection />


      {/* Final Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Everything You Need to Power IT & Automation
          <br className="hidden md:block" />
          in One Platform
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "System Integration",
              desc:
                "Connect tools, data, and platforms across your IT landscape to streamline workflows and improve operational efficiency at every level.",
            },
            {
              title: "Process Automation",
              desc:
                "Automate repetitive tasks, approvals, and configurations with scalable low-code tools that empower IT teams to focus on high-value work.",
            },
            {
              title: "Monitoring & Analytics",
              desc:
                "Gain visibility into infrastructure, application health, and workflows with real-time dashboards and alerts — all in one place.",
            },
            {
              title: "Access & Security",
              desc:
                "Secure your environment with role-based access control, automated compliance policies, and centralized identity management.",
            },
            {
              title: "IT Self-Service Portals",
              desc:
                "Provide employees with intuitive self-service tools to request, provision, and manage IT resources without manual intervention.",
            },
            {
              title: "Scalable Infrastructure",
              desc:
                "Deploy and scale IT infrastructure seamlessly across cloud and on-prem environments with automation-first architecture.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 text-2xl"></div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
    <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
        Automate IT operations and business processes.
        <br />
        Let AI drive efficiency and innovation.
        </h2>
         <button onClick={() => setShowPopup(true)} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Discover Automation Solutions</span>
          </button>
    </div>
    </section>

    </>
  );
}

export default It_and_buisness_automation;
