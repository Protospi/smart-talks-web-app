import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Values } from './Values';
import { Ceo } from './Ceo';
import { Footer } from './Footer';
export const AboutPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Values />
      <Ceo />
      <Footer />
    </main>
  );
}; 