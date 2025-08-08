import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Shield, Users, Sparkles, Star, Heart } from 'lucide-react';

const CoreValuesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const coreValues = [
    {
      id: 1,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We are committed to fostering innovation that delivers long-term business value and transformative impact.",
      decorativeIcon: <Sparkles className="w-6 h-6" />,
      gradient: "from-red-500 to-red-400"
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We uphold the highest standards of integrity, transparency, and accountability in all our operations.",
      decorativeIcon: <Star className="w-6 h-6" />,
      gradient: "from-red-500 to-red-400"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in teamwork and collaboration, both within our company and with our clients, to achieve shared success.",
      decorativeIcon: <Heart className="w-6 h-6" />,
      gradient: "from-red-500 to-red-400"
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
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent transform skew-y-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
              What Drives Us
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Core 
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            The fundamental principles that guide our decisions, shape our culture, and define who we are as an organization.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {coreValues.map((value, index) => (
            <div
              key={value.id}
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
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-gray-900/40 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center h-full flex flex-col">
                {/* Main Icon */}
                <div className="mb-6 relative">
                  <div className={`bg-gradient-to-r ${value.gradient} p-6 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Decorative floating icon */}
                  <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${value.gradient} p-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 delay-200`}>
                    <div className="text-white">
                      {value.decorativeIcon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-6">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-lg flex-grow">
                  {value.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-8">
                  <div className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${value.gradient} mx-auto transition-all duration-500 delay-300 rounded-full`}></div>
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

        {/* Connecting Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl pointer-events-none">
          <svg className="w-full h-32" viewBox="0 0 800 120">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path 
              d="M 100 60 Q 400 20 700 60" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            />
          </svg>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 mb-6">
            {/* <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div> */}
          </div>
          
          <p className="text-gray-500 text-lg">These values are the foundation of everything we do</p>
          
          {/* Quote */}
          <div className="mt-8 max-w-2xl mx-auto">
            <blockquote className="text-gray-400 italic text-lg border-l-4 border-red-500 pl-6">
              "Our values aren't just words on a wall - they're the compass that guides our journey toward excellence."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;