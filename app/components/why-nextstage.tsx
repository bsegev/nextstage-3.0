import { Target, Zap, Sparkles, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: Target,
    title: "Market-Focused Results",
    description: "Everything I build is designed to help you secure funding or drive customer growth.",
    gradientFrom: "from-purple-600",
    gradientTo: "to-purple-400",
  },
  {
    icon: Zap,
    title: "AI-Enabled Efficiency",
    description: "Leveraging the latest and greatest for faster delivery without compromising quality.",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-300",
  },
  {
    icon: Sparkles,
    title: "Full-Service Flexibility",
    description: "From branding and MVPs to strategy and sales tools — get what you need when you need it.",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-300",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description: "Work directly with me for consistent quality and communication.",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-indigo-400",
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
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-3 max-w-3xl">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-cyan-400/20 px-4 py-1.5 text-sm font-medium border border-slate-700/50 shadow-inner">
                Why NextStage
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                Designed for your <span className="animated-gradient">success</span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                A unique approach that blends strategic thinking, creative design, and technical excellence
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                className="flex flex-col p-6 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/30 group"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} bg-opacity-10 w-14 h-14 flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 