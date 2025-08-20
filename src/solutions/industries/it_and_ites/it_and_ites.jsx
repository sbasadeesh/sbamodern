import { Monitor, Cloud, Bot, Headphones, Settings, ArrowRight, Server, Code, Shield, Zap, Network, Cpu } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const ITITESLandingPage = () => {

    useEffect(() => {
                        AOS.init({
                              duration: 1000,
                              once: true,
                            });
                      }, []);

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline IT operations with intelligent automation that reduces manual effort and eliminates repetitive tasks",
      features: ["Workflow automation", "Task orchestration", "Error reduction systems"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Multi-cloud Deployment",
      description: "Seamless cloud migration and multi-cloud management for optimized performance and cost efficiency",
      features: ["Cloud strategy planning", "Hybrid infrastructure", "Cost optimization"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Driven Support Systems",
      description: "Intelligent support systems powered by AI for faster resolution times and improved customer satisfaction",
      features: ["Predictive issue detection", "Automated diagnostics", "Smart ticket routing"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Service Desk Automation",
      description: "Transform your service desk operations with automated ticketing, resolution, and customer communication",
      features: ["Automated ticket management", "Self-service portals", "Performance analytics"]
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Drive Efficiency" },
    { icon: <Settings className="w-6 h-6" />, text: "Reduce Manual Effort" },
    { icon: <Network className="w-6 h-6" />, text: "Enhanced Service Delivery" },
    { icon: <Shield className="w-6 h-6" />, text: "Intelligent Automation" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-6">
              <Monitor className="w-16 h-16 text-red-400" />
            </div> */}
            <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red via-red-500 to-red-400 bg-clip-text text-transparent">
              IT / ITES
            </h1>
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              Intelligent Technology Solutions
            </h2>
            <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Optimize IT and IT-enabled services with intelligent automation, cloud migration, and advanced analytics. 
              Drive efficiency, reduce manual effort, and enhance service delivery across your ecosystem.
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
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-400/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-4">
              Next-Gen <span className="text-red-400">IT</span> Operations
            </h2>
            <p data-aos="fade-up" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming technology infrastructure with intelligent automation and cloud-native solutions
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

      {/* Technology Stack Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" data-aos="fade-up">
              Comprehensive <span className="text-red-400">Tech Stack</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Server className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Infrastructure Management</h4>
              <p className="text-gray-300">End-to-end infrastructure monitoring, optimization, and automated scaling solutions</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Code className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">DevOps Integration</h4>
              <p className="text-gray-300">Seamless CI/CD pipelines, automated testing, and continuous deployment workflows</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Cpu className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Performance Analytics</h4>
              <p className="text-gray-300">Real-time monitoring, predictive analytics, and intelligent performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">75%</div>
              <div className="text-gray-300">Operational Efficiency</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">90%</div>
              <div className="text-gray-300">Automation Coverage</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Service Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-6">
            Modernize Your <span className="text-red-400">IT</span> Infrastructure
          </h2>
          <p data-aos="fade-up" className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join forward-thinking organizations that are transforming their IT operations with 
            intelligent automation and cloud-native solutions. Start your digital transformation today.
          </p>
          <button data-aos="fade-up" onClick={()=>{ window.location.href = "/Connect-with-us"}} className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="flex items-center gap-2">
              Optimize Your Operations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Network className="w-8 h-8 text-red-400" />
            <div className="text-3xl font-bold text-red-400">
              IT Solutions Hub
            </div>
          </div>
          <p className="text-gray-400">
            Empowering Digital Excellence Through Intelligent Technology
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default ITITESLandingPage;