"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { servicesData } from "@/app/data/servicesData"
import { getIconByName } from "@/app/utils/icon-map"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/app/context/contact-modal-context"

export function Services() {
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState<string>("popular")
  const isInView = useInView(sectionRef, { amount: 0.2, once: true })
  const { openModal } = useContactModal()
  
  // Define popular services - the 8 most requested services
  const popularServiceIds = [
    "website-development", 
    "brand-identity", 
    "linkedin-optimization", 
    "content-strategy", 
    "pitch-decks",
    "marketing-strategy",
    "mvp-prototypes",
    "explainer-videos"
  ];

  // Define top 8 services for each category (focused on the goal-based narrative)
  const topBrandServices = [
    "website-development", 
    "brand-identity", 
    "logo-design", 
    "linkedin-optimization",
    "e-commerce-site",
    "ui-ux-design",
    "mobile-app-development",
    "saas-development"
  ];
  
  const topClientsServices = [
    "content-strategy", 
    "marketing-strategy", 
    "social-media-content", 
    "email-campaigns",
    "explainer-videos",
    "blog-articles",
    "marketing-materials",
    "infographics"
  ];
  
  const topFundingServices = [
    "pitch-decks", 
    "investor-materials", 
    "financial-projections", 
    "funding-strategy",
    "pitch-coaching",
    "mvp-prototypes",
    "business-plan",
    "investor-pitch-training"
  ];
  
  const topStrategyServices = [
    "growth-strategy", 
    "competitive-analysis", 
    "product-roadmap", 
    "user-research",
    "website-audit",
    "product-analytics",
    "marketing-strategy",
    "go-to-market-plan"
  ];

  // Map services to goal categories
  const getServiceGoalCategories = (serviceId: string): string[] => {
    switch(serviceId) {
      // Establish Your Brand
      case "website-development":
        return ["build-presence"];
      case "landing-pages":
        return ["build-presence", "grow-audience"];
      case "e-commerce-site":
        return ["build-presence", "grow-audience"];
      case "brand-identity":
        return ["build-presence"];
      case "logo-design":
        return ["build-presence"];
      case "ui-ux-design":
        return ["build-presence"];
      case "linkedin-optimization":
        return ["build-presence", "grow-audience"];
      
      // Attract Clients
      case "marketing-materials":
        return ["grow-audience"];
      case "content-strategy":
        return ["grow-audience"];
      case "explainer-videos":
        return ["grow-audience"];
      case "blog-articles":
        return ["grow-audience"];
      case "email-campaigns":
        return ["grow-audience"];
      case "social-media-content":
        return ["grow-audience"];
      case "marketing-strategy":
        return ["grow-audience", "strategic-direction"];
      case "go-to-market-plan":
        return ["grow-audience", "strategic-direction"];
      case "infographics":
        return ["grow-audience"];
      
      // Raise Capital
      case "pitch-decks":
        return ["secure-funding"];
      case "investor-materials":
        return ["secure-funding"];
      case "funding-strategy":
        return ["secure-funding", "strategic-direction"];
      case "pitch-coaching":
        return ["secure-funding"];
      case "financial-projections":
        return ["secure-funding"];
      case "business-plan":
        return ["secure-funding", "strategic-direction"];
      case "investor-pitch-training":
        return ["secure-funding"];
      
      // Get Strategic Guidance
      case "growth-strategy":
        return ["strategic-direction"];
      case "competitive-analysis":
        return ["strategic-direction"];
      case "user-research":
        return ["strategic-direction", "grow-audience"];
      case "website-audit":
        return ["strategic-direction", "build-presence"];
      case "product-roadmap":
        return ["strategic-direction"];
      case "product-analytics":
        return ["strategic-direction"];
      
      // Technical Implementation - recategorized to be more outcome-focused
      case "web-app-development":
        return ["build-presence"];
      case "mvp-prototypes":
        return ["build-presence", "secure-funding"];
      case "mobile-app-development":
        return ["build-presence"];
      case "saas-development":
        return ["build-presence"];
      
      // Default
      default:
        return ["build-presence", "grow-audience", "secure-funding", "strategic-direction"];
    }
  }

  // Filter services based on active category and sort to prioritize top services
  const filteredServices = activeCategory === "popular" 
    ? servicesData.filter(service => popularServiceIds.includes(service.id))
        .sort((a, b) => {
          return popularServiceIds.indexOf(a.id) - popularServiceIds.indexOf(b.id);
        })
    : servicesData.filter(service => {
        const categories = getServiceGoalCategories(service.id);
        if (!categories.includes(activeCategory)) return false;
        
        // Only show top 8 services for each category
        const topServices = activeCategory === "build-presence" ? topBrandServices :
                           activeCategory === "grow-audience" ? topClientsServices :
                           activeCategory === "secure-funding" ? topFundingServices :
                           topStrategyServices;
                           
        return topServices.includes(service.id);
      })
      .sort((a, b) => {
        const topServices = activeCategory === "build-presence" ? topBrandServices :
                           activeCategory === "grow-audience" ? topClientsServices :
                           activeCategory === "secure-funding" ? topFundingServices :
                           topStrategyServices;
        
        return topServices.indexOf(a.id) - topServices.indexOf(b.id);
      });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section ref={sectionRef} id="services" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              Common Starting Points
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              What do you need to <span className="animated-gradient">accomplish next?</span>
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Most client relationships begin with one of these needs. Each project includes strategic consultation to identify opportunities beyond the initial scope.
            </p>
          </div>
          
          {/* Goal Category Filtering Tabs - Reframed as Starting Points */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8 mb-4"
          >
            <button
              key="popular"
              onClick={() => setActiveCategory("popular")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === "popular"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Most Requested
            </button>
            <button
              key="build-presence"
              onClick={() => setActiveCategory("build-presence")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === "build-presence"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Brand & Digital Presence
            </button>
            <button
              key="grow-audience"
              onClick={() => setActiveCategory("grow-audience")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === "grow-audience"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Marketing & Content
            </button>
            <button
              key="secure-funding"
              onClick={() => setActiveCategory("secure-funding")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === "secure-funding"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Pitch & Fundraising
            </button>
            <button
              key="strategic-direction"
              onClick={() => setActiveCategory("strategic-direction")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === "strategic-direction"
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
              }`}
            >
              Strategy & Planning
            </button>
          </motion.div>
        </motion.div>

        {/* Category Description - New addition */}
        {activeCategory !== "popular" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground">
              {activeCategory === "build-presence" && 
                "The foundation for every business ready to connect with their audience. Converting visitors into customers with strategic design."}
              {activeCategory === "grow-audience" && 
                "Compelling content and marketing strategies that attract your ideal clients and build lasting relationships."}
              {activeCategory === "secure-funding" && 
                "Visual storytelling and financial materials that secure opportunities and convince investors of your vision."}
              {activeCategory === "strategic-direction" && 
                "Planning the path from idea to successful launch. Testing concepts quickly before full investment."}
            </p>
          </motion.div>
        )}

        {activeCategory === "popular" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <p className="text-muted-foreground">
              Not a comprehensive list, but the services clients most frequently reach out for. All projects include strategic consultation to identify additional opportunities.
            </p>
          </motion.div>
        )}

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ willChange: "opacity, transform" }}
        >
          {filteredServices.map((service, index) => {
            const Icon = getIconByName(service.iconName);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <Link href={`/services/${service.id}`} className="block h-full">
                  <div className="service-card bg-white rounded-lg p-0 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex group">
                    <div className="flex items-center justify-center w-12 h-full flex-shrink-0 bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-cyan-400/10 group-hover:from-purple-600/20 group-hover:via-blue-500/20 group-hover:to-cyan-400/20 transition-all duration-300"> 
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col justify-between p-4 w-full">
                      <div>
                        <div className="mb-2">
                          <h3 className="text-base font-bold font-serif">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
                      </div>
                      <div className="flex justify-end mt-3">
                        <span className="text-xs font-medium text-blue-600 hover:underline">Learn more &rarr;</span>
                  </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          
          {/* "And More" Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600/[0.04] via-blue-500/[0.04] to-cyan-400/[0.04] p-8 md:p-10 col-span-full sm:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center justify-center hover:from-purple-600/[0.08] hover:via-blue-500/[0.08] hover:to-cyan-400/[0.08] transition-all duration-300"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="text-center">
              <p className="text-2xl font-serif mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">Experienced Across Industries</p>
              <p className="text-muted-foreground mb-5 max-w-2xl mx-auto">Whether you&apos;re starting out on your own or part of an established company, I can fill the gaps and help move you to the next stage of your efforts.</p>
              <div className="flex flex-wrap justify-center gap-2 mb-5 max-w-4xl">
                {/* First row - 8 tags */}
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors cursor-pointer">Freelancers</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors cursor-pointer">Consultants</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors cursor-pointer">Startups</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors cursor-pointer">E-commerce</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition-colors cursor-pointer">SaaS</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer">Creators</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors cursor-pointer">Agencies</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 transition-colors cursor-pointer">Artists</span>
                
                {/* Second row - 8 tags */}
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-teal-100 text-teal-700 hover:bg-teal-200 transition-colors cursor-pointer">Non-Profits</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors cursor-pointer">Real Estate</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors cursor-pointer">Finance</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors cursor-pointer">Crypto</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors cursor-pointer">Podcasts</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 transition-colors cursor-pointer">Education</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-lime-100 text-lime-700 hover:bg-lime-200 transition-colors cursor-pointer">Healthcare</span>
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition-colors cursor-pointer">Technology</span>
              </div>
              <button 
                onClick={openModal}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 mt-4 text-base font-bold border-2 rounded-xl border-purple-600/30 hover:border-purple-600 bg-gradient-to-r from-purple-600/[0.15] via-blue-500/[0.15] to-cyan-400/[0.15] hover:from-purple-600 hover:via-blue-500 hover:to-cyan-400 hover:text-white transition-all duration-300 group shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 text-purple-700 hover:scale-[1.02]"
              >
                <span className="font-bold">Schedule a consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
              </button>
            </div>
          </motion.div>
          </motion.div>
        </div>
    </section>
  )
} 