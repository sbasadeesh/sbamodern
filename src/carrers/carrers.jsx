import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Carrers(){

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
       
    

    return(
        <>
 
        {/* Hero Section */}
<section className="min-h-screen flex items-center justify-center text-center pt-20 px-4">
  <div data-aos="fade-up">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
      Build Your Future with Us
    </h1>
    {/* Uncomment this if needed */}
    
    <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto text-white">
      Your Vision. Our Expertise. A Smarter Future.
    </p> 
   
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
            
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Join Wih Us</h2>
            
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
                  Contact
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
                  Experience
                </label>
                <input
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 text-white border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
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
                  className="flex-1 px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-500"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Why Work With Us Section */}
<section className="py-16" data-aos="fade-up">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-100">
    <h2 className="text-3xl font-bold mb-8">Why Work With Us?</h2>
    <p className="mb-6 max-w-3xl mx-auto text-lg">
      At our company, you’re not just joining a team — you’re joining a community driven by innovation, diversity, and a passion for making a difference. We invest in your growth and offer opportunities to build a rewarding career.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
      <div>
        <h3 className="font-semibold mb-2">Growth Opportunities</h3>
        <p>Access to continuous learning, mentorship, and career development.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Inclusive Culture</h3>
        <p>We foster diversity and encourage ideas from every voice.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Innovative Projects</h3>
        <p>Work on cutting-edge technology that shapes the future.</p>
      </div>
    </div>
  </div>
</section>

<br /><br /><br />

<section className="py-16 bg-[#1F1D1A]" data-aos="fade-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4" data-aos="fade-up">
        Current Open Positions
      </h2>
      <p className="text-lg text-gray-100" data-aos="fade-up">
        Join our team and help drive innovation and automation. Explore the roles below and find your perfect fit.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
      {/* Position 1 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Software Engineer</h3>
        <p className="text-sm text-gray-100 mb-4">
          Join our development team to build robust, scalable software solutions that drive business success. Experience with AI and automation preferred.
        </p>
        <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </button>
      </div>

      {/* Position 2 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Data Scientist</h3>
        <p className="text-sm text-gray-100 mb-4">
          We are looking for a Data Scientist to analyze complex data sets and deliver actionable insights. Expertise in machine learning and AI is a plus.
        </p>
        <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </button >
      </div>

      {/* Position 3 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Network Engineer</h3>
        <p className="text-sm text-gray-100 mb-4">
          Help us optimize our network infrastructure by designing, implementing, and maintaining scalable network solutions for seamless connectivity.
        </p>
        <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </button>
      </div>

      {/* Position 4 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Cybersecurity Analyst</h3>
        <p className="text-sm text-gray-100 mb-4">
          We're looking for a Cybersecurity Analyst to help protect our organization’s data and infrastructure. Experience in threat detection and mitigation is required.
        </p>
        <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
            </button>
      </div>

      {/* Position 5 */}
      <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Human Resources Manager</h3>
        <p className="text-sm text-gray-100 mb-4">
          Lead our HR department in managing talent acquisition, employee relations, and organizational development strategies.
        </p>
        <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
        </button>
      </div>

      {/* Position 6 */}
      <div className="p-6  shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Operations Manager</h3>
        <p className="text-sm text-gray-100 mb-4">
          Manage the day-to-day operations of the company, ensuring seamless workflow between departments and optimizing business processes.
        </p>
         <button onClick={() => setShowPopup(true)} class="relative cursor-pointer inline-block px-6 py-3 font-medium group overflow-hidden border border-white text-white rounded">
                <span class="absolute inset-0 w-0 bg-gray-200 transition-all duration-500 ease-out group-hover:w-full"></span>
                <span class="relative z-10 group-hover:text-black">Apply</span>
        </button>
      </div>
    </div>
  </div>
</section>



        </>
    )
}

export default Carrers

