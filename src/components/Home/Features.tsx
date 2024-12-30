import React, { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, index }) => (
  <div 
    className="bg-gradient-to-br from-[#1a1b2e] to-[#2d2d4a] rounded-lg p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 translate-x-[-100px] data-[visible=true]:opacity-100 data-[visible=true]:translate-x-0"
    style={{
      transitionDelay: `${index * 100}ms`,
      transitionProperty: 'all',
      transitionDuration: '800ms',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }}
  >
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const intl = useIntl();
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('div[class*="bg-gradient"]').forEach((card) => {
              card.setAttribute('data-visible', 'true');
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: intl.formatMessage({ id: 'features.insights.title' }),
      description: intl.formatMessage({ id: 'features.insights.description' })
    },
    {
      title: intl.formatMessage({ id: 'features.management.title' }),
      description: intl.formatMessage({ id: 'features.management.description' })
    },
    {
      title: intl.formatMessage({ id: 'features.journey.title' }),
      description: intl.formatMessage({ id: 'features.journey.description' })
    },
    {
      title: intl.formatMessage({ id: 'features.security.title' }),
      description: intl.formatMessage({ id: 'features.security.description' })
    },
    {
      title: intl.formatMessage({ id: 'features.hybrid.title' }),
      description: intl.formatMessage({ id: 'features.hybrid.description' })
    },
    {
      title: intl.formatMessage({ id: 'features.resolution.title' }),
      description: intl.formatMessage({ id: 'features.resolution.description' })
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-purple-50 font-['Rubik'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {intl.formatMessage({ id: 'features.title' })}
            {' '}
            <span className="text-[#6366F1]">
              {intl.formatMessage({ id: 'features.titleHighlight' })}
            </span>
          </h2>
        </div>
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 