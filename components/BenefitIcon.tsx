import React from 'react';
import {
  Droplets,
  Leaf,
  ShieldCheck,
  Zap,
  BugOff,
  Layers,
  Wind,
  Clock,
  Flame,
  Sparkles,
  Palette,
  ChefHat,
  LayoutGrid,
  DoorOpen,
  Briefcase,
  Bath,
  Store,
  TreeDeciduous,
  PaintBucket,
  Box,
  GlassWater,
  Package,
  Film,
  Volume2,
  Waves,
  Wrench,
  Feather,
  CloudRain,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Leaf,
  ShieldCheck,
  Zap,
  BugOff,
  Layers,
  Wind,
  Clock,
  Flame,
  Sparkles,
  Palette,
  ChefHat,
  LayoutGrid,
  DoorOpen,
  Briefcase,
  Bath,
  Store,
  TreeDeciduous,
  PaintBucket,
  Box,
  GlassWater,
  Package,
  Film,
  Volume2,
  Waves,
  Wrench,
  Feather,
  CloudRain,
  CheckCircle2
};

interface BenefitIconProps {
  iconName: string;
  size?: number;
  className?: string;
}

const BenefitIcon: React.FC<BenefitIconProps> = ({ iconName, size = 20, className = '' }) => {
  const Icon = iconMap[iconName];

  if (!Icon) {
    return <ShieldCheck size={size} className={className} />;
  }

  return <Icon size={size} className={className} />;
};

export default BenefitIcon;
