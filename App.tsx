import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import ItalianDecorativePaint from './pages/ItalianDecorativePaint';
import VinylWrap from './pages/VinylWrap';

function App() {
  return (
    <div className="font-sans text-charcoal bg-white antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/italian-decorative-paint" element={<ItalianDecorativePaint />} />
        <Route path="/products/vinyl-wrap" element={<VinylWrap />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;