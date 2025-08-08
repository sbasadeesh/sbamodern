import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, ArrowRight, Zap, Building2, Globe } from 'lucide-react';

const PartnersSection = () => {
  const [visibleLogos, setVisibleLogos] = useState([]);
  const sectionRef = useRef(null);
  const logoRefs = useRef([]);

  // Main partners
  const partners = [
    {
      id: 1,
      name: "IBM",
      logoUrl: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png", // Replace with your IBM logo URL
      industry: "Enterprise Technology",
      color: "from-blue-600 to-blue-400",
      description: "Leading enterprise solutions and cloud services"
    },
    {
      id: 2,
      name: "Red Hat",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg", // Replace with your Red Hat logo URL
      industry: "Open Source Solutions",
      color: "from-red-600 to-red-400",
      description: "Enterprise open source software solutions"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!visibleLogos.includes(index)) {
              setVisibleLogos(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    logoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleLogos]);

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
            <Users className="w-8 h-8 text-red-500 mr-3" />
            <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
              Trusted Partners
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Strategic
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            Collaborating with industry leaders to deliver exceptional solutions worldwide.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Partners Grid - Bigger Cards for 2 Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              ref={el => logoRefs.current[index] = el}
              data-index={index}
              className={`group relative overflow-hidden rounded-3xl backdrop-blur-sm border border-gray-800 hover:border-red-500 transition-all duration-700 ${
                visibleLogos.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${visibleLogos.includes(index) ? index * 300 : 0}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
              }}
            >
              {/* Animated Border Lines */}
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-700 group-hover:w-full"></span>
              <span className="absolute right-0 top-0 h-0 w-0.5 bg-gradient-to-b from-red-500 to-red-400 transition-all duration-700 delay-200 group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-gradient-to-l from-red-500 to-red-400 transition-all duration-700 delay-400 group-hover:w-full"></span>
              <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-gradient-to-t from-red-500 to-red-400 transition-all duration-700 delay-600 group-hover:h-full"></span>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/15 to-gray-900/50 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-12 h-80 flex flex-col items-center justify-center text-center cursor-pointer">
                {/* Logo Container */}
                <div className="p-8 rounded-2xl w-48 h-48 flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500 mb-6  group-hover:border-red-500/50">
                <img 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
                </div>

                
                {/* Company Name */}
                <h3 className="text-3xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 mb-3">
                  {partner.name}
                </h3>
                
                {/* Industry */}
                <p className="text-lg text-red-400 group-hover:text-red-300 transition-colors duration-300 mb-4 font-semibold">
                  {partner.industry}
                </p>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {partner.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-r from-red-500/15 to-transparent blur-xl group-hover:from-red-500/25 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-lg group-hover:from-white/15 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/8 to-transparent border border-gray-800 hover:border-red-500/50 transition-all duration-300">
            <div className="text-5xl font-bold text-red-400 mb-3">2</div>
            <div className="text-gray-400 text-lg">Strategic Partners</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/8 to-transparent border border-gray-800 hover:border-red-500/50 transition-all duration-300">
            <div className="text-5xl font-bold text-red-400 mb-3">100%</div>
            <div className="text-gray-400 text-lg">Enterprise Grade</div>
          </div>
        </div> */}


        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            {/* <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div> */}
          </div>
          
          <p className="text-gray-500 mb-8">Interested in becoming a strategic partner?</p>
          
          <button className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Shedule a Startegy Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;