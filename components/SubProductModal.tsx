import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubProduct {
  id: string;
  name: string;
  tagline: string;
  subtitle?: string;
  description: string[];
  features: string[];
  externalLink: string;
  folderName: string;
}

interface SubProductModalProps {
  subProduct: SubProduct | null;
  images: string[];
  onClose: () => void;
  productCategoryName: string;
}

const SubProductModal: React.FC<SubProductModalProps> = ({ subProduct, images, onClose, productCategoryName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-transition every 10 seconds
  useEffect(() => {
    if (!subProduct || images.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length, subProduct]);

  if (!subProduct) return null;

  const handleBookConsultation = () => {
    onClose();
    navigate('/#showroom');
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row z-[10000] rounded-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[10001] p-2 bg-white/80 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg"
          >
            <X size={24} />
          </button>

          {/* Image Carousel Section */}
          <div className="w-full lg:w-2/5 h-64 lg:h-auto relative rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden bg-gray-100">
            {images.length > 0 ? (
              <>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${subProduct.name} ${currentImageIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 100, damping: 25 },
                      opacity: { duration: 0.5 }
                    }}
                    className="absolute w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-gold hover:text-white transition-colors shadow-lg z-10"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 text-white rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <p>No images available</p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 bg-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex flex-col">
            <h4 className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
              {productCategoryName}
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-3">
              {subProduct.name}
            </h2>
            <h3 className="text-lg text-gray-500 mb-5">
              {subProduct.tagline}
            </h3>

            <div className="space-y-3 mb-6 overflow-y-auto flex-1">
              {subProduct.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-5 mb-6">
              <div>
                <h5 className="font-serif font-bold text-charcoal mb-3 text-sm uppercase">Key Features</h5>
                <ul className="grid grid-cols-1 gap-2.5">
                  {subProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* External Link */}
            <a
              href={subProduct.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-charcoal transition-colors text-sm mb-6"
            >
              <ExternalLink size={16} />
              <span>View manufacturer's details & catalogue</span>
            </a>

            {/* Action Button */}
            <div className="pt-6 border-t border-gray-100">
              <button
                onClick={handleBookConsultation}
                className="w-full text-center bg-charcoal text-white py-4 font-semibold uppercase tracking-wider text-sm hover:bg-gold transition-colors rounded-lg shadow-md"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubProductModal;
