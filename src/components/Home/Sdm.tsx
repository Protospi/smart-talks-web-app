import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

const AnimatedText: React.FC<{ 
  text: string;
  onComplete?: () => void;
  startAnimation: boolean;
  className?: string;
}> = ({ text, onComplete, startAnimation, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasCompleted, setHasCompleted] = useState(false);
  
  useEffect(() => {
    if (!startAnimation || hasCompleted) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setHasCompleted(true);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, startAnimation, onComplete, hasCompleted]);

  if (hasCompleted) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{displayedText}</span>;
};

interface SdmContentProps {
  title: string;
  description: string;
  items: string[];
  buttonLabel: string;
  className?: string;
  animated?: boolean;
}

const SdmContent: React.FC<SdmContentProps> = ({ 
  title, 
  description, 
  items, 
  buttonLabel, 
  className,
  animated = false
}) => {
  const [titleComplete, setTitleComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [itemsAnimationStarted, setItemsAnimationStarted] = useState(false);
  const [itemsComplete, setItemsComplete] = useState(false);

  useEffect(() => {
    if (descriptionComplete && !itemsAnimationStarted) {
      setItemsAnimationStarted(true);
    }
  }, [descriptionComplete, itemsAnimationStarted]);

  const handleAllItemsComplete = () => {
    if (!itemsComplete) {
      setItemsComplete(true);
    }
  };

  return (
    <div className={`max-w-xl ${className}`}>
      <h3 className="text-4xl font-bold mb-4 text-[#0A0A0F]">
        <span className="block min-h-[48px]">
          {animated ? (
            <AnimatedText 
              text={title} 
              onComplete={() => setTitleComplete(true)}
              startAnimation={true}
            />
          ) : title}
        </span>
      </h3>
      <p className="text-gray-600 mb-6">
        <span className="block min-h-[48px]">
          {animated ? (
            <AnimatedText 
              text={description}
              onComplete={() => setDescriptionComplete(true)}
              startAnimation={titleComplete}
            />
          ) : description}
        </span>
      </p>
      <ul className={`space-y-3 mb-8 min-h-[120px] transition-opacity duration-300 ${
        animated && !descriptionComplete ? 'opacity-0' : 'opacity-100'
      }`}>
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-[#6764F2] mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
            </svg>
            <AnimatedText 
              text={item}
              onComplete={index === items.length - 1 ? handleAllItemsComplete : undefined}
              startAnimation={itemsAnimationStarted}
            />
          </li>
        ))}
      </ul>
      <div className={`transition-opacity duration-300 ${
        animated && !itemsComplete ? 'opacity-0' : 'opacity-100'
      }`}>
        <button className="bg-[#6764F2] text-white px-8 py-3 rounded-lg hover:bg-[#5558E6] transition-colors">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export const Sdm: React.FC = () => {
  const intl = useIntl();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <SdmContent
            title={intl.formatMessage({ id: 'sdm.title' })}
            description={intl.formatMessage({ id: 'sdm.description' })}
            items={[
              intl.formatMessage({ id: 'sdm.item1' }),
              intl.formatMessage({ id: 'sdm.item2' }),
              intl.formatMessage({ id: 'sdm.item3' })
            ]}
            buttonLabel={intl.formatMessage({ id: 'sdm.button' })}
            animated={true}
          />
          <div className="bg-[#F8F9FF] h-[561px] w-[698px] flex items-center justify-center rounded-lg">
            <span className="text-gray-400">698 X 561</span>
          </div>
        </div>
      </div>
    </section>
  );
}; 