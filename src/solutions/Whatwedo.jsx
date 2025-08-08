import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Network,
  ArrowRight, 
  Sparkles,
  Target,
  Zap,
  BrainCircuit,
  Landmark,
  Factory,
  ImagePlay,
  Building,
  Headset,
  HeartPulse
} from 'lucide-react';

const SolutionsSection = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

const solutions = [
  {
    id: 1,
    icon: <Landmark className="w-12 h-12" />,
    title: "BFSI",
    description:
      "We empower the Banking, Financial Services, and Insurance sector with digital transformation, AI-powered insights, cybersecurity frameworks, and compliance automation. Enhance customer experiences, optimize operations, and ensure regulatory alignment.",
    features: [
      "Fraud Detection",
      "Risk Scoring Models",
      "AI-driven KYC Automation",
      "RegTech & Compliance Monitoring"
    ],
    image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "BFSI Industry",
    reverse: false
  },
  {
    id: 2,
    icon: <Factory className="w-12 h-12" />,
    title: "Manufacturing",
    description:
      "Enable smart factories with AI, IoT, and predictive analytics. From process automation to real-time monitoring, we help manufacturers increase efficiency, reduce downtime, and enhance product quality.",
    features: [
      "Predictive Maintenance",
      "Supply Chain Optimization",
      "Computer Vision QA",
      "Robotic Process Automation (RPA)"
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Manufacturing AI",
    reverse: true
  },
  {
    id: 3,
    icon: <ImagePlay className="w-12 h-12" />,
    title: "Media",
    description:
      "Transform content creation, personalization, and audience engagement through AI-driven media workflows. Our solutions power recommendation engines, automated editing, and targeted advertising.",
    features: [
      "AI Content Tagging",
      "Audience Segmentation",
      "Personalized Recommendations",
      "Speech & Video Recognition"
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Media Industry AI",
    reverse: false
  },
  {
    id: 4,
    icon: <Building className="w-12 h-12" />,
    title: "IT / ITES",
    description:
      "Optimize IT and IT-enabled services with intelligent automation, cloud migration, and advanced analytics. Drive efficiency, reduce manual effort, and enhance service delivery across your ecosystem.",
    features: [
      "Process Automation",
      "Multi-cloud Deployment",
      "AI-Driven Support Systems",
      "Service Desk Automation"
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "IT and ITES Solutions",
    reverse: true
  },
  {
    id: 5,
    icon: <Headset className="w-12 h-12" />,
    title: "Telecom / BPO / KPO",
    description:
      "Revolutionize the way customer experience, operations, and backend processing work in the telecom and outsourcing industries. AI enables faster resolution, personalized engagement, and cost savings.",
    features: [
      "Conversational AI",
      "Customer Sentiment Analysis",
      "Call Center Automation",
      "Workforce Optimization"
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Telecom and BPO AI",
    reverse: false
  },
  {
    id: 6,
    icon: <HeartPulse className="w-12 h-12" />,
    title: "Healthcare",
    description:
      "Accelerate diagnostics, patient care, and hospital management through AI-powered tools. We enable clinical decision support, remote monitoring, and intelligent automation in the healthcare ecosystem.",
    features: [
      "Medical Image Analysis",
      "Remote Patient Monitoring",
      "Clinical Decision Support",
      "Electronic Health Record (EHR) Automation"
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Healthcare AI",
    reverse: true
  }
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
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
          ref={el => sectionRefs.current[0] = el}
          data-index={0}
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.includes(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          
          
         <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Shaping the Future with  
            <span className="block text-red-500">
            Intelligent Solutions
            </span>
        </h2>

        <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed mb-8">
            We deliver industry-specific technology solutions that accelerate digital transformation and unlock new levels of productivity and innovation.
        </p>

          
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto"></div>
        </div>

        {/* Solutions */}
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              ref={el => sectionRefs.current[index + 1] = el}
              data-index={index + 1}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                visibleSections.includes(index + 1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${visibleSections.includes(index + 1) ? index * 200 : 0}ms` }}
            >
              {/* Image/Visual */}
              <div className={`${solution.reverse ? 'lg:order-2' : 'lg:order-1'} relative group`}>
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 group-hover:border-red-500 transition-all duration-500">
                  
                  {/* Main Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-black/40 to-gray-900/80 group-hover:from-red-900/70 group-hover:via-black/50 transition-all duration-500"></div>
                    
                    {/* Floating Icon */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-red-500/90 to-red-400/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                    </div> */}
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 w-4 h-4 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-16 left-16 w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-red-500/20 to-transparent blur-xl group-hover:from-red-500/30 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-lg group-hover:from-white/20 transition-all duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${solution.reverse ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 p-3 rounded-xl">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-red-500 to-transparent"></div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {solution.title}
                </h3>
                
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-red-500/50 transition-all duration-300 ${
                        visibleSections.includes(index + 1)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${visibleSections.includes(index + 1) ? (index * 200) + (idx * 100) + 600 : 0}ms` 
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="flex items-center space-x-4">
                  <button className="group bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-3 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          
          <p className="text-gray-500 text-lg mb-8">Ready to explore our solutions?</p>
          
          <button className="bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
            <span>Get a Call Back</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;