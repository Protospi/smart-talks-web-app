import React from 'react';
import { useIntl } from 'react-intl';

const navItems = ['Home', 'About', 'Products', 'Solutions', 'Cases', 'Plans', 'Contact'];

export const Navigation: React.FC = () => {
  const intl = useIntl();

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
        >
          {intl.formatMessage({ id: `nav.${item.toLowerCase()}` })}
        </a>
      ))}
    </nav>
  );
};