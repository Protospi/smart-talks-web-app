import React from 'react';
import { useIntl } from 'react-intl';

export const Integrations: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0B1A] via-[#141B3D] to-[#0A0B1A]">
      <div className="max-w-[300vw] mx-auto overflow-hidden relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            {intl.formatMessage({ id: 'integrations.title' })}
          </h2>
          <p className="mt-4 text-lg text-gray-300 whitespace-pre-line">
            {intl.formatMessage({ id: 'integrations.subtitle' })}
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16 shrink-0 pl-16">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="w-[200px] flex items-center justify-center"
                >
                  <img
                    src={`/integrations/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Integration logo ${index + 1}`}
                    className="h-30 w-auto rounded-md"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-16 shrink-0 pl-16">
              {[...Array(12)].map((_, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="w-[200px] flex items-center justify-center"
                >
                  <img
                    src={`/integrations/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Integration logo ${index + 1}`}
                    className="h-30 w-auto rounded-md"
                  />
                </div>
              ))}
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex space-x-16 shrink-0">
              {[...Array(12)].map((_, index) => (
                <div
                  key={`triplicate-${index}`}
                  className="w-[200px] flex items-center justify-center"
                >
                  <img
                    src={`/integrations/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Integration logo ${index + 1}`}
                    className="h-30 w-auto rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0A0B1A] via-transparent to-[#0A0B1A]"></div>
      </div>
    </section>
  );
}; 