import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Import your icons from lucide-react
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Building,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "hello@sbainfo.com",
      secondary: "support@sbainfo.com",
      description: "Get in touch for business inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Available Monday to Friday"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      primary: "123 Business District",
      secondary: "Tech City, TC 12345",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      primary: "Mon - Fri: 9:00 AM - 6:00 PM",
      secondary: "Sat: 10:00 AM - 4:00 PM",
      description: "We're here to help"
    }
  ];

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div 
            data-aos="fade-up" // Add AOS animation here
            data-aos-delay="100"
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss how we can help you achieve your goals with our innovative solutions.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                data-aos="fade-up" // Add AOS animation here
                data-aos-delay={`${index * 150}`} // Delay for each card
                className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white flex items-center justify-center h-full">
                      {info.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-3">
                    {info.title}
                  </h3>
                  
                  <p className="text-white font-medium mb-1">{info.primary}</p>
                  <p className="text-gray-400 text-sm mb-2">{info.secondary}</p>
                  <p className="text-gray-500 text-xs">{info.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500 to-red-400 p-[1px]">
                  <div className="w-full h-full rounded-2xl bg-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="transition-all duration-1000"
            >
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-8"
                   style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                            required
                        />
                        </div>
                        
                        <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                            required
                        />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/5 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300 h-32 resize-none"
                        required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                    >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </button>
                    </form>

                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="transition-all duration-1000"
            >
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 h-64"
                     style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <p className="text-white">Our Location on the Map</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 text-white">
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-red-500 transition-colors duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
