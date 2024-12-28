import React from 'react';
import { useIntl } from 'react-intl';

interface StatProps {
  value: string;
  label: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ value, label, description }) => (
  <div className="bg-[#6366F1] rounded-lg p-6 text-white">
    <div className="text-4xl font-bold mb-2">{value}</div>
    <div className="text-lg mb-2">{label}</div>
    <div className="text-sm text-white/70">{description}</div>
  </div>
);

export const BigNumbers: React.FC = () => {
  const intl = useIntl();

  const stats = [
    {
      value: '83%',
      labelId: 'bigNumbers.autoService',
      descriptionId: 'bigNumbers.autoServiceDesc'
    },
    {
      value: '54%',
      labelId: 'bigNumbers.afterHours',
      descriptionId: 'bigNumbers.afterHoursDesc'
    },
    {
      value: '67M',
      labelId: 'bigNumbers.messages',
      descriptionId: 'bigNumbers.messagesDesc'
    },
    {
      value: '+2M',
      labelId: 'bigNumbers.users',
      descriptionId: 'bigNumbers.usersDesc'
    },
    {
      value: '+8',
      labelId: 'bigNumbers.years',
      descriptionId: 'bigNumbers.yearsDesc'
    },
    {
      value: '+100K',
      labelId: 'bigNumbers.interactions',
      descriptionId: 'bigNumbers.interactionsDesc'
    }
  ];

  return (
    <section id="big-numbers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {intl.formatMessage({ id: 'bigNumbers.title' })}
          </h2>
          <p className="text-gray-600 text-lg">
            {intl.formatMessage({ id: 'bigNumbers.subtitle' })}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              value={stat.value}
              label={intl.formatMessage({ id: stat.labelId })}
              description={intl.formatMessage({ id: stat.descriptionId })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 