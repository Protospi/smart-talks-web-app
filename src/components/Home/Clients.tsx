import React from 'react';
import { useIntl } from 'react-intl';

export const Clients: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0B1A] via-[#141B3D] to-[#0A0B1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            {intl.formatMessage({ id: 'clients.title' })}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-16">
              {[...Array(18)].map((_, index) => (
                <div
                  key={index}
                  className="flex-none w-[200px] flex items-center justify-center"
                >
                  <img
                    src={`/clients/${String(index + 1).padStart(2, '0')}.png`}
                    alt="Client logo"
                    className="h-30 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-16">
              {[...Array(18)].map((_, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-none w-[200px] flex items-center justify-center"
                >
                  <img
                    src={`/clients/${String(index + 1).padStart(2, '0')}.png`}
                    alt="Client logo"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 