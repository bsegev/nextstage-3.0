import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About NextStage",
  description: "Our Story & Approach",
  openGraph: {
    title: "NextStage",
    description: "About - Our Story & Approach",
    url: "https://nextstage.digital/about",
    siteName: "NextStage",
    images: [
      {
        url: "/images/og/nextstage-og.png",
        width: 500,
        height: 500,
        alt: "NextStage"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NextStage",
    description: "About - Our Story & Approach",
    images: ["/images/og/nextstage-og.png"],
    creator: "@nextstage",
  },
} 