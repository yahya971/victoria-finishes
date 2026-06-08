import React from 'react';
import { motion } from 'framer-motion';
import { LiquidGlass } from '@liquidglass/react';
import { getAssetPath } from '../utils/paths';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold mb-4 leading-tight">
              Why Victoria Finishes
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              Premium materials. Refined craftsmanship. <br /> Precision in every detail.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-charcoal mb-3">Our Mission</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  To elevate interiors with sophisticated, lasting surface transformations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-charcoal mb-3">Our Approach</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Your vision, executed with expertise and uncompromising quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-lg">
              <img
                src={getAssetPath('/assets/about-001.jpg')}
                alt="Craftsman working"
                className="w-full h-[400px] lg:h-[420px] object-cover object-center"
              />

              {/* Floating Badge with Glass Effect */}
              <LiquidGlass className="absolute bottom-8 -left-6 max-w-xs">
                <div className="backdrop-blur-2xl bg-charcoal/90 border border-white/20 text-white p-8 shadow-2xl rounded-lg">
                  <p className="font-serif italic text-lg text-center">
                    "Authentic materials and designs you can see, touch, and feel."
                  </p>
                </div>
              </LiquidGlass>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;