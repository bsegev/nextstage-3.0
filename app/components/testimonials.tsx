import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 px-3 py-1 text-sm">
              Client Love
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              What our <span className="animated-gradient">clients</span> say
            </h2>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <Card className="border-none shadow-md bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5">
            <CardContent className="pt-6">
              <blockquote className="text-lg text-gray-600 leading-relaxed text-center">
                After a quick audit, Ben immediately understood our market challenges and created assets that actually drive business results. One of them was an explainer video that's become the most powerful conversion tool in our outreach. It has 4,000+ YT views and is consistently turning prospects into users. A game-changer for us.
              </blockquote>
              <div className="mt-6 text-center">
                <p className="font-semibold">Samuel F.</p>
                <p className="text-sm text-muted-foreground">Founder & CEO @ Vome</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5">
            <CardContent className="pt-6">
              <blockquote className="text-lg text-gray-600 leading-relaxed text-center">
                Our rebrand was long overdue, so we needed to make quick moves. In just a month, Ben gave ECCAN a fresh digital presence that reflects who we are. He didn't just redesign a website, he helped us rethink how we show up. Strategy, sales, marketing, he touched on all of it.
              </blockquote>
              <div className="mt-6 text-center">
                <p className="font-semibold">Jared T.</p>
                <p className="text-sm text-muted-foreground">Sales Director @ ECCAN</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }
          } : { opacity: 0, y: 20 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold font-serif text-center mb-6">Proud to work with</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {[
              { src: "/client-logos/SP-logo.jpg", name: "SP", type: "Real Estate Developer" },
              { 
                src: "/client-logos/CRR-logo.png", 
                name: "CRR", 
                type: "Holistic Receovery Center",
                bg: "bg-slate-900" 
              },
              { src: "/client-logos/ECCAN-logo.png", name: "ECCAN", type: "Energy Management SaaS" },
              { 
                src: "/client-logos/DIB-logo.png", 
                name: "DIB", 
                type: "Digital Bank",
                bg: "bg-white-50" 
              },
              { src: "/client-logos/GRID-logo.png", name: "GRID", type: "Stealth Startup", bg: "bg-[#1B324B]" },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.5 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, y: 10 }}
                className="text-center"
              >
                <div className={`aspect-square w-[170px] flex items-center justify-center rounded-lg shadow-sm ${client.bg || 'bg-white'}`}>
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={170}
                    height={170}
                    className="w-[85%] object-contain rounded-lg"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {client.type}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 