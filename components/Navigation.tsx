'use client';

import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-slate-950/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a href="/" className={`text-2xl font-black tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Business<span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">Hub</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            <a href="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
              Home
            </a>
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`} aria-label="Open services menu" aria-haspopup="true">
                Services
                <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                <div className="p-2">
                  <a href="/services/private-limited-company" className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="font-semibold text-gray-900 text-sm">Private Limited Company</div>
                    <div className="text-xs text-gray-500 mt-0.5">Structured governance</div>
                  </a>
                  <a href="/services/gst-registration" className="block px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                    <div className="font-semibold text-gray-900 text-sm">GST Registration</div>
                    <div className="text-xs text-gray-500 mt-0.5">Applicable by business type</div>
                  </a>
                  <a href="/services/fssai-license" className="block px-4 py-3 rounded-lg hover:bg-red-50 transition-colors">
                    <div className="font-semibold text-gray-900 text-sm">FSSAI License</div>
                    <div className="text-xs text-gray-500 mt-0.5">Eligibility-based requirement</div>
                  </a>
                  <a href="/services/trademark-registration" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-semibold text-gray-900 text-sm">Trademark Registration</div>
                    <div className="text-xs text-gray-500 mt-0.5">Brand protection</div>
                  </a>
                  <a href="/services/msme-udyam-registration" className="block px-4 py-3 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="font-semibold text-gray-900 text-sm">MSME/Udyam Registration</div>
                    <div className="text-xs text-gray-500 mt-0.5">Program eligibility support</div>
                  </a>
                </div>
                <div className="border-t border-gray-100 p-2">
                  <a href="/#services" className="block px-4 py-3 text-center font-semibold text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    View All Services &rarr;
                  </a>
                </div>
              </div>
            </div>
            <a href="#how-it-works" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
              How It Works
            </a>
            <a href="#testimonials" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
              Testimonials
            </a>
            <a href="#faq" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
              FAQ
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/20 bg-white rounded-b-2xl shadow-xl">
            <div className="space-y-1 px-2">
              <a href="/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium">Home</a>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium flex justify-between items-center"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-1 mt-1">
                    <a href="/services/private-limited-company" className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg text-sm">Private Limited Company</a>
                    <a href="/services/gst-registration" className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg text-sm">GST Registration</a>
                    <a href="/services/fssai-license" className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg text-sm">FSSAI License</a>
                    <a href="/services/trademark-registration" className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg text-sm">Trademark Registration</a>
                    <a href="/services/msme-udyam-registration" className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg text-sm">MSME/Udyam</a>
                    <a href="/#services" className="block px-4 py-2 text-blue-600 font-semibold rounded-lg text-sm">View All &rarr;</a>
                  </div>
                )}
              </div>
              <a href="#how-it-works" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium">How It Works</a>
              <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium">Testimonials</a>
              <a href="#faq" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium">FAQ</a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block mx-2 mt-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-center rounded-lg">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
