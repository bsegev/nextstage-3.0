import { PlayHero } from "@/app/components/play/hero"
import { PlayExperiments } from "@/app/components/play/experiments"

export default function PlayPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <PlayHero />
      <PlayExperiments />
    </main>
  )
} 