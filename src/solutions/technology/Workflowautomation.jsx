import React, { useEffect } from 'react';
import {
  FileText, Bot, Mail, Code2, Zap, Users, Lock, CheckCircle2, ArrowRight
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const WorkflowAutomation = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Processing",
      description: "Automate extraction, classification, and validation of documents with AI-powered workflows.",
      features: ["Invoice parsing", "Form recognition", "Data extraction"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom Task Bots",
      description: "Build intelligent bots to handle repetitive tasks across departments and tools.",
      features: ["Data entry automation", "Task scheduling", "Cross-platform bots"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email & Message Handling",
      description: "Automate inbound communication processing with smart email and chat workflows.",
      features: ["Auto-responders", "Ticket routing", "Message tagging"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Automation Models",
      description: "Tailored automation systems built to match your exact business logic and operational goals.",
      features: ["Workflow modeling", "Custom triggers", "API integrations"]
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Increased Efficiency" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "Reduced Errors" },
    { icon: <Users className="w-6 h-6" />, text: "Optimized Workforce" },
    { icon: <Lock className="w-6 h-6" />, text: "Secure Automation" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-indigo-800 bg-clip-text text-transparent">
              Workflow Automation
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              Automate Tasks. Accelerate Operations.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Automate repetitive tasks, reduce human error, and streamline your business operations. Our automation solutions adapt to your unique processes and enhance productivity at scale.
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
              Automation <span className="text-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent automation built to eliminate inefficiencies and drive real business outcomes.
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
            Ready to <span className="text-blue-400">Automate Your Workflow</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            From documents to emails to custom bots, we help you reduce manual work and focus on what truly matters.
          </p>
          <button onClick={() => { window.location.href = "/Connect-with-us" }} className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="flex items-center gap-2">
              Start Automating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkflowAutomation;
