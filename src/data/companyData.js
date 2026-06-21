export const companyInfo = {
  name: "Technix",
  fullName: "Technix Woźniacki i Wspólnicy Sp.j.",
  address: "ul. Grabskiego 41A, 37-450 Stalowa Wola, Poland",
  phone: "(15) 642-03-29",
  phone2: "(15) 642-03-06",
  email: "technix@technix.stalowa-wola.pl",
  regon: "831363340",
  nip: "865-236-47-61",
  bank: "BGŻ S.A. o/Stalowa Wola",
  account: "13 2030 0045 1110 0000 0053 4050",
  tagline: "Inżynieria precyzyjna. Produkcja na miarę.",
  description:
    "Od lat projektujemy i wytwarzamy specjalistyczne osprzęty do maszyn budowlanych, świadcząc jednocześnie usługi ciężkiej obróbki skrawaniem oraz regeneracji podzespołów. Łączymy tradycję polskiego przemysłu z nowoczesnymi technologiami.",
  heroTitle: "Ciężki Sprzęt. Precyzyjna Inżynieria.",
  heroSubtitle:
    "Projektujemy i produkujemy specjalistyczne osprzęty do koparek, ładowarek i wózków widłowych — z myślą o wydajności i trwałości w najcięższych warunkach.",
};

export const productCategories = [
  {
    id: "construction",
    title: "Osprzęt do Maszyn Budowlanych",
    description: "Wytrzymałe komponenty do koparek i ładowarek",
    icon: "Construction",
    products: [
      {
        name: "Szybkozłącze Hydrauliczne",
        spec: "Dla ładowarek 16–25 t • Przepływ do 150 l/min",
        description:
          "Szybkozłącze umożliwiające błyskawiczną zmianę osprzętu bez opuszczania kabiny. Kompatybilne z systemami Hydraulically i standardem Euro.",
      },
      {
        name: "Łyżka Wielofunkcyjna 4w1",
        spec: "Poj. 3–4 m³ • Dla ładowarek 20 t",
        description:
          "Uniwersalna łyżka chwytakowa do załadunku, zbierania, spychania i transportu. Konstrukcja z blachy Hardox.",
      },
      {
        name: "Zgarniak Skalny",
        spec: "Szer. 2.5 m • Dla koparek 25–35 t",
        description:
          "Zgarniak do ciężkich prac skalnych i rozbiórkowych. Wzmocnione zęby i listwy zużyciowe.",
      },
    ],
  },
  {
    id: "logistics",
    title: "Osprzęt Logistyczny / Wózki Widłowe",
    description: "Rozwiązania do magazynów i przeładunku",
    icon: "Package",
    products: [
      {
        name: "Adapter Widełkowy",
        spec: "Udźwig do 5 t • Szer. 150–200 mm",
        description:
          "Adapter umożliwiający szybką zmianę wideł. Idealny do wózków widłowych w magazynach o dużym natężeniu pracy.",
      },
      {
        name: "Zacisk do Bel",
        spec: "Rozstaw 600–1200 mm • Udźwig 2.5 t",
        description:
          "Zacisk hydrauliczny do transportu bel słomy, siana i materiałów sprasowanych. Regulowany nacisk ramion.",
      },
    ],
  },
  {
    id: "specialized",
    title: "Specjalistyczne Narzędzia Przemysłowe",
    description: "Osprzęt dla rolnictwa i infrastruktury",
    icon: "Settings",
    products: [
      {
        name: "Pług do Buraków Cukrowych (6 m)",
        spec: "Szer. robocza 6 m • Głęb. do 35 cm",
        description:
          "Pług ciągniony o szerokości 6 metrów przeznaczony do precyzyjnego wyorywania buraków cukrowych na dużych areałach.",
      },
      {
        name: "Pługo-odśnieżarka",
        spec: "Szer. 3–4 m • Do ładowarek i ciągników",
        description:
          "Pługo-odśnieżarka z hydraulicznie sterowanym lemieszem i składanymi skrzydłami. Idealna do utrzymania dróg i placów.",
      },
    ],
  },
];

export const services = [
  {
    id: "cnc-cutting",
    title: "Cięcie CNC Blach i Profili",
    description:
      "Precyzyjne cięcie gazowe i plazmowe na stole o wymiarach 2500×6000 mm. Maksymalna grubość cięcia: do 200 mm.",
    specs: ["Stół: 2500×6000 mm", "Grubość: do 200 mm", "Gaz / Plazma CNC"],
    icon: "Zap",
  },
  {
    id: "gear-cutting",
    title: "Obróbka Kół Zębatych i Wielowypustów",
    description:
      "Frezowanie i dłutowanie kół zębatych o długości do 3500 mm i średnicy do 350 mm. Precyzja dla napędów przemysłowych.",
    specs: ["Długość: do 3500 mm", "Średnica: do 350 mm", "Frezowanie / Dłutowanie"],
    icon: "Settings",
  },
  {
    id: "heavy-machining",
    title: "Ciężka Obróbka Skrawaniem",
    description:
      "Frezowanie, toczenie i wiercenie wielkogabarytowych elementów stalowych i żeliwnych. Zastosowanie: ramy, korpusy, wały.",
    specs: ["Frezowanie CNC", "Toczenie", "Wiercenie"],
    icon: "HardDrive",
  },
  {
    id: "welding",
    title: "Spawanie Produkcyjne",
    description:
      "Spawanie konstrukcji stalowych metodami MIG/MAG. Wykwalifikowani spawacze i kontrola jakości połączeń.",
    specs: ["MIG / MAG", "Konstrukcje stalowe", "Kontrola jakości"],
    icon: "Wifi",
  },
  {
    id: "repair",
    title: "Naprawa i Regeneracja Maszyn HSW/Cummins",
    description:
      "Specjalizujemy się w regeneracji skrzyń biegów, hydrozespołów napędowych oraz siłowników hydraulicznych do maszyn HSW i Cummins.",
    specs: ["Skrzynie biegów", "Hydrozespoły", "Siłowniki hydrauliczne"],
    icon: "Wrench",
  },
];

export const navLinks = [
  { id: "hero", label: "Technix" },
  { id: "catalog", label: "Produkty" },
  { id: "services", label: "Usługi" },
  { id: "contact", label: "Kontakt" },
];
