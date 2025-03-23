'use client';

import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Paintbrush, ArrowRight } from 'lucide-react';
import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { Button } from '@/components/ui/button';

// Dynamic import for the PlayPaint component
const PlayPaint = dynamic(() => import('@/app/components/play/PlayPaint').then(mod => ({ default: mod.PlayPaint })), { 
  ssr: false,
  loading: () => <LoadingFallback />
});

// Dynamic import for MenuButton
const MenuButton = dynamic(() => import('@/app/components/homepage/MenuButton').then(mod => ({ default: mod.MenuButton })), { 
  ssr: false 
});

function LoadingFallback() {
  return (
    <div className="relative py-8 md:py-16 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2b3036] backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl overflow-hidden h-[50vh] md:h-[70vh] flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-4 inline-block text-white"
              >
                <Paintbrush className="w-10 h-10 md:w-12 md:h-12" />
              </motion.div>
              <p className="text-gray-400 font-mono">Loading Canvas...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-50">
        <section ref={sectionRef} className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
                  Digital Creative Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                  Express your <span className="animated-gradient">creativity</span>
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Create beautiful artwork with our interactive digital canvas. Perfect for sketching ideas, exploring color combinations, or just having fun.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-7xl mx-auto"
            >
              <Suspense fallback={<LoadingFallback />}>
                <div className="bg-white rounded-lg p-0 sm:p-4 shadow-md overflow-hidden border border-gray-100">
                  <PlayPaint />
                </div>
              </Suspense>
              
              <div className="mt-8 md:mt-12 bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
                <h3 className="text-xl font-bold font-serif mb-4">Using the Paint Tool</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">1</span>
                    </div>
                    <p className="text-muted-foreground">Use the <span className="font-medium text-foreground">brush tool</span> for drawing and the eraser for corrections.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">2</span>
                    </div>
                    <p className="text-muted-foreground">Try the <span className="font-medium text-foreground">bucket tool</span> to fill the entire canvas with a color.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">3</span>
                    </div>
                    <p className="text-muted-foreground">Undo and redo buttons help you experiment without fear.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">4</span>
                    </div>
                    <p className="text-muted-foreground">Save your creation when you're done!</p>
                  </li>
                </ul>
                
                <div className="mt-6 flex justify-center sm:justify-start">
                  <Button 
                    asChild={false}
                    className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-bold shadow-md shadow-purple-500/10 hover:scale-[1.02] group"
                  >
                    <span>Explore More Tools</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 