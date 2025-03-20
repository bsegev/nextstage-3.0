import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://nextstage.co'),
  title: "About NextStage",
  description: "Our Story & Approach",
  openGraph: {
    title: "NextStage",
    description: "About - Our Story & Approach",
    siteName: "NextStage",
    url: "https://nextstage.co/about",
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