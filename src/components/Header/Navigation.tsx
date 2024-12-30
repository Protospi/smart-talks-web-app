import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const intl = useIntl();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link
        to="/"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.home' })}
      </Link>
      <Link
        to="/about"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/about') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.about' })}
      </Link>
      <Link
        to="/products"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/products') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.products' })}
      </Link>
      <Link
        to="/solutions"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/solutions') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.solutions' })}
      </Link>
      <Link
        to="/cases"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/cases') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.cases' })}
      </Link>
      <Link
        to="/plans"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/plans') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.plans' })}
      </Link>
      <Link
        to="/contact"
        className={`text-base font-bold font-rubik transition-colors ${
          isActive('/contact') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.contact' })}
      </Link>
    </nav>
  );
}