export interface WallPanelSubProduct {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  description: string[];
  features: string[];
  externalLink: string;
  folderName: string;
}

export const WALL_PANEL_SUBPRODUCTS: WallPanelSubProduct[] = [
  {
    id: 'ps-3d-wall-panels',
    name: 'PS 3D WALL PANELS',
    tagline: 'Lightweight panels with striking textures.',
    subtitle: 'Decorative Interior Panels',
    description: [
      'PS 3D Wall Panels are decorative interior panels designed to enhance walls and ceilings with realistic textures and modern finishes. Made from recycled and high-impact polystyrene, they are lightweight, durable, and certified French Class A+ VOC for healthy indoor air quality.'
    ],
    features: [
      'Wide range of colors and realistic textures',
      'Precision embossing and thermal transfer printing',
      'Lightweight and easy to install',
      'Easy to cut with standard tools'
    ],
    externalLink: '',
    folderName: 'PS-wall-panel'
  },
  {
    id: 'wpc-3d-wall-panels',
    name: 'WPC 3D WALL PANELS',
    tagline: 'Durable panels with bold depth.',
    subtitle: 'Wood-PVC Composite Panels',
    description: [
      'WPC 3D Wall Panels are decorative panels made from a wood-PVC composite, offering durability, stability, and modern design. Their 3D textured surface adds depth and character to interior spaces, making them suitable for residential and commercial applications.'
    ],
    features: [
      '3D textured surface for strong visual impact',
      'Waterproof, fire-resistant, insect-proof, and mildew-proof',
      'Durable and stable composite material',
      'Easy and fast installation with adhesive or nails',
      'Ideal for modern residential and commercial interiors'
    ],
    externalLink: '',
    folderName: 'wpc-3d'
  },
  {
    id: 'ps-baseboards',
    name: 'PS BASEBOARDS',
    tagline: 'A clean, elegant floor finish.',
    subtitle: 'Polystyrene Baseboards',
    description: [
      'PS Baseboards provide a clean and elegant finish between walls and floors. Made from high-quality polystyrene, they offer durability, moisture resistance, and long-lasting visual appeal for both modern and classic interiors.'
    ],
    features: [
      'Durable and stable PS material',
      'Resistant to moisture and deformation',
      'Clean and refined finishing detail',
      'Wide choice of profiles and designs',
      'Easy to install and maintain'
    ],
    externalLink: '',
    folderName: 'baseboard'
  },
  {
    id: 'wall-moulding',
    name: 'WALL MOULDING',
    tagline: 'Turn walls into design features.',
    subtitle: 'Decorative Wall Elements',
    description: [
      'Wall mouldings are decorative elements designed to create custom wall patterns, frames, and architectural accents. Lightweight and paintable, they offer flexible design solutions for feature walls and refined interior spaces.'
    ],
    features: [
      'Multiple sizes, shapes, and styles',
      'Lightweight and easy to install',
      'Paintable for full customization',
      'Ideal for feature walls and decorative layouts',
      'Adds elegant architectural detail to interiors'
    ],
    externalLink: '',
    folderName: 'wall moulding'
  }
];

export interface Benefit {
  text: string;
  icon: string;
}

export const WALL_PANEL_BENEFITS: Benefit[] = [
  { text: 'Waterproof', icon: 'Droplets' },
  { text: 'Eco-Friendly', icon: 'Leaf' },
  { text: 'Scratch-Resistant', icon: 'ShieldCheck' },
  { text: 'High Strength', icon: 'Zap' },
  { text: 'Anti-Moth', icon: 'BugOff' },
  { text: 'Real Texture', icon: 'Layers' }
];
