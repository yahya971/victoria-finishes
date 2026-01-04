import { getAssetPath } from './paths';

// Mapping of sub-product folder names to their image files
export const VINYL_WRAP_IMAGES: Record<string, string[]> = {
  'basic': [
    'Bodaq-Basic-1.jpg',
    'Bodaq-Basic-2.jpg',
    'Bodaq-Basic-3.jpg'
  ],
  'wood': [
    'Bodaq-Wood-1.jpg',
    'Bodaq-Wood-2.jpg'
  ],
  'natural': [
    'Bodaq-Natural-1.jpg',
    'Bodaq-Natural-2.jpg',
    'Bodaq-Natural-3.jpg'
  ],
  'marble': [
    'Bodaq-Marble-1.jpg',
    'Bodaq-Marble-2.jpg',
    'Bodaq-Marble-3.jpg',
    'Bodaq-Marble-4.jpg',
    'Bodaq-Marble-5.jpg',
    'Bodaq-Marble-6.jpg',
    'Bodaq-Marble-7.jpg',
    'Bodaq-Marble-8.jpg',
    'Bodaq-Marble-9.jpg',
    'Bodaq-Marble-10.jpg'
  ]
};

export const getVinylWrapImages = (folderName: string): string[] => {
  const imageFiles = VINYL_WRAP_IMAGES[folderName] || [];
  return imageFiles.map(fileName =>
    getAssetPath(`/assets/Bodaq-Vinyl-Wap/${folderName}/${fileName}`)
  );
};

// Gallery images - all flattened into one folder with proper extensions
const basicExtensions = ['png', 'png', 'png', 'png', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg'];
const woodExtensions = ['png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'png', 'jpg', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png', 'jpg', 'jpg', 'jpg', 'jpg'];
const naturalExtensions = ['png', 'png', 'jpg', 'jpg', 'png', 'jpg', 'png', 'jpg', 'jpg', 'jpg'];
const marbleExtensions = ['png', 'png', 'png', 'png', 'png', 'png', 'png', 'jpg', 'png', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'png'];
const beforeAfterExtensions = ['jpg', 'jpg', 'jpg', 'jpg'];

export const VINYL_WRAP_GALLERY_IMAGES = {
  basic: Array.from({ length: 17 }, (_, i) => `Bodaq-Gallery-Basic-${i + 1}.${basicExtensions[i]}`),
  wood: Array.from({ length: 40 }, (_, i) => `Bodaq-Gallery-Wood-${i + 1}.${woodExtensions[i]}`),
  natural: Array.from({ length: 10 }, (_, i) => `Bodaq-Gallery-Natural-${i + 1}.${naturalExtensions[i]}`),
  marble: Array.from({ length: 20 }, (_, i) => `Bodaq-Gallery-Marble-${i + 1}.${marbleExtensions[i]}`),
  beforeAfter: Array.from({ length: 4 }, (_, i) => `Bodaq-Gallery-BeforeAfter-${i + 1}.${beforeAfterExtensions[i]}`)
};

export const getAllGalleryImages = (): string[] => {
  const allImages: string[] = [];

  Object.values(VINYL_WRAP_GALLERY_IMAGES).forEach(images => {
    images.forEach(imageName => {
      // Check for both .png and .jpg extensions
      allImages.push(imageName);
    });
  });

  return allImages;
};
