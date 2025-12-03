import React from 'react';
import { motion } from 'framer-motion';
import { LiquidGlass } from '@liquidglass/react';
import { getAssetPath } from '../utils/paths';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h4 className="text-gold text-sm font-bold tracking-[0.25em] uppercase mb-5">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-10 leading-tight">
              Premium Material & <br /> Professional Installation
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Why Us</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  At <span className="font-semibold text-charcoal">Victoria Finishes</span>, we combine premium materials with qualified craftsmanship.
                  Every project is handled with precision, care, and respect for your space — clean work, lasting results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Our Mission</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To enhance homes and commercial spaces across Victoria with creative surface solutions.
                  We bring quality, durability, and design together to refresh your environment with confidence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Our Approach</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We start by understanding your needs and your vision. Then we apply the right materials, methods,
                  and details to deliver a smooth, professional finish every time.
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
                className="w-full h-[500px] lg:h-[550px] object-cover object-center"
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