"use client"

import {
  Presentation,
  Users,
  LineChart,
  Globe,
  ArrowRight,
  Palette,
  Code2,
  FileText,
  Play,
  Compass,
  Linkedin,
  Megaphone,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Responsive, high-converting websites that showcase your brand and drive engagement.",
    color: "cyan",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identity and messaging that makes your business instantly recognizable.",
    color: "cyan",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Compelling messaging and content plans that communicate your value proposition clearly.",
    color: "indigo",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description: "Strategic profile and content optimization to build authority and attract opportunities.",
    color: "cyan",
  },
  {
    icon: Megaphone,
    title: "Marketing Materials",
    description: "Cohesive marketing assets that amplify your message and drive customer acquisition.",
    color: "indigo",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Customer insights and market validation that ensure your product resonates.",
    color: "purple",
  },
  {
    icon: Compass,
    title: "Competitive Analysis",
    description: "Deep market research that identifies opportunities and positions you for success.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Data-driven roadmaps and market positioning that turn your vision into actionable growth plans.",
    color: "indigo",
  },
  {
    icon: Code2,
    title: "MVP Prototypes",
    description: "From concept to clickable prototype, built to validate your ideas and attract early adopters.",
    color: "blue",
  },
  {
    icon: Play,
    title: "Explainer Videos",
    description: "Engaging animated videos that simplify complex ideas and captivate your audience.",
    color: "purple",
  },
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Narratives that grip and designs that dazzle, crafted to make your story unforgettable.",
    color: "purple",
  },
  {
    icon: LineChart,
    title: "Investor Materials",
    description: "Comprehensive fundraising collateral that tells your story and showcases your potential.",
    color: "blue",
  },
]

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
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} id="services" className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <motion.div 
        className="container px-4 md:px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              What NextStage Builds For You
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif overflow-visible">
              Whether you&apos;re preparing to <span className="animated-gradient">secure funding</span>, attract
              customers, or launch your next big idea
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I&apos;ll help you create assets that resonate and strategies that stick.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const colorClass = service.color === "purple" ? "text-purple-600" 
              : service.color === "blue" ? "text-blue-600"
              : service.color === "cyan" ? "text-cyan-600"
              : "text-indigo-500"
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="group relative overflow-hidden rounded-lg bg-white p-5 shadow-md transition-all hover:shadow-lg"
                style={{ willChange: "opacity, transform" }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10">
                      <service.icon className={`h-7 w-7 ${colorClass}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold font-serif mb-1">{service.title}</h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className={`mt-2 flex items-center space-x-2 text-xs ${colorClass}`}>
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          <motion.div 
            variants={cardVariants}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/[0.04] via-blue-500/[0.04] to-cyan-400/[0.04] p-8 md:p-10 col-span-full lg:col-span-3 flex items-center justify-center hover:from-purple-600/[0.08] hover:via-blue-500/[0.08] hover:to-cyan-400/[0.08] transition-all duration-300"
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
        </div>
      </motion.div>
    </section>
  )
}