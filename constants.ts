import { Product, GalleryItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Showroom', href: '#showroom' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Italian Decorative Paint',
    subtitle: 'Artistic Finishes',
    description: 'Premium Italian decorative paints providing unique textures and sophisticated finishes for modern interiors.',
    image: '/assets/showroom-001.jpg',
    subProducts: [
      'Klondike Light', 'Sabulador', 'Steavel', 'Valsatin',
      'Rococo Stucco Veneziano', 'Meteore 8', 'Meteore 10 Cemento'
    ],
    features: ['Washable', 'Durable', 'Unique Texture', 'Eco-friendly Base']
  },
  {
    id: 'p2',
    title: 'Premium Vinyl Wrap',
    subtitle: 'Architectural Film',
    description: 'High-durability architectural film for walls, furniture, and elevators. A perfect renovation solution.',
    image: '/assets/showroom-002.jpg',
    features: [
      'Air-channeled adhesive',
      'Fire retardant (Class A)',
      'High-durability (10+ years)',
      'Antibacterial & Antifungal',
      'Sustainable'
    ]
  },
  {
    id: 'p3',
    title: 'Italian Wallpaper',
    subtitle: 'Modern Elegance',
    description: 'Exquisite Italian wallpaper collections that bring warmth, depth, and character to any room.',
    image: '/assets/showroom-003.jpg',
    features: ['High Resolution Print', 'Textured Surface', 'Fade Resistant', 'Premium Paper Quality']
  },
  {
    id: 'p4',
    title: 'Modern Wall Panel',
    subtitle: 'WPC & Wood Design',
    description: 'Restyle your wall with modern wall panel designs. Easy to install and aesthetically pleasing.',
    image: '/assets/showroom-004.jpg',
    features: ['Waterproof', 'Eco-Friendly', 'Scratch-Resistant', 'High Strength', 'Real Wood Texture']
  },
  {
    id: 'p5',
    title: 'Waterproof Panel',
    subtitle: 'Bathroom & Kitchen',
    description: '100% waterproof panels ideal for wet environments. Mold and moisture resistant.',
    image: '/assets/showroom-005.jpg',
    features: ['100% Waterproof', 'Mold Resistant', 'Easy to Clean', 'Lightweight']
  },
  {
    id: 'p6',
    title: 'Soundproof Panel',
    subtitle: 'Acoustic Solutions',
    description: 'Enhance acoustic comfort with sound-absorbing panels that look as good as they sound.',
    image: '/assets/showroom-006.jpg',
    features: ['Noise Reduction', 'Sound Absorption', 'Thermal Insulation', 'Modern Look']
  },
  {
    id: 'p7',
    title: 'Composite Decking',
    subtitle: 'Outdoor Living',
    description: 'Upgrade your outdoor space with long-lasting WPC decking that requires minimal maintenance.',
    image: '/assets/showroom-007.jpg',
    features: ['Weather Resistant', 'Anti-Corrosion', 'Anti-Slip', 'No Staining Required']
  },
  {
    id: 'p8',
    title: 'Composite Siding',
    subtitle: 'Exterior Cladding',
    description: 'Long-lasting protection with modern design for your building\'s exterior.',
    image: '/assets/showroom-008.jpg',
    features: ['UV Resistant', 'Impact Resistant', 'Thermal Efficiency', 'Contemporary Style']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Residential', image: '/assets/gallery-001.jpg', title: 'Luxury Living Room' },
  { id: 'g2', category: 'Commercial', image: '/assets/gallery-002.jpg', title: 'Office Lobby' },
  { id: 'g3', category: 'Residential', image: '/assets/gallery-003.jpg', title: 'Modern Kitchen' },
  { id: 'g4', category: 'BeforeAfter', image: '/assets/gallery-004.jpg', title: 'Bedroom Renovation' },
  { id: 'g5', category: 'Commercial', image: '/assets/gallery-005.jpg', title: 'Hotel Corridor' },
  { id: 'g6', category: 'Residential', image: '/assets/gallery-006.jpg', title: 'Bright Hallway' },
];