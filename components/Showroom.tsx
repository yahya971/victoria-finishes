import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { LiquidGlass } from '@liquidglass/react';
import { getAssetPath } from '../utils/paths';

const Showroom: React.FC = () => {
  return (
    <section id="showroom" className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Parallax-style Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: `url("${getAssetPath('/assets/showroom-form.jpg')}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">

          {/* Text/Info Side - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 xl:w-1/2"
          >
            <LiquidGlass>
              <div className="backdrop-blur-2xl bg-black/40 border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl">
                <h4 className="text-gold text-sm font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-gold"></span> Our Showroom
                </h4>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 leading-tight text-white">
                  Feel The <br />
                  <strong className="font-bold text-white">Difference</strong>
                </h2>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-10">
                  Visit our showroom to discover authentic materials and designs you can see, touch, and feel.
                  Immerse yourself in textures that define luxury.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-gold/20 text-gold backdrop-blur-md border border-gold/30">
                       <Clock size={22} />
                     </div>
                     <div>
                       <h5 className="text-sm font-semibold text-white mb-2">Opening Hours</h5>
                       <p className="text-white/80 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                       <p className="text-white/80 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-gold/20 text-gold backdrop-blur-md border border-gold/30">
                       <MapPin size={22} />
                     </div>
                     <div>
                       <h5 className="text-sm font-semibold text-white mb-2">Location</h5>
                       <p className="text-white/80 text-sm">579 Gorge Road,</p>
                       <p className="text-white/80 text-sm">Victoria, BC</p>
                     </div>
                   </div>
                </div>
              </div>
            </LiquidGlass>
          </motion.div>

          {/* Form Side - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <LiquidGlass>
              <div className="backdrop-blur-2xl bg-black/40 border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                   <Calendar size={120} className="text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-8 relative z-10">Book an Appointment</h3>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-semibold text-gold tracking-wider">Full Name</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-semibold text-gold tracking-wider">Phone</label>
                      <input type="tel" className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg" placeholder="+1 (250) ..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-gold tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-semibold text-gold tracking-wider">Preferred Date</label>
                      <input type="date" className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-semibold text-gold tracking-wider">Preferred Time</label>
                      <select className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg">
                        <option className="text-charcoal">Morning (9AM - 12PM)</option>
                        <option className="text-charcoal">Afternoon (12PM - 4PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-gold tracking-wider">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/20 transition-all rounded-lg resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-gold text-white py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-gold transition-colors mt-6 rounded-lg shadow-xl">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </LiquidGlass>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Showroom;