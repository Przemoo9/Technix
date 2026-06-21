import { Shield, Wrench, Factory } from "lucide-react";
import { companyInfo } from "../data/companyData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoNHY0aC00em0tNCAwaC00di00aDR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-amber-400 mb-8">
          <Shield className="w-4 h-4" />
          <span>Od 1998 roku w Stalowej Woli</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
          {companyInfo.heroTitle.split(".")[0]}.
          <br />
          <span className="text-amber-500">
            {companyInfo.heroTitle.split(".")[1] || "Precyzyjna Inżynieria"}.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {companyInfo.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("catalog");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline text-base px-8 py-4"
          >
            Zobacz Produkty
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-20">
          {[
            { icon: Wrench, label: "Projektowanie CAD", desc: "Indywidualne projekty" },
            { icon: Factory, label: "Produkcja", desc: "Nowoczesny park maszynowy" },
            { icon: Shield, label: "Gwarancja", desc: "24 miesiące na produkty" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/50 rounded-xl px-5 py-4"
            >
              <item.icon className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}