"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useContactModal } from "@/app/context/contact-modal-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useContactModal()

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/play", label: "Play" },
    { href: "/contact", label: "Contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-8 h-8"
          >
            <img 
              src="/images/logo-mark-gradient.svg" 
              alt="NextStage Logo" 
              className="w-full h-full"
            />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-bold text-xl animated-gradient font-serif"
          >
            NextStage
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link 
                href={item.href}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:text-primary hover:bg-gray-100/50"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: menuItems.length * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Button 
              asChild={false}
              className="ml-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-bold shadow-md shadow-purple-500/10 hover:scale-[1.02]"
              onClick={openModal}
            >
              Schedule Call
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden border-t"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100/50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3,
                  delay: menuItems.length * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Button 
                  asChild={false}
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-bold shadow-md shadow-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 py-3"
                  onClick={() => {
                    setIsOpen(false)
                    openModal()
                  }}
                >
                  Schedule Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 