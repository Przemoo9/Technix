import { ArrowUp } from "lucide-react";
import { companyInfo } from "../data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Technix" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Na skróty</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Produkty", id: "catalog" },
                { label: "Usługi", id: "services" },
                { label: "Kontakt", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Godziny pracy</h4>
              <p className="text-sm text-slate-500">
                Poniedziałek – Piątek
                <br />
                7:00 – 15:00
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500/20 border border-slate-700 hover:border-amber-500/40 flex items-center justify-center transition-all group"
              aria-label="Powrót na górę"
            >
              <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {companyInfo.fullName}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-slate-700">
            Stalowa Wola &bull; Polska
          </p>
        </div>
      </div>
    </footer>
  );
}