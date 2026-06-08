import { getAssetPath } from './paths';

export const COMPOSITE_DECKING_GALLERY_IMAGES = [
  'Composite-Decking-1.jpg',
  'Composite-Decking-2.jpg',
  'Composite-Decking-3.jpg',
  'Composite-Decking-4.jpg',
  'Composite-Decking-5.jpg',
  'Composite-Decking-6.jpg',
  'Composite-Decking-7.png',
  'Composite-Decking-8.png',
  'Composite-Decking-9.png',
  'Composite-Decking-10.png',
  'Composite-Decking-11.png',
  'Composite-Decking-12.png',
  'Composite-Decking-13.png',
  'Composite-Decking-14.png',
  'Composite-Decking-15.png',
  'Composite-Decking-16.png',
  'Composite-Decking-17.png'
];

export const getCompositeDeckingGalleryImages = (): string[] => {
  return COMPOSITE_DECKING_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Composite-Decking/${fileName}`)
  );
};
