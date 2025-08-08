import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Heart, Sparkles, Zap, Users, Brain, TrendingUp } from 'lucide-react';

const ModernMVVSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const mvvData = [
    {
      title: "MISSION",
      icon: <Target className="w-8 h-8" />,
      content: "To be the transformative force that shapes an agile, purposeful future of work on a global scale."
    },
    {
      title: "VISION",
      icon: <Eye className="w-8 h-8" />,
      content: "To become a global leader in creating agile and secure work environments that boost productivity and promote sustainable growth, contributing to a more resilient and equitable global economy."
    },
    {
      title: "VALUES",
      icon: <Heart className="w-8 h-8" />,
      values: [
        { text: "Relentless curiosity & agility", icon: <Sparkles className="w-4 h-4" /> },
        { text: "Bold experimentation", icon: <Zap className="w-4 h-4" /> },
        { text: "Multidisciplinary innovation", icon: <Users className="w-4 h-4" /> },
        { text: "Wisdom in action", icon: <Brain className="w-4 h-4" /> },
        { text: "Data and future-obsessed", icon: <TrendingUp className="w-4 h-4" /> }
      ],
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Foundation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The core principles that drive our innovation and guide our journey toward excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {mvvData.map((item, index) => (
            <div
              key={item.title}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${visibleCards.includes(index) ? index * 200 : 0}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-4 rounded-xl mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                {item.content && (
                  <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {item.content}
                  </p>
                )}

                {/* Values List */}
                {item.values && (
                  <div className="space-y-4 mt-6">
                    {item.values.map((value, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2 ${
                          visibleCards.includes(index) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: `${visibleCards.includes(index) ? (index * 200) + (idx * 100) + 400 : 0}ms` 
                        }}
                      >
                        <div className="bg-gradient-to-r from-red-500 to-red-400 p-2 rounded-lg flex-shrink-0">
                          <div className="text-white">
                            {value.icon}
                          </div>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {value.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-xl group-hover:from-white/10 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-white/3 to-transparent blur-lg group-hover:from-white/8 transition-all duration-500"></div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500 to-red-400 p-[1px]">
                <div className="w-full h-full rounded-2xl bg-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            {/* <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div> */}
          </div>
          <p className="text-gray-500 mt-4 text-sm">Building the future, one value at a time</p>
        </div>
      </div>
    </section>
  );
};

export default ModernMVVSection;