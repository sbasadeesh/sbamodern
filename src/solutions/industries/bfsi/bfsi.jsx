import { Sparkles, ArrowRight, Landmark } from 'lucide-react';

function BFSI(){

    return(
        <>
          <section className="bg-black text-white py-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <Landmark className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">
          Transforming <span className="text-red-500">BFSI</span> with AI-Powered Innovation
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Enhance compliance, reduce fraud, and delight customers with intelligent digital solutions tailored for the BFSI sector.
        </p>
        <button className="mt-8 bg-gradient-to-r from-red-500 to-red-400 py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-500 transition-all duration-300 flex items-center space-x-2 mx-auto">
          <span>Talk to an Expert</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Solutions Offered */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-white mb-6">Our BFSI-Focused Solutions</h2>
        <p className="text-gray-400 mb-10">
          We provide AI-first, secure, and scalable platforms to address core BFSI challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Fraud Detection',
            'Risk Scoring Models',
            'AI-driven KYC Automation',
            'RegTech & Compliance Monitoring'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-red-500/50 transition-all">
              <Sparkles className="w-5 h-5 text-red-400" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-white mb-6">Your Business Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div className="bg-gray-900/20 border border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Operational Efficiency</h4>
            <p>Automate manual processes, reduce cost, and improve turnaround times.</p>
          </div>
          <div className="bg-gray-900/20 border border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Enhanced Compliance</h4>
            <p>Stay audit-ready and align with global financial regulations effortlessly.</p>
          </div>
          <div className="bg-gray-900/20 border border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Improved Risk Mitigation</h4>
            <p>Detect fraud proactively and score risk in real-time with AI analytics.</p>
          </div>
          <div className="bg-gray-900/20 border border-gray-700 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Customer Experience</h4>
            <p>Enable hyper-personalized financial services through intelligent automation.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <p className="text-gray-500 text-lg mb-4">Need a BFSI Digital Transformation Plan?</p>
        <button className="bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center space-x-2 mx-auto">
          <span>Get a Call Back</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
        </>
    )
}


export default BFSI

