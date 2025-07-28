import { useState, useEffect } from 'react';

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = [
    { id: 'all', name: 'All Stories', color: 'bg-white' },
    { id: 'data-ai', name: 'Data & AI', color: 'bg-gray-800' },
    { id: 'customer-experience', name: 'Customer Experience', color: 'bg-gray-600' },
    { id: 'automation', name: 'Automation', color: 'bg-gray-400' }
  ];

  const journeySteps = [
    {
      step: 1,
      title: "CUSTOMER AWARENESS",
      stories: [
        {
          category: 'data-ai',
          title: 'Sales Optimization',
          subtitle: 'Using AI/ML Models',
          description: 'Cross-sell, upsell',
          details: [
            'Sell right product > right person > right activities > right channels'
          ],
          company: 'TATA AIA'
        }
      ]
    },
    {
      step: 2,
      title: "CUSTOMER DECISION",
      stories: [
        {
          category: 'data-ai',
          title: 'User Segmentation',
          subtitle: 'Accurately categorise and cluster customers with segmentation analytics to improve service and drive revenue',
          company: 'TATA AIA'
        },
        {
          category: 'data-ai',
          title: 'Incentive Optimization',
          subtitle: 'Enhance the accuracy of commission calculations',
          company: 'TATA AIA'
        },
        {
          category: 'data-ai',
          title: 'Pay as you live',
          subtitle: 'Incentivize customers for better lifestyle',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Reimagining the experience',
          subtitle: 'Provide seamless customer experience across channels',
          details: [
            'Enable clients to fully understand product benefits through assistance'
          ],
          company: 'ICICI PRUDENTIAL'
        }
      ]
    },
    {
      step: 3,
      title: "POLICY PURCHASE",
      stories: [
        {
          category: 'data-ai',
          title: 'Risk Profiling & Preferred Prospecting',
          subtitle: 'Advanced analytics to improve risk profiling and speed up policy renewals',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Content Discovery',
          subtitle: 'Help underwriters to find and discover content to make better decisions',
          company: 'SBI Life'
        },
        {
          category: 'automation',
          title: 'Process automation for application',
          subtitle: 'Decrease application processing time through automation',
          company: 'RELIANCE NIPPON LIFE INSURANCE'
        }
      ]
    },
    {
      step: 4,
      title: "PRODUCT OWNERSHIP/SERVICING",
      stories: [
        {
          category: 'data-ai',
          title: 'Data cataloguing',
          subtitle: 'Cost reduction by implementing an enterprise-wide data strategy',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Service Optimization',
          subtitle: 'Request prioritization and categorization',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: '360 degrees customer view',
          subtitle: 'Single 360° view of customers using Next Gen predictive analytics',
          details: [
            'Identify customers at risk of switching providers',
            'Optimal messaging > right channels > right time'
          ],
          company: 'TATA AIA'
        }
      ]
    },
    {
      step: 5,
      title: "CLAIMS",
      stories: [
        {
          category: 'data-ai',
          title: 'Data Analytics',
          subtitle: 'Analytics to uncover inefficiencies and fraud',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Faster claim processing',
          subtitle: 'Intelligent claims/documents processing through speed and efficiency',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Process automation for payments',
          subtitle: 'Ensure seamless payment process automation using RPA',
          company: 'TATA AIA'
        },
        {
          category: 'customer-experience',
          title: 'Smarter claims processing',
          subtitle: 'Leverage Watson Customer Experience to streamline online applications',
          details: [
            'Identify subtle trouble spots in the application process and claims process'
          ],
          company: 'HYPO-TECH'
        }
      ]
    },
    {
      step: 6,
      title: "RETENTION",
      stories: [
        {
          category: 'automation',
          title: 'Planning and budget optimization',
          subtitle: 'Drive efficiency by eliminating manual report creation across planning & budgeting with analytics',
          company: 'HYPO-TECH'
        },
        {
          category: 'customer-experience',
          title: 'Sentiment analysis',
          subtitle: 'Probe customer sentiment, drive actionable insights, improve customer care & satisfaction',
          company: 'ICICI PRUDENTIAL'
        },
        {
          category: 'customer-experience',
          title: 'Customized Recommendation',
          subtitle: 'Maturity reinvestment and policy recommendations',
          company: 'ICICI PRUDENTIAL'
        },
        {
          category: 'data-ai',
          title: 'Customer lifetime value',
          subtitle: 'Analyse, segment and monitor customer data to retain high-value customers across policy systems',
          company: 'TATA AIA'
        },
        {
          category: 'automation',
          title: 'Improve Operational Efficiency',
          subtitle: 'Smarter policy cancellation and renewals processes',
          company: 'HYPO-TECH'
        }
      ]
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setSelectedCategory(prev => {
        const currentIndex = categories.findIndex(cat => cat.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoRotating, categories]);

  const handleCategoryClick = (categoryId) => {
    setIsAutoRotating(false); // Stop auto-rotation when user clicks
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const filteredStories = journeySteps.map(step => ({
    ...step,
    stories: step.stories.filter(story => 
      selectedCategory === 'all' || story.category === selectedCategory
    )
  }));

  const getCategoryColor = (category) => {
    switch(category) {
      case 'data-ai': return 'bg-black text-white';
      case 'customer-experience': return 'bg-[#1F1D1A] text-white';
      case 'automation': return 'bg-[#0C090A] text-white';
      default: return 'bg-white text-black';
    }
  };

  const getCategoryGlow = (category) => {
    switch(category) {
      case 'data-ai': return 'shadow-blue-500/20';
      case 'customer-experience': return 'shadow-green-500/20';
      case 'automation': return 'shadow-purple-500/20';
      default: return 'shadow-white/20';
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="min-h-screen bg-black text-white p-6">
        <style jsx>{`
          @keyframes fillProgress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-10px);
            }
          }
          
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes cardFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
            }
          }
          
          .animate-fill-progress {
            animation: fillProgress 3s linear infinite;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
          }
          
          .animate-fade-out {
            animation: fadeOut 0.2s ease-in;
          }
          
          .animate-card-fade-in {
            animation: cardFadeIn 0.5s ease-out;
          }
          
          .animate-slide-in {
            animation: slideIn 0.4s ease-out;
          }
          
          .animate-gentle-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .card-enter {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          
          .card-enter-active {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .smooth-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .smooth-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .glass-effect {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          
          .stagger-delay-1 { animation-delay: 0.1s; }
          .stagger-delay-2 { animation-delay: 0.2s; }
          .stagger-delay-3 { animation-delay: 0.3s; }
          .stagger-delay-4 { animation-delay: 0.4s; }
          .stagger-delay-5 { animation-delay: 0.5s; }
          .stagger-delay-6 { animation-delay: 0.6s; }
        `}</style>
        
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-400">Success Stories</span> Across The Journey
            </h1>
            
            {/* Category Filter */}
            <div className="overflow-x-auto w-full">
              <div className="flex sm:justify-center gap-3 sm:gap-4 mt-6 mb-8 px-2 sm:px-0 min-w-max">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-4 py-2 whitespace-nowrap rounded-lg font-medium transition-all duration-500 relative overflow-hidden border animate-slide-in ${
                      selectedCategory === category.id
                        ? 'bg-white text-black scale-110 shadow-2xl border-white glow-effect'
                        : 'bg-[#1F1D1A] text-white hover:bg-[#2F2D2A] border-gray-600 hover:border-gray-400 hover:scale-105 hover:shadow-lg'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {isAutoRotating && selectedCategory === category.id && (
                      <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out animate-fill-progress"></span>
                    )}
                    <span className={`relative z-10 ${isAutoRotating && selectedCategory === category.id ? 'text-black' : ''}`}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {filteredStories.map((step, stepIndex) => (
              <div key={step.step} className={`space-y-4 transition-all duration-300 ${
                isTransitioning ? 'animate-fade-out' : 'animate-fade-in-up'
              }`}
              style={{ animationDelay: isTransitioning ? '0s' : `${stepIndex * 0.1}s` }}>
                {/* Step Header */}
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold mx-auto mb-2 smooth-hover animate-gentle-pulse">
                    {step.step}
                  </div>
                  <h2 className="text-sm font-bold text-gray-300 mb-4 leading-tight">
                    {step.title}
                  </h2>
                </div>

                {/* Stories Cards */}
                <div className="space-y-3">
                  {step.stories.map((story, index) => (
                    <div
                      key={`${story.category}-${index}`}
                      className={`p-4 rounded-lg border border-gray-700 smooth-hover cursor-pointer relative overflow-hidden transition-all duration-300 ${getCategoryColor(story.category)} ${
                        isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0 animate-card-fade-in'
                      }`}
                      onMouseEnter={() => setHoveredCard(`${step.step}-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ 
                        animationDelay: isTransitioning ? '0s' : `${(stepIndex * 0.1) + (index * 0.08)}s`,
                        transitionDelay: isTransitioning ? `${index * 0.03}s` : '0s'
                      }}
                    >
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        hoveredCard === `${step.step}-${index}` ? 'opacity-100' : ''
                      } ${getCategoryGlow(story.category)} glow-effect`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="font-bold text-sm mb-2 transition-all duration-300">
                          {story.title}
                        </h3>
                        <p className="text-xs mb-3 leading-relaxed transition-all duration-300">
                          {story.subtitle}
                        </p>
                        
                        {story.details && (
                          <div className="mb-3 transition-all duration-300">
                            {story.details.map((detail, idx) => (
                              <p key={idx} className="text-xs opacity-90 mb-1 transition-all duration-300">
                                • {detail}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {story.company && (
                          <div className="mt-3 pt-2 border-t border-gray-600 transition-all duration-300">
                            <span className="text-xs font-medium opacity-75 transition-all duration-300">
                              {story.company}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mt-16 p-6 bg-[#1F1D1A] rounded-lg smooth-hover glass-effect animate-fade-in-up">
            <h3 className="text-xl font-bold text-center mb-4">Technology Stack</h3>
            <div className="text-center text-sm text-gray-300 leading-relaxed">
              <p className="mb-2 transition-all duration-300">
                <span className="font-medium">Core Technologies:</span> Robotic Process Automation (RPA) | Data governance and compliance | Customer support/ Digital Assistant
              </p>
              <p className="transition-all duration-300">
                <span className="font-medium">Additional Capabilities:</span> Security | Environmental, social, and governance (ESG) concerns - Envizi | Modernization
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center animate-fade-in-up">
            <p className="text-gray-400 text-sm">IBM Client Engineering</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;