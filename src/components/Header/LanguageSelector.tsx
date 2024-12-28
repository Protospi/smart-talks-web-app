import React, { useState, useRef, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentFlag = languages.find(l => l.code === currentLanguage)?.flagCode;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
      >
        <span className={`fi fi-${currentFlag} text-lg`}></span>
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#6366F1] ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white hover:bg-indigo-700 flex items-center gap-3"
              >
                <span className={`fi fi-${lang.flagCode} text-lg`}></span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};