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
import { ShowcaseCarousel } from "./components/showcase-carousel"
import { DesignImpact } from "./components/design-impact"
import { Footer } from "./components/footer"
import { ContactForm } from "./components/contact-form"

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
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

