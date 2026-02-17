import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import ItalianDecorativePaint from './pages/ItalianDecorativePaint';
import VinylWrap from './pages/VinylWrap';
import WallPanel from './pages/WallPanel';
import SoundproofPanel from './pages/SoundproofPanel';
import WaterproofPanel from './pages/WaterproofPanel';
import CompositeDecking from './pages/CompositeDecking';
import CompositeSiding from './pages/CompositeSiding';

function App() {
  return (
    <div className="font-sans text-charcoal bg-white antialiased selection:bg-gold selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/italian-decorative-paint" element={<ItalianDecorativePaint />} />
        <Route path="/products/vinyl-wrap" element={<VinylWrap />} />
        <Route path="/products/modern-wall-panel" element={<WallPanel />} />
        <Route path="/products/soundproof-panel" element={<SoundproofPanel />} />
        <Route path="/products/waterproof-panel" element={<WaterproofPanel />} />
        <Route path="/products/composite-decking" element={<CompositeDecking />} />
        <Route path="/products/composite-siding" element={<CompositeSiding />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;