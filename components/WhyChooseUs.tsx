'use client';

import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Structured Onboarding',
      desc: 'Clear requirements, curated checklists, and guided intake.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Compliance-First',
      desc: 'Process designed to reduce risk and rework from day one.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Transparent Scope',
      desc: 'Upfront pricing and written milestones before you begin.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      title: 'Dedicated Specialist',
      desc: 'Single point of contact through registration and beyond.'
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade service with a process built for reliability, clarity, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="text-emerald-400 mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-500/20 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Area</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-emerald-400">Our Approach</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-400">Typical Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ['Timeline', 'Shared upfront', 'Often unclear'],
                  ['Quality', 'Expert review', 'Limited guidance'],
                  ['Scope', 'Transparent', 'Surprises later'],
                  ['Support', 'Dedicated advisor', 'Ticket-based'],
                ].map(([area, ours, theirs], idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-semibold text-white">{area}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {theirs}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
