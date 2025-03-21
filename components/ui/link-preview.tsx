import React, { ReactNode, useState } from 'react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/components/ui/tooltip";

interface LinkPreviewProps {
  url: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  children: ReactNode;
  disabled?: boolean;
}

export function LinkPreview({
  url,
  title,
  description,
  thumbnailUrl,
  children,
  disabled = false
}: LinkPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
  };

  if (disabled) {
    return <div onClick={(e) => e.preventDefault()}>{children}</div>;
  }

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <a 
            href={url} 
            onClick={handleClick}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="block"
          >
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent 
          side="top"
          align="center"
          className="max-w-md p-0 border-0 shadow-xl"
        >
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            {thumbnailUrl && (
              <div className="w-full h-36 bg-gray-100 overflow-hidden">
                <img 
                  src={thumbnailUrl} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-medium text-base text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 