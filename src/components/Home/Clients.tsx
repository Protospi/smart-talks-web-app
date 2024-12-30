import React from 'react';
import { useIntl } from 'react-intl';

export const Clients: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0B1A] via-[#141B3D] to-[#0A0B1A] relative">
      <div className="max-w-[300vw] mx-auto overflow-hidden relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            {intl.formatMessage({ id: 'clients.title' })}
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-12 shrink-0">
              {[...Array(18)].map((_, index) => (
                <div
                  key={index}
                  className="w-[240px] flex items-center justify-center"
                >
                  <img
                    src={`/clients/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Client logo ${index + 1}`}
                    className="h-36 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:[filter:invert(37%)_sepia(74%)_saturate(1090%)_hue-rotate(222deg)_brightness(101%)_contrast(96%)]"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-12 shrink-0">
              {[...Array(18)].map((_, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="w-[240px] flex items-center justify-center"
                >
                  <img
                    src={`/clients/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Client logo ${index + 1}`}
                    className="h-36 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:[filter:invert(37%)_sepia(74%)_saturate(1090%)_hue-rotate(222deg)_brightness(101%)_contrast(96%)]"
                  />
                </div>
              ))}
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex space-x-12 shrink-0">
              {[...Array(18)].map((_, index) => (
                <div
                  key={`triplicate-${index}`}
                  className="w-[240px] flex items-center justify-center"
                >
                  <img
                    src={`/clients/${String(index + 1).padStart(2, '0')}.png`}
                    alt={`Client logo ${index + 1}`}
                    className="h-36 w-auto opacity-70 hover:opacity-100 transition-all duration-300 hover:[filter:invert(37%)_sepia(74%)_saturate(1090%)_hue-rotate(222deg)_brightness(101%)_contrast(96%)]"
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