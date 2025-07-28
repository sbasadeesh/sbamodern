import React, { useState, useEffect, useRef } from 'react';
import { Bot, Server, Cloud, Zap, ArrowRight, Sparkles } from 'lucide-react';

const AutomationSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const automationCards = [
    {
      id: 1,
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Empower your business with AI-driven automation tools to enhance customer engagement, support, and insights.",
      features: ["Machine Learning", "Predictive Analytics", "Smart Workflows"]
    },
    {
      id: 2,
      icon: <Server className="w-8 h-8" />,
      title: "IT & Infrastructure Automation",
      description: "Automate and manage your IT infrastructure and operations to ensure scalability, reliability, and speed.",
      features: ["Network Management", "System Monitoring", "Auto-scaling"]
    },
    {
      id: 3,
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps Automation",
      description: "Achieve seamless integration, delivery, and management with powerful cloud automation and DevOps solutions.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-red-500 mr-3" />
            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
              Intelligent Solutions
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Unlock Efficiency with 
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            Transform your business operations with smart automation solutions that enhance productivity, 
            streamline workflows, and deliver faster results across all areas of your business.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationCards.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${visibleCards.includes(index) ? index * 200 : 0}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              }}
            >
              {/* Animated Border Lines */}
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 h-0 w-0.5 bg-gradient-to-b from-red-500 to-red-400 transition-all duration-500 delay-200 group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-gradient-to-l from-red-500 to-red-400 transition-all duration-500 delay-400 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-red-500 to-red-400 transition-all duration-500 delay-600 group-hover:h-full"></span>
              
              {/* Gradient Overlay */}
              <div className="absolute  inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative cursor-pointer z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-4">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                  {card.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {card.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center space-x-2 transition-all duration-300 ${
                        visibleCards.includes(index)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${visibleCards.includes(index) ? (index * 200) + (idx * 100) + 600 : 0}ms` 
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-300 font-medium">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-red-500/10 to-transparent blur-xl group-hover:from-red-500/20 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-lg group-hover:from-white/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          
          <p className="text-gray-500 mb-8">Ready to transform your business operations?</p>
          
          <button className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;