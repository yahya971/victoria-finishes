import { getAssetPath } from './paths';

export const WATERPROOF_PANEL_GALLERY_IMAGES = [
  'Waterproof-Wall-Panel-2.png',
  'Waterproof-Wall-Panel-3.png',
  'Waterproof-Wall-Panel-4.png',
  'Waterproof-Wall-Panel-5.png',
  'Waterproof-Wall-Panel-6.png',
  'Waterproof-Wall-Panel-7.png'
];

export const getWaterproofPanelGalleryImages = (): string[] => {
  return WATERPROOF_PANEL_GALLERY_IMAGES.map(fileName =>
    getAssetPath(`/assets/Waterproof-Wall-Panel/${fileName}`)
  );
};
