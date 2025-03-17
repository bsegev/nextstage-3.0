import { Header } from "../components/header"
import { AboutHero } from "../components/about/hero"
import { CoreNarrative } from "../components/about/core-narrative"
import { WhyNextStage } from "../components/about/why-nextstage"
import { FoundersNote } from "../components/about/founders-note"
import { Footer } from "../components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <CoreNarrative />
        <WhyNextStage />
        <FoundersNote />
      </main>
      <Footer />
    </div>
  )
} 