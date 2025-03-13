"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Users, Eye } from "lucide-react"

export function DesignImpact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  const stats = [
    {
      icon: Clock,
      value: "0.05",
      unit: "seconds",
      description: "to make a first impression online and keep visitors scrolling"
    },
    {
      icon: Users,
      value: "57",
      unit: "%",
      description: "won't recommend businesses with poorly designed mobile sites"
    },
    {
      icon: Eye,
      value: "38",
      unit: "%",
      description: "stop engaging with bad layouts leading to a higher bounce rate"
    }
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-serif text-center mb-8">
            Visual design is how people make <span className="animated-gradient">real decisions</span> in the age of the internet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, y: 20 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 md:text-center"
              >
                <div className="flex md:flex-col h-full">
                  <div className="w-24 md:w-full md:aspect-[3/1] bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0 px-6 py-6 md:p-6">
                    <div className="flex items-baseline mb-2 md:justify-center">
                      <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                      <span className="text-lg text-gray-600 ml-1">{stat.unit}</span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }
            } : { opacity: 0, y: 20 }}
            className="bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 rounded-xl p-6 md:p-8 border border-gray-100"
          >
            <h3 className="text-lg font-bold tracking-tight text-center mb-3">THE REALITY</h3>
            <p className="text-center text-gray-700 md:text-lg">
              In today&apos;s online environment, visual design isn&apos;t just aesthetics, it&apos;s{' '}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
                business strategy
              </span>.
              It demands consistency in voice, identity, and content — all of which take significant 
              time and resources to maintain. You can either make the time to do it yourself, or 
              partner with someone who can scale with you,{' '}
              <span className="font-bold italic relative">
                on your budget
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></span>
              </span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 