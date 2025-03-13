import { Header } from "../components/header"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="w-full py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-serif text-center mb-8">
              About <span className="animated-gradient">NextStage</span>
            </h1>
            <p className="text-gray-700 md:text-lg text-center">
              Placeholder content for the About page. We&apos;ll customize this with your story and vision.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 