"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FilterType, GalleryItem } from '@/app/components/play/gallery/types';
import { sampleItems } from '@/app/components/play/gallery/data';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';

// Dynamic imports for components that use browser APIs
const GalleryHeader = dynamic(() => import('@/app/components/play/gallery/GalleryHeader').then(mod => ({ default: mod.GalleryHeader })), { ssr: false });
const GalleryGrid = dynamic(() => import('@/app/components/play/gallery/GalleryGrid').then(mod => ({ default: mod.GalleryGrid })), { ssr: false });
const GalleryHero = dynamic(() => import('@/app/components/gallery/GalleryHero').then(mod => ({ default: mod.GalleryHero })), { ssr: false });
const MediaModal = dynamic(() => import('@/app/components/gallery/MediaModal').then(mod => ({ default: mod.MediaModal })), { ssr: false });

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = sampleItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'latest') {
      // Get items from the last month
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      return new Date(item.date) >= oneMonthAgo;
    }
    return item.type === activeFilter;
  });

  const currentIndex = selectedItem ? filteredItems.findIndex(item => item.id === selectedItem.id) : -1;

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-1 bg-surface-50">
        <Suspense fallback={<div className="min-h-screen bg-surface-50" />}>
          <GalleryHero />
          <GalleryHeader 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <GalleryGrid 
            items={filteredItems}
            activeFilter={activeFilter}
            onItemClick={setSelectedItem}
          />
          <MediaModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onNext={currentIndex < filteredItems.length - 1 ? handleNext : undefined}
            onPrevious={currentIndex > 0 ? handlePrevious : undefined}
          />
        </Suspense>
      </main>
      <Footer />
    </motion.div>
  );
} 