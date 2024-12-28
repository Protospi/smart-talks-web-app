import React from 'react';
import { Hero } from './Hero';
import { BigNumbers } from './BigNumbers';
import { Features } from './Features';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BigNumbers />
      <Features />
    </main>
  );
}; 