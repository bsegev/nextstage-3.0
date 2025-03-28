"use client"

import { motion } from "framer-motion"

export function CoreNarrative() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
                The Reality
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                When execution becomes <span className="animated-gradient">harder</span> than the vision
              </h2>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -left-8 top-0 h-full w-[2px] bg-gradient-to-b from-purple-600/20 via-blue-500/20 to-cyan-400/20"></div>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-light">
                Aligning freelancers, navigating misaligned visions, hiring internally – it can feel harder than building your business itself.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="chevronGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M186 136 C236 216 236 296 186 376 L326 256 L186 136Z" fill="url(#chevronGradient1)" stroke="none" />
                    </svg>
                  </div>
                  <p className="text-gray-900 text-xl md:text-2xl leading-relaxed">
                    Designers disconnected from strategy.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="chevronGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M186 136 C236 216 236 296 186 376 L326 256 L186 136Z" fill="url(#chevronGradient2)" stroke="none" />
                    </svg>
                  </div>
                  <p className="text-gray-900 text-xl md:text-2xl leading-relaxed">
                    Strategists detached from execution.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="chevronGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M186 136 C236 216 236 296 186 376 L326 256 L186 136Z" fill="url(#chevronGradient3)" stroke="none" />
                    </svg>
                  </div>
                  <p className="text-gray-900 text-xl md:text-2xl leading-relaxed">
                    Complex hiring processes that drain your resources.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-r from-purple-600/[0.03] via-blue-500/[0.03] to-cyan-400/[0.03] p-8 md:p-12 rounded-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-serif mb-6">
                The <span className="animated-gradient">Solution</span>
              </h3>
              <p className="text-gray-900 text-xl md:text-2xl leading-relaxed">
                NextStage was built to simplify exactly this.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 font-medium">
                  Thoughtful, strategic, beautifully crafted work shouldn't break the bank
                </span>
                 , it should be accessible, effective, and seamless.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 