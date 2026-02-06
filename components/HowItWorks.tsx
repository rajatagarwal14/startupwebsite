'use client';

import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Discovery', time: 'Quick intake', desc: 'Share your business goals and registration requirements.' },
    { number: '2', title: 'Documentation', time: 'Secure upload', desc: 'Submit documents through our secure portal or assisted channel.' },
    { number: '3', title: 'Expert Review', time: 'Advisor-led', desc: 'Specialists validate filings and guide each milestone.' },
    { number: '4', title: 'Activation', time: 'Milestone delivery', desc: 'Receive certificates and a clear compliance roadmap.' },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden" id="how-it-works">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A structured process that keeps every step predictable and clear.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group">
              <div className="flex gap-6 sm:gap-8">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white font-black text-2xl sm:text-3xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full w-fit">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg">{step.desc}</p>
                </div>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="h-8 ml-8 sm:ml-10 border-l-2 border-dashed border-emerald-500/30 mt-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* What you get section */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-gray-300">Registration documentation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-gray-300">Compliance-ready filings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-gray-300">Milestone updates and tracking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-gray-300">Advisor support when you need it</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-200 mb-8">Begin your journey to official business registration today.</p>
            <a
              href="https://wa.me/919876543210?text=I'm%20ready%20to%20start%20registration"
              className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 text-center"
            >
              Start Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
