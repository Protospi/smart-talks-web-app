import React from 'react';
import { Hero } from './Hero';
import { BigNumbers } from './BigNumbers';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BigNumbers />
    </main>
  );
}; 