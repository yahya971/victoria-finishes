import { getAssetPath } from './paths';

export const COMPOSITE_SIDING_GALLERY_IMAGES = [
  'Composite-Siding-1.png',
  'Composite-Siding-2.png',
  'Composite-Siding-3.png',
  'Composite-Siding-4.png',
  'Composite-Siding-5.png'
];

export const getCompositeSidingGalleryImages = (): string[] => {
  return COMPOSITE_SIDING_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Composite-Siding/${fileName}`)
  );
};
