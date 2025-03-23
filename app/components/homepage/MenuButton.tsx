import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MenuButton() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link href="/">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white shadow-lg"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Back to home</span>
        </Button>
      </Link>
    </div>
  );
} 