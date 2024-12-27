import React from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { SupportedLocales } from '../../i18n/translations';

interface LanguageOption {
  code: SupportedLocales;
  flagCode: string;
  label: string;
}

const languages: LanguageOption[] = [
  { code: 'en', flagCode: 'us', label: 'English' },
  { code: 'pt', flagCode: 'br', label: 'Português' },
  { code: 'es', flagCode: 'es', label: 'Español' },
];

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: SupportedLocales) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value as SupportedLocales)}
        className="appearance-none bg-transparent pr-8 pl-2 py-1 border border-gray-300 rounded-md"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="flex items-center gap-2">
            <span className={`fi fi-${lang.flagCode} mr-2`}></span>
            {lang.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <span className={`fi fi-${languages.find(l => l.code === currentLanguage)?.flagCode} text-lg`}></span>
      </div>
    </div>
  );
};