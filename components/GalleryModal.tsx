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
        className="fixed inset-0 z-[9999] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-black/90"
          onClick={onClose}
        ></div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full h-full z-[10000] flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[10001] p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <X size={28} />
          </button>

          {/* Full Image - No Padding */}
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
