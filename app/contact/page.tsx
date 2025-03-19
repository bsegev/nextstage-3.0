import { ContactHero } from "../components/contact/contact-hero"
import { Header } from "@/app/components/header"
import { Footer } from "../components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
      </main>
      <Footer />
    </div>
  )
} 