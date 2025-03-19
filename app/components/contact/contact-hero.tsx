"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Linkedin, Calendar, Mail, ArrowRight } from "lucide-react"

export function ContactHero() {
  const [copied, setCopied] = useState(false)
  
  const copyEmail = () => {
    navigator.clipboard.writeText("ben@nextstage.co")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4 mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif">
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              If you&apos;re exploring a project, looking for strategic support, or just want to connect — I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <button 
              onClick={copyEmail}
              className="group flex flex-col items-center justify-center p-8 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="rounded-full bg-purple-50 p-4 mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-lg font-medium text-gray-800">Email</span>
              <span className="text-sm text-gray-500 mt-1">ben@nextstage.co</span>
              <div className="mt-4 flex items-center gap-1 text-purple-600">
                <Copy className={`h-4 w-4 transition-all ${copied ? 'text-green-500' : 'opacity-50 group-hover:opacity-100'}`} />
                <span className="text-sm font-medium">{copied ? "Copied!" : "Copy"}</span>
                <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
              </div>
            </button>
            
            <button 
              onClick={() => window.open("https://www.linkedin.com/in/bensegev/", "_blank")}
              className="group flex flex-col items-center justify-center p-8 rounded-xl bg-[#0077b5] hover:bg-[#0369a1] text-white shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="rounded-full bg-white/10 p-4 mb-4">
                <Linkedin className="h-8 w-8" />
              </div>
              <span className="text-lg font-medium">LinkedIn</span>
              <span className="text-sm opacity-75 mt-1">Professional Network</span>
              <div className="mt-4 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-all">
                <span className="text-sm font-medium">Connect</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            
            <button 
              onClick={() => window.open("https://cal.com/bensegev/30min", "_blank")}
              className="group flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <div className="rounded-full bg-white/10 p-4 mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <span className="text-lg font-medium">Schedule</span>
              <span className="text-sm opacity-75 mt-1">30min Strategy Call</span>
              <div className="mt-4 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-all">
                <span className="text-sm font-medium">Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </motion.div>

          {/* Optional: Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-muted-foreground mt-12"
          >
            Currently accepting new projects for Q2 2024
          </motion.p>
        </div>
      </div>
    </section>
  )
} 