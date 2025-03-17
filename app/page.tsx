"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import SynergyDiagram from "./components/synergy-diagram"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Process } from "./components/process"
import { WhyNextStage } from "./components/why-nextstage"
import Pricing from "./components/pricing"
import { Testimonials } from "./components/testimonials"
import { ShowcaseCarousel } from "./components/showcase-carousel"
import { DesignImpact } from "./components/design-impact"
import { Footer } from "./components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <DesignImpact />
        <SynergyDiagram />
        <ShowcaseCarousel />
        <Services />
        <Pricing />
        <Process />
        <WhyNextStage />
        <Testimonials />

        {/* Final CTA */}
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
              <div className="flex flex-col space-y-4 rounded-xl bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-cyan-400/5 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif">
                    Schedule a <span className="animated-gradient">Consultation</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell me about your project"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white">
                    Schedule Your Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

