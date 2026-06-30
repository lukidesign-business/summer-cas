"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BonusSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const bonuses = [
    {
      casino: "NV CASINO",
      bonus: "100% BONUS + 50FS",
      description: "z kodem:",
      features: ["100% bonus od depozytu", "50 darmowych spinów", "Szybkie wypłaty", "Bonus bez depozytu"],
      rating: 4.8,
      buttonText: "ODBIERZ",
    },
    {
      casino: "IRWIN",
      bonus: "150% BONUS",
      description: "z kodem:",
      features: ["150% bonus od depozytu", "Bonus bez depozytu 100%", "Bonus lojalnościowy 100%", "Szybkie wypłaty"],
      rating: 4.7,
      buttonText: "ODBIERZ",
    },
    {
      casino: "IPUNTER",
      bonus: "100% BONUS + 200 FS",
      description: "z kodem:",
      features: ["100% bonus od depozytu", "200 darmowych spinów", "Bonus bez depozytu 50%", "Cashback do 15%"],
      rating: 4.9,
      buttonText: "ODBIERZ",
    },
    {
      casino: "VULADA",
      bonus: "100% BONUS + 100 FS",
      description: "z kodem:",
      features: ["100% bonus od depozytu", "100 darmowych spinów", "Bonus bez depozytu 100%", "Cashback do 10%"],
      rating: 4.6,
      buttonText: "ODBIERZ",
    },
  ]

  const copyToClipboard = async (index: number) => {
    try {
      await navigator.clipboard.writeText("RFNX")
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            EKSKLUZYWNE
            <br />
            <span className="text-primary">BONUSY KASYNOWE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Najlepsze oferty bonusowe dostępne tylko dla naszych użytkowników
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-card border-border p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col space-y-4">
                {/* Casino Name & Rating */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-card-foreground">{bonus.casino}</h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-muted-foreground">{bonus.rating}</span>
                  </div>
                </div>

                {/* Bonus Badge */}
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold w-fit">
                  BONUS
                </div>

                {/* Bonus Amount */}
                <h4 className="text-xl font-bold text-card-foreground">{bonus.bonus}</h4>

                {/* Description */}
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-sm">{bonus.description}</p>
                  <button
                    onClick={() => copyToClipboard(index)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm font-bold cursor-pointer transition-all duration-200 hover:scale-105"
                    title="Kliknij aby skopiować kod"
                  >
                    {copiedIndex === index ? "SKOPIOWANO!" : "RFNX"}
                  </button>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {bonus.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-card-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 font-semibold mt-4">{bonus.buttonText}</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
