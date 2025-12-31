import { getAssetPath } from './paths';

// Mapping of sub-product folder names to their image files
export const SUB_PRODUCT_IMAGES: Record<string, string[]> = {
  'Klondike': [
    'Klondike1_pittura_murale_decorativa.jpg',
    'Klondike2_pittura_murale_decorativa.jpg',
    'KlondikeLight1_effetto_metallo.jpg',
    'KlondikeLight2_effetto_metallo.jpg'
  ],
  'Sabulador': [
    'Sabulador01_pareti_effetto_sabbia.jpg',
    'Sabulador02_pareti_effetto_sabbia.jpg',
    'Sabulador04_pareti_effetto_sabbia.jpg',
    'Sabulador05_pareti_effetto_sabbia.jpg'
  ],
  'Setavel': [
    'Setavel_01_idee_pittura_parete_soggiorno.jpg',
    'Setavel_02_idee_pittura_parete_soggiorno.jpg',
    'Setavel_03_idee_pittura_parete_soggiorno.jpg',
    'Setavel_04_idee_pittura_parete_soggiorno.jpg'
  ],
  'Valsetin': [
    'Valsetin2_01_pittura_bianco_perla.jpg',
    'Valsetin2_02_pittura_bianco_perla.jpg',
    'Valsetin2_03_pittura_bianco_perla.jpg',
    'Valsetin_02_finiture_interni.jpg',
    'Valsetin_03_finiture_interni.jpg'
  ],
  'Rococo-Stucco': [
    'Rococo_01_stucco_veneziano.jpg',
    'Rococo_02_stucco_veneziano.jpg',
    'Rococo_04_stucco_veneziano.jpg',
    'Rococo_05_stucco_veneziano.jpg'
  ],
  'Mateore-8': [
    'Meteore8_01_tinteggiare_pareti_effetti.jpg',
    'Meteore8_02_tinteggiare_pareti_effetti.jpg',
    'Meteore8_03_tinteggiare_pareti_effetti.jpg'
  ],
  'Mateore-10-Cemento': [
    'Meteore10Cemento_01_rivestimento_materico.jpg',
    'Meteore10Cemento_02_rivestimento_materico.jpg',
    'Meteore10Cemento_03_rivestimento_materico.jpg',
    'Travertino02_pittura_murale_per_interni.jpg',
    'Travertino03_pittura_murale_per_interni.jpg'
  ],
  'Mateore-10-Marmorizzato': [
    'Marmorizzato_01_pittura_effetto_marmo.jpg',
    'Marmorizzato_04_pittura_effetto_marmo.jpg',
    'Marmorizzato_06_pittura_effetto_marmo.jpg'
  ]
};

export const getSubProductImages = (folderName: string): string[] => {
  const imageFiles = SUB_PRODUCT_IMAGES[folderName] || [];
  return imageFiles.map(fileName =>
    getAssetPath(`/assets/italian-decorative-paint/${folderName}/${fileName}`)
  );
};

// Get gallery images filtered by sub-product name
export const getGalleryImagesByProduct = (productKeyword: string): string[] => {
  // This will be implemented based on the Gallery folder structure
  // For now, return empty array
  return [];
};
