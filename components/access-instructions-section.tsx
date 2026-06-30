"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AccessInstructionsSection() {
  const [copiedDNS, setCopiedDNS] = useState<string | null>(null)

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedDNS(type)
      setTimeout(() => setCopiedDNS(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const renderTitleText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          fontFamily:
            char.toUpperCase() === "B" ? "var(--font-summer-days), cursive" : "var(--font-summer-dance), cursive",
          fontSize: char.toUpperCase() === "B" ? "0.85em" : "1em",
        }}
      >
        {char}
      </span>
    ))
  }

  return (
    <section className="relative py-16 px-4 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{
              background: "linear-gradient(-34deg, #fde100, #ffad00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter:
                "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 15px rgba(253, 225, 0, 0.7)) drop-shadow(0 0 30px rgba(255, 173, 0, 0.5))",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            {renderTitleText("INSTRUKCJE")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* DNS Method */}
          <div
            className="relative overflow-hidden p-8 hover:scale-105 transition-all duration-300 border-2 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(205, 156, 216, 0.6) 0%, rgba(168, 85, 247, 0.7) 100%)",
              borderColor: "rgba(205, 156, 216, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor: "rgba(205, 156, 216, 0.15)", // Fallback for browsers without backdrop-filter
              boxShadow: "0 8px 32px rgba(205, 156, 216, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(205, 156, 216, 1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(205, 156, 216, 0.9)"
            }}
          >
            {/* DNS Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🔗</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(-34deg, #fde100, #ffad00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                      "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(253, 225, 0, 0.6)) drop-shadow(0 0 16px rgba(255, 173, 0, 0.4))",
                    fontFamily: "var(--font-summer-dance), cursive",
                  }}
                >
                  {renderTitleText("DNS")}
                </h3>
                <p className="text-purple-200 text-sm">Zmiana serwerów DNS</p>
              </div>
            </div>

            {/* DNS Description */}
            <div className="bg-[#cd9cd8]/30 rounded-xl p-4 mb-6 border border-[#cd9cd8]/40">
              <p className="text-white/90 text-sm leading-relaxed">
                Najprostsze rozwiązanie - zmień domyślne serwery DNS na Cloudflare. Możesz to zrobić w ustawieniach
                routera lub indywidualnie na urządzeniu.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-green-400">✓</span>
                <span className="text-purple-200 text-sm">Szybkie i bezpłatne</span>
              </div>
            </div>

            {/* Cloudflare Servers */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-300">🚀</span>
                <span className="text-white font-semibold drop-shadow-lg">Serwery Cloudflare:</span>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-500/30 rounded-lg p-3 flex items-center justify-between border border-purple-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#cd9cd8] rounded-full shadow-lg"></div>
                    <span className="text-white font-mono">1.1.1.1</span>
                  </div>
                  <Button
                    onClick={() => copyToClipboard("1.1.1.1", "primary")}
                    className="bg-[#cd9cd8] hover:bg-[#cd9cd8]/80 text-white px-3 py-1 text-sm transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-dashed border-purple-300 hover:border-purple-300 hover:border-dashed"
                  >
                    {copiedDNS === "primary" ? "Skopiowano!" : "Kopiuj"}
                  </Button>
                </div>

                <div className="bg-purple-500/30 rounded-lg p-3 flex items-center justify-between border border-purple-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#cd9cd8] rounded-full shadow-lg"></div>
                    <span className="text-white font-mono">1.0.0.1</span>
                  </div>
                  <Button
                    onClick={() => copyToClipboard("1.0.0.1", "secondary")}
                    className="bg-[#cd9cd8] hover:bg-[#cd9cd8]/80 text-white px-3 py-1 text-sm transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-dashed border-purple-300 hover:border-purple-300 hover:border-dashed"
                  >
                    {copiedDNS === "secondary" ? "Skopiowano!" : "Kopiuj"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* VPN Method */}
          <div
            className="relative overflow-hidden p-8 hover:scale-105 transition-all duration-300 border-2 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(205, 156, 216, 0.6) 0%, rgba(168, 85, 247, 0.7) 100%)",
              borderColor: "rgba(205, 156, 216, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor: "rgba(205, 156, 216, 0.15)", // Fallback for browsers without backdrop-filter
              boxShadow: "0 8px 32px rgba(205, 156, 216, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(205, 156, 216, 1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(205, 156, 216, 0.9)"
            }}
          >
            {/* VPN Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(-34deg, #fde100, #ffad00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                      "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(253, 225, 0, 0.6)) drop-shadow(0 0 16px rgba(255, 173, 0, 0.4))",
                    fontFamily: "var(--font-summer-dance), cursive",
                  }}
                >
                  {renderTitleText("VPN")}
                </h3>
                <p className="text-purple-200 text-sm">Wirtualna sieć prywatna</p>
              </div>
            </div>

            {/* VPN Description */}
            <div className="bg-[#cd9cd8]/30 rounded-lg p-4 mb-6 border border-[#cd9cd8]/40">
              <p className="text-white/90 text-sm leading-relaxed">
                VPN szyfruje połączenie i zmienia lokalizację IP, pozwalając ominąć blokady regionalne i zwiększyć
                prywatność.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-green-400">✓</span>
                <span className="text-purple-200 text-sm">Maksymalna prywatność</span>
              </div>
            </div>

            {/* Popular VPN Providers */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-300">⚡</span>
                <span className="text-white font-semibold drop-shadow-lg">Dostawca:</span>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-500/30 rounded-lg p-3 flex items-center justify-between border border-purple-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      1
                    </div>
                    <span className="text-white">NordVPN</span>
                  </div>
                  <div className="w-3 h-3 bg-[#cd9cd8] rounded-full shadow-lg"></div>
                </div>

                <div className="bg-purple-500/30 rounded-lg p-3 flex items-center justify-between border border-purple-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      2
                    </div>
                    <span className="text-white">Surfshark</span>
                  </div>
                  <div className="w-3 h-3 bg-[#cd9cd8] rounded-full shadow-lg"></div>
                </div>

                <div className="bg-purple-500/30 rounded-lg p-3 flex items-center justify-between border border-purple-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      3
                    </div>
                    <span className="text-white">ProtonVPN</span>
                  </div>
                  <div className="w-3 h-3 bg-[#cd9cd8] rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
