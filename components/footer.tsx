import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-sky-400/60 to-blue-500/70 backdrop-blur-md border border-sky-300/30 py-12"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(56, 189, 248, 0.6)",
        boxShadow: "0 8px 32px rgba(56, 189, 248, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-400/60 to-blue-500/70 opacity-60"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.4) 0%, rgba(59, 130, 246, 0.6) 100%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">RAFONIX</h3>
            <p className="text-muted-foreground text-sm">
              Najlepsze bonusy kasynowe w tropikalnym stylu. Odkryj letnie promocje i wygraj wielkie nagrody!
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://kick.com/rfnx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
                aria-label="Kick"
              >
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">K</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rafonixofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-colors duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/rafonixxx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                aria-label="Twitter/X"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Szybkie linki</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bonusy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kasyna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Recenzje
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nowości
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Wsparcie</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Prywatność
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Odpowiedzialna gra</h4>
            <p className="text-xs text-muted-foreground">
              Graj odpowiedzialnie. Hazard może uzależniać. Osoby poniżej 18 roku życia nie mogą uczestniczyć w grach
              hazardowych.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 RAFONIX. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
