import type React from "react"
import "@/app/globals.css"
import { Inter, Fraunces, Playfair_Display, Kalam } from "next/font/google"
import { ContactModalProvider } from "./context/contact-modal-context"
import { ContactModal } from "./components/contact-modal"
import { cn } from "@/lib/utils"

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
})

export const metadata = {
  title: "NextStage - Transform your startup vision into reality",
  description:
    "Strategically designed MVPs, powerful branding, and investor-ready assets—crafted precisely to take you from idea to growth.",
  icons: {
    icon: [
      { url: '/images/favicon.svg' },
    ],
    shortcut: '/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      "min-h-screen bg-white font-sans antialiased",
      inter.variable,
      fraunces.variable,
      playfair.variable,
      kalam.variable
    )}>
      <body>
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  )
}

