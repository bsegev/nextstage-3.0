"use client";

import React, { useState } from 'react';
import { Tooltip } from './tooltip';

export interface LinkPreviewProps {
  url: string;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function LinkPreview({
  url,
  title,
  description,
  thumbnailUrl,
  disabled = false,
  children,
}: LinkPreviewProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    setIsClicked(true);
    
    // Navigate to URL 
    window.open(url, "_blank", "noopener,noreferrer");
    
    // Reset click state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  const renderTooltipContent = () => {
    return (
      <div className="w-full">
        {thumbnailUrl && (
          <div className="aspect-video w-full mb-2 rounded-md overflow-hidden bg-gray-100">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
          </div>
        )}
        
        {title && (
          <h4 className="font-medium text-gray-900 mb-1 truncate">
            {title}
          </h4>
        )}
        
        {description && (
          <p className="text-gray-500 text-xs line-clamp-2">
            {description}
          </p>
        )}
      </div>
    );
  };

  return (
    <div 
      className={`relative ${isClicked ? 'scale-95' : 'scale-100'} transition-transform duration-300`}
      onClick={handleClick}
    >
      {disabled ? (
        <div>{children}</div>
      ) : (
        <Tooltip content={renderTooltipContent()}>
          <div className="cursor-pointer">{children}</div>
        </Tooltip>
      )}
    </div>
  );
} 