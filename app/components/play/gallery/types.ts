export type MediaType = 'image' | 'video' | 'audio';
export type FilterType = 'all' | MediaType | 'latest';

export interface GalleryItem {
  id: string;
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  date: string;
  dimensions?: { width: number; height: number };
  prompt: {
    text: string;
    model: 'DALL-E' | 'Midjourney' | 'Sora' | 'Suno';
    version?: string;
  };
  additionalImages?: string[];
  tags?: string[];
  featured?: boolean;
} 