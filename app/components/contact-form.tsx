"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Copy, Linkedin, Calendar, Mail, ArrowRight } from "lucide-react"
import { useContactModal } from "@/app/context/contact-modal-context"

export function ContactForm() {
  const { openModal } = useContactModal()
  const [copied, setCopied] = useState(false)
  
  const copyEmail = () => {
    navigator.clipboard.writeText("ben@nextstage.co")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              Get Started Today
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Let&apos;s <span className="animated-gradient">create</span> what your business needs to grow
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I work with a limited number of clients to ensure quality. Current availability:{" "}
              <span className="font-bold text-purple-600">3 slots left</span>.
            </p>
          </div>
          <div className="flex flex-col space-y-6 rounded-xl bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-serif">
                Let&apos;s <span className="animated-gradient">Connect</span>
              </h3>
              <p className="text-muted-foreground">
                Choose how you'd like to get in touch:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={copyEmail}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <Mail className="h-8 w-8 text-purple-600 mb-3" />
                <span className="text-sm font-medium text-gray-800">Email</span>
                <span className="text-xs text-gray-500 mt-1">ben@nextstage.co</span>
                <div className="mt-3 flex items-center gap-1 text-purple-600">
                  <Copy className={`h-4 w-4 transition-all ${copied ? 'text-green-500' : 'opacity-50 group-hover:opacity-100'}`} />
                  <span className="text-xs font-medium">{copied ? "Copied!" : "Copy"}</span>
                  <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
                </div>
              </button>
              
              <button 
                onClick={() => window.open("https://www.linkedin.com/in/bensegev/", "_blank")}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-[#0077b5] hover:bg-[#0369a1] text-white shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <Linkedin className="h-8 w-8 mb-3" />
                <span className="text-sm font-medium">LinkedIn</span>
                <span className="text-xs opacity-75 mt-1">Professional Network</span>
                <div className="mt-3 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-all">
                  <span className="text-xs font-medium">Connect</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
              
              <button 
                onClick={() => window.open("https://cal.com/bensegev/30min", "_blank")}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                <Calendar className="h-8 w-8 mb-3" />
                <span className="text-sm font-medium">Schedule</span>
                <span className="text-xs opacity-75 mt-1">30min Strategy Call</span>
                <div className="mt-3 flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-all">
                  <span className="text-xs font-medium">Book Now</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 