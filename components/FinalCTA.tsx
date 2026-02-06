'use client';

import React from 'react';

const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-500/50 rounded-3xl p-12 relative overflow-hidden">

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
              <span className="text-sm text-gray-300">Clear scope &amp; milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-300">Secure document handling</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210?text=I%27d%20like%20to%20request%20a%20proposal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 text-lg text-center"
            >
              Request a Proposal
            </a>
            <a
              href="https://wa.me/919876543210?text=I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-cyan-400 text-cyan-300 font-bold py-4 px-8 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-lg text-center"
            >
              Book a Consultation
            </a>
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
