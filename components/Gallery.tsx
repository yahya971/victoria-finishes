import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { LiquidGlass } from '@liquidglass/react';
import GalleryModal from './GalleryModal';

const FILTERS = ['All', 'Residential', 'Commercial', 'BeforeAfter'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-gold text-sm font-bold tracking-[0.25em] uppercase mb-5">
            Gallery
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Where Materials <br /> Meet Craftsmanship
          </h2>
          <p className="text-gray-600 text-base md:text-lg">Explore our real projects and design inspirations.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-7 py-3 text-sm uppercase font-semibold tracking-wider transition-all rounded-lg ${
                filter === f
                  ? 'bg-charcoal text-white shadow-lg'
                  : 'bg-white text-gray-500 border-2 border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {f === 'BeforeAfter' ? 'Before & After' : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden cursor-pointer rounded-xl"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <LiquidGlass className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="w-full h-full flex items-center justify-center p-6 text-center backdrop-blur-2xl bg-black/50 border border-white/20">
                    <div>
                      <span className="text-white text-xs uppercase tracking-wider block mb-3 font-semibold drop-shadow-lg">{item.category}</span>
                      <h3 className="text-white font-serif text-2xl md:text-3xl font-bold drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                </LiquidGlass>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

export default Gallery;