import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Contact
            </h4>
            <h2 className="text-4xl font-serif font-bold mb-10">GET IN TOUCH</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-xs uppercase font-bold text-gray-400 mb-1">Call Us</h5>
                  <p className="text-lg font-serif">+1 (250) 514-7081</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-xs uppercase font-bold text-gray-400 mb-1">Email Us</h5>
                  <p className="text-lg font-serif">info@victoriafinishes.ca</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-xs uppercase font-bold text-gray-400 mb-1">Visit Us</h5>
                  <p className="text-lg font-serif">579 Gorge Road,<br />Victoria, BC</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a href="#" className="p-2 border border-white/20 hover:border-gold hover:text-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 border border-white/20 hover:border-gold hover:text-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-white/20 hover:border-gold hover:text-gold transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 h-80 lg:h-auto min-h-[400px] bg-gray-800 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.767963286071!2d-123.385300!3d48.441000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f738a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2s579%20Gorge%20Rd%20E%2C%20Victoria%2C%20BC%20V8T%202W6!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca" 
               width="100%" 
               height="100%" 
               style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
               allowFullScreen 
               loading="lazy"
               className="absolute inset-0"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; 2025 Victoria Finishes. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;