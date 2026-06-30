"use client"

import { HeroSection } from "@/components/hero-section"
import EarningGuideSection from "@/components/earning-guide-section"
import AccessInstructionsSection from "@/components/access-instructions-section"
import { useState, useEffect } from "react"

export default function Home() {
  const [contentRevealed, setContentRevealed] = useState(false)

  useEffect(() => {
    const handleContentReveal = () => {
      setContentRevealed(true)
    }

    const checkDevice = () => {
      if (window.innerWidth >= 768) {
        setContentRevealed(true)
      }
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)
    window.addEventListener("revealContent", handleContentReveal)

    return () => {
      window.removeEventListener("resize", checkDevice)
      window.removeEventListener("revealContent", handleContentReveal)
    }
  }, [])

  return (
    <main className="h-full">
      <HeroSection />

      <div
        className={`md:block transition-opacity duration-1000 ${contentRevealed ? "opacity-100" : "md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto"}`}
      >
        <EarningGuideSection />
        <AccessInstructionsSection />

        <footer
          className="relative z-50 bg-gradient-to-br from-purple-400/60 to-violet-500/70 backdrop-blur-md border border-purple-300/30 px-4 mb-0"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(168, 85, 247, 0.6)",
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: "url('/images/water-drops-overlay.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "overlay",
            }}
          />

          {/* Social Section */}
          <div className="relative z-10 py-8 md:py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2
                  className="text-4xl font-bold mb-4 md:pt-8"
                  style={{
                    background: "linear-gradient(-34deg, #fde100, #ffad00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                      "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 12px rgba(253, 225, 0, 0.6)) drop-shadow(0 0 24px rgba(255, 173, 0, 0.4))",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {"OBSERWUJ MNIE".split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        fontFamily:
                          char.toUpperCase() === "B"
                            ? "var(--font-summer-days), cursive"
                            : "var(--font-summer-dance), cursive",
                        fontSize: char.toUpperCase() === "B" ? "0.85em" : "1em",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="flex justify-center items-center gap-3 md:gap-8 px-4 mb-8 md:mb-12">
                {[
                  {
                    id: "kick",
                    name: "Kick Stream",
                    url: "https://kick.com/rfnx",
                    icon: (
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none">
                        <path
                          stroke="#ffffff"
                          strokeLinejoin="round"
                          d="M2.86957 1.5h6.84782v4.56522H12V3.78261h2.2826V1.5h6.8478v6.84783h-2.2826v2.28257h-2.2826v2.7392h2.2826v2.2826h2.2826V22.5h-6.8478v-2.2826H12v-2.2826H9.71739V22.5H2.86957v-21Z"
                          strokeWidth="1"
                        ></path>
                      </svg>
                    ),
                    color: "from-green-500 to-green-600",
                    glowColor: "shadow-green-500/50",
                  },
                  {
                    id: "instagram",
                    name: "Instagram",
                    url: "https://www.instagram.com/rafonixofficial",
                    icon: (
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    color: "from-orange-500 to-red-500",
                    glowColor: "shadow-orange-500/50",
                  },
                  {
                    id: "twitter",
                    name: "Twitter / X",
                    url: "https://x.com/rafonixxx",
                    icon: (
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    color: "from-gray-700 to-gray-900",
                    glowColor: "shadow-gray-500/50",
                  },
                ].map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                    className="relative group cursor-pointer transition-all duration-500 ease-out hover:scale-110"
                  >
                    <div
                      className={`
                        w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${platform.color} 
                        flex items-center justify-center text-white
                        shadow-xl transition-all duration-500 backdrop-blur-md
                        group-hover:${platform.glowColor} group-hover:shadow-2xl
                        group-hover:rotate-6 group-hover:shadow-2xl
                        border border-white/10
                      `}
                    >
                      {platform.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="max-w-4xl mx-auto text-center py-6 border-t border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone
              wyłącznie dla osób w regionach, gdzie hazard online jest legalny. Użytkownicy są odpowiedzialni za
              zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
