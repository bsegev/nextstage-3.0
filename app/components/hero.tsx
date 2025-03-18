"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useContactModal } from "@/app/context/contact-modal-context"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { openModal } = useContactModal()

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
          muted
          playsInline
          onEnded={(e) => e.currentTarget.currentTime = e.currentTarget.duration}
          className="object-cover w-full h-full opacity-20"
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src="/videos/ns_hero_bg_vid.mp4" type="video/mp4" />
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
              Turn <span className="animated-gradient">Ideas</span> Into Market-Ready Assets That Drive{" "}
              <span className="animated-gradient">Growth</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            >
              Your business deserves more than just a good idea — it needs tools that deliver results. At NextStage,
              I empower companies to scale through market-ready branding, compelling design, customer-validated MVP
              development, and strategic guidance — all under one roof.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-x-4 mt-6"
          >
            <Button
              asChild={false}
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:scale-[1.02] transition-transform duration-300"
              onClick={openModal}
            >
              Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 