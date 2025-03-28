"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      
      <div className="container relative px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif mb-6">
              Making the complex{" "}
              <span className="animated-gradient block mt-2">crystal clear.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed"
            >
              Transforming intricate business challenges into elegant, effortless solutions
            </motion.p>
          </motion.div>

          {/* Video/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto md:max-w-none overflow-hidden rounded-2xl bg-black/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-cyan-400/20 rounded-2xl mix-blend-overlay"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src="/videos/crystal.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 