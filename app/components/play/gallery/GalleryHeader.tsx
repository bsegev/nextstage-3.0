"use client";

import { motion } from 'framer-motion';
import { FilterType } from './types';

interface GalleryHeaderProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function GalleryHeader({ activeFilter, onFilterChange }: GalleryHeaderProps) {
  // Define filter options with their colors
  const filters = [
    { id: 'all' as FilterType, label: 'Discover All', gradient: true },
    { id: 'latest' as FilterType, label: 'Latest', bgColor: '#f59e0b' },      // amber-500
    { id: 'image' as FilterType, label: 'Images', bgColor: '#3b82f6' },       // blue-500
    { id: 'video' as FilterType, label: 'Videos', bgColor: '#ef4444' },       // red-500
    { id: 'audio' as FilterType, label: 'Audio', bgColor: '#8b5cf6' },        // purple-500
  ];

  return (
    <>
      {/* Floating Header - adjusted to be below the main header */}
      <motion.header 
        className="sticky top-16 z-30 bg-white shadow-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="font-serif text-2xl text-gray-800 font-bold">AI Art Gallery</h1>
            <nav className="hidden md:flex items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => onFilterChange(filter.id)}
                  className={`relative font-mono text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? 'text-white font-medium' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    background: activeFilter === filter.id 
                      ? filter.gradient 
                        ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' // blue to purple gradient
                        : filter.bgColor
                      : '',
                  }}
                >
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Filters - adjusted position to be below the main header */}
      <div className="md:hidden overflow-x-auto scrollbar-hide sticky top-[89px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 px-6 py-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`relative whitespace-nowrap font-mono text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'text-white font-medium' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{
                background: activeFilter === filter.id 
                  ? filter.gradient 
                    ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' // blue to purple gradient
                    : filter.bgColor
                  : '',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
} 