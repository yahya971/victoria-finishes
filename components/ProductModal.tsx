import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row z-[10000] rounded-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[10001] p-2 bg-white/80 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <X size={24} />
          </button>

          {/* Image Side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col justify-center">
            <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
              Product Details
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
              {product.title}
            </h2>
            <h3 className="text-lg text-gray-500 mb-6">
              {product.subtitle}
            </h3>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6">
              {product.subProducts && (
                <div>
                  <h5 className="font-serif font-bold text-charcoal mb-3 text-sm uppercase">Available Collections</h5>
                  <div className="flex flex-wrap gap-2">
                    {product.subProducts.map((sub, index) => (
                      <span key={index} className="px-3 py-1 bg-off-white text-gray-600 text-xs uppercase tracking-wide border border-gray-100">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h5 className="font-serif font-bold text-charcoal mb-3 text-sm uppercase">Key Advantages</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100">
               <a
                href="#showroom"
                onClick={onClose}
                className="inline-block w-full text-center bg-charcoal text-white py-4 font-semibold uppercase tracking-wider text-sm hover:bg-gold transition-colors rounded-lg shadow-md"
              >
                Book Consultation for this Product
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;