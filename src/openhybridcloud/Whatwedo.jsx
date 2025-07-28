import React, { useState, useEffect, useRef } from 'react';
import { Brain, Zap, Clock, Sparkles, ArrowRight, Cpu } from 'lucide-react';

const ITAutomationPlatform = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const platformFeatures = [
    {
      id: 1,
      icon: <Brain className="w-8 h-8" />,
      title: "Unified Cloud Infrastructure",
      description: "Simplify hybrid deployments with a consistent platform across public and private clouds improving workload mobility and governance.",
      features: ["Unified Real-Time Insights", "Cloud-Native Smart Analytics", "Intelligent Cloud Assistance"],
      accent: "from-red-500 to-red-400"
    },
    {
      id: 2,
      icon: <Cpu className="w-8 h-8" />,
      title: "Open Ecosystem Integration",
      description: "Integrate seamlessly with open-source tools and APIs to support innovation while avoiding vendor lock-in.",
      features: ["Seamless Connectivity", "Interoperability by Design", "Partner-Friendly Architecture"],
      accent: "from-red-500 to-red-400"
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      title: "Secure & Scalable Architecture",
      description: "Ensure enterprise-grade security, compliance, and scalability from edge to core to cloud with a unified approach.",
      features: ["Enterprise-Grade Security", "Scales as You Grow", "Zero Trust Foundations"],
      accent: "from-red-500 to-red-400"
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
            {/* <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
              All-in-One Platform
            </span> */}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
           Enable and Open
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Hybrid Cloud
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
              Startegy
            </span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            Our open hybrid cloud platform helps you streamline operations by combining AI, automation, and real-time insights—delivering flexibility and security across your entire IT ecosystem.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.id}
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
              {/* Right border accent for first two cards */}
              {index < 2 && (
                <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-red-500/20 via-gray-800 to-red-500/20"></div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 cursor-pointer p-8 text-center h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`bg-gradient-to-r ${feature.accent} p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6 flex-grow">
                  {feature.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {feature.features.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center justify-center space-x-2 transition-all duration-500 ${
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
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Button */}
                <div className="mt-auto">
                  <button className="flex items-center justify-center space-x-2 w-full bg-gray-900/50 hover:bg-red-900/30 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 group-hover:scale-105">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-r from-red-500/10 to-transparent blur-xl group-hover:from-red-500/20 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-lg group-hover:from-white/10 transition-all duration-500"></div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500 to-red-400 p-[1px]">
                <div className="w-full h-full rounded-2xl bg-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-400">Platform Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-2">
              50%
            </div>
            <div className="text-gray-400">Faster Deployment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-2">
              10x
            </div>
            <div className="text-gray-400">ROI Improvement</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          
          <p className="text-gray-500 mb-8 text-lg">Ready to transform your IT operations?</p>
          
          <button className="bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITAutomationPlatform;