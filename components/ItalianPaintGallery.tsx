import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LiquidGlass } from '@liquidglass/react';
import { getAssetPath } from '../utils/paths';
import GalleryModal from './GalleryModal';
import { GalleryItem } from '../types';

/* BACKUP OF PREVIOUS IMPLEMENTATION - 2025
 * Previous approach used adaptive distribution based on item count
 * Replaced with deterministic row-by-row layout to eliminate white spaces
 */

const GALLERY_IMAGES = [
  'Klondike3_pittura_murale_decorativa.jpg',
  'Klondike5_pittura_murale_decorativa.jpg',
  'Klondike6_pittura_murale_decorativa.jpg',
  'Klondike7_pittura_murale_decorativa.jpg',
  'KlondikeLight3_effetto_metallo.jpg',
  'KlondikeLight4_effetto_metallo.jpg',
  'KlondikeLight5_effetto_metallo.jpg',
  'KlondikeLight8_effetto_metallo.jpg',
  'Marmorizzato_01_pittura_effetto_marmo.jpg',
  'Marmorizzato_04_pittura_effetto_marmo.jpg',
  'Marmorizzato_06_pittura_effetto_marmo.jpg',
  'Meteore10Cemento_05_rivestimento_materico.jpg',
  'Meteore10Cemento_06_rivestimento_materico.jpg',
  'Meteore10Cemento_08_rivestimento_materico.jpg',
  'Meteore10Cemento_10_rivestimento_materico.jpg',
  'Meteore10Cemento_11_rivestimento_materico.jpg',
  'Meteore10Cemento_12_rivestimento_materico.jpg',
  'Meteore10Cemento_15_rivestimento_materico.jpg',
  'Meteore10Cemento_17_rivestimento_materico.jpg',
  'Meteore10Cemento_19_rivestimento_materico.jpg',
  'Meteore10Cemento_22_rivestimento_materico.jpg',
  'Meteore10Cemento_23_rivestimento_materico.jpg',
  'Meteore10Cemento_27_rivestimento_materico.jpg',
  'Meteore10Cemento_29_rivestimento_materico.jpg',
  'Meteore10Cemento_30_rivestimento_materico.jpg',
  'Meteore8_01_tinteggiare_pareti_effetti.jpg',
  'Meteore8_02_tinteggiare_pareti_effetti.jpg',
  'Meteore8_03_tinteggiare_pareti_effetti.jpg',
  'Rococo_06_stucco_veneziano.jpg',
  'Rococo_07_stucco_veneziano.jpg',
  'Rococo_09_stucco_veneziano.jpg',
  'Rococo_10_stucco_veneziano.jpg',
  'Rococo_11_stucco_veneziano.jpg',
  'Rococo_13_stucco_veneziano.jpg',
  'Sabulador07_pareti_effetto_sabbia.jpg',
  'Sabulador08_pareti_effetto_sabbia.jpg',
  'Sabulador09_pareti_effetto_sabbia.jpg',
  'Sabulador11_pareti_effetto_sabbia.jpg',
  'Sabulador13_pareti_effetto_sabbia.jpg',
  'Sabulador14_pareti_effetto_sabbia.jpg',
  'Setavel_05_idee_pittura_parete_soggiorno.jpg',
  'Setavel_06_idee_pittura_parete_soggiorno.jpg',
  'Setavel_07_idee_pittura_parete_soggiorno.jpg',
  'Setavel_08_idee_pittura_parete_soggiorno.jpg',
  'Setavel_10_idee_pittura_parete_soggiorno.jpg',
  'Travertino04_pittura_murale_per_interni.jpg',
  'Travertino05_pittura_murale_per_interni.jpg',
  'Travertino06_pittura_murale_per_interni.jpg',
  'Valsetin2_04_pittura_bianco_perla.jpg',
  'Valsetin2_05_pittura_bianco_perla.jpg',
  'Valsetin2_06_pittura_bianco_perla.jpg',
  'Valsetin2_07_pittura_bianco_perla.jpg',
  'Valsetin2_08_pittura_bianco_perla.jpg',
  'Valsetin2_10_pittura_bianco_perla.jpg',
  'Valsetin_04_finiture_interni.jpg',
  'Valsetin_05_finiture_interni.jpg'
];

// Extract category from filename
const getProductFromFilename = (filename: string): string => {
  if (filename.startsWith('Klondike')) return 'Klondike Light';
  if (filename.startsWith('Marmorizzato')) return 'Meteore 10 Marmorizzato';
  if (filename.startsWith('Meteore10Cemento') || filename.startsWith('Travertino')) return 'Meteore 10 Cemento';
  if (filename.startsWith('Meteore8')) return 'Meteore 8';
  if (filename.startsWith('Rococo')) return 'Rococo Stucco Veneziano';
  if (filename.startsWith('Sabulador')) return 'Sabulador';
  if (filename.startsWith('Setavel')) return 'Setavel';
  if (filename.startsWith('Valsetin')) return 'Valsetin';
  return 'Other';
};

const FILTERS = [
  'All',
  'Klondike Light',
  'Sabulador',
  'Setavel',
  'Valsetin',
  'Rococo Stucco Veneziano',
  'Meteore 8',
  'Meteore 10 Cemento',
  'Meteore 10 Marmorizzato'
];

interface ItalianPaintGalleryProps {
  videoUrl?: string;
}

const ItalianPaintGallery: React.FC<ItalianPaintGalleryProps> = ({ videoUrl }) => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = GALLERY_IMAGES.map((filename, index) => ({
    id: `gallery-${index}`,
    category: getProductFromFilename(filename) as any,
    image: getAssetPath(`/assets/italian-decorative-paint/Gallery/${filename}`),
    title: getProductFromFilename(filename)
  }));

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.title === filter);

  // Create varied grid spans optimized to fill all space
  // Ensures minimum 2 rows and all 6 columns are covered with no white spaces
  const getImageSpan = (index: number, totalItems: number): string => {
    // Create pseudo-random value based on position
    const seed = (index * 2654435761) % 1000;
    const random = seed / 1000;

    // Minimum coverage: 2 rows × 6 columns = 12 cells
    // Adaptive strategy based on item count

    if (totalItems <= 3) {
      // 3 items need to fill 12 cells → average 4 cells each
      // Use large spans: 3x2=6, 2x2=4, 2x2=4 (total 14 cells, covers 2+ rows)
      if (index === 0) return 'col-span-3 row-span-2'; // 6 cells
      if (index === 1) return 'col-span-2 row-span-2'; // 4 cells
      return 'col-span-2 row-span-2'; // 4 cells
    } else if (totalItems <= 4) {
      // 4 items → average 3 cells each
      if (index === 0) return 'col-span-3 row-span-2'; // 6 cells
      if (index === 1) return 'col-span-3 row-span-1'; // 3 cells
      if (index === 2) return 'col-span-2 row-span-2'; // 4 cells
      return 'col-span-2 row-span-1'; // 2 cells
    } else if (totalItems <= 6) {
      // 6 items → average 2 cells each
      if (index === 0) return 'col-span-3 row-span-2'; // 6 cells
      if (index === 1) return 'col-span-3 row-span-1'; // 3 cells
      if (index === 2) return 'col-span-2 row-span-2'; // 4 cells
      if (index === 3) return 'col-span-2 row-span-1'; // 2 cells
      if (index === 4) return 'col-span-1 row-span-2'; // 2 cells
      return 'col-span-1 row-span-1'; // 1 cell
    } else if (totalItems <= 12) {
      // 7-12 items - use mix to ensure coverage
      if (random < 0.25) return 'col-span-3 row-span-2';
      if (random < 0.40) return 'col-span-2 row-span-2';
      if (random < 0.60) return 'col-span-3 row-span-1';
      if (random < 0.75) return 'col-span-2 row-span-1';
      return 'col-span-1 row-span-2';
    } else {
      // 13+ items - standard distribution
      if (random < 0.50) return 'col-span-1 row-span-1';
      if (random < 0.70) return 'col-span-2 row-span-1';
      if (random < 0.82) return 'col-span-1 row-span-2';
      if (random < 0.92) return 'col-span-2 row-span-2';
      if (random < 0.97) return 'col-span-3 row-span-1';
      const variation = seed % 3;
      if (variation === 0) return 'col-span-3 row-span-2';
      if (variation === 1) return 'col-span-2 row-span-3';
      return 'col-span-3 row-span-3';
    }
  };

  return (
    <>
    <section className="pt-20 pb-32 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-gold text-lg font-bold tracking-[0.25em] uppercase mb-5">
            Gallery
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Italian Decorative Paint<br />Applications
          </h2>
          <p className="text-gray-600 text-base md:text-lg">Explore our completed projects and design inspirations.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs md:text-sm uppercase font-semibold tracking-wider transition-all rounded-lg ${
                filter === f
                  ? 'bg-charcoal text-white shadow-lg'
                  : 'bg-white text-gray-500 border-2 border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid - Fully Responsive */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3"
          style={{
            gridAutoFlow: 'dense',
            gridAutoRows:
              filteredItems.length <= 5 ? '300px' :
              filteredItems.length <= 10 ? '250px' :
              filteredItems.length <= 20 ? '220px' :
              filteredItems.length <= 35 ? '200px' : '180px'
          }}
        >
          {filteredItems.map((item, index) => {
            const spanClass = getImageSpan(index, filteredItems.length);

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onClick={() => setSelectedItem(item)}
                className={`group relative cursor-pointer overflow-hidden rounded-lg ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay with Glass Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>

                <LiquidGlass className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="backdrop-blur-lg bg-white/10 border border-white/30 p-4 rounded-lg">
                    <p className="text-white font-serif text-center text-sm md:text-base">
                      {item.title}
                    </p>
                  </div>
                </LiquidGlass>
              </motion.div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images found for this filter.</p>
          </div>
        )}

      </div>

      {/* Gallery Modal */}
      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>

    {videoUrl && (
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
                src={videoUrl.replace('watch?v=', 'embed/')}
                title="Product Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    )}
    </>
  );
};

export default ItalianPaintGallery;
