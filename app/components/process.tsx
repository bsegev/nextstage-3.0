"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

// Add CSS to hide scrollbars
const scrollbarHideStyles = {
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  WebkitOverflowScrolling: 'touch' as const,
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}

export function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)
  const indicatorTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  // Reset indicator timeout when step changes
  useEffect(() => {
    if (!isMobile) return
    
    // Clear any existing timeout
    if (indicatorTimeoutRef.current) {
      clearTimeout(indicatorTimeoutRef.current)
    }
    
    // Show the indicator
    setShowIndicator(true)
    
    // Hide after 2 seconds
    indicatorTimeoutRef.current = setTimeout(() => {
      setShowIndicator(false)
    }, 2000)
    
    return () => {
      if (indicatorTimeoutRef.current) {
        clearTimeout(indicatorTimeoutRef.current)
      }
    }
  }, [activeStep, isMobile])

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.matchMedia("(hover: none)").matches
      setIsMobile(mobile)
    }
    
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Handle scroll snap on mobile
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return

    let isScrolling = false
    let startX = 0
    let startScrollLeft = 0

    const handleTouchStart = (e: TouchEvent) => {
      if (!carouselRef.current) return
      isScrolling = true
      startX = e.touches[0].pageX
      startScrollLeft = carouselRef.current.scrollLeft
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling || !carouselRef.current) return
      e.preventDefault() // Prevent default scrolling behavior
      
      const x = e.touches[0].pageX
      const walk = x - startX
      carouselRef.current.scrollLeft = startScrollLeft - walk
    }

    const handleTouchEnd = () => {
      if (!isScrolling || !carouselRef.current) return
      isScrolling = false
      
      const itemWidth = carouselRef.current.offsetWidth
      const currentPosition = carouselRef.current.scrollLeft
      const currentIndex = Math.round(currentPosition / itemWidth)
      
      // Snap to the nearest step
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      })
      
      // Update active step
      setActiveStep(currentIndex + 1)
    }

    const carousel = carouselRef.current
    carousel.addEventListener('touchstart', handleTouchStart, { passive: false })
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false })
    carousel.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('touchstart', handleTouchStart)
        carousel.removeEventListener('touchmove', handleTouchMove)
        carousel.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isMobile, activeStep])

  // Scroll to active step when it changes
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return
    
    const scrollToStep = (stepIndex: number) => {
      if (!carouselRef.current) return
      
      const itemWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: (stepIndex - 1) * itemWidth,
        behavior: 'smooth'
      })
    }
    
    scrollToStep(activeStep)
  }, [activeStep, isMobile])

  const processSteps = [
    {
      number: "01",
      title: "Discovery Session",
      description:
        "An in-depth meeting to dive into your business, your team, the market you're going after, as well as your goals. We'll set timelines and cover expectations for our collaboration.",
    },
    {
      number: "02",
      title: "Strategic Deep Dive",
      description:
        "1:1 sessions to see the world through your eyes. We'll analyze your business, market, and backgrounds to conceptualize strategies and designs that will ensure your story resonates.",
    },
    {
      number: "03",
      title: "Concept Workshop",
      description:
        "We'll share our initial design and strategic ideas with you, develop an even deeper understanding of your vision, and collectively agree on a path forward that aligns with your goals.",
    },
    {
      number: "04",
      title: "Creation & Refinement",
      description:
        "Kick back while we use our expertise to craft bespoke assets that celebrate your story, highlight your strengths, and move your audience to action.",
    },
    {
      number: "05",
      title: "Delivery & Implementation",
      description:
        "We deliver your finished assets, integrate any feedback you have, provide strategic guidance for implementation, and ensure you have everything needed for continued success.",
    },
  ]

  return (
    <section ref={sectionRef} id="process" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              <span className="animated-gradient">Bespoke</span> — Process
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our signature process is centered on developing the deepest understanding of your business possible,
              so that when we create your assets, they not only captivate, but drive real results.
            </p>
          </div>
        </motion.div>

        {isMobile ? (
          // Mobile carousel view
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden snap-x snap-mandatory -mx-4 px-4 pb-4 touch-pan-x"
              style={scrollbarHideStyles}
            >
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  ref={(el) => { stepRefs.current[index] = el }}
                  className="flex-shrink-0 w-full snap-center px-2"
                  style={{ scrollSnapAlign: 'center', scrollSnapStop: 'always' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.2 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    } : { opacity: 0, y: 20 }}
                    className={`process-step ${activeStep === index + 1 ? "active" : ""}`}
                  >
                    <div className={`process-step-inner relative z-10 rounded-lg p-6 h-full transition-all duration-500 ${
                      activeStep === index + 1 
                        ? "bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 shadow-lg" 
                        : "bg-white"
                    }`}>
                      <div className="process-number font-serif text-4xl font-bold text-purple-600">{step.number}</div>
                      <div className="process-content pl-8 mt-4">
                        <h3 className="text-xl font-bold font-serif">{step.title}</h3>
                        <div className="h-px w-16 bg-gradient-to-r from-purple-400 to-blue-400 my-3"></div>
                        <p className="text-muted-foreground mt-4">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index + 1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === index + 1 
                      ? "bg-purple-600 w-4" 
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop view
          <div 
            ref={containerRef}
            className="process-container relative"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, y: 20 }}
                className={`process-step ${activeStep === index + 1 ? "active" : ""}`}
                onMouseEnter={() => setActiveStep(index + 1)}
              >
                <div className={`process-step-inner relative z-10 rounded-lg p-6 transition-all duration-500 ${
                  activeStep === index + 1 
                    ? "bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 shadow-lg" 
                    : "bg-white hover:bg-slate-50"
                }`}>
                  <div className="process-number font-serif text-4xl font-bold text-purple-600">{step.number}</div>
                  <motion.div 
                    className="process-content pl-8"
                    initial={false}
                    animate={{ 
                      opacity: activeStep === index + 1 ? 1 : 0,
                      height: activeStep === index + 1 ? "auto" : "0px",
                      marginTop: activeStep === index + 1 ? "1rem" : "0rem"
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="text-xl font-bold font-serif">{step.title}</h3>
                    <div className="process-divider"></div>
                    <p className="text-muted-foreground mt-4">{step.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            {/* Vertical line in the background */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { 
                scaleY: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }
              } : { scaleY: 0 }}
              className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200 -z-10 origin-top"
            />
          </div>
        )}

        {/* Mobile progress indicator */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showIndicator ? 1 : 0,
              y: showIndicator ? 0 : 20,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none"
          >
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50">
              <div className="flex items-center space-x-2 text-sm whitespace-nowrap">
                <div className="w-1 h-1 rounded-full bg-purple-600"></div>
                <span className="text-gray-600">Step {activeStep} of {processSteps.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 