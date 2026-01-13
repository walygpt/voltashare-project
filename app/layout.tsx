import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VoltaShare - P2P Energy Trading",
  description: "Trade solar energy with your neighbors. Smart AI advisor powered by Gemini.",
  generator: "v0.app",
  applicationName: "VoltaShare",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/voltashare-logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/voltashare-logo.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VoltaShare",
  },
  themeColor: "#10B981",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="VoltaShare" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
