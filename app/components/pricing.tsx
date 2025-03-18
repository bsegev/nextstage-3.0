import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

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
                className={`h-full p-4 md:p-6 rounded-2xl ${
                  tier.title === 'Signature' 
                    ? 'bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700/30 hover:border-purple-600/50 shadow-lg shadow-purple-900/20' 
                    : 'bg-gray-900/50 border-gray-800/50 hover:border-gray-700/50'
                } border transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 flex flex-col backdrop-blur-sm`}
              >
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
                    <Link 
                      href="#contact" 
                      className={`w-full text-center text-[13px] font-medium py-2 md:py-2.5 inline-block border rounded-xl transition-all duration-300 ${
                        tier.title === 'Signature'
                          ? 'border-purple-500 text-purple-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white'
                          : 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-700 hover:text-white'
                      }`}
                    >
                      Schedule call
                    </Link>
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