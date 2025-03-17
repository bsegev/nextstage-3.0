import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-serif text-center mb-8">
                Contact <span className="animated-gradient">NextStage</span>
              </h1>
              <p className="text-gray-700 md:text-lg text-center">
                Placeholder content for the Contact page. We&apos;ll add a contact form and other details here.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 