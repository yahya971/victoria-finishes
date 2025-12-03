import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl max-h-[90vh] z-[10000]"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-[10001] p-2 bg-white/90 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Info Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl inline-block">
                <span className="text-gold text-xs uppercase tracking-wider block mb-2 font-semibold">
                  {item.category}
                </span>
                <h2 className="text-white font-serif text-3xl md:text-4xl font-bold">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
