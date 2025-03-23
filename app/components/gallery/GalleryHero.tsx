"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function GalleryHero() {
  return (
    <div className="relative mt-16 min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Studio image background */}
        <div className="relative h-full w-full">
          <Image 
            src="/images/studio.jpg"
            alt="Art studio"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm mb-6 text-white/90">
            Creative Explorations
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            AI-Generated 
            <span className="block mt-2 sm:mt-3">
              <span className="animated-gradient">Artwork Gallery</span>
            </span>
          </h1>
          
          <p className="text-white/80 md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our collection of AI-generated artwork created with cutting-edge tools like DALL-E, Midjourney, and Sora. Each piece represents the intersection of human creativity and machine intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 