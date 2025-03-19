"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials"

const testimonials = [
  {
    quote: "After a quick audit, Ben immediately understood our market challenges and created assets that actually drive business results. One of them was an explainer video that's become the most powerful conversion tool in our outreach. It has 4,000+ YT views and is consistently turning prospects into users. A game-changer for us.",
    name: "Samuel F.",
    designation: "Founder & CEO @ Vome",
    src: "/videos/logo-anim/vome_logo_anim_loop.mp4",
    tags: ["Explainer Video", "Marketing Strategy", "Sales Tools"]
  },
  {
    quote: "Our rebrand was long overdue, so we needed to make quick moves. In just a month, Ben gave ECCAN a fresh digital presence that reflects who we are. He didn't just redesign a website, he helped us rethink how we show up. Strategy, sales, marketing, he touched on all of it.",
    name: "Jared T.",
    designation: "Sales Director @ ECCAN",
    src: "/videos/logo-anim/ECCAN_logo_anim_loop.mov",
    tags: ["Branding", "Website", "Copywriting", "CMS"]
  },
  {
    quote: "Ben's strategic approach and technical expertise transformed our digital presence. His ability to understand our vision and translate it into reality was exceptional.",
    name: "Edi F.",
    designation: "Founder @ Digital International Bank",
    src: "/videos/logo-anim/DIB_logo_anim_loop.mov",
    tags: ["Full Service Partnership", "Sales Coaching", "Onboarding Streamline", "Strategy", "Design System"]
  },
  {
    quote: "Ben didn't just design beautifully—he brought a level of strategic thinking and industry fluency that's rare to find. His understanding of real estate and fundraising shaped not only the visuals, but the copy, narrative, and structure of everything he delivered. It felt less like working with a designer and more like having a partner who truly understood our world and what investors need to see.",
    name: "Marc E.",
    designation: "Founder @ SparrowPark Developments",
    src: "/videos/logo-anim/SparrowPark_logo_anim_loop.mov",
    tags: ["Pitch Deck", "AI Renderings", "Investor Materials", "Website", "Portfolio CMS"]
  },
  {
    quote: "The depth of expertise and attention to detail Ben brings to every project is remarkable. He truly understands how to leverage technology for business growth.",
    name: "Scott H.",
    designation: "Owner & CEO @ Costa Rica Recovery",
    src: "/videos/logo-anim/CRR_logo_anim_loop (1).mp4",
    tags: ["Branding", "Website", "Sales Decks", "Document Templates", "Copywriting", "LinkedIn Optimization", "Explainer Videos"]
  },
  {
    quote: "Ben brought fresh ideas and technical expertise to our marketing initiatives. His ability to blend creativity with data-driven decisions helped us achieve remarkable results.",
    name: "James S.",
    designation: "Marketing Lead @ SwissHUB",
    src: "/videos/logo-anim/swissHUB_logo_anim_loop.mov",
    tags: ["Brand System", "Explainer Videos", "Sales Strategy", "CMS", "SEO"]
  }
]

export function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white relative z-10">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Celebrating partnerships that<br />
              <span className="animated-gradient">drive innovation</span>
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Honored to work alongside visionary founders and leaders who trust us 
              to bring their boldest ideas to life.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }
          } : { opacity: 0, y: 20 }}
        >
          <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  )
} 