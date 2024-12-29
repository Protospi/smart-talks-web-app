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
        className={`text-sm font-bold transition-colors ${
          isActive('/') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.home' })}
      </Link>
      <Link
        to="/about"
        className={`text-sm font-bold transition-colors ${
          isActive('/about') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.about' })}
      </Link>
      <Link
        to="/products"
        className={`text-sm font-bold transition-colors ${
          isActive('/products') ? 'text-[#8A6FF9]' : 'text-black hover:text-[#8A6FF9]'
        }`}
      >
        {intl.formatMessage({ id: 'nav.products' })}
      </Link>
      <a href="#" className="text-sm font-bold text-black hover:text-[#8A6FF9] transition-colors">
        {intl.formatMessage({ id: 'nav.solutions' })}
      </a>
      <a href="#" className="text-sm font-bold text-black hover:text-[#8A6FF9] transition-colors">
        {intl.formatMessage({ id: 'nav.cases' })}
      </a>
      <a href="#" className="text-sm font-bold text-black hover:text-[#8A6FF9] transition-colors">
        {intl.formatMessage({ id: 'nav.plans' })}
      </a>
      <a href="#" className="text-sm font-bold text-black hover:text-[#8A6FF9] transition-colors">
        {intl.formatMessage({ id: 'nav.contact' })}
      </a>
    </nav>
  );
}