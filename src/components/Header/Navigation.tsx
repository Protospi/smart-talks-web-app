import React, { useState } from 'react';
import { useIntl } from 'react-intl';

const navItems = ['Home', 'About', 'Products', 'Solutions', 'Cases', 'Plans', 'Contact'];

export const Navigation: React.FC = () => {
  const intl = useIntl();
  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = (item: string) => {
    setActiveItem(item);
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <button
          key={item}
          className={`text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-bold
            ${activeItem === item ? 'text-pink-500' : ''}`}
          onClick={() => handleClick(item)}
        >
          {intl.formatMessage({ id: `nav.${item.toLowerCase()}` })}
        </button>
      ))}
    </nav>
  );
};