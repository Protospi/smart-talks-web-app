import React from 'react';
import { useIntl } from 'react-intl';

export const Hero: React.FC = () => {
  const intl = useIntl();
  
  const scrollToNumbers = () => {
    const element = document.getElementById('big-numbers');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 md:py-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {intl.formatMessage({ id: 'hero.title' })}{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-[#6366F1]">
                    {intl.formatMessage({ id: 'hero.titleHighlight' })}
                  </span>
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-[600px]">
                {intl.formatMessage({ id: 'hero.subtitle' })}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-white bg-[#6366F1] rounded-lg hover:bg-[#6366F1]/90 transition-all duration-300">
                {intl.formatMessage({ id: 'hero.tryNow' })}
              </button>
              <button 
                onClick={scrollToNumbers}
                className="inline-flex items-center px-8 py-4 text-white rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <svg 
                  className="mr-2 h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                {intl.formatMessage({ id: 'hero.watchDemo' })}
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center space-x-2">
                  <svg 
                    className="h-5 w-5 text-[#6366F1]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-gray-300">
                    {intl.formatMessage({ id: `hero.feature${num}` })}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative h-[600px] w-[600px]">
                <div className="absolute inset-0 rounded-full bg-[#6366F1]/20 z-0"></div>
                <img
                  src="/hero-image.png"
                  alt="Hero Image"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] object-contain contrast-125 brightness-110"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <button className="h-16 w-16 rounded-full bg-[#6366F1] flex items-center justify-center hover:bg-[#6366F1]/90 transition-all duration-300">
                    <svg 
                      className="h-8 w-8 text-white" 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 