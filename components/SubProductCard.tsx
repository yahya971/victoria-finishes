import React from 'react';
import { motion } from 'framer-motion';
import { LiquidGlass } from '@liquidglass/react';

interface SubProduct {
  id: string;
  name: string;
  tagline: string;
  folderName: string;
}

interface SubProductCardProps {
  subProduct: SubProduct;
  index: number;
  onClick: () => void;
  firstImage: string;
}

const SubProductCard: React.FC<SubProductCardProps> = ({ subProduct, index, onClick, firstImage }) => {
  const imagePath = firstImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl"
      onClick={onClick}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gray-200">
        <img
          src={imagePath}
          alt={subProduct.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay Default */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60"></div>

      {/* Content with Glass Effect */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center z-10">
        <LiquidGlass className="w-full opacity-95 relative z-10">
          <div className="backdrop-blur-xl bg-white/25 border border-white/40 p-6 text-center transition-all duration-300 group-hover:bg-white/35">
            <h3 className="text-2xl font-serif font-bold text-white mb-2 drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {subProduct.name}
            </h3>

            <p className="text-white text-sm mb-0 transition-all duration-300 drop-shadow-md" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
              {subProduct.tagline}
            </p>

            <div className="mt-4 opacity-0 max-h-0 overflow-hidden translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0">
              <span className="inline-block px-6 py-2 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded">
                View Details
              </span>
            </div>
          </div>
        </LiquidGlass>
      </div>
    </motion.div>
  );
};

export default SubProductCard;
