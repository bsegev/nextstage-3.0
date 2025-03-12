"use client"

import { useState, useEffect, useRef, TouchEvent } from "react"
import { motion, useInView } from "framer-motion"

export function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  const indicatorTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
  const swipeHintTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })
  const touchStartY = useRef<number | null>(null)

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

  // Set up intersection observers for mobile steps
  useEffect(() => {
    if (!isMobile) return

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = stepRefs.current.findIndex(ref => ref === entry.target)
          if (stepIndex !== -1) {
            setActiveStep(stepIndex + 1)
            
            // Smooth scroll to the active step
            entry.target.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }
      })
    }, options)

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [isMobile])

  // Show swipe hint when section comes into view on mobile
  useEffect(() => {
    if (isInView && isMobile) {
      // Show swipe hint after a short delay
      swipeHintTimeoutRef.current = setTimeout(() => {
        setShowSwipeHint(true)
        
        // Hide swipe hint after 3 seconds
        swipeHintTimeoutRef.current = setTimeout(() => {
          setShowSwipeHint(false)
        }, 3000)
      }, 1000)
    }
    
    return () => {
      if (swipeHintTimeoutRef.current) {
        clearTimeout(swipeHintTimeoutRef.current)
      }
    }
  }, [isInView, isMobile])

  // Handle touch events for swiping
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!isMobile || touchStartY.current === null) return
    
    const touchEndY = e.changedTouches[0].clientY
    const diff = touchStartY.current - touchEndY
    const threshold = 50 // Minimum swipe distance to trigger navigation
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeStep < processSteps.length) {
        // Swiped up - go to next step
        navigateToStep(activeStep + 1)
      } else if (diff < 0 && activeStep > 1) {
        // Swiped down - go to previous step
        navigateToStep(activeStep - 1)
      }
    }
    
    touchStartY.current = null
  }

  // Navigate to a specific step
  const navigateToStep = (stepNumber: number) => {
    if (stepNumber < 1 || stepNumber > processSteps.length) return
    
    setActiveStep(stepNumber)
    const targetStep = stepRefs.current[stepNumber - 1]
    
    if (targetStep) {
      targetStep.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

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

        <div 
          ref={containerRef}
          className={`process-container relative ${isMobile ? 'space-y-6 overflow-y-auto scroll-smooth snap-y snap-mandatory' : ''}`}
          style={isMobile ? { scrollSnapType: 'y mandatory', height: 'calc(100vh - 200px)', overflowY: 'auto', paddingBottom: '2rem' } : {}}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
              className={`process-step ${activeStep === index + 1 ? "active" : ""} ${isMobile ? 'snap-start snap-always min-h-[80vh] flex items-center' : ''}`}
              onMouseEnter={() => !isMobile && setActiveStep(index + 1)}
            >
              <div className={`process-step-inner relative z-10 rounded-lg p-6 transition-all duration-500 ${
                activeStep === index + 1 
                  ? "bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 shadow-lg" 
                  : "bg-white hover:bg-slate-50"
              } ${isMobile ? 'w-full' : ''}`}>
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
            className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200 -z-10 origin-top hidden md:block"
          />
        </div>

        {/* Swipe hint for mobile */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: showSwipeHint ? 1 : 0,
              transition: { duration: 0.3 }
            }}
            className="fixed inset-x-0 top-1/2 z-50 flex justify-center pointer-events-none"
          >
            <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-200/50 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-gray-600 text-sm font-medium">Swipe to navigate</div>
                <div className="flex items-center justify-center space-x-2">
                  <motion.div 
                    animate={{ 
                      y: [0, -8, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 1.5,
                        repeatType: "loop"
                      }
                    }}
                    className="text-purple-600 text-lg"
                  >
                    ↑
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      y: [0, 8, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 1.5,
                        repeatType: "loop"
                      }
                    }}
                    className="text-purple-600 text-lg"
                  >
                    ↓
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile progress indicator with navigation buttons */}
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
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50 pointer-events-auto">
              <div className="flex items-center space-x-4 text-sm whitespace-nowrap">
                <button 
                  onClick={() => navigateToStep(activeStep - 1)} 
                  disabled={activeStep === 1}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${activeStep === 1 ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  ←
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-purple-600"></div>
                  <span className="text-gray-600">Step {activeStep} of {processSteps.length}</span>
                </div>
                <button 
                  onClick={() => navigateToStep(activeStep + 1)} 
                  disabled={activeStep === processSteps.length}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${activeStep === processSteps.length ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 