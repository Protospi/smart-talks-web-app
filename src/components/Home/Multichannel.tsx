import React from 'react';
import { useIntl } from 'react-intl';

interface MultichannelContentProps {
  title: string;
  description: string;
  items: string[];
  buttonLabel: string;
  className?: string;
}

const MultichannelContent: React.FC<MultichannelContentProps> = ({ 
  title, 
  description, 
  items, 
  buttonLabel, 
  className 
}) => (
  <div className={`max-w-xl pl-12 ${className}`}>
    <h3 className="text-4xl font-bold mb-4 text-[#0A0A0F]">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 mb-8">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <svg className="w-5 h-5 text-[#6764F2] mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
          </svg>
          {item}
        </li>
      ))}
    </ul>
    <button className="bg-[#6764F2] text-white px-8 py-3 rounded-lg hover:bg-[#5558E6] transition-colors">
      {buttonLabel}
    </button>
  </div>
);

export const Multichannel: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="bg-[#F8F9FF] h-[561px] w-[698px] flex items-center justify-center rounded-lg">
            <span className="text-gray-400">698 X 561</span>
          </div>
          <MultichannelContent
            title={intl.formatMessage({ id: 'multichannel.title' })}
            description={intl.formatMessage({ id: 'multichannel.description' })}
            items={[
              intl.formatMessage({ id: 'multichannel.item1' }),
              intl.formatMessage({ id: 'multichannel.item2' }),
              intl.formatMessage({ id: 'multichannel.item3' })
            ]}
            buttonLabel={intl.formatMessage({ id: 'multichannel.button' })}
          />
        </div>
      </div>
    </section>
  );
}; 