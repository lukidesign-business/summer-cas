"use client"

export default function EarningGuideSection() {
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
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
            {renderTitleText("Zarabianie online")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="relative overflow-hidden p-8 hover:scale-105 transition-all duration-300 border-2 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(0, 212, 255, 0.6) 0%, rgba(0, 153, 204, 0.7) 100%)",
              borderColor: "rgba(0, 212, 255, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor: "rgba(0, 212, 255, 0.15)", // Fallback for browsers without backdrop-filter
              boxShadow: "0 8px 32px rgba(0, 212, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.9)"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💰</span>
              <h4
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
                {renderTitleText("Zarabiaj Hajs")}
              </h4>
            </div>
            <p className="text-white/90 mb-6">
              Każdego miesiąca wyróżniam kilka osób, które tworzą najlepsze shorty/edity związane z moją osobą – mogą to
              być materiały z walk, konferencji, transmisji na żywo czy innych nagrań.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✅</span>
                <span className="text-white/90">Najlepsze edity mogą zostać docenione finansowo</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✅</span>
                <span className="text-white/90">Wybrane materiały publikuję na swoim Instagramie</span>
              </div>
            </div>

            <div className="bg-[#00d4ff]/30 rounded-lg p-4 mb-4 border border-[#00d4ff]/40">
              <h5 className="font-semibold text-cyan-200 mb-2">Gdzie wrzucać?</h5>
              <p className="text-cyan-100 text-sm">TikTok, YouTube Shorts, Instagram Reels, X (Twitter), Facebook</p>
            </div>

            <div className="bg-cyan-500/30 rounded-lg p-4 border border-cyan-400/40">
              <h5 className="font-semibold text-cyan-200 mb-2">Zasady udziału:</h5>
              <ul className="space-y-2 text-sm text-cyan-100">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Korzystaj z moich materiałów</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Przy shotach z live – oznacz mojego Kicka</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Edity powinny być dynamiczne, emocjonalne, dobrze zmontowane</span>
                </li>
              </ul>
              <p className="text-cyan-200 font-semibold mt-3 text-sm">
                🎯 Im lepsza jakość i storytelling – tym większa szansa na wyróżnienie.
              </p>
            </div>
          </div>

          <div
            className="relative overflow-hidden p-8 hover:scale-105 transition-all duration-300 border-2 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(0, 212, 255, 0.6) 0%, rgba(0, 153, 204, 0.7) 100%)",
              borderColor: "rgba(0, 212, 255, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              backgroundColor: "rgba(0, 212, 255, 0.15)", // Fallback for browsers without backdrop-filter
              boxShadow: "0 8px 32px rgba(0, 212, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.9)"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎰</span>
              <h4
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
                {renderTitleText("Moja Taktyka")}
              </h4>
            </div>
            <p className="text-white/90 mb-6">
              Dzielę się moimi doświadczeniami. Poniżej opisuję mój styl gry i to, co działało u mnie najlepiej.
            </p>

            <div className="space-y-6">
              <div className="bg-[#00d4ff]/30 rounded-lg p-4 border border-[#00d4ff]/40">
                <h5 className="font-bold text-cyan-200 mb-3 flex items-center gap-2">
                  <span>🎰</span>
                  SLOTY:
                </h5>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Najlepsze wyniki osiągałem na slotach z bonusami</li>
                  <li>• Gdy trafiałem coś dużego – zmieniałem slota</li>
                  <li>• Gdy długo nic nie siadało – również zmieniałem</li>
                </ul>
                <div className="mt-3 space-y-1 text-xs text-cyan-200">
                  <p>💡 Przy mniejszym budżecie – pojedynczo na wyższych stawkach</p>
                  <p>💡 Przy większym – korzystałem z bonusów</p>
                </div>
              </div>

              <div className="bg-cyan-500/30 rounded-lg p-4 border border-cyan-400/40">
                <h5 className="font-bold text-cyan-200 mb-3 flex items-center gap-2">
                  <span>🔴</span>
                  RULETKA:
                </h5>
                <p className="text-sm text-white/90 mb-3">
                  Testowałem grę na numery, sekcje, sąsiadów – nie tylko na kolor.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white/90">Numer = potencjał x35</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-white/90">Kolor = x2</span>
                  </div>
                </div>
                <p className="text-xs text-cyan-200 mt-2">
                  💡 Czasem grałem na różnych kontach, by przetestować różne strategie
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 p-6 border-2 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.6) 0%, rgba(0, 153, 204, 0.7) 100%)",
            borderColor: "rgba(0, 212, 255, 0.9)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(0, 212, 255, 0.15)", // Fallback for browsers without backdrop-filter
            boxShadow: "0 8px 32px rgba(0, 212, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="text-cyan-200 font-semibold">📝 To nie jest porada finansowa ani namowa do gry.</p>
          <p className="text-cyan-100 mt-2">Graj odpowiedzialnie, tylko jeśli sam decydujesz się podjąć ryzyko.</p>
        </div>
      </div>
    </section>
  )
}
