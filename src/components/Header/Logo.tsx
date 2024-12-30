import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.svg" alt="Logo" className="h-10" />
    </Link>
  );
};