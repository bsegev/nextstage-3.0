"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { servicesData } from "@/app/data/servicesData"
import { getIconByName } from "@/app/utils/icon-map"
import { ArrowRight } from "lucide-react"

export function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    amount: "some", 
    margin: "0px 0px -20% 0px",
    once: true 
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section ref={sectionRef} id="services" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              What NextStage Builds For You
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Whether you&apos;re preparing to <span className="animated-gradient">secure funding</span>, attract customers, or launch your next big idea
            </h2>
            <p className="text-muted-foreground md:text-xl">
              I&apos;ll help you create assets that resonate and strategies that stick.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ willChange: "opacity, transform" }}
        >
          {servicesData.map((service, index) => {
            const Icon = getIconByName(service.iconName);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <Link href={`/services/${service.id}`} className="block h-full">
                  <div className="service-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4 inline-flex items-center justify-center rounded-md p-2" 
                           style={{
                             backgroundColor: service.color === 'purple' 
                               ? 'rgba(147, 51, 234, 0.1)' 
                               : service.color === 'blue' 
                                 ? 'rgba(59, 130, 246, 0.1)' 
                                 : service.color === 'cyan' 
                                   ? 'rgba(6, 182, 212, 0.1)' 
                                   : 'rgba(99, 102, 241, 0.1)'
                           }}>
                        <Icon className="h-6 w-6" 
                           style={{
                             color: service.color === 'purple' 
                               ? 'rgb(147, 51, 234)' 
                               : service.color === 'blue' 
                                 ? 'rgb(59, 130, 246)' 
                                 : service.color === 'cyan' 
                                   ? 'rgb(6, 182, 212)' 
                                   : 'rgb(99, 102, 241)'
                           }}/>
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-serif">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">Learn more &rarr;</div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          
          {/* "And More" Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/[0.04] via-blue-500/[0.04] to-cyan-400/[0.04] p-8 md:p-10 col-span-full sm:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center justify-center hover:from-purple-600/[0.08] hover:via-blue-500/[0.08] hover:to-cyan-400/[0.08] transition-all duration-300"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="text-center">
              <p className="text-2xl font-serif mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">And More...</p>
              <p className="text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
                Every business is unique. Let&apos;s discuss your specific needs and craft a custom solution that drives results.
              </p>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 mt-5 px-6 py-2.5 text-[13px] font-medium border rounded-xl border-purple-600/20 hover:border-purple-600 bg-gradient-to-r from-purple-600/[0.08] via-blue-500/[0.08] to-cyan-400/[0.08] hover:from-purple-600 hover:via-blue-500 hover:to-cyan-400 hover:text-white transition-all duration-300 group"
              >
                <span>Schedule a consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}