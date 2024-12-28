import React from 'react';
import { useIntl } from 'react-intl';

interface ServiceButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full transition-all ${
      isActive 
        ? 'bg-[#6764F2] text-white' 
        : 'bg-[#6366F11A] text-[#6764F2] hover:bg-[#6764F2] hover:text-white'
    }`}
  >
    {label}
  </button>
);

interface ServiceContentProps {
  number: string;
  title: string;
  description: string;
  items: string[];
  buttonLabel: string;
  className?: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ number, title, description, items, buttonLabel, className }) => (
  <div className={`max-w-xl ${className}`}>
    <div className="w-12 h-12 rounded-full bg-[#6764F2] text-white flex items-center justify-center mb-6">
      {number}
    </div>
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

export const Services: React.FC = () => {
  const intl = useIntl();
  const [activeService, setActiveService] = React.useState('franquia');

  const services = [
    {
      id: 'hotelaria',
      label: intl.formatMessage({ id: 'services.buttons.hotels' })
    },
    {
      id: 'entretenimento',
      label: intl.formatMessage({ id: 'services.buttons.entertainment' })
    },
    {
      id: 'franquia',
      label: intl.formatMessage({ id: 'services.buttons.franchise' })
    },
    {
      id: 'viagens',
      label: intl.formatMessage({ id: 'services.buttons.travel' })
    },
    {
      id: 'educacao',
      label: intl.formatMessage({ id: 'services.buttons.education' })
    },
    {
      id: 'seguros',
      label: intl.formatMessage({ id: 'services.buttons.insurance' })
    },
    {
      id: 'saude',
      label: intl.formatMessage({ id: 'services.buttons.health' })
    }
  ];

  const getServiceContent = (serviceId: string) => {
    switch (serviceId) {
      case 'hotelaria':
        return {
          number: "01",
          title: intl.formatMessage({ id: 'services.hotels.title' }),
          description: intl.formatMessage({ id: 'services.hotels.description' }),
          items: [
            intl.formatMessage({ id: 'services.hotels.item1' }),
            intl.formatMessage({ id: 'services.hotels.item2' }),
            intl.formatMessage({ id: 'services.hotels.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.hotels.button' })
        };
      case 'entretenimento':
        return {
          number: "02",
          title: intl.formatMessage({ id: 'services.entertainment.title' }),
          description: intl.formatMessage({ id: 'services.entertainment.description' }),
          items: [
            intl.formatMessage({ id: 'services.entertainment.item1' }),
            intl.formatMessage({ id: 'services.entertainment.item2' }),
            intl.formatMessage({ id: 'services.entertainment.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.entertainment.button' })
        };
      case 'franquia':
        return {
          number: "03",
          title: intl.formatMessage({ id: 'services.franchise.title' }),
          description: intl.formatMessage({ id: 'services.franchise.description' }),
          items: [
            intl.formatMessage({ id: 'services.franchise.item1' }),
            intl.formatMessage({ id: 'services.franchise.item2' }),
            intl.formatMessage({ id: 'services.franchise.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.franchise.button' })
        };
      case 'viagens':
        return {
          number: "04",
          title: intl.formatMessage({ id: 'services.travel.title' }),
          description: intl.formatMessage({ id: 'services.travel.description' }),
          items: [
            intl.formatMessage({ id: 'services.travel.item1' }),
            intl.formatMessage({ id: 'services.travel.item2' }),
            intl.formatMessage({ id: 'services.travel.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.travel.button' })
        };
      case 'educacao':
        return {
          number: "05",
          title: intl.formatMessage({ id: 'services.education.title' }),
          description: intl.formatMessage({ id: 'services.education.description' }),
          items: [
            intl.formatMessage({ id: 'services.education.item1' }),
            intl.formatMessage({ id: 'services.education.item2' }),
            intl.formatMessage({ id: 'services.education.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.education.button' })
        };
      case 'seguros':
        return {
          number: "06",
          title: intl.formatMessage({ id: 'services.insurance.title' }),
          description: intl.formatMessage({ id: 'services.insurance.description' }),
          items: [
            intl.formatMessage({ id: 'services.insurance.item1' }),
            intl.formatMessage({ id: 'services.insurance.item2' }),
            intl.formatMessage({ id: 'services.insurance.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.insurance.button' })
        };
      case 'saude':
        return {
          number: "07",
          title: intl.formatMessage({ id: 'services.health.title' }),
          description: intl.formatMessage({ id: 'services.health.description' }),
          items: [
            intl.formatMessage({ id: 'services.health.item1' }),
            intl.formatMessage({ id: 'services.health.item2' }),
            intl.formatMessage({ id: 'services.health.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.health.button' })
        };
      default:
        return {
          number: "01",
          title: intl.formatMessage({ id: 'services.hotels.title' }),
          description: intl.formatMessage({ id: 'services.hotels.description' }),
          items: [
            intl.formatMessage({ id: 'services.hotels.item1' }),
            intl.formatMessage({ id: 'services.hotels.item2' }),
            intl.formatMessage({ id: 'services.hotels.item3' })
          ],
          buttonLabel: intl.formatMessage({ id: 'services.hotels.button' })
        };
    }
  };

  const currentService = getServiceContent(activeService);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0A0F] mb-4">
            {intl.formatMessage({ id: 'services.title' })}{' '}
            <span className="text-[#6764F2]">
              {intl.formatMessage({ id: 'services.titleHighlight' })}
            </span>
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {services.map((service) => (
            <ServiceButton
              key={service.id}
              label={service.label}
              isActive={activeService === service.id}
              onClick={() => setActiveService(service.id)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#F8F9FF] h-[564px] w-[592px] flex items-center justify-center rounded-lg order-2 md:order-1">
            <span className="text-gray-400">564 X 592</span>
          </div>
          <ServiceContent
            number={currentService.number}
            title={currentService.title}
            description={currentService.description}
            items={currentService.items}
            buttonLabel={currentService.buttonLabel}
            className="order-1 md:order-2"
          />
        </div>
      </div>
    </section>
  );
}; 