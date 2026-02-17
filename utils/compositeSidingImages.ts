import { getAssetPath } from './paths';

export const COMPOSITE_SIDING_GALLERY_IMAGES = [
  'Composite-Siding-1.jpg',
  'Composite-Siding-2.jpg',
  'Composite-Siding-3.jpg',
  'Composite-Siding-4.jpg',
  'Composite-Siding-5.jpg',
  'Composite-Siding-6.jpg',
  'Composite-Siding-7.jpg',
  'Composite-Siding-8.jpg',
  'Composite-Siding-9.jpg',
  'Composite-Siding-10.jpg',
  'Composite-Siding-11.jpg',
  'Composite-Siding-12.jpg',
  'Composite-Siding-13.jpg',
  'Composite-Siding-14.jpg',
  'Composite-Siding-15.jpg'
];

export const getCompositeSidingGalleryImages = (): string[] => {
  return COMPOSITE_SIDING_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Composite-Siding/${fileName}`)
  );
};
