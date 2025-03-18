"use client"

import { useState } from "react"
import { Zap, Palette, Code2, Lightbulb, ArrowRight, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function SynergyDiagram() {
  const [activeCircle, setActiveCircle] = useState<string | null>("center")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const diagramVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const getActiveDetails = () => {
    switch (activeCircle) {
      case "strategy":
        return {
          title: "Strategy",
          icon: Zap,
          description: "Data-informed market analysis and growth planning to position your startup for success in competitive markets.",
          color: "from-purple-600 to-purple-400"
        }
      case "design":
        return {
          title: "Design",
          icon: Palette,
          description: "Human-centered design approach that creates memorable brand experiences and intuitive user interfaces.",
          color: "from-blue-500 to-blue-400"
        }
      case "technology":
        return {
          title: "Technology",
          icon: Code2,
          description: "Modern tech stack implementation with AI integration to build scalable, future-proof solutions.",
          color: "from-cyan-400 to-cyan-300"
        }
      case "strategy-design":
        return {
          title: "Strategy + Design",
          icon: Zap,
          description: "Research-backed design decisions that align user needs with business objectives for maximum impact.",
          color: "from-purple-600 via-blue-500 to-blue-400"
        }
      case "strategy-tech":
        return {
          title: "Strategy + Technology",
          icon: Code2,
          description: "Strategic technology roadmapping that turns business goals into actionable technical architecture.",
          color: "from-purple-600 via-blue-500 to-cyan-300"
        }
      case "design-tech":
        return {
          title: "Design + Technology",
          icon: Palette,
          description: "Seamless integration of design systems with frontend architecture for consistent, maintainable products.",
          color: "from-blue-500 via-blue-400 to-cyan-300"
        }
      case "center":
        return {
          title: "NextStage Synergy",
          icon: Rocket,
          description: "End-to-end delivery combining strategy, design, and technology to create market-ready products that drive growth.",
          color: "from-purple-600 via-blue-500 to-cyan-300"
        }
      default:
        return null
    }
  }

  const activeDetails = getActiveDetails()

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
      <motion.div 
        className="container px-4 md:px-6 mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          variants={itemVariants}
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              Strategic Framework
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              From where you are<span className="animated-gradient">to where you want to go</span>
            </h2>
            <p className="text-muted-foreground md:text-xl">
              An integrated approach to turn your ideas into market-ready solutions through the synergy of strategy, design, and technology. Our solutions are designed to help you get up and running as quickly as possible without compromising quality. Whether you are looking to get your first customer, secure your first investor, launch your product, or grow your digital presence, I can help.
            </p>
          </div>
        </motion.div>

        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            <motion.div 
              variants={itemVariants}
              className="flex-shrink-0 lg:w-1/5 order-1"
            >
              {/* Idea - Static */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4">
                  <Lightbulb className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-2">Your Idea</h3>
                <p className="text-sm text-muted-foreground">Starting point of innovation</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-2">
              <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 flex-shrink-0" />
              <div className="block lg:hidden w-8 h-8 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full rotate-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            <motion.div 
              variants={diagramVariants}
              className="flex flex-col items-center order-3 lg:w-3/5"
            >
              {/* Venn Diagram */}
              <div className="w-[340px] md:w-[400px] lg:w-[500px] aspect-square relative mx-auto">
                <svg 
                  viewBox="0 0 400 400" 
                  className={`w-full h-full transition-transform duration-300 ease-out ${activeCircle ? 'scale-[0.95]' : 'scale-100'}`}
                >
                  {/* Main Circles */}
                  <g>
                    {/* Strategy Circle */}
                    <circle
                      cx="200"
                      cy="150"
                      r="100"
                      className={`transition-all duration-300 ease-out cursor-pointer origin-[200px_150px] hover:lg:scale-[1.02] ${activeCircle === "strategy" ? 'scale-105' : ''}`}
                      style={{
                        fill: `url(#${activeCircle === "strategy" || activeCircle === "center" ? "strategyGradient" : "strategyGradientLight"})`,
                        stroke: "rgb(147, 51, 234)",
                        strokeWidth: activeCircle === "strategy" || activeCircle === "center" ? "3" : "2",
                        strokeOpacity: activeCircle === "strategy" || activeCircle === "center" ? "1" : "0.3"
                      }}
                      onClick={() => setActiveCircle(activeCircle === "strategy" ? null : "strategy")}
                    />
                    {/* Design Circle */}
                    <circle
                      cx="150"
                      cy="250"
                      r="100"
                      className={`transition-all duration-300 ease-out cursor-pointer origin-[150px_250px] hover:lg:scale-[1.02] ${activeCircle === "design" ? 'scale-105' : ''}`}
                      style={{
                        fill: `url(#${activeCircle === "design" || activeCircle === "center" ? "designGradient" : "designGradientLight"})`,
                        stroke: "rgb(59, 130, 246)",
                        strokeWidth: activeCircle === "design" || activeCircle === "center" ? "3" : "2",
                        strokeOpacity: activeCircle === "design" || activeCircle === "center" ? "1" : "0.3"
                      }}
                      onClick={() => setActiveCircle(activeCircle === "design" ? null : "design")}
                    />
                    {/* Technology Circle */}
                    <circle
                      cx="250"
                      cy="250"
                      r="100"
                      className={`transition-all duration-300 ease-out cursor-pointer origin-[250px_250px] hover:lg:scale-[1.02] ${activeCircle === "technology" ? 'scale-105' : ''}`}
                      style={{
                        fill: `url(#${activeCircle === "technology" || activeCircle === "center" ? "techGradient" : "techGradientLight"})`,
                        stroke: "rgb(34, 211, 238)",
                        strokeWidth: activeCircle === "technology" || activeCircle === "center" ? "3" : "2",
                        strokeOpacity: activeCircle === "technology" || activeCircle === "center" ? "1" : "0.3"
                      }}
                      onClick={() => setActiveCircle(activeCircle === "technology" ? null : "technology")}
                    />

                    {/* Center Area - Invisible but clickable */}
                    <path
                      d="M 200,200 
                         A 100,100 0 0,1 250,200 
                         A 100,100 0 0,1 200,250 
                         A 100,100 0 0,1 150,200 
                         A 100,100 0 0,1 200,200"
                      className="cursor-pointer fill-transparent"
                      onClick={() => setActiveCircle(activeCircle === "center" ? null : "center")}
                    />

                    {/* Labels */}
                    <g className="text-sm font-medium pointer-events-none">
                      {/* Strategy Label */}
                      <text 
                        x="200" 
                        y="100" 
                        textAnchor="middle" 
                        className={`font-serif text-lg transition-colors duration-300 ${activeCircle === "strategy" || activeCircle === "center" ? "fill-purple-600 font-bold" : "fill-gray-600"}`}
                      >
                        Strategy
                      </text>

                      {/* Design Label */}
                      <text 
                        x="100" 
                        y="280" 
                        textAnchor="middle" 
                        className={`font-serif text-lg transition-colors duration-300 ${activeCircle === "design" || activeCircle === "center" ? "fill-blue-600 font-bold" : "fill-gray-600"}`}
                      >
                        Design
                      </text>

                      {/* Tech Label */}
                      <text 
                        x="300" 
                        y="280" 
                        textAnchor="middle" 
                        className={`font-serif text-lg transition-colors duration-300 ${activeCircle === "technology" || activeCircle === "center" ? "fill-cyan-600 font-bold" : "fill-gray-600"}`}
                      >
                        Tech
                      </text>

                      {/* Center Label */}
                      <g transform="translate(200, 210)">
                        <rect
                          x="-55"
                          y="-20"
                          width="110"
                          height="34"
                          rx="17"
                          className={`transition-all duration-300 ${
                            activeCircle === "center" 
                              ? "fill-white stroke-[url(#labelGradient)] stroke-[3]" 
                              : "fill-white/50 stroke-transparent"
                          }`}
                          style={{
                            filter: activeCircle === "center" ? "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))" : "none"
                          }}
                        />
                        <text 
                          textAnchor="middle" 
                          dy="5"
                          className={`font-serif text-lg transition-colors duration-300 ${
                            activeCircle === "center" 
                              ? "fill-gray-900 font-bold" 
                              : "fill-gray-600"
                          }`}
                        >
                          NextStage
                        </text>
                      </g>
                    </g>
                  </g>

                  {/* Gradient Definitions */}
                  <defs>
                    <radialGradient id="strategyGradient">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.25)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
                    </radialGradient>
                    <radialGradient id="strategyGradientLight">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.15)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
                    </radialGradient>
                    <radialGradient id="designGradient">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.25)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                    </radialGradient>
                    <radialGradient id="designGradientLight">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                    </radialGradient>
                    <radialGradient id="techGradient">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.25)" />
                      <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
                    </radialGradient>
                    <radialGradient id="techGradientLight">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
                      <stop offset="100%" stopColor="rgba(34, 211, 238, 0.05)" />
                    </radialGradient>
                    <radialGradient id="centerGradient">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.15)" />
                      <stop offset="33%" stopColor="rgba(59, 130, 246, 0.15)" />
                      <stop offset="66%" stopColor="rgba(34, 211, 238, 0.15)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.15)" />
                    </radialGradient>
                    <linearGradient id="fill-gradient-subtle" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.08)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.08)" />
                      <stop offset="100%" stopColor="rgba(34, 211, 238, 0.08)" />
                    </linearGradient>
                    <linearGradient id="labelGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgb(147, 51, 234)">
                        <animate
                          attributeName="offset"
                          values="0;1;0"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop offset="50%" stopColor="rgb(59, 130, 246)">
                        <animate
                          attributeName="offset"
                          values="0.5;1.5;0.5"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop offset="100%" stopColor="rgb(34, 211, 238)">
                        <animate
                          attributeName="offset"
                          values="1;2;1"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Mobile Details Panel */}
              <motion.div 
                variants={itemVariants}
                className="lg:hidden w-full mt-6"
              >
                <div className={`w-full max-w-xl mx-auto transition-all duration-300 ${activeDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  {activeDetails && (
                    <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${activeDetails.color}`}>
                          <activeDetails.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-serif text-lg font-bold">{activeDetails.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{activeDetails.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-4">
              <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 flex-shrink-0" />
              <div className="block lg:hidden w-8 h-8 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full rotate-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex-shrink-0 lg:w-1/5 order-5"
            >
              {/* Solution - Static */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center mb-4">
                  <Rocket className="w-10 h-10 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-2">Solution</h3>
                <p className="text-sm text-muted-foreground">Market-ready product</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Details Panel */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block h-[180px] mt-6 w-full max-w-[700px] mx-auto"
          >
            <div className={`w-full max-w-xl mx-auto transition-all duration-300 ${activeDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              {activeDetails && (
                <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${activeDetails.color}`}>
                      <activeDetails.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-bold">{activeDetails.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{activeDetails.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

