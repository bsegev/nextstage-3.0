"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function PlayHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className="w-full h-[90vh] relative overflow-hidden flex items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-20"
          style={{ filter: 'brightness(0.8)' }}
          onError={(e) => {
            console.error('Video loading error:', e);
          }}
        >
          <source src="/videos/play-hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="container px-4 md:px-6 relative flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl mx-auto font-serif"
            >
              Where Ideas <span className="animated-gradient">Take Flight</span> and
              {" "}<span className="animated-gradient">Transform</span> Reality
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            >
              A creative lab where design, technology, and strategy converge—transforming raw ideas into tangible innovations that shape tomorrow's possibilities.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-x-4 mt-6"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:scale-[1.02] transition-transform duration-300 font-bold text-lg px-8 py-7 shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30"
            >
              Let's Tinker <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 