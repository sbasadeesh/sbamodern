import { Settings, Cpu, Eye, Bot, TrendingUp, Clock, Shield, Zap, ArrowRight, Factory, Wrench, Activity } from 'lucide-react';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ManufacturingLandingPage = () => {

     useEffect(() => {
                AOS.init({
                      duration: 1000,
                      once: true,
                    });
              }, []);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Predictive Maintenance",
      description: "AI-powered systems that predict equipment failures before they happen, minimizing downtime and maintenance costs",
      features: ["Equipment health monitoring", "Failure prediction algorithms", "Maintenance scheduling optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain visibility and optimization using advanced analytics and machine learning",
      features: ["Demand forecasting", "Inventory optimization", "Supplier performance tracking"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision QA",
      description: "Automated quality assurance using computer vision to detect defects and ensure product excellence",
      features: ["Defect detection", "Quality metrics tracking", "Real-time inspection"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Robotic Process Automation (RPA)",
      description: "Streamline manufacturing processes with intelligent automation and robotic systems integration",
      features: ["Process automation", "Workflow optimization", "Human-robot collaboration"]
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Increased Efficiency" },
    { icon: <Clock className="w-6 h-6" />, text: "Reduced Downtime" },
    { icon: <Shield className="w-6 h-6" />, text: "Enhanced Quality" },
    { icon: <Activity className="w-6 h-6" />, text: "Real-time Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-6">
              <Factory className="w-16 h-16 text-red-400" />
            </div> */}
            <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red via-red-600 to-red-600 bg-clip-text text-transparent">
              MANUFACTURING
            </h1>
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              Smart Factory Solutions
            </h2>
            <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Enable smart factories with AI, IoT, and predictive analytics. From process automation 
              to real-time monitoring, we help manufacturers increase efficiency, reduce downtime, 
              and enhance product quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <span className="text-red-400" data-aos="fade-up">{benefit.icon}</span>
                  <span className="text-sm font-medium" data-aos="fade-up">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry <span className="text-red-400">4.0</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming traditional manufacturing with cutting-edge technology and intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative" data-aos="fade-up"  >
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">40%</div>
              <div className="text-gray-300">Efficiency Increase</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-up">
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-gray-300">Downtime Reduction</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-up">
              <div className="text-3xl font-bold text-red-400 mb-2">25%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-up">
              <div className="text-3xl font-bold text-red-400 mb-2">99%</div>
              <div className="text-gray-300">Quality Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Transform Your <span className="text-red-400">Manufacturing</span> Operations
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-up">
            Join industry leaders who are already benefiting from smart factory technologies. 
            Start your digital transformation journey today.
          </p>
          <button data-aos="fade-up" onClick={()=>{ window.location.href = "/Connect-with-us"}} className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="flex items-center gap-2">
              Start Your Digital Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-red-400" />
            <div className="text-3xl font-bold text-red-400">
              Smart Manufacturing
            </div>
          </div>
          <p className="text-gray-400">
            Powering the Future of Industrial Excellence
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default ManufacturingLandingPage;