export type Language = 'es' | 'en' | 'zh' | 'ko';

export interface MediaItem {
  id?: string | number;
  url?: string;
  filename?: string;
  alt?: string;
  [key: string]: any;
}

export interface PracticeArea {
  id?: string | number;
  title: string;
  slug: string;
  icon?: string;
  image?: string | MediaItem;
  shortDescription: string;
  fullDescription: string;
  order?: number;
}

export interface TeamMember {
  id?: string | number;
  name: string;
  slug: string;
  role: string;
  email: string;
  phone?: string;
  photoStanding?: string | MediaItem;
  photoSitting?: string | MediaItem;
  bio: string;
  education: string;
  practiceAreas?: (string | PracticeArea)[];
  order?: number;
}

export interface GalleryCategory {
  id?: string | number;
  title: string;
  slug?: string;
  order?: number;
  images?: Array<{
    id?: string | number;
    image: string | MediaItem;
  }>;
}

export interface GalleryItem {
  id?: string | number;
  title?: string;
  category?: string;
  image?: string | MediaItem;
  imageUrl?: string;
  description?: string;
  order?: number;
}

export interface VideoItem {
  id?: string | number;
  title: string;
  category?: string;
  videoUrl?: string;
  videoFile?: string | MediaItem;
  youtubeUrl?: string;
  thumbnail?: string | MediaItem;
  description?: string;
  featured?: boolean;
  order?: number;
}

export interface PortadaConfig {
  id?: string | number;
  videoFile?: string | MediaItem | null;
  videoUrl?: string | null;
  posterImage?: string | MediaItem | null;
  eyebrow?: string | null;
  title?: string | null;
  subtitle?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
}
