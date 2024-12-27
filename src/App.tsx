import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Auth0Provider } from '@auth0/auth0-react';
import { Header } from './components/Header/index';
import { messages, SupportedLocales } from './i18n/translations';
import { auth0Config } from './config/auth';

function App() {
  const [language, setLanguage] = useState<SupportedLocales>('en');

  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        scope: "openid profile email"
      }}
    >
      <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
        <div className="min-h-screen bg-gray-50">
          <Header 
            onLanguageChange={(newLang: SupportedLocales) => setLanguage(newLang)} 
            currentLanguage={language} 
          />
          <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">
                  {messages[language]['hero.title']}
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {messages[language]['hero.subtitle']}
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {messages[language]['hero.cta']}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </IntlProvider>
    </Auth0Provider>
  );
}

export default App;