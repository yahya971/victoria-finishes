import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Showroom from '../components/Showroom';
import Gallery from '../components/Gallery';
import { useScrollToHash } from '../utils/useScrollToHash';

const HomePage: React.FC = () => {
  useScrollToHash(); // Handle hash scrolling

  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Showroom />
      <Gallery />
    </main>
  );
};

export default HomePage;
