import React from 'react';
import { useIntl } from 'react-intl';

export const Ceo: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/cla.png"
              alt="CEO SmartTalks.ai"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <span className="text-[#8A6FF9] text-sm uppercase tracking-wider font-medium">
              {intl.formatMessage({ id: 'about.ceo.label' })}
            </span>
            <h2 className="text-5xl font-bold text-gray-900">
              {intl.formatMessage({ id: 'about.ceo.title' })}{' '}
              <span className="text-[#8A6FF9]">
                {intl.formatMessage({ id: 'about.ceo.titleHighlight' })}
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                {intl.formatMessage({ id: 'about.ceo.description1' })}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {intl.formatMessage({ id: 'about.ceo.description2' })}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {intl.formatMessage({ id: 'about.ceo.description3' })}
              </p>
            </div>
            <div className="pt-4">
              <p className="text-xl font-semibold text-gray-900">
                {intl.formatMessage({ id: 'about.ceo.name' })}
              </p>
              <p className="text-gray-600">
                {intl.formatMessage({ id: 'about.ceo.role' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 