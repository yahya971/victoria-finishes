export interface VinylWrapSubProduct {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  description: string[];
  features: string[];
  externalLink: string;
  folderName: string;
}

export const VINYL_WRAP_SUBPRODUCTS: VinylWrapSubProduct[] = [
  {
    id: 'basic',
    name: 'BASIC',
    tagline: 'Surface Finishes',
    subtitle: 'Clean, Modern, and Versatile Foundation',
    description: [
      'When it comes to refreshing interior surfaces, Basic finishes offer a clean, modern, and versatile foundation for a wide range of spaces.',
      'Painted concrete delivers a contemporary, industrial aesthetic with a smooth, refined appearance, ideal for minimalist and modern interiors.',
      'Solid & super matt finishes provide uniform colour surfaces with a deep, low-sheen look. These finishes reduce light reflection and create a calm, elegant atmosphere across residential and commercial environments.',
      'Painted wood combines the warmth of wood with a clean, updated finish, preserving natural character while ensuring visual consistency.',
      'Textured finishes introduce subtle depth and tactile interest, enhancing walls and surfaces without overwhelming the overall design.',
      'Together, these finishes form a practical and timeless base — delivering durability, visual harmony, and effortless style for everyday interior transformations.'
    ],
    features: [
      'Painted concrete - Contemporary industrial aesthetic',
      'Solid & Super matt - Deep, low-sheen uniform colour',
      'Painted wood - Natural warmth with clean finish',
      'Textured finishes - Subtle depth and tactile interest'
    ],
    externalLink: '',
    folderName: 'basic'
  },
  {
    id: 'wood',
    name: 'WOOD',
    tagline: 'Surface Finishes',
    subtitle: 'Natural Character with Modern Durability',
    description: [
      'When it comes to creating warm, inviting interiors, wood finishes remain one of the most timeless and versatile choices. Our WOOD collection delivers the natural character of timber while offering a clean, durable, and consistent surface upgrade for modern spaces.',
      'Long wood grain patterns bring an elegant, linear look that visually extends walls and panels — perfect for feature walls, reception areas, and contemporary design concepts.',
      'Original wood finishes capture the authentic feel of natural timber, offering a balanced, realistic look that suits both residential and commercial environments.',
      'Premium wood designs elevate the space with richer tones and refined detailing, ideal for high-end interiors where a sophisticated finish matters.',
      'Standard wood options provide a classic, practical aesthetic that works across a wide range of projects — simple, reliable, and easy to integrate with most décor styles.',
      'Together, these wood finishes offer a natural, design-forward foundation — delivering warmth, realism, and everyday durability for interior transformations.'
    ],
    features: [
      'Long wood - Elegant linear grain patterns',
      'Origin wood - Authentic natural timber feel',
      'Premium wood - Richer tones and refined detailing',
      'Standard wood - Classic, practical aesthetic'
    ],
    externalLink: '',
    folderName: 'wood'
  },
  {
    id: 'natural',
    name: 'NATURAL',
    tagline: 'Surface Finishes',
    subtitle: 'Texture, Depth, and Character',
    description: [
      'When it comes to adding texture, depth, and character to interior spaces, Natural finishes bring a refined balance between authenticity and design.',
      'Metal finishes introduce a contemporary, industrial edge, adding strength and visual contrast to modern and architectural interiors.',
      'Natural fabric textures create a soft, organic feel, enhancing comfort while adding subtle warmth and visual richness to walls and surfaces.',
      'Real fabric finishes offer a more pronounced textile appearance, delivering depth and realism that elevate both residential and commercial spaces.',
      'Embossed & gold accents add dimension and a touch of elegance, catching the light to create refined highlights and distinctive design statements.',
      'Together, these finishes offer a tactile and expressive palette — combining natural inspiration, material richness, and durability for impactful interior transformations.'
    ],
    features: [
      'Metal - Contemporary industrial edge',
      'Natural fabric - Soft, organic warmth',
      'Real fabric - Pronounced textile appearance',
      'Embossed & gold - Dimensional elegance'
    ],
    externalLink: '',
    folderName: 'natural'
  },
  {
    id: 'marble',
    name: 'STONE & MARBLE',
    tagline: 'Surface Finishes',
    subtitle: 'Timeless Elegance and Natural Beauty',
    description: [
      'When it comes to creating timeless and sophisticated interiors, stone and marble finishes bring a sense of elegance, depth, and natural beauty to any space.',
      'Premium marble designs offer refined veining and rich tonal variations, delivering a high-end look that elevates both residential and commercial environments.',
      'Stone marble finishes combine the raw character of stone with the elegance of marble, creating balanced, versatile surfaces that suit modern, classic, and transitional interiors.',
      'Together, these finishes provide a luxurious yet practical solution — capturing the beauty of natural stone while ensuring durability, consistency, and ease of installation for interior transformations.'
    ],
    features: [
      'Premium marble - Refined veining and rich tones',
      'Stone marble - Raw character meets elegance',
      'Luxurious appearance - High-end aesthetic',
      'Versatile application - Modern to classic interiors'
    ],
    externalLink: '',
    folderName: 'marble'
  }
];

export interface Benefit {
  text: string;
  icon: string;
}

export const VINYL_WRAP_BENEFITS: Benefit[] = [
  { text: 'Air-channel self-adhesive for bubble-free application', icon: 'Wind' },
  { text: 'High durability — lasts 10+ years', icon: 'Clock' },
  { text: 'Sustainable, eco-friendly materials', icon: 'Leaf' },
  { text: 'Fire retardant properties (Class A rated)', icon: 'Flame' },
  { text: 'Easy cleaning & maintenance', icon: 'Sparkles' },
  { text: 'Resistance to moisture, bacteria, and mold', icon: 'ShieldCheck' },
  { text: 'Huge variety of textures, colors, and finishes', icon: 'Palette' }
];

export const VINYL_WRAP_APPLICATIONS: Benefit[] = [
  { text: 'Kitchen cabinets and countertops', icon: 'ChefHat' },
  { text: 'Feature walls and ceiling panels', icon: 'LayoutGrid' },
  { text: 'Doors, windows, and fireplace surrounds', icon: 'DoorOpen' },
  { text: 'Office furniture and front desks', icon: 'Briefcase' },
  { text: 'Shower stalls (outside surface)', icon: 'Bath' },
  { text: 'Retail fixtures, hotel interiors, and more', icon: 'Store' }
];

export const VINYL_WRAP_SURFACES: Benefit[] = [
  { text: 'Wood and MDF', icon: 'TreeDeciduous' },
  { text: 'Painted drywall', icon: 'PaintBucket' },
  { text: 'Metal', icon: 'Box' },
  { text: 'Glass', icon: 'GlassWater' },
  { text: 'Laminate', icon: 'Layers' },
  { text: 'Plastic', icon: 'Package' },
  { text: 'Existing films', icon: 'Film' }
];
