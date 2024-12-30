import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';

const useCountAnimation = (endValue: string, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const countRef = useRef({ start: 0, end: 0, prefix: '', suffix: '' });

  useEffect(() => {
    const matches = endValue.match(/([+-])?(\d+)([KM%])?/);
    if (!matches) return;

    const prefix = matches[1] || '';
    const numberValue = parseInt(matches[2]);
    const suffix = matches[3] || '';

    countRef.current = {
      start: 0,
      end: numberValue,
      prefix,
      suffix,
    };

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = numberValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCount(numberValue);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return { 
    numericValue: count,
    prefix: countRef.current.prefix,
    suffix: countRef.current.suffix,
    isAnimating 
  };
};

interface StatProps {
  value: string;
  label: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ value, label, description }) => {
  const { numericValue, prefix, suffix, isAnimating } = useCountAnimation(value);
  
  return (
    <div className="bg-[#6366F1] rounded-lg p-6 text-white">
      <div className="text-4xl font-bold mb-2 relative">
        <div className={`relative inline-flex items-start ${prefix === '+' ? 'ml-5' : ''}`}>
          {prefix && (
            <span className="absolute top-1.5 -left-5 text-2xl">
              {prefix}
            </span>
          )}
          
          <div className="relative h-[3.5rem] overflow-hidden">
            <span 
              className={`inline-block transition-transform duration-1000 ${
                isAnimating ? 'animate-slot-machine' : ''
              }`}
            >
              {numericValue}
            </span>
          </div>

          {suffix && (
            <span className="ml-1">
              {suffix}
            </span>
          )}
        </div>
      </div>
      <div className="text-lg mb-2">{label}</div>
      <div className="text-sm text-white/70">{description}</div>
    </div>
  );
};

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