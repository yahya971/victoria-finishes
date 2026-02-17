import { getAssetPath } from './paths';

export const COMPOSITE_DECKING_GALLERY_IMAGES = [
  'Composite-Decking-1.jpg',
  'Composite-Decking-2.jpg',
  'Composite-Decking-3.jpg',
  'Composite-Decking-4.jpg',
  'Composite-Decking-5.jpg',
  'Composite-Decking-6.jpg',
  'Composite-Decking-7.jpg',
  'Composite-Decking-8.jpg',
  'Composite-Decking-9.jpg',
  'Composite-Decking-10.jpg',
  'Composite-Decking-11.jpg',
  'Composite-Decking-12.jpg',
  'Composite-Decking-13.jpg',
  'Composite-Decking-14.jpg',
  'Composite-Decking-15.jpg'
];

export const getCompositeDeckingGalleryImages = (): string[] => {
  return COMPOSITE_DECKING_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Composite-Decking/${fileName}`)
  );
};
