import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one from "./one.jpg"
import CountUp from 'react-countup';
import ModernMVVSection from "./MVV";
import About_us from "../about_us/About_us";
import AnimatedTimeline from "./Timeline";
import CoreValuesSection from "./Corevalues";
import CompanyEventsCollage from "./Moments";


function Company() {

   const ImpactCard = ({ value, label, suffix = '', duration = 2, delay = 0 }) => {
    return (
      <div
        className="p-6 bg-black/90 backdrop-blur-sm rounded-2xl shadow hover:shadow-md transition flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay={delay * 1000}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
          {typeof value === 'number' ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              suffix={suffix}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          ) : (
            value
          )}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center">{label}</p>
      </div>
    );
  };

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
     {/* Hero Section */}
     <section className=" flex items-center justify-center text-center pt-50 px-4 sm:px-6 lg:px-8 bg-black pb-20">
      <div data-aos="fade-up" className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Intelligent Solutions, <span className="text-red-500">Limitless Potential</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          With Trustes AI <span className="text-red-400">Solutions</span>
        </p>
        <button onClick={()=>{ window.location.href = "/Connect-with-us"}} className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
          <span>Schedule a Strategy Session</span>
          {/* <ArrowRight className="w-5 h-5" /> */}
        </button>
          
      </div>
    </section>


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


      {/* Who We Are Section */}
<div className="py-16 text-white" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left: Image */}
      <div className="w-full">
        <img
          src={one} // replace with actual image path
          alt="About SBA Info Solutions"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Text Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed" style={{textAlign:"left"}}>
          SBA Info Solutions Private Limited is a leading automation company based in Chennai,
          with over three decades of expertise in delivering cutting-edge enterprise solutions.
          Our core mission is to empower businesses and professionals through innovative technology
          that drives transformative results.
        </p>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed" style={{textAlign:"left"}}>
          With a focus on seamlessly integrating <strong>Data & AI</strong>,
          <strong> IT & Business Automation</strong>, <strong>Security & Sustainability</strong>,
          and <strong>Open Hybrid Cloud</strong> technologies, we provide scalable, future-ready
          solutions designed to enhance efficiency, innovation, and sustainability for organizations
          across industries.
        </p>
      </div>

    </div>
    </div>

  <br /><br /><br />


  
    {/* Values Section */}
    <ModernMVVSection />  
    
  </div>
</div>

<CoreValuesSection />
<AnimatedTimeline />

<CompanyEventsCollage />
 <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
              Our Impact
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                <ImpactCard value={300} suffix="+" duration={5}  delay={0.1} />
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white text-center">
                Customers
              </p>
            </div>

            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                   <ImpactCard value={30} suffix="+" duration={5}  delay={1.0} />
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white text-center">
                  Years in Market
                </p>
              </div>

            <div className="p-6 shadow hover:shadow-md transition border-b border-[#1F1D1A] lg:border-b-0 lg:border-r" data-aos="fade-up">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                  <ImpactCard value="Best"  delay={2.0} />
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white text-center">
                   Predictive Support
                </p>
              </div>

          </div>
        </div>
      </div>

<About_us />
      {/* Closing CTA */}
    <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-black mb-8">
      Join Our Journey of Innovation and Growth.
      <br />
      Empower the Future with Cutting-Edge Technology.
    </h2>
    <button onClick={() => window.location.href = "/Join-with-us"}
      className="relative inline-block px-6 py-3 cursor-pointer font-medium group overflow-hidden border bg-black text-white rounded"
    >
      <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
      <span className="relative z-10 group-hover:text-black">Work With Us</span>
    </button>
  </div>
</section>



    </>
  );
}

export default Company;
