import React, { useEffect } from 'react';
import {
  BarChart3, Filter, ListChecks, RefreshCw, Compass, Workflow, Zap, ArrowRight
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const ProcessOptimization = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "Enable agile and iterative enhancements with real-time process feedback and analytics.",
      features: ["Feedback loops", "Performance monitoring", "KPI tracking"]
    },
    {
      icon: <ListChecks className="w-8 h-8" />,
      title: "Task Prioritization",
      description: "Focus on what matters most using data-driven priority mapping and workload balancing.",
      features: ["Priority scoring", "Smart scheduling", "Resource alignment"]
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Identify Bottlenecks",
      description: "Pinpoint delays, inefficiencies, and redundancies in your workflows with precision.",
      features: ["Process mapping", "Throughput analysis", "Delay detection"]
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Smart Recommendations",
      description: "Get AI-powered suggestions to optimize workflows, reduce cost, and improve output.",
      features: ["Optimization suggestions", "Cost reduction strategies", "Smart alerts"]
    }
  ];

  const benefits = [
    { icon: <BarChart3 className="w-6 h-6" />, text: "Improved Efficiency" },
    { icon: <Workflow className="w-6 h-6" />, text: "Streamlined Operations" },
    { icon: <Zap className="w-6 h-6" />, text: "Faster Execution" },
    { icon: <Compass className="w-6 h-6" />, text: "Goal Alignment" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-indigo-800 bg-clip-text text-transparent">
              Process Optimization
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              Streamline, Improve, Perform.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Improve efficiency, reduce waste, and enhance performance across your operations. Our tools uncover bottlenecks and drive continuous improvement aligned with your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <span className="text-blue-400">{benefit.icon}</span>
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-600/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-400">Optimization Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your workflows with intelligent recommendations, dynamic prioritization, and ongoing improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 group-hover:bg-blue-500/30 transition-colors duration-300">
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
                        <ArrowRight className="w-4 h-4 text-blue-400" />
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
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 via-black to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-blue-400">Optimize Your Processes</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let’s help you eliminate inefficiencies and scale performance through data-driven process improvement.
          </p>
          <button
            onClick={() => { window.location.href = "/Connect-with-us" }}
            className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center gap-2">
              Optimize with Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProcessOptimization;
