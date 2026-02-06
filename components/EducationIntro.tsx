'use client';

import React from 'react';

const EducationIntro = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-bold text-gray-900">
          Why Business <span className="gradient-text">Registration</span> Matters
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
          Many founders underestimate how early registration decisions shape compliance, funding, and risk.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-red-50 to-red-100">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Why It Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              Operating without proper registration can expose you to regulatory risk, disputes, and operational delays.
            </p>
          </div>

          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Protection First</h3>
            <p className="text-gray-600 leading-relaxed">
              The right structure separates personal and business risk while improving investor and partner confidence.
            </p>
          </div>

          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-green-50 to-green-100">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Growth Enabler</h3>
            <p className="text-gray-600 leading-relaxed">
              Compliance readiness supports access to programs, credit, and larger enterprise contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationIntro;
