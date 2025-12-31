import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ITALIAN_PAINT_SUBPRODUCTS } from '../data/italianPaintProducts';
import SubProductCard from '../components/SubProductCard';
import SubProductModal from '../components/SubProductModal';
import ItalianPaintGallery from '../components/ItalianPaintGallery';
import { getSubProductImages } from '../utils/italianPaintImages';
import type { ItalianPaintSubProduct } from '../data/italianPaintProducts';

const ItalianDecorativePaint: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubProduct, setSelectedSubProduct] = useState<ItalianPaintSubProduct | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const handleSubProductClick = (subProduct: ItalianPaintSubProduct) => {
    setSelectedSubProduct(subProduct);
    setModalImages(getSubProductImages(subProduct.folderName));
  };

  const handleCloseModal = () => {
    setSelectedSubProduct(null);
    setModalImages([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}


      {/* Sub-Products Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-gold text-lg font-bold tracking-[0.25em] uppercase mb-5">
              Italian Decorative Paint Collection
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight">
              DECORATIVE ITALIAN FINISHES<br /></h2> <h3 className="text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-charcoal mb-4 leading-tight">FOR REFINED INTERIOR WALLS</h3>
            
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Explore our premium collection of Italian decorative paints featuring unique textures, elegant finishes, and sophisticated effects for modern interiors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ITALIAN_PAINT_SUBPRODUCTS.map((subProduct, index) => (
              <SubProductCard
                key={subProduct.id}
                subProduct={subProduct}
                index={index}
                onClick={() => handleSubProductClick(subProduct)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ItalianPaintGallery />

      {/* Sub-Product Modal */}
      <SubProductModal
        subProduct={selectedSubProduct}
        images={modalImages}
        onClose={handleCloseModal}
      />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-charcoal"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Book a consultation with our experts to discuss your project and explore our Italian Decorative Paint collection.
            </p>
            <button
              onClick={() => navigate('/#showroom')}
              className="bg-gold text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-colors rounded-lg shadow-lg"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ItalianDecorativePaint;
