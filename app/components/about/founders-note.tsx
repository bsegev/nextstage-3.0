"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/app/context/contact-modal-context"

export function FoundersNote() {
  const { openModal } = useContactModal()
  
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 rounded-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-900/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column - Background */}
                <div className="flex flex-col space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif">
                      Meet the Founder
                    </h2>
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        From helping establish a digital bank to crafting websites for visionary entrepreneurs, 
                        I've spent the last decade building both software and physical products while working 
                        shoulder-to-shoulder with founders across every stage of business development.
                      </p>
                      <p className="text-lg leading-relaxed">
                        As a hands-on leader, I've personally driven design, marketing, and development initiatives—not 
                        just directing but doing. This integrated approach helps me bridge the gap between vision and 
                        execution, whether it's a complete digital transformation or a focused brand initiative.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-purple-500/50 pl-6 italic text-gray-600">
                      "I'm here to help you build something meaningful. It's not just about delivering a 
                      project—it's about creating lasting impact through thoughtful partnership."
                    </blockquote>

                    {/* Signature and Role */}
                    <div className="flex items-center gap-4">
                      <p className="text-xl font-bold text-gray-900">Ben Segev</p>
                      <span className="text-gray-400">|</span>
                      <p className="text-gray-600">Founder & Principal Consultant</p>
                    </div>
                  </div>

                  <Button 
                    className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg px-8 py-6 font-bold shadow-md shadow-purple-500/10 hover:scale-[1.02] w-full sm:w-auto mt-4"
                    onClick={openModal}
                  >
                    Book an Appointment
                  </Button>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center justify-center lg:justify-end h-full">
                  <div className="w-full h-full max-h-[600px] relative rounded-xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <Image 
                      src="/images/headshot_web.png" 
                      alt="Ben Segev" 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      priority
                    />
                    {/* Sophisticated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-900/5 to-transparent mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-500/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 