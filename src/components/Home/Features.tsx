import React from 'react';
import { useIntl } from 'react-intl';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-[#0A0A0F] rounded-lg p-6 text-white">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const intl = useIntl();

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
    <section className="py-16 bg-gray-200">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 