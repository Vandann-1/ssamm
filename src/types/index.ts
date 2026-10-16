export type Language = 'mr' | 'en' | 'hi';

export interface Announcement {
  id: string;
  date: string;
  badge: {
    mr: string;
    en: string;
    hi: string;
  };
  title: {
    mr: string;
    en: string;
    hi: string;
  };
  details: {
    mr: string;
    en: string;
    hi: string;
  };
  link?: string;
  isUrgent?: boolean;
}

export interface AartiSchedule {
  id: string;
  name: {
    mr: string;
    en: string;
    hi: string;
  };
  time: string;
  description: {
    mr: string;
    en: string;
    hi: string;
  };
  significance: {
    mr: string;
    en: string;
    hi: string;
  };
}

export interface FestivalEvent {
  id: string;
  dayNumber: number;
  date: string;
  title: {
    mr: string;
    en: string;
    hi: string;
  };
  time: string;
  location: {
    mr: string;
    en: string;
    hi: string;
  };
  description: {
    mr: string;
    en: string;
    hi: string;
  };
  highlight?: boolean;
  category: 'aagaman' | 'pooja' | 'cultural' | 'visarjan' | 'aarti';
}

export interface GalleryItem {
  id: string;
  title: {
    mr: string;
    en: string;
    hi: string;
  };
  caption: {
    mr: string;
    en: string;
    hi: string;
  };
  category: 'darshan' | 'aagaman' | 'decoration' | 'aarti' | 'cultural' | 'visarjan' | 'social';
  year: number;
  imageUrl: string;
  theme?: string;
  isFeatured?: boolean;
}

export interface SocialInitiative {
  id: string;
  title: {
    mr: string;
    en: string;
    hi: string;
  };
  summary: {
    mr: string;
    en: string;
    hi: string;
  };
  fullDescription: {
    mr: string;
    en: string;
    hi: string;
  };
  category: 'cleanliness' | 'food' | 'environment' | 'health' | 'youth';
  year: number;
  imageUrl: string;
  metrics?: {
    mr: string;
    en: string;
    hi: string;
  };
}
