"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, X, Linkedin, Calendar, Mail } from "lucide-react"
import { useContactModal } from "@/app/context/contact-modal-context"

export function ContactModal() {
  const { showModal, closeModal } = useContactModal()
  const [copied, setCopied] = useState(false)
  
  const copyEmail = () => {
    navigator.clipboard.writeText("ben@nextstage.co")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl max-w-md w-full p-6 relative"
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold font-serif">Get in Touch</h3>
              <p className="text-muted-foreground mt-2">Choose your preferred method to connect</p>
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
                onClick={() => {
                  window.open("https://www.linkedin.com/in/bensegev/", "_blank")
                  closeModal()
                }}
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white flex items-center justify-center gap-2 h-auto py-4"
                onClick={() => {
                  window.open("https://cal.com/bensegev/30min", "_blank")
                  closeModal()
                }}
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a 30min Call</span>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 