'use client';

import React, { useState } from 'react';

const FinalCTA = () => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqs = [
    {
      q: 'How long does business registration take?',
      a: 'Timelines vary by service and jurisdiction. We provide a clear estimate after intake.'
    },
    {
      q: 'Is this service available across India?',
      a: 'Yes. We support clients nationwide through centralized operations and local partners.'
    },
    {
      q: 'What is your refund policy?',
      a: 'Refunds are handled case-by-case based on scope and stage. Details are shared before engagement.'
    },
    {
      q: 'Do you handle trademark disputes?',
      a: 'We provide advisory support and connect you with specialists when disputes arise.'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-500/50 rounded-3xl p-12 mb-16 relative overflow-hidden">
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-20 -mt-20"></div>
          
          {/* Context badge */}
          <div className="mb-6 inline-block">
            <div className="bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold">
              Tailored plans for your entity type and growth stage
            </div>
          </div>

          {/* Content */}
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Start Your Success Story Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get a clear scope, timeline, and advisor-led plan before you begin. We prioritize accuracy, transparency, and long-term compliance.
          </p>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-10 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-300">Dedicated advisor</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-300">Clear scope & milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-300">Secure document handling</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 text-lg">
              Request a Proposal
            </button>
            <button className="flex-1 border-2 border-cyan-400 text-cyan-300 font-bold py-4 px-8 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-lg">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-black text-white mb-10 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white text-left">{faq.q}</span>
                  <span className={`text-2xl text-emerald-400 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer trust text */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            By clicking above, you agree to our Terms of Service. We&apos;ll never spam you. See our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
