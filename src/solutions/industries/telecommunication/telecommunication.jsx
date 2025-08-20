import { Phone, MessageCircle, Heart, Headphones, Users, ArrowRight, Signal, BarChart3, Clock, Zap, Target, TrendingUp } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const TelecomBPOKPOLandingPage = () => {

       useEffect(() => {
            AOS.init({
                    duration: 1000,
                    once: true,
                });
            }, []);

  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Conversational AI",
      description: "Advanced AI-powered chatbots and virtual assistants that provide natural, contextual customer interactions",
      features: ["Natural language processing", "Multi-channel support", "24/7 availability"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Sentiment Analysis",
      description: "Real-time sentiment tracking and analysis to understand customer emotions and improve service quality",
      features: ["Emotion recognition", "Feedback analysis", "Proactive issue detection"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Call Center Automation",
      description: "Intelligent automation solutions that streamline call center operations and improve agent productivity",
      features: ["Automated call routing", "Agent assistance tools", "Quality monitoring"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workforce Optimization",
      description: "AI-driven workforce management and optimization for maximum efficiency and employee satisfaction",
      features: ["Predictive scheduling", "Performance analytics", "Resource allocation"]
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Faster Resolution" },
    { icon: <Target className="w-6 h-6" />, text: "Personalized Engagement" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Cost Savings" },
    { icon: <Signal className="w-6 h-6" />, text: "AI-Powered Operations" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-6">
              <Phone className="w-16 h-16 text-red-400" />
            </div> */}
            <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red via-red-500 to-red-400 bg-clip-text text-transparent">
              TELECOM / BPO / KPO
            </h1>
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              AI-Powered Customer Excellence
            </h2>
            <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Revolutionize the way customer experience, operations, and backend processing work in the telecom 
              and outsourcing industries. AI enables faster resolution, personalized engagement, and cost savings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {benefits.map((benefit, index) => (
                <div data-aos="fade-up" key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <span className="text-red-400">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/5 w-20 h-20 bg-red-400/5 rounded-full blur-lg animate-pulse delay-700"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-4">
              Smart <span className="text-red-400">Customer</span> Solutions
            </h2>
            <p data-aos="fade-up" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform customer interactions and operational efficiency with AI-driven telecommunications solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative" data-aos="fade-up">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:bg-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-xl text-red-400 group-hover:bg-red-500/30 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <ArrowRight className="w-4 h-4 text-red-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
              Multi-Industry <span className="text-red-400">Expertise</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center" data-aos="fade-up">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Signal className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Telecom Operations</h4>
              <p className="text-gray-300">Network optimization, customer support automation, and service quality management</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <BarChart3 className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">BPO Excellence</h4>
              <p className="text-gray-300">Process automation, quality assurance, and performance optimization for business processes</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">KPO Innovation</h4>
              <p className="text-gray-300">Knowledge processing enhancement, data analytics, and intelligent decision support systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Resolution</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">65%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">92%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your <span className="text-red-400">Customer</span> Operations
          </h2>
          <p data-aos="fade-up" className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading telecom and outsourcing companies who are revolutionizing their customer experience 
            with AI-powered solutions. Start delivering exceptional service today.
          </p>
          <button data-aos="fade-up" onClick={()=>{ window.location.href = "/Connect-with-us"}} className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="flex items-center gap-2">
              Enhance Customer Experience
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-red-400" />
            <div className="text-3xl font-bold text-red-400">
              Customer Excellence Hub
            </div>
          </div>
          <p className="text-gray-400">
            Powering Next-Generation Customer Experiences
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default TelecomBPOKPOLandingPage;