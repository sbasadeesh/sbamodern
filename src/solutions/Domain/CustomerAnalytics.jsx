import React, { useState, useEffect, useRef } from 'react';
import {
  Users, PieChart, Activity, Gauge, Map, TrendingUp, Radar, Zap, ArrowRight, Sparkles
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import behavioral_segmentation from "./behavioral_segmentation.jpg"
import journey_mapping from "./journey_mapping.jpg"
import predictive_insights from "./predictive_insights.jpg"
import realtime_dashboard from "./realtime_dashboard.jpg"

const CustomerAnalytics = () => {

     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

        const [visibleSections, setVisibleSections] = useState([]);
        const sectionRefs = useRef([]);
      

  const services = [
    {
        id: 1,
      icon: <PieChart className="w-8 h-8" />,
      title: "Behavioral Segmentation",
      description: "Group customers based on actions, preferences, and patterns to deliver targeted experiences.",
      features: ["Purchase patterns", "Engagement cohorts", "Intent-based segmentation"],
      image: behavioral_segmentation,
      imageAlt: "Machine Learning Models",
      reverse: false,
    },
    {
        id: 2,
      icon: <Map className="w-8 h-8" />,
      title: "Journey Mapping",
      description: "Visualize customer interactions across touchpoints to identify gaps and opportunities.",
      features: ["Funnel analysis", "Drop-off tracking", "Channel attribution"],
      image: journey_mapping,
      imageAlt: "Machine Learning Models",
      reverse: true,
    },
    {
        id: 3,
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Predictive Insights",
        description: "Forecast behaviors like churn, conversion, or lifetime value using predictive models.",
        features: ["Churn prediction", "LTV estimation", "Conversion scoring"],
        image: predictive_insights,
        imageAlt: "Machine Learning Models",
        reverse: false,
    },
    {
        id: 4,
        icon: <Gauge className="w-8 h-8" />,
        title: "Real-Time Dashboards",
        description: "Track live metrics and KPIs to inform agile decisions and personalized marketing.",
        features: ["Custom dashboards", "Real-time metrics", "Alert systems"],
        image: realtime_dashboard,
        imageAlt: "Machine Learning Models",
        reverse: true,
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, text: "Customer-Centric Strategy" },
    { icon: <Activity className="w-6 h-6" />, text: "Data-Driven Insights" },
    { icon: <Radar className="w-6 h-6" />, text: "Personalization at Scale" },
    { icon: <Zap className="w-6 h-6" />, text: "Faster Decision-Making" }
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-96 h-96 bg-red-800/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-32 w-80 h-80 bg-red-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-red-700/6 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-950/20"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '50px 50px',
                 animation: 'grid-move 20s linear infinite'
               }}>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent animate-fade-in-up">
              Customer Analytics
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-100 animate-fade-in-up delay-200">
              Know Your Customers. <span className="text-red-400">Dominate Your Market.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-400">
              Harness the power of advanced analytics to decode customer behavior, predict trends, and create experiences that convert.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-600">
              {benefits.map((benefit, index) => (
                <div key={index} 
                     className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/20 hover:border-red-400/50 hover:bg-red-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                     style={{ animationDelay: `${800 + index * 100}ms` }}>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors duration-300">{benefit.icon}</span>
                  <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Pulsing CTA */}
            {/* <div className="animate-fade-in-up delay-1000">
              <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-2">
                  Explore Analytics
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
              Our <span className="text-red-400">Intelligence</span> Arsenal
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Cutting-edge tools and methodologies that transform raw data into strategic advantages.
            </p>
          </div>

          <div className="space-y-32">
          {services.map((solution, index) => (
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
                {/* <div className="flex items-center space-x-4">
                  <button onClick={ ()=>{ window.location.href = solution.link}} className="group bg-gradient-to-r cursor-pointer from-red-500 to-red-400 text-white font-semibold py-3 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 via-black to-red-950/20 relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-500 rounded-full opacity-80 animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-600 rounded-full opacity-40 animate-ping delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
            Ready to <span className="text-red-400">Unleash</span> Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up delay-200">
            Transform your customer intelligence into a competitive weapon. The future of your business starts with understanding your customers completely.
          </p>
          
          <div className="animate-fade-in-up delay-400">
            <button className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-6 px-12 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/40 overflow-hidden">
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-red-400/50 animate-pulse"></div>
              
              <span className="relative flex items-center gap-3 text-lg">
                Start Your Analytics Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes grid-move {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(50px, 50px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default CustomerAnalytics;