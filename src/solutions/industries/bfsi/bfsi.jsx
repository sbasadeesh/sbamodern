import React, { useEffect } from 'react';
import { Shield, Brain, Eye, FileCheck, TrendingUp, Users, Lock, Zap, ArrowRight } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const BFSI = () => {

  useEffect(() => {
            AOS.init({
                  duration: 1000,
                  once: true,
                });
          }, []);

  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Fraud Detection",
      description: "Advanced AI algorithms to identify and prevent fraudulent activities in real-time",
      features: ["Real-time monitoring", "Pattern recognition", "Anomaly detection"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Risk Scoring Models",
      description: "Sophisticated models to assess and quantify risk across all business operations",
      features: ["Predictive analytics", "Credit scoring", "Portfolio optimization"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-driven KYC Automation",
      description: "Streamlined customer verification with intelligent document processing",
      features: ["Document verification", "Identity validation", "Automated compliance"]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "RegTech & Compliance Monitoring",
      description: "Comprehensive regulatory technology solutions for seamless compliance",
      features: ["Regulatory reporting", "Audit trails", "Policy management"]
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, text: "Enhanced Customer Experience" },
    { icon: <Zap className="w-6 h-6" />, text: "Optimized Operations" },
    { icon: <Shield className="w-6 h-6" />, text: "Regulatory Alignment" },
    { icon: <Lock className="w-6 h-6" />, text: "Advanced Security" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-400 to-red-800 bg-clip-text text-transparent">
              BFSI
            </h1>
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              Digital Transformation Excellence
            </h2>
            <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We empower the Banking, Financial Services, and Insurance sector with digital transformation, 
              AI-powered insights, cybersecurity frameworks, and compliance automation. Enhance customer 
              experiences, optimize operations, and ensure regulatory alignment.
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-400">Core Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed specifically for the BFSI sector
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Transform Your <span className="text-red-400">BFSI Operations</span>?
          </h2>
          <p data-aos="fade-up" className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading financial institutions who trust us to deliver innovative, 
            secure, and compliant digital solutions.
          </p>
          <button data-aos="fade-up" onClick={()=>{ window.location.href = "/Connect-with-us"}} className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl font-bold mb-4 text-red-400">BFSI Solutions</div>
          <p className="text-gray-400">
            Empowering Financial Excellence Through Digital Innovation
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default BFSI;