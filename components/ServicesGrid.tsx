'use client';

import React from 'react';

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    clipboard: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    factory: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    scale: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    user: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    key: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    document: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  };
  return <>{icons[type] || icons.building}</>;
};

const services = [
  { title: 'Private Limited Company', description: 'Limited liability, easy funding, separate legal entity', iconType: 'building', urgency: 'important' as const },
  { title: 'GST Registration', description: 'Applicable for qualifying turnover thresholds', iconType: 'clipboard', urgency: 'critical' as const },
  { title: 'Trademark Registration', description: 'Protect your brand identity and logo legally', iconType: 'shield', urgency: 'beneficial' as const },
  { title: 'MSME/Udyam Registration', description: 'Access programs and eligibility benefits', iconType: 'factory', urgency: 'beneficial' as const },
  { title: 'Partnership Firm', description: 'Ideal for 2+ partners sharing profits and losses', iconType: 'users', urgency: 'important' as const },
  { title: 'LLP Registration', description: 'Limited liability with partnership flexibility', iconType: 'scale', urgency: 'important' as const },
  { title: 'One Person Company', description: 'Single owner with limited liability protection', iconType: 'user', urgency: 'important' as const },
  { title: 'Digital Signature (DSC)', description: 'Used for secure online filings and approvals', iconType: 'key', urgency: 'mandatory' as const },
  { title: 'FSSAI License', description: 'Required for eligible food-related businesses', iconType: 'document', urgency: 'critical' as const }
];

const urgencyConfig = {
  critical: { border: 'border-l-red-500', bg: 'bg-red-500', label: 'Regulatory' },
  mandatory: { border: 'border-l-orange-500', bg: 'bg-orange-500', label: 'Required' },
  important: { border: 'border-l-blue-500', bg: 'bg-blue-500', label: 'Recommended' },
  beneficial: { border: 'border-l-emerald-500', bg: 'bg-emerald-500', label: 'Optional' }
};

const ServicesGrid = () => {
  return (
    <section className="section bg-gray-50" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the right registration for your business needs
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {Object.entries(urgencyConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-4 h-4 ${config.bg} rounded-full`}></div>
                <span className="text-gray-700 font-medium">{config.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              href="https://wa.me/919876543210?text=I%27m%20interested%20in%20your%20service"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group"
            >
              <div className={`card-premium relative border-l-4 ${urgencyConfig[service.urgency].border} hover:scale-[1.03] transition-all duration-300 cursor-pointer h-full`}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700 group-hover:from-blue-50 group-hover:to-emerald-50 group-hover:text-blue-600 transition-all duration-300">
                  <ServiceIcon type={service.iconType} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                <div className="inline-flex items-center text-blue-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
