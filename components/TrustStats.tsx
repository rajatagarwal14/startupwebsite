'use client';

import React, { useEffect, useState, useRef } from 'react';

const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + (end - start) * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration, start]);

  return { count, ref };
};

const stats = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    endVal: 5000,
    suffix: '+',
    label: 'Happy Clients',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    endVal: 49,
    suffix: '/5',
    label: 'Average Rating',
    gradient: 'from-yellow-500 to-orange-500',
    isDecimal: true
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    endVal: 100,
    suffix: '%',
    label: 'Online Process',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    endVal: 7,
    suffix: '-10 Days',
    label: 'Average Delivery',
    gradient: 'from-purple-500 to-pink-500'
  }
];

const TrustStats = () => {
  const counter0 = useCountUp(5000, 2500);
  const counter1 = useCountUp(49, 2000);
  const counter2 = useCountUp(100, 2000);
  const counter3 = useCountUp(7, 1500);
  const counters = [counter0, counter1, counter2, counter3];

  return (
    <section className="section bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join India&apos;s fastest-growing community of registered businesses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={counters[index].ref}
              className="card-premium text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {stat.isDecimal
                  ? `${(counters[index].count / 10).toFixed(1)}${stat.suffix}`
                  : `${counters[index].count.toLocaleString()}${stat.suffix}`
                }
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Certified Business Advisors</div>
              <div className="text-sm text-gray-600">Recognized by Ministry of Corporate Affairs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
