import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { VINYL_WRAP_SUBPRODUCTS, VINYL_WRAP_BENEFITS, VINYL_WRAP_APPLICATIONS, VINYL_WRAP_SURFACES } from '../data/vinylWrapProducts';
import SubProductCard from '../components/SubProductCard';
import SubProductModal from '../components/SubProductModal';
import ProductGallery from '../components/ProductGallery';
import BenefitIcon from '../components/BenefitIcon';
import { getVinylWrapImages, VINYL_WRAP_IMAGES, VINYL_WRAP_GALLERY_IMAGES } from '../utils/vinylWrapImages';
import { getAssetPath } from '../utils/paths';
import type { VinylWrapSubProduct } from '../data/vinylWrapProducts';

const VinylWrap: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubProduct, setSelectedSubProduct] = useState<VinylWrapSubProduct | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [rotationDelay, setRotationDelay] = useState(8000);

  const handleSubProductClick = (subProduct: VinylWrapSubProduct) => {
    setSelectedSubProduct(subProduct);
    setModalImages(getVinylWrapImages(subProduct.folderName));
  };

  const handleCloseModal = () => {
    setSelectedSubProduct(null);
    setModalImages([]);
  };

  const handleManualSectionChange = (index: number) => {
    setCurrentSection(index);
    setRotationDelay(20000); // Set to 20 seconds for manual selection
  };

  // Auto-rotate sections with dynamic delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3);
      setRotationDelay(8000); // Reset to 8 seconds after first rotation
    }, rotationDelay);
    return () => clearInterval(interval);
  }, [rotationDelay]);

  // Prepare gallery images
  const galleryImages = [
    ...VINYL_WRAP_GALLERY_IMAGES.basic.map(name => ({
      filename: `galery/${name}`,
      category: 'Basic'
    })),
    ...VINYL_WRAP_GALLERY_IMAGES.wood.map(name => ({
      filename: `galery/${name}`,
      category: 'Wood'
    })),
    ...VINYL_WRAP_GALLERY_IMAGES.natural.map(name => ({
      filename: `galery/${name}`,
      category: 'Natural'
    })),
    ...VINYL_WRAP_GALLERY_IMAGES.marble.map(name => ({
      filename: `galery/${name}`,
      category: 'Marble'
    })),
    ...VINYL_WRAP_GALLERY_IMAGES.beforeAfter.map(name => ({
      filename: `galery/${name}`,
      category: 'Before/After'
    }))
  ];

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
              Premium Vinyl Wrap Collection
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              ARCHITECTURAL INTERIOR FILM<br />
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              FOR WALLS, FURNITURE, ELEVATORS & MORE!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
            >
              Architectural vinyl film used to renovate and enhance the appearance of various surfaces within commercial and residential properties. The film comes in a wide range of patterns, colors, and textures, allowing creation of unique and visually appealing spaces.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VINYL_WRAP_SUBPRODUCTS.map((subProduct, index) => {
              const firstImage = VINYL_WRAP_IMAGES[subProduct.folderName]?.[0];
              const imagePath = firstImage
                ? getAssetPath(`/assets/Bodaq-Vinyl-Wap/${subProduct.folderName}/${firstImage}`)
                : getAssetPath('/assets/showroom-002.jpg');

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

            {/* About Bodaq - Hero Style Section with Background */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url("${getAssetPath('/assets/Bodaq-Vinyl-Wap/marble/Bodaq-Marble-5.jpg')}")`,
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
              About Our Vinyl Wrap
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="drop-shadow-lg"
              >
                Our vinyl wrap is a self-adhesive, stretchable architectural finish that allows you
                to refinish interior surfaces without replacing them. Trusted by interior
                designers, installers, and fabricators, it's applied directly to doors, walls, cabinets,
                furniture, and even ceilings.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="drop-shadow-lg"
              >
                Whether you want the look of natural wood, luxurious
                marble, or high-gloss metal, Bodaq offers a wide variety of patterns and textures.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Merged Benefits, Applications & Surfaces Section - Auto-Rotating */}
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
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4"
              >
                {currentSection === 0 && "Why Should I Choose Bodaq Interior Film?"}
                {currentSection === 1 && "Where Can Vinyl Film Be Used?"}
                {currentSection === 2 && "What Surfaces Can It Wrap?"}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Section Indicators */}
          <div className="flex justify-center gap-3 mb-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => handleManualSectionChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSection === index ? 'w-12 bg-gold' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>

          {/* Rotating Content */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              {/* Section 1: Benefits */}
              {currentSection === 0 && (
                <motion.div
                  key="benefits"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {VINYL_WRAP_BENEFITS.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className={`group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                          index === VINYL_WRAP_BENEFITS.length - 1 ? 'lg:col-start-2' : ''
                        }`}
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
              )}

              {/* Section 2: Applications */}
              {currentSection === 1 && (
                <motion.div
                  key="applications"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {VINYL_WRAP_APPLICATIONS.map((app, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
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
                            <BenefitIcon iconName={app.icon} size={20} className="text-gold" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 text-lg text-center leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                              {app.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Section 3: Surfaces */}
              {currentSection === 2 && (
                <motion.div
                  key="surfaces"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                      {VINYL_WRAP_SURFACES.map((surface, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          whileHover={{ y: -8, transition: { duration: 0.3 } }}
                          className={`group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                            index === VINYL_WRAP_SURFACES.length - 1 ? 'lg:col-start-2' : ''
                          }`}
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                              <BenefitIcon iconName={surface.icon} size={20} className="text-gold" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 text-lg text-center leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                                {surface.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="max-w-3xl mx-auto"
                    >
                      <p className="text-sm text-gray-600 italic bg-gold/5 p-5 rounded-lg border-l-4 border-gold text-center">
                        <strong>Note:</strong> Proper surface preparation is essential — sanding and priming may be required for best adhesion.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <ProductGallery
        title="Explore Our Gallery"
        subtitle="Browse our collection of photos, videos, and catalogues showcasing inspiring interior transformations"
        filters={['All', 'Basic', 'Wood', 'Natural', 'Marble', 'Before/After']}
        images={galleryImages}
        basePath={getAssetPath('/assets/Bodaq-Vinyl-Wap')}
      />

      {/* Sub-Product Modal */}
      <SubProductModal
        subProduct={selectedSubProduct}
        images={modalImages}
        onClose={handleCloseModal}
        productCategoryName="Premium Vinyl Wrap"
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
              Book a consultation with our experts to discuss your project and explore our Premium Vinyl Wrap collection.
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

export default VinylWrap;
