import { Header } from "../components/header"
import { AboutHero } from "../components/about/hero"
import { CoreNarrative } from "../components/about/core-narrative"
import { FoundersNote } from "@/app/components/about/founders-note"
import { WhyNextStage } from "@/app/components/about/why-nextstage"
import { AboutTestimonials } from "@/app/components/about/testimonials"
import { AboutCTA } from "@/app/components/about/cta"
import { Footer } from "../components/footer"
import { metadata } from "./metadata"

export { metadata }

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <CoreNarrative />
        <FoundersNote />
        <WhyNextStage />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
} 