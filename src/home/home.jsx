import React, { useEffect, useRef, useState } from 'react';
import herosectionvideo from "./hero_section_video.mp4"
import VideoCarousel from './carousal';
import AOS from "aos";
import "aos/dist/aos.css";
import Ourservices from './ourservices';
import CountUp from 'react-countup';
import AutomationSection from './Automation';
import venkatesh from "./quotes.jpg"
import PartnersSection from './Partners';
import Shedule from '../shedule/Shedule';

function Home(){


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
  
 const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
    }

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      }
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
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
                phone:'' 
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
    
    return(
        <>
<section className=" flex items-center justify-center text-center pt-50 px-4 sm:px-6 lg:px-8 bg-black pb-20">
  
  <div data-aos="fade-up" className="max-w-4xl mx-auto">
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
      Automate The <span className="text-red-500">Mundane</span>
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
      Elevate <span className="text-red-400">Human Potential</span>
    </p>
    {/* <Shedule />  */}
    <button onClick={() => setShowPopup(true)} className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
      <span>Schedule a Strategy Session</span>
      {/* <ArrowRight className="w-5 h-5" /> */}
  </button>
  </div>
</section>

<div
      // data-aos="fade-up"
      className="video-container relative w-full max-w-[1300px] mx-auto aspect-[16/9]"
    >
      <video ref={videoRef} className="w-full h-full object-cover">
        <source src={herosectionvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="play-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[1.5rem] bg-[rgba(121,119,119,0.7)] py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[rgba(103,102,102,0.9)]"
        onClick={handlePlayPause}
      >
        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </div>
    </div>
    <br />
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
          <div className="bg-black rounded-lg p-6 w-full max-w-md relative animate-scaleIn transform shadow-2xl">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl transition-colors duration-200"
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
                  className="w-full px-3 py-2 border border-gray-300 text-gray-100  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
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
                  className="w-full px-3 py-2 border text-gray-100  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-gray-100  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  // placeholder="Contact Number"
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
                  className="w-full px-3 py-2 border text-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
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
                  className="w-full px-3 py-2 text-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closePopup}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-800 cursor-pointer bg-white rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      

  
<AutomationSection />
       <br />
        <div data-aos="fade-up">
    <PartnersSection />
    
    {/* <VideoCarousel/> */}
    

        </div>

        <section className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Engineered for Your Enterprise
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Bespoke Solution Architecture",
            "Dedicated Strategy & Support",
            "Enterprise-Wide Integration",
            "Uncompromising Security & Privacy",
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
                    "Bespoke Solution Architecture":
                      "We don't offer a one-size-fits-all product. We architect and configure solutions precisely to your team's workflows, eliminating friction and delivering on your specific outcomes..",
                    "Dedicated Strategy & Support":
                      "Your success is our core metric. From the initial discovery call to ongoing optimization, you get a dedicated team of experts committed to helping you achieve your goals.",
                    "Enterprise-Wide Integration":
                      "Our solutions are designed to be the connective tissue for your operations. We unify disparate systems and break down data silos across any department or industry.",
                    "Uncompromising Security & Privacy":
                      "Built on an enterprise-grade security framework that puts your data first. We provide robust protection, and your proprietary information is safeguarded.",
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

        
        <section className="bg-[#D5D1DB] py-16 px-4" data-aos="fade-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
              
              {/* Left - Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img 
                  src={venkatesh}
                  alt="Person smiling" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>

              {/* Right - Quote */}
              <div className="w-full md:w-1/2 text-left">
                <p className="text-2xl md:text-3xl font-serif text-black leading-relaxed mb-6">
                  “In the modern workplace, repetitive tasks like data entry and information retrieval
                  hinder employees from engaging in strategic and creative aspects of their roles.”
                </p>
                
{/* "relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border-2 border-red-500 text-white rounded bg-black hover:bg-red-500 transition-all duration-300 */}
              
              </div>
            </div>
          </section>



              {/* Closing CTA */}
      {/* <section className="bg-[#D5D1DB] py-24 text-center" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl  font-medium text-black mb-8">
            Empower with Data, Accelerate with Agility
            
          </h2>
          <button onClick={() => setShowPopup(true)} className="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border bg-black text-white rounded">
            <span className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 group-hover:text-black">Request a Demo</span>
          </button>
        </div>
      </section> */}
        </>
    )
}

export default Home
