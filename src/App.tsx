import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Home } from './components/Home';
import { AboutPage as About } from './components/About';
import ScrollProgress from './components/ScrollProgress';
import { messages, SupportedLocales } from './i18n/translations';
import { auth0Config } from './config/auth';
import { ProductsPage as Products } from './components/Products';
import { SolutionsPage as Solutions } from './components/Solutions';
import { CasesPage as Cases } from './components/Cases';
import { PlansPage as Plans } from './components/Plans';
import { ContactPage as Contact } from './components/Contact';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBullseye, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faBullseye, faLightbulb, faUsers);

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
        <BrowserRouter>
          <div className="min-h-screen">
            <Header 
              onLanguageChange={(newLang: SupportedLocales) => setLanguage(newLang)} 
              currentLanguage={language} 
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <ScrollProgress />
          </div>
        </BrowserRouter>
      </IntlProvider>
    </Auth0Provider>
  );
}

export default App;