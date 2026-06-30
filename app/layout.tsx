import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"
import { Suspense } from "react"
import "./globals.css"

const summerDanceFont = localFont({
  src: "../public/fonts/Summer Dance.ttf",
  variable: "--font-summer-dance",
  display: "swap",
})

const summerDaysFont = localFont({
  src: "../public/fonts/Summer Days.ttf",
  variable: "--font-summer-days",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rekomendacje Rafonixa - Sprawdz Najlepsze Bonusy",
  description: "Odkryj Ekskluzywne oferty, darmowe spiny i wysokie bonusy depozytowe.",
  keywords:
    "kasyno online polska, bonusy kasynowe 2024, darmowe spiny, bonus bez depozytu, najlepsze kasyna online, RAFONIX bonusy, hazard online, sloty online, ruletka online, poker online, kasyno bonus, casino polska, gry hazardowe, automaty online",
  authors: [{ name: "RAFONIX Casino Team" }],
  creator: "RAFONIX Casino",
  publisher: "RAFONIX Casino",
  robots: "index, follow",
  openGraph: {
    title: "Rekomendacje Rafonixa - Sprawdz Najlepsze Bonusy",
    description: "Odkryj Ekskluzywne oferty, darmowe spiny i wysokie bonusy depozytowe.",
    type: "website",
    locale: "pl_PL",
    siteName: "RAFONIX Casino Bonusy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekomendacje Rafonixa - Sprawdz Najlepsze Bonusy",
    description: "Odkryj Ekskluzywne oferty, darmowe spiny i wysokie bonusy depozytowe.",
  },
  alternates: {
    canonical: "https://rafonix-casino.pl",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${summerDanceFont.variable} ${summerDaysFont.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
