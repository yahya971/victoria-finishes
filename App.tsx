import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Showroom from './components/Showroom';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-charcoal bg-white antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Showroom />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;