'use client';

import React from 'react';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'E-commerce Startup',
      quote: 'The process was structured and clear. We always knew the next step and who to contact. Registration was completed ahead of schedule.',
      rating: 5,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Rahul Verma',
      company: 'SaaS Consulting',
      quote: 'Advisor-led guidance made filings straightforward. The scope and timelines were communicated early. Highly professional team.',
      rating: 5,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Anjali Patel',
      company: 'Online Retailer',
      quote: 'Transparent pricing and reliable updates. We felt supported throughout registration. Would recommend to any new founder.',
      rating: 5,
      color: 'from-emerald-500 to-teal-500',
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden" id="testimonials">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            4.9/5 Average Rating
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Client perspectives on clarity, reliability, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="mb-5">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-emerald-300 mb-2">Clarity</div>
            <p className="text-gray-400 text-sm">Step-by-step guidance</p>
          </div>
          <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-white/10 pt-4 sm:pt-0">
            <div className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">Reliability</div>
            <p className="text-gray-400 text-sm">Predictable milestones</p>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-blue-300 mb-2">Support</div>
            <p className="text-gray-400 text-sm">Dedicated advisor access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
