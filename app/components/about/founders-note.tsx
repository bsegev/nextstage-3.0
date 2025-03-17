"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FoundersNote() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 rounded-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-900/5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-8">
                Founder&apos;s Note
              </h2>
              <p className="text-gray-600 text-xl md:text-2xl mb-8 leading-relaxed font-light">
                NextStage is the culmination of years helping businesses launch, scale, and find clarity. I&apos;m deeply committed to bringing this experience directly to you
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
                  —because great businesses deserve thoughtful partnerships
                </span>.
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>
                  <p className="text-xl font-bold text-gray-900">Ben Segev, Founder</p>
                </div>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg px-8"
                >
                  <Link href="/contact">Schedule Your Strategy Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 