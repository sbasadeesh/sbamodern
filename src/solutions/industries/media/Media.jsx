import { Play, Tag, Users, Target, Mic, Video, ArrowRight, Camera, Film, Headphones, Zap } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
const MediaLandingPage = () => {

     useEffect(() => {
                    AOS.init({
                          duration: 1000,
                          once: true,
                        });
                  }, []);

  const services = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: "AI Content Tagging",
      description: "Intelligent automated tagging and metadata generation for multimedia content across all formats and platforms",
      features: ["Automated metadata extraction", "Smart categorization", "Multi-language support"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Segmentation",
      description: "Advanced analytics to understand and segment your audience for targeted content delivery and engagement",
      features: ["Behavioral analysis", "Demographic insights", "Engagement patterns"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Recommendations",
      description: "AI-powered recommendation engines that deliver personalized content experiences to maximize engagement",
      features: ["Machine learning algorithms", "Real-time personalization", "Cross-platform integration"]
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Speech & Video Recognition",
      description: "Advanced recognition technologies for automated transcription, content analysis, and accessibility features",
      features: ["Speech-to-text conversion", "Video content analysis", "Real-time processing"]
    }
  ];

  const benefits = [
    { icon: <Camera className="w-6 h-6" />, text: "Content Creation" },
    { icon: <Target className="w-6 h-6" />, text: "Personalization" },
    { icon: <Users className="w-6 h-6" />, text: "Audience Engagement" },
    { icon: <Zap className="w-6 h-6" />, text: "AI Automation" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="flex justify-center mb-6">
              <Play className="w-16 h-16 text-red-400" />
            </div> */}
            <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red via-red-500 to-red-400 bg-clip-text text-transparent">
              MEDIA
            </h1>
            <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-100">
              AI-Driven Content Solutions
            </h2>
            <p data-aos="fade-up" className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform content creation, personalization, and audience engagement through AI-driven media workflows. 
              Our solutions power recommendation engines, automated editing, and targeted advertising.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
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
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-red-400/5 rounded-full blur-lg animate-pulse delay-700"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
              Next-Gen <span className="text-red-400">Media</span> Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
              Revolutionizing content workflows with artificial intelligence and machine learning capabilities
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

      {/* Media Features Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Powering <span className="text-red-400">Creative Workflows</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center" data-aos="fade-up">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Film className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Video Processing</h4>
              <p className="text-gray-300">Automated video analysis, editing, and optimization for multiple platforms and formats</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Headphones className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Audio Intelligence</h4>
              <p className="text-gray-300">Advanced audio processing, music recognition, and voice analysis capabilities</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-red-400/30 transition-colors duration-300">
              <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Targeted Advertising</h4>
              <p className="text-gray-300">Precision ad placement with real-time audience insights and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">85%</div>
              <div className="text-gray-300">Engagement Increase</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">3x</div>
              <div className="text-gray-300">Content Processing Speed</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">70%</div>
              <div className="text-gray-300">Production Cost Reduction</div>
            </div>
            <div data-aos="fade-up" className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy in Content Tagging</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Revolutionize Your <span className="text-red-400">Media</span> Workflows
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-up">
            Join content creators and media companies who are transforming their operations with 
            AI-powered solutions. Start creating smarter, more engaging content today.
          </p>
          <button data-aos="fade-up" onClick={()=>{ window.location.href = "/Connect-with-us"}} className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="flex items-center gap-2">
              Transform Your Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Video className="w-8 h-8 text-red-400" />
            <div className="text-3xl font-bold text-red-400">
              Media Intelligence
            </div>
          </div>
          <p className="text-gray-400">
            Empowering Content Innovation Through AI
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default MediaLandingPage;