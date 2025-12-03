import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/hero-001.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6"
        >
          Premium Wallcovering & More
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-10 leading-tight"
        >
          REFRESH YOUR SPACE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#products" className="px-10 py-4 bg-transparent border-2 border-white text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-charcoal transition-all duration-300 rounded-lg">
            Explore More
          </a>
          <a href="#about" className="px-10 py-4 bg-gold text-white border-2 border-gold uppercase tracking-wider text-sm font-semibold hover:bg-transparent hover:text-white transition-all duration-300 rounded-lg">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;