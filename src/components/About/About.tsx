import React from 'react';
import { useIntl } from 'react-intl';

export const About: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="h-[600px] rounded-lg overflow-hidden bg-[#E8E9FF] flex items-center justify-center">
              <span className="text-[#8A6FF9] text-2xl">Placeholder Image</span>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <span className="text-[#8A6FF9] text-sm uppercase tracking-wider font-medium">
              {intl.formatMessage({ id: 'about.section.label' })}
            </span>
            <h2 className="text-[56px] leading-tight font-bold text-gray-200">
              {intl.formatMessage({ id: 'about.section.title' })}{' '}
              <span className="relative">
                <span className="relative z-10">
                  {intl.formatMessage({ id: 'about.section.titleHighlight' })}
                </span>
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#8A6FF9]"></span>
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                {intl.formatMessage({ id: 'about.section.description' })}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {intl.formatMessage({ id: 'about.section.description2' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 