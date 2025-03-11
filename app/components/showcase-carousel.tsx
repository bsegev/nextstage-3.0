"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

type ShowcaseItem = {
  title: string
  descr: string
  image: string
  bgImage: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Real Estate Developer",
    descr: "PITCH DECK",
    image: "/showcase/sp_deck.jpg",
    bgImage: "/showcase/sp-bg.jpg"
  },
  {
    title: "AI Podcast Platform",
    descr: "WEBSITE",
    image: "/showcase/ai-podcast-mockup.jpg",
    bgImage: "/showcase/ai-podcast-bg.jpg"
  },
  {
    title: "Banking Platform",
    descr: "MOBILE APP",
    image: "/showcase/bank-comparison.png",
    bgImage: "/showcase/bank-bg.png"
  },
  {
    title: "Energy Platform",
    descr: "DASHBOARD",
    image: "/showcase/energy-comparison.jpg",
    bgImage: "/showcase/energy-bg.jpg"
  },
  {
    title: "Photography Portfolio",
    descr: "WEBSITE",
    image: "/showcase/photographer-portfolio.png",
    bgImage: "/showcase/photography-bg.png"
  },
  {
    title: "Health & Wellness",
    descr: "MOBILE APP",
    image: "/showcase/weight-loss-comparison.png",
    bgImage: "/showcase/weight-loss-bg.png"
  }
]

export function ShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const nextIndex = (activeIndex + 1) % showcaseItems.length
    console.log(`Moving to next slide: ${nextIndex} of ${showcaseItems.length}`)
    setActiveIndex(nextIndex)
    setTimeout(() => setIsAnimating(false), 1500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const prevIndex = (activeIndex - 1 + showcaseItems.length) % showcaseItems.length
    console.log(`Moving to previous slide: ${prevIndex} of ${showcaseItems.length}`)
    setActiveIndex(prevIndex)
    setTimeout(() => setIsAnimating(false), 1500)
  }

  return (
    <motion.section 
      ref={sectionRef} 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }
      } : { opacity: 0, scale: 0.98 }}
      className="relative w-full h-[100vh] overflow-hidden bg-black"
    >
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-10 left-4 md:left-10 text-white z-10"
      >
        <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
          Showcase
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl font-serif mt-2">
          Recent <span className="animated-gradient">Projects</span>
        </h2>
      </motion.div>

      {/* Title showing current slide for debugging */}
      <div className="absolute top-4 right-4 text-white/50 text-sm z-50">
        Slide {activeIndex + 1} of {showcaseItems.length}
      </div>
      
      <div ref={containerRef} className="relative w-full h-full">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{ pointerEvents: index === activeIndex ? 'auto' : 'none' }}
          >
            {/* Background Image with Parallax */}
            <motion.div 
              initial={{ x: index < activeIndex ? "-100%" : "100%" }}
              animate={{ x: index === activeIndex ? "0%" : index < activeIndex ? "-100%" : "100%" }}
              transition={{ 
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0"
            >
              <Image
                src={item.bgImage}
                alt=""
                fill
                className="object-cover opacity-30"
                priority
              />
            </motion.div>
            
            {/* Main Image and Text Container */}
            <motion.div
              initial={{ x: index < activeIndex ? "-100%" : "100%" }}
              animate={{ x: index === activeIndex ? "0%" : index < activeIndex ? "-100%" : "100%" }}
              transition={{ 
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0"
            >
              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80vw] md:w-[65vw] h-[42.5vw] md:h-[34.5vw]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top rounded-[2rem] shadow-2xl bg-white/5 backdrop-blur-sm"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={index === activeIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-16 md:bottom-10 left-4 md:left-10 text-white z-10"
              >
                <p className="text-sm font-medium tracking-wider mb-2">{item.descr}</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-3">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Website</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Pitch Deck</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Investor Materials</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Copywriting</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Branding</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Website</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Copywriting</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">CMS</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Full Service Partnership</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Sales Coaching</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Onboarding Streamline</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Strategy</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Design System</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Branding</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Website</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Sales Decks</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Document Templates</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Copywriting</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">LinkedIn Optimization</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Explainer Videos</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Website</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">CMS</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">SEO</span>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Branding</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Website</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Payment System</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Copywriting</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-gray-800/80 text-gray-300">Explainer Videos</span>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-10 right-4 md:right-10 flex space-x-4"
      >
        <button
          onClick={handlePrev}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          →
        </button>
      </motion.div>

      {/* Progress Indicators */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-3 md:right-10 -translate-y-1/2 flex flex-col space-y-2"
      >
        {showcaseItems.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-7 md:h-8 rounded-full transition-all duration-500 ${
              index === activeIndex ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </motion.div>
    </motion.section>
  )
} 