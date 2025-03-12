"use client"

import Link from "next/link"
import { ArrowLeft, Check, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { ServiceData } from "@/app/data/servicesData"
import { getIconByName } from "@/app/utils/icon-map"

interface ServiceDetailProps {
  service: ServiceData
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  // Get the icon component
  const Icon = getIconByName(service.iconName);

  return (
    <div className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-wrap items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-gray-400" />
            <Link href="/#services" className="hover:text-gray-700 transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5 mx-1.5 text-gray-400" />
            <span className="text-gray-900 font-medium">{service.title}</span>
          </div>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center mb-5">
                <div className="mr-4 md:mr-5 p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10">
                  <Icon className="h-7 w-7 md:h-9 md:w-9 text-blue-600" />
                </div>
                <div>
                  <div className="mb-1">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </motion.div>

            {/* Full description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-lg max-w-none mb-12"
            >
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold font-serif mb-6 flex items-center">
                <span className="mr-2">What&apos;s Included</span>
                <div className="h-px flex-grow ml-4 bg-gradient-to-r from-purple-200 to-transparent"></div>
              </h2>
              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-5 rounded-xl border border-gray-100 bg-gradient-to-br from-purple-600/[0.02] via-blue-500/[0.02] to-cyan-400/[0.02] hover:from-purple-600/[0.05] hover:via-blue-500/[0.05] hover:to-cyan-400/[0.05] hover:shadow-sm transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, y: 30, x: 0 }} 
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-gray-200 overflow-hidden bg-white mb-6 shadow-sm"
              >
                <div className="p-6 md:p-7 border-b border-gray-100">
                  <h3 className="text-xl font-bold font-serif mb-5 text-gray-900">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                        className="flex group"
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 flex items-center justify-center mr-3 mt-0.5 group-hover:from-purple-600/20 group-hover:via-blue-500/20 group-hover:to-cyan-400/20 transition-all duration-300">
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 md:p-7 bg-gradient-to-br from-purple-600/5 via-blue-500/5 to-cyan-400/5">
                  <h3 className="text-xl font-bold font-serif mb-3 text-gray-900">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-700 mb-4">{service.cta.text}</p>
                  <a 
                    href="#contact"
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 rounded-lg px-4 py-3 text-sm font-medium shadow-sm hover:shadow transform hover:-translate-y-0.5"
                  >
                    {service.cta.action}
                  </a>
                </div>
              </motion.div>
              
              <Link 
                href="/#services" 
                className="flex items-center text-gray-500 hover:text-gray-700 transition-colors justify-center text-sm mt-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 