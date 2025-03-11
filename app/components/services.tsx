"use client"

import {
  Presentation, Users, LineChart, Globe, ArrowRight, Palette,
  Code2, FileText, Play, Compass, Linkedin, Megaphone,
  Building2, ShoppingBag, Home, BadgeDollarSign, BrainCircuit, Music,
  Briefcase, Rocket, BarChart3, PenTool, Video, Instagram,
  MessageSquare, Target, Zap, Share2, Database, ShieldCheck,
  Layout, Search, Lightbulb
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

// Shared core services that can be used across industries
const coreServices = {
  website: {
    icon: Globe,
    title: "Website Development",
    description: "Professional, high-converting websites tailored to your industry needs.",
    color: "purple",
  },
  brand: {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identity and messaging that makes your business instantly recognizable.",
    color: "blue",
  },
  strategy: {
    icon: Lightbulb,
    title: "Growth Strategy",
    description: "Data-driven strategies to reach and convert your target audience.",
    color: "cyan",
  },
  content: {
    icon: FileText,
    title: "Content Strategy",
    description: "Compelling content that communicates your value and engages your audience.",
    color: "indigo",
  }
}

const industries = [
  {
    id: "saas",
    label: "SaaS",
    icon: Rocket,
    description: "Launch and scale your software product with confidence.",
    services: [
      {
        ...coreServices.website,
        title: "Product Website",
        description: "High-converting SaaS websites that showcase your product's value proposition.",
      },
      {
        icon: Code2,
        title: "MVP Development",
        description: "From concept to clickable prototype, built to validate your ideas and attract early adopters.",
        color: "blue",
      },
      {
        icon: Database,
        title: "Product Analytics",
        description: "Data-driven insights to optimize your user acquisition and retention strategies.",
        color: "cyan",
      },
      {
        icon: Presentation,
        title: "Pitch Decks",
        description: "Compelling pitch decks that help you raise capital and win over investors.",
        color: "indigo",
      }
    ]
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingBag,
    description: "Build a thriving online store that converts browsers into buyers.",
    services: [
      {
        ...coreServices.website,
        title: "Store Design",
        description: "Beautiful, conversion-optimized online stores that drive sales.",
      },
      {
        ...coreServices.brand,
        description: "Stand out in a crowded market with a memorable brand identity.",
      },
      {
        icon: Target,
        title: "Marketing Strategy",
        description: "Customer acquisition and retention strategies that grow your brand.",
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
    description: "Showcase properties and build trust with potential clients.",
    services: [
      {
        ...coreServices.website,
        title: "Property Websites",
        description: "Stunning property showcase websites that attract qualified buyers.",
      },
      {
        ...coreServices.brand,
        description: "Professional branding that builds trust with clients.",
      },
      {
        icon: Video,
        title: "Virtual Tours",
        description: "Immersive property tours that bring listings to life.",
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
    description: "Build trust and showcase expertise in financial services.",
    services: [
      {
        ...coreServices.website,
        title: "Trust-Building Website",
        description: "Professional web presence that establishes credibility and authority.",
      },
      {
        ...coreServices.content,
        title: "Financial Content",
        description: "Clear, engaging content that builds trust and educates clients.",
      },
      {
        icon: BarChart3,
        title: "Performance Reports",
        description: "Clear, engaging reports that communicate value to clients.",
        color: "cyan",
      },
      {
        icon: Presentation,
        title: "Client Decks",
        description: "Persuasive presentation materials for client meetings and pitches.",
        color: "indigo",
      }
    ]
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: BrainCircuit,
    description: "Position yourself as the go-to expert in your field.",
    services: [
      {
        ...coreServices.website,
        title: "Authority Website",
        description: "Professional web presence that positions you as an industry expert.",
      },
      {
        ...coreServices.content,
        description: "Thought leadership content that showcases your expertise.",
      },
      {
        icon: FileText,
        title: "Case Studies",
        description: "Compelling case studies that showcase your impact and results.",
        color: "cyan",
      },
      {
        icon: Linkedin,
        title: "LinkedIn Strategy",
        description: "LinkedIn optimization to attract high-value clients.",
        color: "indigo",
      }
    ]
  },
  {
    id: "artists",
    label: "Artists",
    icon: Music,
    description: "Share your art with the world and grow your audience.",
    services: [
      {
        ...coreServices.website,
        title: "Artist Website",
        description: "Creative portfolios that showcase your work and attract opportunities.",
      },
      {
        ...coreServices.brand,
        title: "Artist Brand",
        description: "Develop a unique artistic identity that resonates with your audience.",
      },
      {
        icon: Play,
        title: "EPK & Media Kit",
        description: "Professional press kits that get you noticed by industry gatekeepers.",
        color: "cyan",
      },
      {
        icon: Instagram,
        title: "Social Strategy",
        description: "Engaging social presence that grows your audience.",
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

  const activeIndustryData = industries.find(i => i.id === activeIndustry)

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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-slate-50 text-gray-600 hover:text-gray-900 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.label}
              </button>
            )
          })}
        </div>

        {/* Industry Description */}
        {activeIndustryData && (
          <motion.div 
            variants={cardVariants}
            className="text-center mb-12"
          >
            <p className="text-lg text-muted-foreground">{activeIndustryData.description}</p>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activeIndustryData?.services.map((service, index) => {
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