import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { companyInfo } from "../data/companyData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle mx-auto">
            Skontaktuj się z nami — przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-6">
              {companyInfo.fullName}
            </h3>

            <div className="card">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Adres</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Telefon</h4>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors block"
                  >
                    {companyInfo.phone}
                  </a>
                  <a
                    href={`tel:${companyInfo.phone2.replace(/\s/g, "")}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors block mt-1"
                  >
                    {companyInfo.phone2}
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">E-mail</h4>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors break-all"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <Building2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Dane firmy</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    REGON: {companyInfo.regon}<br />
                    NIP: {companyInfo.nip}<br />
                    {companyInfo.bank}<br />
                    Nr konta: {companyInfo.account}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5">
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-400">Godziny pracy:</strong>
                <br />
                Poniedziałek – Piątek: 7:00 – 15:00
                <br />
                Sobota: nieczynne
                <br />
                Niedziela: nieczynne
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-slate-700/50 h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.2!2d22.0453!3d50.5704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cf63b48e42c13%3A0x8c6d2913f52ff670!2sul.%20Grabskiego%2041A%2C%2037-450%20Stalowa%20Wola!5e0!3m2!1spl!2spl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Technix Stalowa Wola"
            />
          </div>
        </div>
      </div>
    </section>
  );
}