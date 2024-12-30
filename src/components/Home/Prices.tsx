import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

export const Prices: React.FC = () => {
  const intl = useIntl();
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = intl.formatMessage({ id: 'prices.title' });

  useEffect(() => {
    setDisplayedTitle(''); // Reset title when language changes
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < fullTitle.length) {
          setDisplayedTitle(prev => prev + fullTitle[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100); // Adjust speed of animation here

      return () => clearInterval(intervalId);
    }, 500); // Small delay before starting animation

    return () => clearTimeout(timeout);
  }, [fullTitle]);

  // Function to highlight specific words based on language
  const highlightWord = (text: string) => {
    const currentLocale = intl.locale;
    const wordToHighlight = {
      'en-US': 'plans',
      'pt-BR': 'planos',
      'es-ES': 'planes'
    }[currentLocale] || 'plans';

    // Make the regex case insensitive and handle word boundaries
    const regex = new RegExp(`\\b(${wordToHighlight})\\b`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      // Check if this part matches our word (case insensitive)
      if (part.toLowerCase() === wordToHighlight.toLowerCase()) {
        return <span key={index} className="text-[#6764F2]">{part}</span>;
      }
      return part;
    });
  };

  // Create an array of 4 identical professional plans
  const plans: Array<{
    title: string;
    price: number;
    period: string;
    wordLimit: string;
    features: string[];
  }> = Array(4).fill({
    title: 'Professional',
    price: 9,
    period: '/mo',
    wordLimit: '10,000',
    features: [
      'prices.features.wordLimit',
      'prices.features.basicTools',
      'prices.features.aiCopywriting',
      'prices.features.emailSupport',
      'prices.features.advanceTools',
    ],
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-3xl font-bold text-[#0A0B1A]">
            {highlightWord(displayedTitle)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-indigo-500 rounded-lg p-8 text-white flex flex-col"
            >
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-gray-200">
                Up to {plan.wordLimit} words {plan.period}
              </p>
              
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-200">{plan.period}</span>
              </div>
              
              <p className="text-sm text-gray-200">*Get Braine tailored</p>

              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature: string, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {intl.formatMessage({ id: feature })}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-white text-indigo-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                {intl.formatMessage({ id: 'prices.startTrial' })}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 