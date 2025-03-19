"use client"

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import React, { useRef, useState } from "react"

const principles = [
  {
    number: "01",
    title: "Strategy without execution is just theory",
    details: "I bridge both worlds."
  },
  {
    number: "02",
    title: "Real impact comes from understanding the entire system, not just parts",
    details: "Everything must work together."
  },
  {
    number: "03",
    title: "The best solutions emerge when design meets engineering",
    details: "Strategy is the bridge between them."
  },
  {
    number: "04",
    title: "Move fast, but build things right",
    details: "Speed shouldn't compromise quality."
  },
  {
    number: "05",
    title: "Plan for pivots",
    details: "The best solutions adapt as opportunities emerge."
  },
  {
    number: "06",
    title: "Excellence should be accessible",
    details: "Great work shouldn't require enterprise budgets."
  }
]

export function WhyNextStage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-12 md:py-24 overflow-hidden bg-white"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(124,58,237,0.02)_0%,rgba(37,99,235,0.02)_50%,rgba(34,211,238,0.02)_100%)]" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div 
          style={{ opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Header - Matched to services style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
                Principles & Approach
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                Lessons Learned & <span className="animated-gradient">Applied Daily</span>
              </h2>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Bulletin Board */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[500px] lg:min-h-[480px] bg-slate-50 rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 overflow-hidden"
            >
              {/* Subtle texture */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              
              {/* Grid of post-it notes */}
              <div className="relative grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 h-full">
                {[
                  {
                    text: "Build to\nLAST",
                    color: "yellow",
                    rotate: -2,
                    scale: 1
                  },
                  {
                    text: "We have\nVISION",
                    color: "blue",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: "PEOPLE\nFIRST",
                    color: "green",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Start from\nWHY",
                    color: "pink",
                    rotate: 2,
                    scale: 1
                  },
                  {
                    text: "Open\nMINDED",
                    color: "purple",
                    rotate: -3,
                    scale: 1
                  },
                  {
                    text: "We 🫶\ndigital",
                    color: "orange",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: {
                      part1: "DO",
                      strike1: "N'T",
                      space: " ",
                      strike2: "QU",
                      part2: "IT"
                    },
                    color: "yellow",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Design\nMATTERS",
                    color: "blue",
                    rotate: 2,
                    scale: 1
                  },
                  {
                    text: "Move\nFAST",
                    color: "green",
                    rotate: -2,
                    scale: 1
                  },
                  {
                    text: "Remote by\nDESIGN",
                    color: "pink",
                    rotate: 1,
                    scale: 1
                  },
                  {
                    text: "Stay\nAGILE",
                    color: "purple",
                    rotate: -1,
                    scale: 1
                  },
                  {
                    text: "Think\nBIG",
                    color: "orange",
                    rotate: 2,
                    scale: 1
                  }
                ].map((note, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`
                      post-it w-full aspect-square p-2 sm:p-3 md:p-4 transition-all duration-300
                      transform cursor-pointer
                      ${note.color === 'yellow' && 'bg-amber-100'}
                      ${note.color === 'blue' && 'bg-sky-100'}
                      ${note.color === 'green' && 'bg-emerald-100'}
                      ${note.color === 'pink' && 'bg-pink-100'}
                      ${note.color === 'purple' && 'bg-purple-100'}
                      ${note.color === 'orange' && 'bg-orange-100'}
                    `}
                    style={{
                      ['--rotate' as string]: `${note.rotate}deg`,
                      rotate: `${note.rotate}deg`,
                      scale: note.scale,
                    } as const}
                  >
                    <div className="h-full w-full flex items-center justify-center text-center">
                      {typeof note.text === 'string' ? (
                        <p className={`
                          font-kalam text-sm sm:text-base md:text-lg font-bold whitespace-pre-line leading-tight
                          ${note.color === 'yellow' && 'text-amber-900'}
                          ${note.color === 'blue' && 'text-sky-900'}
                          ${note.color === 'green' && 'text-emerald-900'}
                          ${note.color === 'pink' && 'text-pink-900'}
                          ${note.color === 'purple' && 'text-purple-900'}
                          ${note.color === 'orange' && 'text-orange-900'}
                        `}
                        style={{
                          fontFamily: 'var(--font-kalam)',
                        }}
                        >
                          {note.text}
                        </p>
                      ) : (
                        <p className={`
                          font-kalam text-sm sm:text-base md:text-lg font-bold leading-tight
                          ${note.color === 'yellow' && 'text-amber-900'}
                        `}
                        style={{
                          fontFamily: 'var(--font-kalam)',
                        }}
                        >
                          <span className="flex flex-col items-center gap-1 sm:gap-2">
                            <span className="flex items-center">
                              <span>{note.text.part1}</span>
                              <span className="relative">
                                <span className="text-amber-600/90">{note.text.strike1}</span>
                                <span className="absolute inset-x-0 top-1/2 h-[2px] bg-amber-700/90 -rotate-6"></span>
                              </span>
                            </span>
                            <span className="flex items-center">
                              <span className="relative">
                                <span className="text-amber-600/90">{note.text.strike2}</span>
                                <span className="absolute inset-x-0 top-1/2 h-[2px] bg-amber-700/90 -rotate-6"></span>
                              </span>
                              <span>{note.text.part2}</span>
                            </span>
                          </span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative pins */}
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-slate-400 shadow-inner" />
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-slate-400 shadow-inner" />
              <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-slate-400 shadow-inner" />
              <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-slate-400 shadow-inner" />
            </motion.div>

            {/* Right Column - Principles */}
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="relative rounded-lg transition-all duration-300">
                      <div className={`absolute inset-0 rounded-lg transition-colors duration-300 ${activeIndex === index ? 'bg-gradient-to-r from-purple-50 to-blue-50' : 'group-hover:bg-slate-50'}`} />
                      <div className="relative px-6 py-4">
                        <div className="flex items-baseline gap-4">
                          <span className="text-sm font-mono text-purple-500 opacity-50">{principle.number}</span>
                          <div>
                            <h3 className="text-lg font-medium text-slate-900 mb-1">
                              {principle.title}
                            </h3>
                            <AnimatePresence>
                              {activeIndex === index && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="text-slate-500 text-sm"
                                >
                                  {principle.details}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-600 font-serif italic">
                "I'm here to ensure everything holds together, works at its best, and moves you forward."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 