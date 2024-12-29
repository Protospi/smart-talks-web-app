import React from 'react';
import { Hero } from './Hero';
import { Services } from '../Home/Services';
import { Footer } from '../About/Footer';

export const SolutionsPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}; 