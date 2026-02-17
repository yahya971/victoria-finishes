import { getAssetPath } from './paths';

// Mapping of wall panel folder names to their image files
export const WALL_PANEL_IMAGES: Record<string, string[]> = {
  'PS-wall-panel': [
    'WallPanel-PS-1.jpg',
    'WallPanel-PS-2.jpg',
    'WallPanel-PS-3.jpg',
    'WallPanel-PS-4.jpg',
    'WallPanel-PS-5.jpg',
    'WallPanel-PS-6.jpg',
    'WallPanel-PS-7.jpg'
  ],
  'wpc-3d': [
    'WallPanel-wpc-3d-1.jpg',
    'WallPanel-wpc-3d-2.jpg',
    'WallPanel-wpc-3d-3.jpg',
    'WallPanel-wpc-3d-4.jpg'
  ],
  'baseboard': [
    'WallPanel-Baseboard-1.jpg',
    'WallPanel-Baseboard-2.jpg',
    'WallPanel-Baseboard-3.jpg',
    'WallPanel-Baseboard-4.jpg'
  ],
  'wall moulding': [
    'WallPanel-Moulding-1.jpg',
    'WallPanel-Moulding-2.jpg',
    'WallPanel-Moulding-3.jpg'
  ]
};

export const getWallPanelImages = (folderName: string): string[] => {
  const imageFiles = WALL_PANEL_IMAGES[folderName] || [];
  return imageFiles.map(fileName =>
    getAssetPath(`/assets/Wall-Panel/${folderName}/${fileName}`)
  );
};
