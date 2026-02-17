import { Product, GalleryItem, NavItem } from './types';
import { getAssetPath } from './utils/paths';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  {
    label: 'Products',
    dropdown: [
      { label: 'Italian Decorative Paint', href: '/products/italian-decorative-paint', enabled: true },
      { label: 'Premium Vinyl Wrap', href: '/products/vinyl-wrap', enabled: true },
      { label: 'Italian Wallpaper', href: '#', enabled: false },
      { label: 'Modern Wall Panel', href: '/products/modern-wall-panel', enabled: true },
      { label: 'Waterproof Panel', href: '/products/waterproof-panel', enabled: true },
      { label: 'Soundproof Panel', href: '/products/soundproof-panel', enabled: true },
      { label: 'Composite Decking', href: '/products/composite-decking', enabled: true },
      { label: 'Composite Siding', href: '/products/composite-siding', enabled: true },
    ]
  },
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
    image: getAssetPath('/assets/showroom-001.jpg'),
    subProducts: [
      'Klondike Light', 'Sabulador', 'Steavel', 'Valsatin',
      'Rococo Stucco Veneziano', 'Meteore 8', 'Meteore 10 Cemento'
    ],
    features: ['Washable', 'Durable', 'Unique Texture', 'Eco-friendly Base'],
    technicalIcons: ['Droplets', 'ShieldCheck', 'Layers', 'Leaf']
  },
  {
    id: 'p2',
    title: 'Premium Vinyl Wrap',
    subtitle: 'Architectural Film',
    description: 'High-durability architectural film for walls, furniture, and elevators. A perfect renovation solution.',
    image: getAssetPath('/assets/showroom-002.jpg'),
    subProducts: [
      'Basic', 'Wood', 'Natural', 'Stone & Marble'
    ],
    features: [
      'Air-channeled adhesive',
      'Fire retardant (Class A)',
      'High-durability (10+ years)',
      'Antibacterial & Antifungal',
      'Sustainable'
    ],
    technicalIcons: ['Wind', 'Flame', 'Clock', 'ShieldCheck', 'Leaf']
  },
  {
    id: 'p3',
    title: 'Italian Wallpaper',
    subtitle: 'Modern Elegance',
    description: 'Exquisite Italian wallpaper collections that bring warmth, depth, and character to any room.',
    image: getAssetPath('/assets/showroom-003.jpg'),
    features: ['High Resolution Print', 'Textured Surface', 'Fade Resistant', 'Premium Paper Quality'],
    technicalIcons: ['Sparkles', 'Layers', 'ShieldCheck', 'CheckCircle2']
  },
  {
    id: 'p4',
    title: 'Modern Wall Panel',
    subtitle: 'Composite Material Collection',
    description: 'Modern composite panels for walls & interior details. Lightweight, durable solutions with modern textures and decorative depth.',
    image: getAssetPath('/assets/Wall-Panel/PS-wall-panel/WallPanel-PS-1.jpg'),
    subProducts: [
      'PS 3D Wall Panels', 'WPC 3D Wall Panels', 'PS Baseboards', 'Wall Moulding'
    ],
    features: ['Waterproof', 'Eco-Friendly', 'Scratch-Resistant', 'High Strength', 'Anti-Moth', 'Real Texture'],
    technicalIcons: ['Droplets', 'Leaf', 'ShieldCheck', 'Zap', 'BugOff', 'Layers']
  },
  {
    id: 'p5',
    title: 'Waterproof Panel',
    subtitle: 'For Showers, Wet Areas & Feature Walls',
    description: 'Seamless waterproof panels for showers, tubs, and wet areas. Clean design with easy installation and maintenance.',
    image: getAssetPath('/assets/Waterproof-Wall-Panel/Waterproof-Wall-Panel-2.png'),
    features: ['100% Waterproof', 'Grout-free', 'Easy Installation', 'Lightweight'],
    technicalIcons: ['Droplets', 'Sparkles', 'Zap', 'Feather']
  },
  {
    id: 'p6',
    title: 'Soundproof Panel',
    subtitle: 'Sound Control with Modern Design',
    description: 'Reduce noise and improve acoustic comfort while enhancing your interior. Warm, contemporary design for modern spaces.',
    image: getAssetPath('/assets/Soundproof-Wall-Panel/Soundproof-Wall-Panel-1.jpg'),
    features: ['Sound Absorption', 'Noise Reduction', 'Modern Aesthetic', 'Easy Installation'],
    technicalIcons: ['Volume2', 'Waves', 'Palette', 'Wrench']
  },
  {
    id: 'p7',
    title: 'Composite Decking',
    subtitle: 'Exterior Decking Solutions',
    description: 'Durable WPC composite decking combining natural wood appearance with weather resistance and low maintenance for outdoor living.',
    image: getAssetPath('/assets/Composite-Decking/Composite-Decking-15.jpg'),
    features: ['Natural Wood Look', 'Weather Resistant', 'Slip-Resistant', 'Low Maintenance'],
    technicalIcons: ['TreeDeciduous', 'CloudRain', 'ShieldCheck', 'Wrench']
  },
  {
    id: 'p8',
    title: 'Composite Siding',
    subtitle: 'Long Lasting Protection with Modern Design',
    description: 'Durable WPC composite siding for outdoor façades. Natural wood look with weather resistance and low maintenance.',
    image: getAssetPath('/assets/Composite-Siding/Composite-Siding-6.jpg'),
    features: ['Weather Resistant', 'Low Maintenance', 'Thermal Insulation', 'Eco-Friendly'],
    technicalIcons: ['CloudRain', 'Wrench', 'Waves', 'Leaf']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Residential', image: getAssetPath('/assets/gallery-001.jpg'), title: 'Luxury Living Room' },
  { id: 'g2', category: 'Commercial', image: getAssetPath('/assets/gallery-002.jpg'), title: 'Office Lobby' },
  { id: 'g3', category: 'Residential', image: getAssetPath('/assets/gallery-003.jpg'), title: 'Modern Kitchen' },
  { id: 'g4', category: 'BeforeAfter', image: getAssetPath('/assets/gallery-004.jpg'), title: 'Bedroom Renovation' },
  { id: 'g5', category: 'Commercial', image: getAssetPath('/assets/gallery-005.jpg'), title: 'Hotel Corridor' },
  { id: 'g6', category: 'Residential', image: getAssetPath('/assets/gallery-006.jpg'), title: 'Bright Hallway' },
];