import React from 'react';
import { useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, isActive = false }) => (
  <div className={`rounded-lg p-12 transition-all ${
    isActive ? 'bg-[#8A6FF9]' : 'bg-[#1B1E32]'
  }`}>
    <div className="flex flex-col items-center">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
        isActive ? 'bg-white' : 'bg-[#8A6FF9]'
      }`}>
        {icon}
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-normal text-white mb-4">{title}</h3>
        <p className={`text-base leading-relaxed text-center ${isActive ? 'text-white' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const Values: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-24 bg-[#0A0B1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#8A6FF9] text-sm uppercase tracking-wider font-medium mb-4 block">
            {intl.formatMessage({ id: 'about.values.label' })}
          </span>
          <h2 className="text-white text-5xl font-bold mb-4">
            {intl.formatMessage({ id: 'about.values.title' })}{' '}
            <span className="text-[#8A6FF9] italic">
              {intl.formatMessage({ id: 'about.values.titleHighlight' })}
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            {intl.formatMessage({ id: 'about.values.subtitle' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={
              <FontAwesomeIcon 
                icon={faBullseye} 
                className="w-10 h-10 text-white" 
              />
            }
            title={intl.formatMessage({ id: 'about.values.mission.title' })}
            description={intl.formatMessage({ id: 'about.values.mission.description' })}
          />
          <ValueCard
            icon={
              <FontAwesomeIcon 
                icon={faLightbulb} 
                className="w-10 h-10 text-[#8A6FF9]"
              />
            }
            title={intl.formatMessage({ id: 'about.values.vision.title' })}
            description={intl.formatMessage({ id: 'about.values.vision.description' })}
            isActive={true}
          />
          <ValueCard
            icon={
              <FontAwesomeIcon 
                icon={faUsers} 
                className="w-10 h-10 text-white"
              />
            }
            title={intl.formatMessage({ id: 'about.values.values.title' })}
            description={intl.formatMessage({ id: 'about.values.values.description' })}
          />
        </div>
      </div>
    </section>
  );
}; 