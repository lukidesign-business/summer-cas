"use client"

import { SponsorSection } from "./sponsor-section"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [contentRevealed, setContentRevealed] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(true)
  const [scrollLocked, setScrollLocked] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setContentRevealed(false)
      setButtonVisible(true)
      setScrollLocked(true)
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile && scrollLocked) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
      document.body.style.touchAction = "none"
      document.addEventListener("wheel", preventDefault, { passive: false })
      document.addEventListener("touchmove", preventDefault, { passive: false })
    } else {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
      document.body.style.touchAction = "auto"
      document.removeEventListener("wheel", preventDefault)
      document.removeEventListener("touchmove", preventDefault)
    }

    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
      document.body.style.touchAction = "auto"
      document.removeEventListener("wheel", preventDefault)
      document.removeEventListener("touchmove", preventDefault)
    }
  }, [scrollLocked])

  const blurIntensity = Math.min(scrollY / 100, 20)

  const renderButtonText = (text: string) => {
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

  const scrollToMrPunter = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setContentRevealed(true)
      window.dispatchEvent(new CustomEvent("revealContent"))
      setButtonVisible(false)
      setScrollLocked(false)
    }

    setTimeout(
      () => {
        const selectors = [
          '[data-sponsor="mr-punter"]',
          ".sponsor-section .grid > div:nth-child(2)",
          '.sponsor-section [data-sponsor="mr-punter"]',
          ".sponsor-section",
        ]

        let targetElement = null

        for (const selector of selectors) {
          targetElement = document.querySelector(selector)
          if (targetElement) {
            break
          }
        }

        if (targetElement) {
          const rect = targetElement.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop

          let targetPosition
          if (isMobile) {
            const mobileOffset = 192 // 48 * 4px (Tailwind's spacing scale)
            targetPosition = Math.max(0, rect.top + scrollTop + mobileOffset + 400)
          } else {
            targetPosition = rect.top + scrollTop - 100
          }

          const startPosition = scrollTop
          const distance = targetPosition - startPosition
          const duration = 1500 // 1.5 seconds for slower scroll
          let start = null

          function smoothScroll(timestamp) {
            if (!start) start = timestamp
            const progress = timestamp - start
            const percentage = Math.min(progress / duration, 1)

            const easeInOutCubic =
              percentage < 0.5 ? 4 * percentage * percentage * percentage : 1 - Math.pow(-2 * percentage + 2, 3) / 2

            window.scrollTo(0, startPosition + distance * easeInOutCubic)

            if (progress < duration) {
              requestAnimationFrame(smoothScroll)
            }
          }

          requestAnimationFrame(smoothScroll)
        }
      },
      isMobile ? 100 : 0,
    )
  }

  const preventDefault = (e: Event) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 w-full h-full backdrop-blur-sm z-[-1]" />

      <div
        className="hidden md:block absolute top-0 left-0 w-full bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: "url(/images/rafon-pc-new-long2.jpg)",
          backgroundPosition: "center top",
          width: "100%",
          height: "360vh",
          backgroundSize: "cover",
        }}
      />

      <div
        className="md:hidden fixed top-0 left-0 w-full bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: "url(/images/rafon-tele.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          backgroundColor: "rgba(0, 100, 150, 0.3)", // Fallback blue tint
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
          filter: `blur(${blurIntensity * 0.5}px)`, // Fallback blur for older browsers
        }}
      />

      <div
        className="md:hidden fixed top-0 left-0 w-full h-full z-1 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, ${Math.min(scrollY / 1000, 0.2)}) 0%, rgba(0, 50, 100, ${Math.min(scrollY / 1000, 0.3)}) 100%)`,
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
          filter: `blur(${blurIntensity * 0.3}px)`, // Additional fallback
        }}
      />

      <section className="relative min-h-screen flex flex-col">
        {buttonVisible && (
          <div
            className={`md:hidden relative z-10 flex justify-center items-end pb-8 transition-all duration-500 ease-out ${
              !buttonVisible ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
            style={{ minHeight: "90vh" }} // increased from 85vh to 90vh to move button even lower
          >
            <div className="relative group cursor-pointer" onClick={scrollToMrPunter}>
              <div className="transition-transform duration-300 group-hover:rotate-2 group-hover:scale-110">
                <img
                  src="/images/rafon-plankt.png"
                  alt="Wooden plank background"
                  className="w-80 h-auto drop-shadow-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-5xl font-bold text-yellow-400 transition-transform duration-300 group-hover:-rotate-1 whitespace-nowrap"
                  style={{
                    textShadow: `
                      -1px -1px 0 #7a50a4, 1px -1px 0 #7a50a4, -1px 1px 0 #7a50a4, 1px 1px 0 #7a50a4,
                      -2px -2px 0 #ce9cd8, 2px -2px 0 #ce9cd8, -2px 2px 0 #ce9cd8, 2px 2px 0 #ce9cd8,
                      -3px -3px 0 #ce9cd8, 3px -3px 0 #ce9cd8, -3px 3px 0 #ce9cd8, 3px 3px 0 #ce9cd8,
                      0 0 5px rgba(255, 255, 0, 0.4), 0 0 10px rgba(255, 255, 0, 0.3), 0 0 15px rgba(255, 255, 0, 0.2)
                    `,
                    filter: "drop-shadow(0 0 8px rgba(255, 255, 0, 0.3))",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                  }}
                >
                  {renderButtonText("ZOBACZ BONUSY")}
                </span>
              </div>
            </div>
          </div>
        )}

        <div
          className="hidden md:block absolute z-5 transition-transform duration-300 hover:rotate-2"
          style={{ top: "calc(var(--spacing) * 25)", right: "calc(var(--spacing) * -5)" }}
        >
          <img
            src="/images/rafon-text-last.png"
            alt="RAFONIX Rekomendacje"
            className="w-[700px] h-auto drop-shadow-lg"
          />
        </div>

        <div className="hidden md:block relative z-10 pb-16 mt-auto">
          <SponsorSection />
        </div>
      </section>

      <section
        className={`md:hidden relative z-10 transition-all duration-1000 ease-in-out ${
          contentRevealed
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-8"
        }`}
        style={{ marginTop: contentRevealed ? "-12rem" : "0" }}
      >
        <SponsorSection />
      </section>
    </>
  )
}
