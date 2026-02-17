import { getAssetPath } from './paths';

export const SOUNDPROOF_PANEL_GALLERY_IMAGES = [
  'Soundproof-Wall-Panel-1.jpg',
  'Soundproof-Wall-Panel-2.jpg',
  'Soundproof-Wall-Panel-3.jpg',
  'Soundproof-Wall-Panel-4.jpg',
  'Soundproof-Wall-Panel-5.png',
  'Soundproof-Wall-Panel-6.jpg',
  'Soundproof-Wall-Panel-7.png',
  'Soundproof-Wall-Panel-8.png',
  'Soundproof-Wall-Panel-9.png',
  'Soundproof-Wall-Panel-10.png',
  'Soundproof-Wall-Panel-11.png'
];

export const getSoundproofPanelGalleryImages = (): string[] => {
  return SOUNDPROOF_PANEL_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Soundproof-Wall-Panel/${fileName}`)
  );
};
