"use client";

import { motion } from 'framer-motion';
import { GalleryItem as GalleryItemType, FilterType, MediaType } from './types';
import Image from 'next/image';

interface GalleryItemProps {
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  dimensions?: { width: number; height: number };
  prompt: {
    text: string;
    model: 'DALL-E' | 'Midjourney' | 'Sora' | 'Suno';
    version?: string;
  };
  additionalImages?: string[];
  onClick: () => void;
}

function GalleryItem({ 
  type, 
  src, 
  thumbnail, 
  title, 
  description, 
  onClick,
  dimensions,
  prompt,
  additionalImages
}: GalleryItemProps) {
  return (
    <div 
      className="group w-full h-full bg-surface-50 rounded-xl overflow-hidden relative cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute inset-0">
        {type === 'audio' ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-6">
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Audio waveform visualization */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="flex h-24 items-end space-x-1 relative">
                  {Array.from({ length: 40 }, (_, i) => {
                    // Create a more complex wave pattern with multiple sine frequencies
                    const baseHeight = 20 + Math.sin((i / 40) * Math.PI * 2) * 30;
                    const secondaryHeight = 15 + Math.cos((i / 40) * Math.PI * 4) * 15;
                    const tertiaryHeight = 10 + Math.sin((i / 40) * Math.PI * 6 + 1) * 10;
                    
                    // Combine waves for more organic look
                    let height = (baseHeight + secondaryHeight + tertiaryHeight) / 3;
                    
                    // Add some randomness to make it look more natural
                    height = height * (0.9 + Math.random() * 0.2);
                        
                    // Ensure height stays within reasonable bounds
                    height = Math.max(10, Math.min(height, 90));
                        
                    return (
                      <div 
                        key={i}
                        className="w-1.5 bg-blue-400/70 rounded-full relative group animate-pulse"
                        style={{ 
                          height: `${height}%`,
                          animationDuration: `${1 + Math.random() * 2}s`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      >
                        <div 
                          className="absolute bottom-0 w-full bg-white/30 rounded-full transition-all duration-300"
                          style={{ height: '20%' }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-black/50 border-2 border-white/50 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-white ml-2"></div>
                </div>
              </div>
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                <p className="font-mono text-sm uppercase tracking-wider">Audio Track</p>
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={thumbnail || src}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>
      
      <div className="absolute inset-4 z-10 border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"></div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white text-lg font-serif font-bold mb-1">{title}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{description}</p>
      </div>
      
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 z-20 transition-all duration-300"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/0 group-hover:border-white/50 z-20 transition-all duration-300"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/0 group-hover:border-white/50 z-20 transition-all duration-300"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/0 group-hover:border-white/50 z-20 transition-all duration-300"></div>
      
      {/* Media type indicators in top right */}
      <div className="absolute top-3 right-3 z-20 text-white text-xs px-2 py-1 rounded font-mono"
           style={{
             backgroundColor: type === 'video' ? '#ef4444' : // red-500 for videos
                             type === 'audio' ? '#8b5cf6' : // purple-500 for audio
                             '#3b82f6' // blue-500 for images
           }}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
    </div>
  );
}

interface GalleryGridProps {
  items: GalleryItemType[];
  activeFilter: FilterType;
  onItemClick: (item: GalleryItemType) => void;
}

export function GalleryGrid({ items, activeFilter, onItemClick }: GalleryGridProps) {
  // Filter items based on active filter
  const filteredItems = items.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'latest') {
      // Get items from the last month
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      return new Date(item.date) >= oneMonthAgo;
    }
    return item.type === activeFilter;
  });

  // Check if there are no items for the current filter
  const noContent = filteredItems.length === 0;

  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-[2000px] mx-auto">
        {/* Empty State Message */}
        {noContent && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-20 px-4 text-center"
          >
            <div className="w-32 h-32 mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/40 to-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold mb-4 animated-gradient">Coming Soon!</h3>
            
            <p className="text-lg text-ethereal-dark/70 max-w-md mb-6">
              {activeFilter === 'video' 
                ? "We're crafting mesmerizing videos that will blow your mind. Our creative team is hard at work!"
                : activeFilter === 'audio'
                ? "Our audio experiences are being composed and fine-tuned. Get ready for some ear candy!"
                : "We're busy creating amazing content for this category. Check back soon for fresh inspiration!"}
            </p>
            
            <div className="font-mono text-sm text-ethereal-dark/60">
              Want to see more? <a href="mailto:hello@nextstage.com" className="text-blue-500 hover:text-blue-600 underline transition-colors">Reach out to learn more</a>
            </div>
          </motion.div>
        )}

        {/* Main Grid - Only shown when there is content */}
        {!noContent && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredItems.map((item, index) => {
              // Calculate span based on aspect ratio
              const span = item.dimensions 
                ? Math.ceil((item.dimensions.height / item.dimensions.width) * 2)
                : 1;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative w-full h-full`}
                  style={{ 
                    gridRow: `span ${span}`,
                  }}
                >
                  <GalleryItem
                    type={item.type}
                    src={item.src}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    description={item.description}
                    onClick={() => onItemClick(item)}
                    dimensions={item.dimensions}
                    prompt={item.prompt}
                    additionalImages={item.additionalImages}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
} 