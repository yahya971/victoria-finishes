import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { WATERPROOF_PANEL_BENEFITS } from '../data/waterproofPanelData';
import BenefitIcon from '../components/BenefitIcon';
import GalleryModal from '../components/GalleryModal';
import { WATERPROOF_PANEL_GALLERY_IMAGES } from '../utils/waterproofPanelImages';
import { getAssetPath } from '../utils/paths';
import { GalleryItem } from '../types';

const WaterproofPanel: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Prepare gallery images
  const galleryImages: GalleryItem[] = WATERPROOF_PANEL_GALLERY_IMAGES.map((name, index) => ({
    id: `waterproof-${index}`,
    category: 'All' as any,
    image: getAssetPath(`/assets/Waterproof-Wall-Panel/${name}`),
    title: 'Waterproof Panel'
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
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
              Waterproof Wall Panel Collection
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              WATERPROOF WALL PANELS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-2xl lg:text-4xl font-serif font-bold text-charcoal mb-4 leading-tight"
            >
              FOR SHOWERS, WET AREAS & FEATURE WALLS
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            >
              Waterproof wall panels designed for wet areas, providing a clean, seamless, and durable solution for showers, tubs, backsplashes, and feature walls in residential and commercial spaces, with easy maintenance and long-lasting performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section - Hero Style with Background */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: `url("${getAssetPath('/assets/Waterproof-Wall-Panel/Waterproof-Wall-Panel-3.png')}")`,
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
              Seamless. Waterproof. Beautiful.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="drop-shadow-lg"
              >
                Transform your bathrooms and wet areas with grout-free, 100% waterproof panels that combine durability with sophisticated design. Perfect for showers, tub surrounds, backsplashes, and feature walls.
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
                {WATERPROOF_PANEL_BENEFITS.map((benefit, index) => (
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
                    className={`group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                      index === WATERPROOF_PANEL_BENEFITS.length - 1 && WATERPROOF_PANEL_BENEFITS.length % 3 === 2 ? 'lg:col-start-2' : ''
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
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-20 pb-32 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="text-gold text-lg font-bold tracking-[0.25em] uppercase mb-5">
              Explore Our Gallery
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
              Browse our collection of waterproof panel installations showcasing wet area solutions and design possibilities
            </h2>
          </div>

          {/* Simple Responsive Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-lg break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {selectedItem && (
          <GalleryModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-gold leading-tight">
              Product Demo
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/c7hv9kdkZjM"
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

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
              Ready to Upgrade Your Wet Areas?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Book a consultation with our experts to discuss your project and explore our Waterproof Panel solutions.
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

export default WaterproofPanel;
