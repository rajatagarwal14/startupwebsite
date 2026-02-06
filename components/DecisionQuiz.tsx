'use client';

import React, { useState } from 'react';

type QuizAnswer = {
  timeline: string;
  revenue: string;
  employees: string;
  funding: string;
};

type Recommendation = {
  service: string;
  urgency: 'critical' | 'high' | 'medium' | 'low';
  reason: string;
};

const DecisionQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer>({
    timeline: '',
    revenue: '',
    employees: '',
    funding: ''
  });
  const [showResults, setShowResults] = useState(false);

  const getRecommendations = (): Recommendation[] => {
    const recs: Recommendation[] = [];

    if (answers.revenue === 'over40') {
      recs.push({
        service: 'GST Registration',
        urgency: 'critical',
        reason: 'May be required based on turnover and business activity.'
      });
    }

    if (answers.timeline === 'immediate' || answers.funding === 'yes') {
      recs.push({
        service: 'Private Limited Company',
        urgency: 'high',
        reason: 'Suitable for funding, governance, and liability structure.'
      });
    }

    if (answers.employees === 'planning') {
      recs.push({
        service: 'Digital Signature (DSC)',
        urgency: 'high',
        reason: 'Used for secure digital filings and approvals.'
      });
    }

    recs.push({
      service: 'Trademark Registration',
      urgency: 'medium',
      reason: 'Helps protect brand identity and usage rights.'
    });

    return recs;
  };

  const recommendations = showResults ? getRecommendations() : [];
  const urgencyColors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-blue-100 text-blue-800',
    low: 'bg-green-100 text-green-800'
  };

  if (!showQuiz && !showResults) {
    return (
      <section className="section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure What You <span className="gradient-text">Need?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take a quick quiz to get personalized recommendations
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Quiz →
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const groupedByTimeline = {
      'Immediate (This Week)': recommendations.filter(r => r.urgency === 'critical' || r.urgency === 'high'),
      'Within 1 Month': recommendations.filter(r => r.urgency === 'medium'),
      'Within 3 Months': recommendations.filter(r => r.urgency === 'low')
    };

    return (
      <section className="section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Personalized <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600">
              Based on your answers, here&apos;s what you need
            </p>
          </div>

          {Object.entries(groupedByTimeline).map(([timing, recs]) => 
            recs.length > 0 && (
              <div key={timing} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {timing}
                </h3>
                <div className="space-y-4">
                  {recs.map((rec, index) => (
                    <div
                      key={index}
                      className="card-premium"
                      style={{ borderLeft: `4px solid ${rec.urgency === 'critical' ? '#dc2626' : rec.urgency === 'high' ? '#f97316' : '#3b82f6'}` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold">{rec.service}</h4>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${urgencyColors[rec.urgency]}`}
                            >
                              {rec.urgency.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{rec.reason}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started on WhatsApp
            </a>
            <button
              onClick={() => {
                setShowResults(false);
                setShowQuiz(false);
                setAnswers({ timeline: '', revenue: '', employees: '', funding: '' });
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quick <span className="gradient-text">Assessment</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Answer a few questions to get a tailored registration roadmap
          </p>
        </div>

        <div className="card-premium">
          <div className="mb-10">
            <label className="block text-xl font-bold mb-4 text-gray-900">
              1. When do you plan to start operations?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['immediate', 'planning'].map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, timeline: option })}
                  className={`p-4 rounded-xl text-left transition-all ${
                    answers.timeline === option
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">
                    {option === 'immediate' ? 'This Week' : 'Planning Stage'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-xl font-bold mb-4 text-gray-900">
              2. Projected turnover range?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'under40', label: 'Below threshold' },
                { value: 'over40', label: 'Above threshold' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAnswers({ ...answers, revenue: option.value })}
                  className={`p-4 rounded-xl text-left transition-all ${
                    answers.revenue === option.value
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-xl font-bold mb-4 text-gray-900">
              3. Will you hire employees?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['yes', 'planning'].map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, employees: option })}
                  className={`p-4 rounded-xl text-left transition-all ${
                    answers.employees === option
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">
                    {option === 'yes' ? 'Yes' : 'Maybe Later'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-xl font-bold mb-4 text-gray-900">
              4. Need investor funding?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['yes', 'no'].map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, funding: option })}
                  className={`p-4 rounded-xl text-left transition-all ${
                    answers.funding === option
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold">
                    {option === 'yes' ? 'Yes' : 'Bootstrap'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (answers.timeline && answers.revenue && answers.employees && answers.funding) {
                setShowResults(true);
              }
            }}
            disabled={!answers.timeline || !answers.revenue || !answers.employees || !answers.funding}
            className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get My Recommendations →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DecisionQuiz;
