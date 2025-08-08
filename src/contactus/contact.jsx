import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
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
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle,
  AlertCircle,
  Loader
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
    primary: "SBA House #19, (Old, No.17, 46th St, Manthope Colony)",
    secondary: "Ashok Nagar, Chennai, Tamil Nadu 600083",
    description: "Company location"
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

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  useEffect(() => {
      AOS.init({
        duration: 800, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing function
        once: true, // Animation happens only once
        mirror: false // Whether elements should animate out while scrolling past
      });
    }, []);
  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Please enter your name";
    }
    if (!formData.email.trim()) {
      return "Please enter your email";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      return "Please enter a subject";
    }
    if (!formData.message.trim()) {
      return "Please enter your message";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: validationError 
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null });
    
    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('http://localhost:5000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ loading: false, success: true, error: null });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Failed to send message. Please try again.' 
      });
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ loading: false, success: false, error: null });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
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
            <div className="transition-all duration-1000">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 p-8"
                   style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
                  
                  {/* Status Messages */}
                  {submitStatus.success && (
                    <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-200">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus.error && (
                    <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-200">{submitStatus.error}</span>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          required
                          disabled={submitStatus.loading}
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          required
                          disabled={submitStatus.loading}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company (Optional)"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          disabled={submitStatus.loading}
                        />
                      </div>
                      
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                          disabled={submitStatus.loading}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300"
                        required
                        disabled={submitStatus.loading}
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                      <textarea
                        name="message"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors duration-300 h-32 resize-none"
                        required
                        disabled={submitStatus.loading}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitStatus.loading}
                      className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitStatus.loading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * Required fields
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="transition-all duration-1000">
              <div className="space-y-8">
                {/* Map */}
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 h-96"
                     style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-30"></div>
                  <div className="relative z-10 flex justify-center items-center h-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.522461378325!2d80.2156767!3d13.036381599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e1fecbc9db%3A0x792c9b430ee8bd4a!2sSBA%20Info%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1754297916751!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                      title="SBA Info Solutions Location"
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://linkedin.com/company/sba-info-solutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-red-500 hover:scale-110 transform"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/sbainfosolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-red-500 hover:scale-110 transform"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://facebook.com/sbainfosolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-red-500 hover:scale-110 transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>

                {/* Additional Contact Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Need Immediate Help?</h3>
                  <div className="space-y-2">
                    <a 
                      href="mailto:hello@sbainfo.com"
                      className="block text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      hello@sbainfo.com
                    </a>
                    <a 
                      href="tel:+15551234567"
                      className="block text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
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