"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  return (
    <section ref={sectionRef} className="w-full py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm mb-4">
            Join Our Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
            Ready to build your <span className="animated-gradient">success story</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join the founders and leaders who've transformed their vision into reality. Let's create a strategic partnership that drives growth and delivers meaningful results for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white hover:scale-[1.02] transition-transform duration-300 font-bold text-lg px-8 py-7 shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 w-full sm:w-auto"
              >
                Start Your Partnership <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button 
                size="lg"
                className="inline-flex items-center justify-center px-8 py-7 text-base font-bold rounded-lg bg-transparent text-blue-600 hover:bg-blue-500 hover:text-white hover:scale-[1.02] transition-all duration-300 border border-blue-200 hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 w-full sm:w-auto"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 