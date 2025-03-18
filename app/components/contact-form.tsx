"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Copy, Linkedin, Calendar, Mail } from "lucide-react"
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
            
            <div className="grid gap-4">
              <Button 
                className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 flex items-center justify-center gap-2 h-auto py-4"
                variant="outline"
                onClick={copyEmail}
              >
                <Mail className="h-5 w-5 text-purple-600" />
                <span>{copied ? "Copied!" : "ben@nextstage.co"}</span>
                <Copy className={`h-4 w-4 ml-2 transition-opacity ${copied ? 'text-green-500' : 'text-gray-400'}`} />
              </Button>
              
              <Button 
                className="w-full bg-[#0077b5] hover:bg-[#0369a1] text-white flex items-center justify-center gap-2 h-auto py-4"
                onClick={() => window.open("https://www.linkedin.com/in/bensegev/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white flex items-center justify-center gap-2 h-auto py-4"
                onClick={() => window.open("https://cal.com/bensegev/30min", "_blank")}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 