import type React from "react"
import "@/app/globals.css"
import { Inter, Fraunces } from "next/font/google"
import { ContactModalProvider } from "./context/contact-modal-context"
import { ContactModal } from "./components/contact-modal"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
})

export const metadata = {
  title: "NextStage - Transform your startup vision into reality",
  description:
    "Strategically designed MVPs, powerful branding, and investor-ready assets—crafted precisely to take you from idea to growth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  )
}

