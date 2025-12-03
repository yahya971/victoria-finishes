import React from 'react';

export interface ProductFeature {
  icon: React.ReactNode;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[]; // List of specific advantages (e.g., "Air-channeled adhesive")
  subProducts?: string[]; // Specific product lines (e.g., "Klondike Light")
  technicalIcons?: string[]; // Names of icons to render
}

export interface GalleryItem {
  id: string;
  category: 'Residential' | 'Commercial' | 'BeforeAfter';
  image: string;
  title: string;
}

export interface NavItem {
  label: string;
  href: string;
}