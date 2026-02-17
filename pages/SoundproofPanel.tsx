import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SOUNDPROOF_PANEL_BENEFITS } from '../data/soundproofPanelData';
import BenefitIcon from '../components/BenefitIcon';
import ProductGallery from '../components/ProductGallery';
import { SOUNDPROOF_PANEL_GALLERY_IMAGES } from '../utils/soundproofPanelImages';
import { getAssetPath } from '../utils/paths';

const SoundproofPanel: React.FC = () => {
  const navigate = useNavigate();

  // Prepare gallery images
  const galleryImages = SOUNDPROOF_PANEL_GALLERY_IMAGES.map(name => ({
    filename: name,
    category: 'All'
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
              Soundproof Panels
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight"
            >
              SOUND CONTROL WITH<br />MODERN DESIGN
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            >
              Our soundproof wall panels are designed to reduce noise and improve acoustic comfort while enhancing the overall look of your interior. They combine effective sound absorption with a warm, contemporary design, making them ideal for modern residential and commercial spaces.
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
            backgroundImage: `url("${getAssetPath('/assets/Soundproof-Wall-Panel/Soundproof-Wall-Panel-3.jpg')}")`,
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
              Acoustic Comfort Meets Design
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="drop-shadow-lg"
              >
                Transform your space with panels that not only look beautiful but also create a quieter, more comfortable environment. Perfect for offices, studios, homes, and commercial spaces where sound control matters.
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
                {SOUNDPROOF_PANEL_BENEFITS.map((benefit, index) => (
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

      {/* Gallery Section */}
      <ProductGallery
        title="Explore Our Gallery"
        subtitle="Browse our collection of soundproof panel installations showcasing acoustic solutions and design possibilities"
        filters={['All']}
        images={galleryImages}
        basePath={getAssetPath('/assets/Soundproof-Wall-Panel')}
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
              Ready to Improve Your Acoustic Comfort?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Book a consultation with our experts to discuss your project and explore our Soundproof Panel solutions.
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

export default SoundproofPanel;
