import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductModal from './ProductModal';
import { LiquidGlass } from '@liquidglass/react';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold text-sm font-bold tracking-[0.25em] uppercase mb-5">
            Our Products
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4 leading-tight">
            Creative Solutions <br /> & Modern Touch
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Default */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40"></div>

              {/* Content with Glass Effect */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center z-10">
                <LiquidGlass className="w-full opacity-90 relative z-10">
                  <div className="backdrop-blur-xl bg-black/40 border border-white/20 p-6 md:p-8 rounded-xl shadow-2xl text-center">
                    {/* Title - Large by default, smaller on hover with scale */}
                    <h3 className="text-white font-serif font-bold leading-tight drop-shadow-lg text-3xl md:text-4xl transform scale-100 group-hover:scale-[0.6] transition-transform duration-500 ease-in-out origin-center">
                      {product.title}
                    </h3>

                    {/* Subtitle - Slides up and fades in on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                      <p className="text-white/90 text-base md:text-lg mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* View Details - Slides up and fades in on hover with delay */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500 ease-in-out delay-75">
                      <div className="flex items-center justify-center gap-2 text-gold text-sm md:text-base font-semibold uppercase tracking-wider mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-75">
                        View Details <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default Products;