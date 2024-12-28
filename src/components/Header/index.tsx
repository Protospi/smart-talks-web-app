import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { LanguageSelector } from './LanguageSelector';
import { AuthButtons } from './AuthButtons';
import { SupportedLocales } from '../../i18n/translations';

interface HeaderProps {
  onLanguageChange: (language: SupportedLocales) => void;
  currentLanguage: SupportedLocales;
}

export const Header: React.FC<HeaderProps> = ({ onLanguageChange, currentLanguage }) => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Navigation />
          <div className="flex items-center space-x-4">
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};