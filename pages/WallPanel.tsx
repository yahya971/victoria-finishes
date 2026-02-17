import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { WALL_PANEL_SUBPRODUCTS, WALL_PANEL_BENEFITS } from '../data/wallPanelProducts';
import SubProductCard from '../components/SubProductCard';
import SubProductModal from '../components/SubProductModal';
import BenefitIcon from '../components/BenefitIcon';
import { getWallPanelImages, WALL_PANEL_IMAGES } from '../utils/wallPanelImages';
import { getAssetPath } from '../utils/paths';
import type { WallPanelSubProduct } from '../data/wallPanelProducts';

const WallPanel: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubProduct, setSelectedSubProduct] = useState<WallPanelSubProduct | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [rotationDelay, setRotationDelay] = useState(8000);

  const handleSubProductClick = (subProduct: WallPanelSubProduct) => {
    setSelectedSubProduct(subProduct);
    setModalImages(getWallPanelImages(subProduct.folderName));
  };

  const handleCloseModal = () => {
    setSelectedSubProduct(null);
    setModalImages([]);
  };

  const handleManualSectionChange = (index: number) => {
    setCurrentSection(index);
    setRotationDelay(20000); // Set to 20 seconds for manual selection
  };

  // Auto-rotate section (only 1 section for benefits)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 1);
      setRotationDelay(8000); // Reset to 8 seconds after first rotation
    }, rotationDelay);
    return () => clearInterval(interval);
  }, [rotationDelay]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sub-Products Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold text-lg font-bold tracking-[0.25em] uppercase mb-5"
            >
              Composite Material Collection
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              MODERN COMPOSITE PANELS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              FOR WALLS & INTERIOR DETAILS
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
            >
              Composite material solutions used to renovate and enhance interior surfaces with modern textures, decorative depth, and refined finishes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WALL_PANEL_SUBPRODUCTS.map((subProduct, index) => {
              const firstImage = WALL_PANEL_IMAGES[subProduct.folderName]?.[0];
              const imagePath = firstImage
                ? getAssetPath(`/assets/Wall-Panel/${subProduct.folderName}/${firstImage}`)
                : getAssetPath('/assets/showroom-004.jpg');

              return (
                <SubProductCard
                  key={subProduct.id}
                  subProduct={subProduct}
                  index={index}
                  onClick={() => handleSubProductClick(subProduct)}
                  firstImage={imagePath}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - Hero Style with Background */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url("${getAssetPath('/assets/Wall-Panel/PS-wall-panel/WallPanel-PS-5.jpg')}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              About Our Composite Material
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="drop-shadow-lg"
              >
                Our composite material solutions are designed to enhance interior spaces with modern textures, decorative depth, and refined finishes. Lightweight and easy to install, they provide an efficient way to upgrade walls, ceilings, and transitions without heavy renovation, making them ideal for both residential and commercial environments.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-3">
              Premium Quality
            </h3>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4"
            >
              Key Benefits
            </motion.h2>
          </motion.div>

          {/* Benefits Content */}
          <div className="relative min-h-[280px]">
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {WALL_PANEL_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                        <BenefitIcon iconName={benefit.icon} size={20} className="text-gold" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-lg text-center leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Product Modal */}
      <SubProductModal
        subProduct={selectedSubProduct}
        images={modalImages}
        onClose={handleCloseModal}
        productCategoryName="Modern Composite Panels"
      />

      {/* CTA Section */}
      <section className="py-20 bg-off-white">
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
              Book a consultation with our experts to discuss your project and explore our Composite Panel collection.
            </p>
            <button
              onClick={() => navigate('/#showroom')}
              className="bg-gold text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-colors rounded-lg shadow-lg"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WallPanel;
