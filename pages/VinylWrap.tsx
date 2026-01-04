import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Shield } from 'lucide-react';
import { VINYL_WRAP_SUBPRODUCTS, VINYL_WRAP_BENEFITS, VINYL_WRAP_APPLICATIONS, VINYL_WRAP_SURFACES } from '../data/vinylWrapProducts';
import SubProductCard from '../components/SubProductCard';
import SubProductModal from '../components/SubProductModal';
import ProductGallery from '../components/ProductGallery';
import { getVinylWrapImages, VINYL_WRAP_IMAGES, VINYL_WRAP_GALLERY_IMAGES } from '../utils/vinylWrapImages';
import { getAssetPath } from '../utils/paths';
import type { VinylWrapSubProduct } from '../data/vinylWrapProducts';

const VinylWrap: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSubProduct, setSelectedSubProduct] = useState<VinylWrapSubProduct | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const handleSubProductClick = (subProduct: VinylWrapSubProduct) => {
    setSelectedSubProduct(subProduct);
    setModalImages(getVinylWrapImages(subProduct.folderName));
  };

  const handleCloseModal = () => {
    setSelectedSubProduct(null);
    setModalImages([]);
  };

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
              FOR WALLS, FURNITURE & MORE
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
            >
              Architectural vinyl film used to renovate and enhance the appearance of various surfaces within commercial and residential properties.
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
              About Bodaq Interior Film
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="drop-shadow-lg"
              >
                Bodaq Interior Film is a self-adhesive, stretchable architectural finish that allows you
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

      {/* Applications & Surfaces Section - Modern Split Design */}
      <section className="py-20 bg-off-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
                    Where Can Bodaq<br />Film Be Used?
                  </h3>
                  <div className="w-20 h-1 bg-gold mb-8"></div>

                  <div className="space-y-3">
                    {VINYL_WRAP_APPLICATIONS.map((app, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                          <CheckCircle2 size={18} className="text-gold group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 text-lg group-hover:text-charcoal transition-colors duration-300">{app}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Surfaces */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
                    What Surfaces<br />Can It Wrap?
                  </h3>
                  <div className="w-20 h-1 bg-gold mb-8"></div>

                  <div className="space-y-3">
                    {VINYL_WRAP_SURFACES.map((surface, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                          <CheckCircle2 size={18} className="text-gold group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 text-lg group-hover:text-charcoal transition-colors duration-300">{surface}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Section - Modern Card Grid */}
      <section className="py-20 bg-white relative">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
              Why Choose Bodaq Interior Film?
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {VINYL_WRAP_BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
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
                    <CheckCircle2 size={20} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg text-center leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Warranty Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-gold to-yellow-600 px-6 py-4 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Shield size={24} className="text-white" />
                <p className="text-white font-semibold text-base md:text-lg">
                  Backed by a 10-year material warranty
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Gallery Section */}
      <ProductGallery
        title="Inspirational Design Gallery"
        subtitle="Explore our gallery of inspiring interior transformations"
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
