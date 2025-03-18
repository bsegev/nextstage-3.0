import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useContactModal } from "@/app/context/contact-modal-context"

export default function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.2, once: true })
  const { openModal } = useContactModal()

  const serviceTiers = [
    {
      title: "Essential",
      description: "Quick & premium design execution with strategic thinking embedded into every asset. Perfect for establishing a strong foundation quickly.",
      perfectFor: "Quick-start projects",
      timeEstimate: "1 - 2 weeks",
      investment: "$",
      tags: ["Design"],
      featured: false,
    },
    {
      title: "Signature",
      description: "Premium design execution paired with weekly strategy sessions. Get hands-on guidance to shape your brand's direction and growth strategy.",
      perfectFor: "Early-stage startups",
      timeEstimate: "3 weeks",
      investment: "$$",
      tags: ["Design", "Strategy"],
      featured: true,
    },
    {
      title: "Prestige",
      description: "Your dedicated co-pilot for design, strategy, and tech. Direct collaboration with me to architect and execute your complete business presence.",
      perfectFor: "Funded companies",
      timeEstimate: "4 - 6 weeks",
      investment: "$$$",
      tags: ["Design", "Strategy", "Tech"],
      featured: false,
    },
    {
      title: "Tailored",
      description: "Fully custom, white-glove service—strategically blended and precisely tailored to your organization's exact needs.",
      perfectFor: "Custom partnerships",
      timeEstimate: "TBD",
      investment: "$ - $$$$",
      tags: ["Custom-crafted"],
      featured: false,
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 bg-gray-950">
      <div className="px-4 md:px-8 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 px-3 py-1 text-sm text-gray-300">
              Integration Levels
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-white">
              Choose your level of <span className="animated-gradient inline-block leading-[1.4] h-[1.4em] pb-1">engagement</span>
            </h2>
            <p className="text-gray-400 md:text-lg">
              From focused design execution to fully integrated solutions, find the perfect blend of services based on your needs.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {serviceTiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }
              } : { opacity: 0, y: 20 }}
              className="group aspect-auto md:aspect-[2/2.4]"
            >
              <div 
                className={`h-full p-4 md:p-6 rounded-2xl relative overflow-hidden ${
                  tier.title === 'Signature' 
                    ? 'bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30 hover:border-purple-500/70 shadow-lg shadow-purple-900/30' 
                    : 'bg-gradient-to-b from-gray-800/90 to-gray-900/90 border-gray-400/30 hover:border-gray-400/60 shadow-lg shadow-gray-900/30'
                } border transition-all duration-300 hover:shadow-xl flex flex-col backdrop-blur-sm`}
              >
                {tier.title === 'Signature' ? (
                  <span className="absolute inset-0 pointer-events-none">
                    <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/90 to-transparent"></span>
                    <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/60 to-transparent"></span>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></span>
                    <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/60 to-transparent"></span>
                    <span className="absolute inset-0">
                      <span className="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-shimmer"></span>
                    </span>
                  </span>
                ) : (
                  <span className="absolute inset-0 pointer-events-none">
                    <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></span>
                    <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></span>
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                    <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></span>
                    <span className="absolute inset-0">
                      <span className="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></span>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></span>
                  </span>
                )}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {tier.tags.map((tag, i) => (
                      <span key={i} className={`text-[13px] px-3 py-0.5 rounded-full ${
                        tier.title === 'Signature'
                          ? 'bg-purple-900/70 text-purple-200'
                          : 'bg-gray-800 text-gray-300'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 md:mt-auto">
                  <div>
                    <h3 className={`text-2xl md:text-[28px] font-serif mb-1 md:mb-1.5 ${
                      tier.title === 'Signature' ? 'text-purple-200' : 'text-white'
                    }`}>
                      {tier.title}
                    </h3>
                    <p className="text-[13px] text-gray-400 leading-relaxed mb-2 md:mb-3">
                      {tier.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-2.5 mb-4 md:mb-5">
                    <div className="border-t border-gray-800/50 pt-2 md:pt-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-gray-400">Perfect for</span>
                        <span className="text-[13px] text-gray-300 text-right">{tier.perfectFor}</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-800/50 pt-2 md:pt-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-gray-400">Time estimate</span>
                        <span className="text-[13px] text-gray-300 text-right">{tier.timeEstimate}</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-800/50 pt-2 md:pt-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[13px] font-medium text-gray-400">Investment</span>
                        <span className="text-[13px] text-gray-300 text-right">{tier.investment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button 
                      onClick={openModal}
                      className={`w-full text-center text-sm font-bold py-3.5 md:py-4 inline-block rounded-xl transition-all duration-300 relative overflow-hidden ${
                        tier.title === 'Signature'
                          ? 'border-2 border-purple-400/80 text-purple-200 hover:text-white shadow-md shadow-purple-900/30 hover:shadow-lg hover:shadow-purple-900/50 hover:scale-[1.03] bg-gradient-to-b from-purple-600/30 to-purple-800/30 hover:from-purple-500 hover:to-purple-700'
                          : 'border-2 border-gray-200/30 text-gray-200 hover:text-white shadow-md hover:shadow-lg hover:scale-[1.03] bg-gradient-to-b from-gray-300/10 via-gray-500/5 to-gray-100/5 hover:border-gray-300/50'
                      }`}
                    >
                      {tier.title === 'Signature' ? (
                        <>
                          <span className="absolute inset-0 overflow-hidden">
                            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-200/90 to-transparent"></span>
                            <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-purple-200/70 to-transparent"></span>
                            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-200/60 to-transparent"></span>
                            <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-200/70 to-transparent"></span>
                          </span>
                          <span className="absolute inset-0 -z-10">
                            <span className="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-purple-300/30 to-transparent animate-shimmer"></span>
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="absolute inset-0 overflow-hidden">
                            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent"></span>
                            <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/70 to-transparent"></span>
                            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
                            <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/70 to-transparent"></span>
                          </span>
                          <span className="absolute inset-0 -z-10">
                            <span className="absolute -inset-full h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></span>
                        </>
                      )}
                      <span className="relative z-10">Schedule call</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 