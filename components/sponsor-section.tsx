"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export function SponsorSection() {
  const [touchedContainer, setTouchedContainer] = useState<number | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const sponsors = [
    {
      id: 1,
      name: "Spinbetter",
      logo: "/images/spinbetter-logo.png",
      bonus: "100% BONUS + 100FS",
      description: "z kodem:",
      buttonText: "ODBIERZ",
      comingSoon: false,
    },
    {
      id: 4,
      name: "IRWIN",
      logo: "/images/irwin-logo.png",
      bonus: "150 BONUS do 2,500",
      bonusCurrency: "zł",
      description: "z kodem:",
      buttonText: "ODBIERZ",
      comingSoon: false,
    },
    {
      id: 3,
      name: "Mr Punter",
      logo: "/images/mr-punter-logo.png",
      bonus: "100% BONUS + 200FS",
      description: "z kodem:",
      buttonText: "ODBIERZ",
      comingSoon: false,
    },
    {
      id: 2,
      name: "NV Casino",
      logo: "/images/nv-logo-new.png",
      bonus: "100% BONUS + 50FS",
      description: "z kodem:",
      buttonText: "ODBIERZ",
      comingSoon: false,
    },
  ]

  const handleMobileTouch = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTouchedContainer(index)

      // Haptic feedback for mobile
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }

      // Reset touch state after animation
      setTimeout(() => {
        setTouchedContainer(null)
      }, 300)
    }
  }

  const renderBonusText = (text: string, currency?: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const words = text.split(" ")
      if (words.length > 1) {
        const midPoint = Math.ceil(words.length / 2)
        const firstLineWords = words.slice(0, midPoint).join(" ")
        const secondLineWords = words.slice(midPoint).join(" ")

        return (
          <>
            <span>
              {firstLineWords.split("").map((char, index) => (
                <span
                  key={`first-${index}`}
                  style={{
                    fontFamily:
                      char.toUpperCase() === "B"
                        ? "var(--font-summer-days), cursive"
                        : "var(--font-summer-dance), cursive",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
            <br />
            <span>
              {secondLineWords.split("").map((char, index) => (
                <span
                  key={`second-${index}`}
                  style={{
                    fontFamily:
                      char.toUpperCase() === "B"
                        ? "var(--font-summer-days), cursive"
                        : "var(--font-summer-dance), cursive",
                  }}
                >
                  {char}
                </span>
              ))}
              {currency && (
                <span className="text-sm ml-1" style={{ fontSize: "0.7em", fontFamily: "Montserrat, sans-serif" }}>
                  {currency}
                </span>
              )}
            </span>
          </>
        )
      }
    }

    return (
      <>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              fontFamily:
                char.toUpperCase() === "B" ? "var(--font-summer-days), cursive" : "var(--font-summer-dance), cursive",
            }}
          >
            {char}
          </span>
        ))}
        {currency && (
          <span className="text-sm ml-1" style={{ fontSize: "0.7em", fontFamily: "Montserrat, sans-serif" }}>
            {currency}
          </span>
        )}
      </>
    )
  }

  const copyToClipboard = async (index: number) => {
    try {
      const codeText = index === 0 ? "RAFONIX" : index === 1 ? "RAFONIX" : index === 2 ? "RAFONIX" : "RFNX"
      await navigator.clipboard.writeText(codeText)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="container mx-auto px-6 sponsor-section relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <Card
            key={sponsor.id}
            data-sponsor={sponsor.name.toLowerCase().replace(/\s+/g, "-")}
            className={`relative overflow-hidden p-4 hover:scale-105 transition-all duration-300 backdrop-blur-md group select-none ${
              touchedContainer === index ? "scale-105" : ""
            } ${
              index === 0
                ? `bg-gradient-to-br from-emerald-400/60 to-green-500/70 border-emerald-300/90 hover:border-emerald-200 border-2 ${touchedContainer === index ? "border-emerald-200" : ""}`
                : index === 1
                  ? `${touchedContainer === index ? "" : ""}`
                  : index === 2
                    ? `bg-gradient-to-br from-sky-400/60 to-blue-500/70 border-sky-300/90 hover:border-sky-200 border-2 ${touchedContainer === index ? "border-sky-200" : ""}`
                    : `bg-gradient-to-br from-fuchsia-500/60 to-pink-500/70 border-fuchsia-400/90 hover:border-fuchsia-300 border-2 ${touchedContainer === index ? "border-fuchsia-300" : ""}`
            }`}
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor:
                index === 0
                  ? "rgba(52, 211, 153, 0.6)"
                  : index === 1
                    ? "#4c1d95"
                    : index === 2
                      ? "rgba(56, 189, 248, 0.6)"
                      : "rgba(217, 70, 239, 0.6)",
              boxShadow:
                index === 0
                  ? "0 8px 32px rgba(52, 211, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  : index === 1
                    ? "0 8px 32px rgba(76, 29, 149, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : index === 2
                      ? "0 8px 32px rgba(56, 189, 248, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                      : "0 8px 32px rgba(217, 70, 239, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              transformOrigin: "center center",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            role="presentation"
            aria-label={`${sponsor.name} casino offer - ${sponsor.bonus}`}
            onContextMenu={(e) => e.preventDefault()}
            onTouchStart={() => handleMobileTouch(index)}
            onClick={() => handleMobileTouch(index)}
          >
            <div
              className="absolute inset-0 flex items-center justify-center z-40"
              style={{
                display: sponsor.comingSoon ? "flex" : "none",
              }}
            >
              <div
                className="text-white text-2xl font-bold text-center absolute"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)",
                  filter: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                  zIndex: 50,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Placeholder for future text */}
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-60 mix-blend-overlay"
              style={{
                backgroundImage: "url('/images/white-background-water-drops-texture-design.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onContextMenu={(e) => e.preventDefault()}
            />

            {!sponsor.comingSoon && (
              <div className="relative flex flex-col justify-center items-center text-center h-full">
                <div className="w-24 h-12 relative flex items-center justify-center mb-6">
                  <Image
                    src={sponsor.logo || "/images/casino-placeholder.png"}
                    alt={sponsor.name}
                    fill
                    className="object-contain drop-shadow-lg"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                <div className="flex flex-col items-center space-y-3 mb-4 -mt-2">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 -inset-x-8 -inset-y-4 flex items-center justify-center transition-transform duration-300 ${
                        touchedContainer === index ? "-rotate-2" : "group-hover:-rotate-2"
                      }`}
                      style={{
                        ...(typeof window !== "undefined" &&
                          window.innerWidth >= 768 && {
                            transform:
                              touchedContainer === index ? "translateY(-20px) rotate(-2deg)" : "translateY(-20px)",
                          }),
                        ...(typeof window !== "undefined" &&
                          window.innerWidth < 768 && {
                            transform:
                              touchedContainer === index ? "translateY(-8px) rotate(-2deg)" : "translateY(-8px)",
                          }),
                      }}
                    >
                      <Image
                        src="/images/wooden-plank.png"
                        alt="Wooden plank background"
                        width={280}
                        height={80}
                        className="object-contain opacity-80"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        style={{
                          userSelect: "none",
                          WebkitUserSelect: "none",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                    <h3
                      className={`relative z-10 text-3xl font-bold leading-tight transition-transform duration-300 max-w-[180px] ${
                        touchedContainer === index ? "rotate-1" : "group-hover:rotate-1"
                      }`}
                      style={{
                        background: "linear-gradient(-34deg, #fde100, #ffad00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 10px rgba(253, 225, 0, 0.6)) drop-shadow(0 0 20px rgba(255, 173, 0, 0.4))",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        textRendering: "optimizeLegibility",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {renderBonusText(sponsor.bonus, sponsor.bonusCurrency)}
                    </h3>
                    <div className="relative z-10 flex items-center justify-center mt-1 md:pt-4">
                      <p
                        className={`text-white opacity-100 text-[10px] font-medium transition-transform duration-300 ${
                          touchedContainer === index ? "rotate-1" : "group-hover:rotate-1"
                        }`}
                      >
                        {sponsor.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard(index)
                        }}
                        className="px-2 py-1 rounded text-[10px] font-bold cursor-pointer transition-all duration-200 hover:scale-105 ml-1"
                        title="Kliknij aby skopiować kod"
                        style={{
                          backgroundColor: "#1f2937",
                          color: "#ffffff",
                          border: "2px solid #374151",
                          textShadow: "none",
                          opacity: 1,
                          zIndex: 9999,
                          position: "relative",
                          isolation: "isolate",
                        }}
                      >
                        {copiedIndex === index
                          ? "SKOPIOWANO!"
                          : index === 0
                            ? "RAFONIX"
                            : index === 1
                              ? "RAFONIX"
                              : index === 2
                                ? "RAFONIX"
                                : "RFNX"}
                      </button>
                    </div>
                  </div>
                </div>

                <Button
                  className={`w-32 text-xs font-bold py-2 shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden group border-2 border-dashed ${
                    index === 0
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-emerald-400/50 hover:shadow-2xl border-emerald-300 hover:border-emerald-300 hover:border-dashed"
                      : index === 1
                        ? "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-purple-400/50 hover:shadow-2xl"
                        : index === 2
                          ? "bg-sky-400 hover:bg-sky-300 text-white hover:shadow-sky-400/50 hover:shadow-2xl border-white hover:border-white hover:border-dashed"
                          : "bg-fuchsia-500 hover:bg-fuchsia-600 text-white hover:shadow-fuchsia-400/50 hover:shadow-2xl border-fuchsia-300 hover:border-fuchsia-300 hover:border-dashed"
                  } hover:scale-105`}
                  asChild={
                    (sponsor.name === "IRWIN" ||
                      sponsor.name === "NV Casino" ||
                      sponsor.name === "Mr Punter" ||
                      sponsor.name === "Spinbetter") &&
                    !sponsor.comingSoon
                  }
                >
                  {sponsor.name === "Spinbetter" && !sponsor.comingSoon ? (
                    <a
                      href="https://redirspinner.com/2v92?p=%2Fregistration%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`[v0] Button clicked for ${sponsor.name}`)
                        console.log(`[v0] Opening Spinbetter link`)
                      }}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          index === 0
                            ? "bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"
                            : index === 1
                              ? "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                              : index === 2
                                ? "bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent"
                        } animate-pulse`}
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)"
                              : index === 1
                                ? "linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)"
                                : index === 2
                                  ? "linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.4) 50%, transparent 70%)"
                                  : "linear-gradient(45deg, transparent 30%, rgba(217, 70, 239, 0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "wave 2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative z-10">{sponsor.buttonText}</span>
                    </a>
                  ) : sponsor.name === "IRWIN" && !sponsor.comingSoon ? (
                    <a
                      href="https://irwin-way-one.com/cf76a61b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`[v0] Button clicked for ${sponsor.name}`)
                        console.log(`[v0] Opening IRWIN link`)
                      }}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          index === 0
                            ? "bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"
                            : index === 1
                              ? "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                              : index === 2
                                ? "bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent"
                        } animate-pulse`}
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)"
                              : index === 1
                                ? "linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)"
                                : index === 2
                                  ? "linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.4) 50%, transparent 70%)"
                                  : "linear-gradient(45deg, transparent 30%, rgba(217, 70, 239, 0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "wave 2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative z-10">{sponsor.buttonText}</span>
                    </a>
                  ) : sponsor.name === "Mr Punter" && !sponsor.comingSoon ? (
                    <a
                      href="https://mrp.fynkelto.com/?mid=309237_1822741"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`[v0] Button clicked for ${sponsor.name}`)
                        console.log(`[v0] Opening Mr Punter link`)
                      }}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          index === 0
                            ? "bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"
                            : index === 1
                              ? "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                              : index === 2
                                ? "bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent"
                        } animate-pulse`}
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)"
                              : index === 1
                                ? "linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)"
                                : index === 2
                                  ? "linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.4) 50%, transparent 70%)"
                                  : "linear-gradient(45deg, transparent 30%, rgba(217, 70, 239, 0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "wave 2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative z-10">{sponsor.buttonText}</span>
                    </a>
                  ) : sponsor.name === "NV Casino" && !sponsor.comingSoon ? (
                    <a
                      href="https://earlywires.com/23664/29327?lp=00"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`[v0] Button clicked for ${sponsor.name}`)
                        console.log(`[v0] Opening NV Casino link`)
                      }}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          index === 0
                            ? "bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"
                            : index === 1
                              ? "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                              : index === 2
                                ? "bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent"
                        } animate-pulse`}
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)"
                              : index === 1
                                ? "linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)"
                                : index === 2
                                  ? "linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.4) 50%, transparent 70%)"
                                  : "linear-gradient(45deg, transparent 30%, rgba(217, 70, 239, 0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "wave 2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative z-10">{sponsor.buttonText}</span>
                    </a>
                  ) : (
                    <>
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          index === 0
                            ? "bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"
                            : index === 1
                              ? "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                              : index === 2
                                ? "bg-gradient-to-r from-transparent via-sky-300/30 to-transparent"
                                : "bg-gradient-to-r from-transparent via-fuchsia-300/30 to-transparent"
                        } animate-pulse`}
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(45deg, transparent 30%, rgba(52, 211, 153, 0.4) 50%, transparent 70%)"
                              : index === 1
                                ? "linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)"
                                : index === 2
                                  ? "linear-gradient(45deg, transparent 30%, rgba(56, 189, 248, 0.4) 50%, transparent 70%)"
                                  : "linear-gradient(45deg, transparent 30%, rgba(217, 70, 239, 0.4) 50%, transparent 70%)",
                          backgroundSize: "200% 100%",
                          animation: "wave 2s ease-in-out infinite",
                        }}
                      />
                      <span className="relative z-10">{sponsor.buttonText}</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
