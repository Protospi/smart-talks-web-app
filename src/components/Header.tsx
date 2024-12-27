import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SupportedLocales } from '../i18n/translations';
import { UserMenu } from './UserMenu';

interface HeaderProps {
  onLanguageChange: (lang: SupportedLocales) => void;
  currentLanguage: SupportedLocales;
}

export const Header: React.FC<HeaderProps> = ({ onLanguageChange, currentLanguage }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Your App Name</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={currentLanguage}
                onChange={(e) => onLanguageChange(e.target.value as SupportedLocales)}
                className="rounded-md border-gray-300"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>

              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};