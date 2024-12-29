import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="relative w-full pt-24">
      <div className="w-full h-[400px] bg-gradient-to-b from-[#E8E9FF] via-[#E6E7FF] to-[#F1F1FF]">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">
            {intl.formatMessage({ id: 'about.hero.label' })}
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {intl.formatMessage({ id: 'nav.home' })}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#8A6FF9]">
              {intl.formatMessage({ id: 'nav.about' })}
            </span>
          </div>
        </div>
      </div>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E9FF]/50 to-[#F5F5FF]/50 pointer-events-none"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#8A6FF9]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#8A6FF9]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}; 