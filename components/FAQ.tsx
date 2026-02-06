'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How long does the registration process take?',
    answer: 'The time varies by service type. GST registration typically takes 3-7 days, Private Limited Company registration takes 10-15 days, and trademark registration takes 2-3 months.'
  },
  {
    question: 'What documents do I need?',
    answer: 'Required documents vary by service but generally include PAN card, Aadhaar card, address proof, and photographs. We will provide you with a specific checklist once you choose your service.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use bank-level encryption and follow strict data protection protocols. Your information is never shared with third parties without your consent.'
  },
  {
    question: 'Do you provide post-registration support?',
    answer: 'Absolutely! We offer ongoing support for compliance, filing returns, and any queries you may have after registration.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card-premium">
              <button
                className="w-full flex justify-between items-start text-left cursor-pointer bg-transparent border-none p-0"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <h3 className="text-xl font-bold text-gray-900 pr-8">{faq.question}</h3>
                <span className="text-3xl text-blue-600 transition-transform duration-300 flex-shrink-0" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }} aria-hidden="true">
                  +
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="mt-4 pt-4 text-gray-600 border-t border-gray-200"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gray-600 mb-4">Still have questions?</p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
