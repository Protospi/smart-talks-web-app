import React from 'react';
import { Hero } from './Hero';
import { BigNumbers } from './BigNumbers';
import { Features } from './Features';
import { Services } from './Services';
import { Clients } from './Clients';
import { Modules } from './Modules';
import { Multichannel } from './Multichannel';
import { Sdm } from './Sdm';
import { Integrations } from './Integrations';
import { Prices } from './Prices';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BigNumbers />
      <Features />
      <Services />
      <Clients />
      <Modules />
      <Multichannel />
      <Sdm />
      <Integrations />
      <Prices />
      <Contact />
    </main>
  );
}; 