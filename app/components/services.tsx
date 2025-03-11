"use client"

import {
  Presentation, Users, LineChart, Globe, ArrowRight, Palette,
  Code2, FileText, Play, Compass, Linkedin, Megaphone,
  Building2, ShoppingBag, Home, BadgeDollarSign, BrainCircuit, Music,
  Briefcase, Rocket, BarChart3, PenTool, Video, Instagram,
  MessageSquare, Target, Zap, Share2, Database, ShieldCheck
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const industries = [
  {
    id: "saas",
    label: "SaaS",
    icon: Rocket,
    services: [
      {
        icon: Code2,
        title: "MVP Development",
        description: "From concept to clickable prototype, built to validate your ideas and attract early adopters.",
        color: "blue",
      },
      {
        icon: Presentation,
        title: "Pitch Decks",
        description: "Compelling pitch decks that help you raise capital and win over investors.",
        color: "purple",
      },
      {
        icon: Globe,
        title: "Product Website",
        description: "High-converting SaaS websites that showcase your product's value proposition.",
        color: "cyan",
      },
      {
        icon: Database,
        title: "Product Analytics",
        description: "Data-driven insights to optimize your user acquisition and retention strategies.",
        color: "indigo",
      }
    ]
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingBag,
    services: [
      {
        icon: Globe,
        title: "Store Design",
        description: "Beautiful, conversion-optimized online stores that drive sales.",
        color: "purple",
      },
      {
        icon: Target,
        title: "Marketing Strategy",
        description: "Customer acquisition and retention strategies that grow your brand.",
        color: "blue",
      },
      {
        icon: Instagram,
        title: "Social Media",
        description: "Engaging social content that builds brand awareness and drives traffic.",
        color: "cyan",
      },
      {
        icon: Share2,
        title: "Email Marketing",
        description: "Automated email campaigns that nurture leads and boost sales.",
        color: "indigo",
      }
    ]
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Home,
    services: [
      {
        icon: Globe,
        title: "Property Websites",
        description: "Stunning property showcase websites that attract qualified buyers.",
        color: "purple",
      },
      {
        icon: Video,
        title: "Virtual Tours",
        description: "Immersive property tours that bring listings to life.",
        color: "blue",
      },
      {
        icon: PenTool,
        title: "Brand Identity",
        description: "Professional branding that builds trust with clients.",
        color: "cyan",
      },
      {
        icon: Linkedin,
        title: "Agent Profiles",
        description: "Optimized online presence to establish authority in your market.",
        color: "indigo",
      }
    ]
  },
  {
    id: "financial",
    label: "Financial",
    icon: BadgeDollarSign,
    services: [
      {
        icon: ShieldCheck,
        title: "Trust Building",
        description: "Professional web presence that establishes credibility and authority.",
        color: "purple",
      },
      {
        icon: Presentation,
        title: "Client Decks",
        description: "Persuasive presentation materials for client meetings and pitches.",
        color: "blue",
      },
      {
        icon: BarChart3,
        title: "Performance Reports",
        description: "Clear, engaging reports that communicate value to clients.",
        color: "cyan",
      },
      {
        icon: MessageSquare,
        title: "Communication",
        description: "Effective client communication strategies and materials.",
        color: "indigo",
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: BrainCircuit,
    services: [
      {
        icon: Globe,
        title: "Authority Website",
        description: "Professional web presence that positions you as an industry expert.",
        color: "purple",
      },
      {
        icon: FileText,
        title: "Case Studies",
        description: "Compelling case studies that showcase your impact and results.",
        color: "blue",
      },
      {
        icon: Linkedin,
        title: "LinkedIn Strategy",
        description: "LinkedIn optimization to attract high-value clients.",
        color: "cyan",
      },
      {
        icon: Presentation,
        title: "Sales Decks",
        description: "Persuasive presentations that win new business.",
        color: "indigo",
      }
    ]
  },
  {
    id: "artists",
    label: "Artists",
    icon: Music,
    services: [
      {
        icon: Globe,
        title: "Artist Website",
        description: "Creative portfolios that showcase your work and attract opportunities.",
        color: "purple",
      },
      {
        icon: Play,
        title: "EPK & Media Kit",
        description: "Professional press kits that get you noticed by industry gatekeepers.",
        color: "blue",
      },
      {
        icon: Instagram,
        title: "Social Strategy",
        description: "Engaging social presence that grows your audience.",
        color: "cyan",
      },
      {
        icon: Megaphone,
        title: "Release Strategy",
        description: "Strategic promotion plans for your releases and projects.",
        color: "indigo",
      }
    ]
  }
]

export function Services() {
  const [activeIndustry, setActiveIndustry] = useState<string>(industries[0].id)
  const sectionRef = useRef<HTMLElement>(null)
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
              Find the perfect solution for your <span className="animated-gradient">industry</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Select your industry to see how we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white shadow-lg'
                    : 'bg-white hover:bg-slate-50 text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.label}
              </button>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {industries.find(i => i.id === activeIndustry)?.services.map((service, index) => {
            const Icon = service.icon
            const colorClass = service.color === "purple" ? "text-purple-600" 
              : service.color === "blue" ? "text-blue-600"
              : service.color === "cyan" ? "text-cyan-600"
              : "text-indigo-500"
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                style={{ willChange: "opacity, transform" }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10">
                      <Icon className={`h-7 w-7 ${colorClass}`} />
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
        </div>

        {/* Contact CTA */}
        <motion.div 
          variants={cardVariants}
          className="mt-12 text-center"
        >
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-sm font-medium border rounded-xl border-purple-600/20 hover:border-purple-600 bg-gradient-to-r from-purple-600/[0.08] via-blue-500/[0.08] to-cyan-400/[0.08] hover:from-purple-600 hover:via-blue-500 hover:to-cyan-400 hover:text-white transition-all duration-300 group"
          >
            <span>Get Started With Your Industry Solution</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}