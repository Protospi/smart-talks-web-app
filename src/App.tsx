import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Auth0Provider } from '@auth0/auth0-react';
import { Header } from './components/Header/index';
import { Home } from './components/Home';
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
        <div className="min-h-screen">
          <Header 
            onLanguageChange={(newLang: SupportedLocales) => setLanguage(newLang)} 
            currentLanguage={language} 
          />
          <main className="pt-24">
            <Home />
          </main>
        </div>
      </IntlProvider>
    </Auth0Provider>
  );
}

export default App;