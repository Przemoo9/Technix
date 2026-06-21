import { services } from "../data/companyData";
import { Zap, Settings, HardDrive, Wifi, Wrench, ChevronRight } from "lucide-react";

const serviceIcons = {
  Zap,
  Settings,
  HardDrive,
  Wifi,
  Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Usługi Produkcyjne i Serwisowe</h2>
          <p className="section-subtitle mx-auto">
            Dysponujemy nowoczesnym parkiem maszynowym i wieloletnim doświadczeniem w ciężkiej obróbce
            oraz regeneracji podzespołów.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComp = serviceIcons[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="card group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <IconComp className="w-6 h-6 text-amber-500" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-xs text-slate-500"
                    >
                      <ChevronRight className="w-3 h-3 text-amber-500/70 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}