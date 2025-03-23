import { PlayHero } from "@/app/components/play/hero"
import { PlayExperiments } from "@/app/components/play/experiments"

export default function PlayPage() {
  return (
    <main className="overflow-hidden">
      <PlayHero />
      <PlayExperiments />
    </main>
  )
} 