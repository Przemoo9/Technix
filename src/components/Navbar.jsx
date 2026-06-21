import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/companyData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick("hero")}
            className="flex items-center gap-2"
          >
            <img src="/logo.png" alt="Technix" className="h-8 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`px-4 py-2 text-sm transition-colors rounded-lg hover:bg-slate-800/60 ${
                  link.id === "contact"
                    ? "text-amber-500 hover:text-amber-400"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 hover:text-amber-400 p-2"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-slate-800/60 ${
                  link.id === "contact"
                    ? "text-amber-500 hover:text-amber-400"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}