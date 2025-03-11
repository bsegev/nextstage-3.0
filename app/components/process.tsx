"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

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

  // Set up intersection observers for mobile
  useEffect(() => {
    if (!isMobile) return

    const options = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = stepRefs.current.findIndex(ref => ref === entry.target)
          if (stepIndex !== -1) {
            setActiveStep(stepIndex + 1)
            // Scroll the step into view with smooth behavior
            entry.target.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          }
        }
      })
    }, options)

    // Observe each step
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [isMobile])

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
          className={`process-container relative ${isMobile ? 'space-y-6' : ''}`}
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
              onMouseEnter={() => !isMobile && setActiveStep(index + 1)}
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
            className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200 -z-10 origin-top hidden md:block"
          />
        </div>

        {/* Mobile progress indicator */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50"
          >
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-1 h-1 rounded-full bg-purple-600"></div>
              <span className="text-gray-600">Step {activeStep} of {processSteps.length}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 