import React from 'react';
import { Hero } from './Hero';
import { Contact } from './Contact';
import { Info } from './Info';
import { Footer } from '../About/Footer';

export const ContactPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Info />
      <Contact />
      <Footer />
    </main>
  );
}; 