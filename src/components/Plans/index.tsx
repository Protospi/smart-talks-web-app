import React from 'react';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { Prices } from './Prices';
export const PlansPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Prices />
      <Footer />
    </main>
  );
}; 