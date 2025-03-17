"use client"

import { Target, Sparkles, Users, Brain } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cover } from "@/app/components/ui/cover"

const features = [
  {
    icon: Target,
    title: "Market-Focused Results",
    description: "Every deliverable is thoughtfully crafted around clear business outcomes, turning your goals into tangible growth.",
    gradientFrom: "from-purple-600",
    gradientTo: "to-purple-400",
  },
  {
    icon: Sparkles,
    title: "Adaptive Collaboration",
    description: "Services flexibly tailored to your evolving needs—seamlessly scaling with your business without friction.",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-300",
  },
  {
    icon: Users,
    title: "One Expert, End-to-End",
    description: "Direct partnership means clarity, accountability, and expert-quality results—no layers, no confusion.",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-indigo-400",
  },
  {
    icon: Brain,
    title: "Accelerated Execution",
    description: "Work moves swiftly and precisely, driven by deep experience and enhanced by the latest tools for unmatched efficiency.",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-400",
  },
]

export function WhyNextStage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container px-4 md:px-6 relative">
        {/* Subtle grid pattern overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Centered Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 md:mb-20 max-w-3xl"
          >
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-cyan-400/20 px-3 py-1 text-sm">
              Why NextStage
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Years of expertise<br />
              <span className="animated-gradient">now enhanced by AI</span>
            </h2>
            <div className="text-muted-foreground md:text-xl mt-6 text-slate-300">
              NextStage now leverages AI to make your projects <Cover variant="smart">smarter</Cover> and <Cover>faster</Cover>, 
              while maintaining the human touch that drives success.
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
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
                className="flex flex-col p-7 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/30 group"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} bg-opacity-10 w-14 h-14 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 