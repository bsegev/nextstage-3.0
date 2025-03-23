import { PlayHero } from "@/app/components/play/hero"
import { PlayExperiments } from "@/app/components/play/experiments"
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"

export default function PlayPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PlayHero />
        <PlayExperiments />
      </main>
      <Footer />
    </>
  )
} 