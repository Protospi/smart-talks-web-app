import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

export const Hero: React.FC = () => {
  const intl = useIntl();
  const [currentHighlight, setCurrentHighlight] = useState(1);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedHighlight, setDisplayedHighlight] = useState('');
  const [isMainTitleDone, setIsMainTitleDone] = useState(false);

  useEffect(() => {
    const title = intl.formatMessage({ id: 'hero.title' });
    const highlight = intl.formatMessage({ id: `hero.titleHighlight${currentHighlight}` });
    let currentIndex = 0;
    let highlightIndex = 0;
    
    const typeTitle = () => {
      if (currentIndex <= title.length) {
        setDisplayedTitle(title.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex <= title.length) {
          setTimeout(typeTitle, 50);
        } else {
          setIsMainTitleDone(true);
          typeHighlight();
        }
      }
    };

    const typeHighlight = () => {
      if (highlightIndex <= highlight.length) {
        setDisplayedHighlight(highlight.slice(0, highlightIndex));
        highlightIndex++;
        if (highlightIndex <= highlight.length) {
          setTimeout(typeHighlight, 50);
        }
      }
    };

    const startTypingAnimation = () => {
      currentIndex = 0;
      highlightIndex = 0;
      setIsMainTitleDone(false);
      setDisplayedHighlight('');
      typeTitle();
    };

    startTypingAnimation();

    const interval = setInterval(() => {
      startTypingAnimation();
    }, 15000);

    return () => clearInterval(interval);
  }, [intl, currentHighlight]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((current) => (current % 3) + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNumbers = () => {
    const element = document.getElementById('big-numbers');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 md:py-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white flex flex-wrap min-h-[180px] sm:min-h-[216px] md:min-h-[280px]">
                <div className="flex flex-wrap w-full">
                  <span className="typing-effect min-w-[4ch]">
                    {displayedTitle}
                  </span>
                  <span className="relative whitespace-nowrap w-full -mt-1 sm:-mt-2 md:-mt-4">
                    <span className="relative z-10 text-[#6366F1] typing-effect">
                      {isMainTitleDone ? displayedHighlight : ''}
                    </span>
                  </span>
                </div>
              </h1>
              <p className="text-xl text-gray-400 max-w-[600px]">
                {intl.formatMessage({ id: 'hero.subtitle' })}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-hero">
                <span className="btn-wrap">
                  <span className="text-one">
                    {intl.formatMessage({ id: 'hero.tryNow' })}
                  </span>
                  <span className="text-two">
                    {intl.formatMessage({ id: 'hero.tryNow' })}
                  </span>
                </span>
              </button>
              <button 
                onClick={scrollToNumbers}
                className="btn-hero"
              >
                <span className="btn-wrap">
                  <span className="text-one">
                    <span className="inline-flex items-center">
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
                      <span>{intl.formatMessage({ id: 'hero.watchDemo' })}</span>
                    </span>
                  </span>
                  <span className="text-two">
                    <span className="inline-flex items-center">
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
                      <span>{intl.formatMessage({ id: 'hero.watchDemo' })}</span>
                    </span>
                  </span>
                </span>
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
              <div className="relative h-[500px] w-[500px]">
                <div className="absolute inset-0 rounded-full bg-[#6366F1]/20 z-0"></div>
                <img
                  src="/hero-image.png"
                  alt="Hero Image"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] object-contain contrast-125 brightness-110"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <button className="h-14 w-14 rounded-full bg-[#6366F1] flex items-center justify-center hover:bg-[#6366F1]/90 transition-all duration-300">
                    <svg 
                      className="h-7 w-7 text-white" 
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