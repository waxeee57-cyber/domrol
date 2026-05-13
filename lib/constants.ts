export const SITE = {
  name: 'Domrol',
  tagline: 'Every business deserves an operating system.',
  description: 'Domrol builds vertical SaaS for industries that still run on WhatsApp.',
  url: 'https://domrol.com',
  email: 'info@domrol.com',
} as const

export const MODULES = [
  {
    id: 'rental',
    name: 'RentalOS',
    status: 'live' as const,
    statusLabel: 'Élő',
    segment: 'Bérlési vállalkozások',
    title: 'Bérlési vállalkozásoknak',
    description:
      'Autóbérlők, yacht charter, villa, motor, kerékpár, felszerelés — bármi aminek neve és napi díja van. Minden foglalás automatikusan visszaigazolva, másodpercek alatt. 0 elveszett foglalás az indulás óta.',
    pills: ['24/7 foglalás', 'Auto email', 'Flotta kezelés', 'Dokumentumok', 'Fotó napló', 'Demo mód'],
    url: 'https://rentalos.domrol.com',
    accent: 'rental' as const,
  },
  {
    id: 'table',
    name: 'TableOS',
    status: 'beta' as const,
    statusLabel: 'Beta',
    segment: 'Éttermek',
    title: 'Éttermeknek',
    description:
      'Kiszállítás, elvitel, helyben fogyasztás — egyetlen adminból. Saját online rendelési oldal, konyhai kanban kijelző, 2000+ ügyfél migrálható. Az első hónaptól megtérül a Wolt-jutalék megtakarításából.',
    pills: ['Online rendelés', 'Konyhai kanban', 'Ügyfél CRM', 'CSV import', 'Thermal print', 'Realtime'],
    url: 'https://tableos.domrol.com',
    accent: 'table' as const,
  },
] as const

export const COMING_MODULES = [
  {
    name: 'StudioOS',
    when: 'Q3 2026',
    segment: 'Szépségszalonok',
    desc: 'Időpontfoglalás, SMS emlékeztető, ügyfélkártya. 500.000+ szalon Európában.',
  },
  {
    name: 'GarageOS',
    when: 'Q4 2026',
    segment: 'Autószerviztulajdonosok',
    desc: 'Munkafelvétel, státusz értesítők, számla. 200.000+ kis szerelő.',
  },
  {
    name: 'MarinaOS',
    when: 'Q4 2026',
    segment: 'Vízi sportok',
    desc: 'Csónak, jet ski, búváriskolák. Adriai-tenger, Görögország, Horvátország.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote: "Every inquiry gets a confirmation within seconds. Our customers think we're a much bigger operation than we are.",
    name: 'CostaSol Car Rent',
    role: 'Marbella, Spanyolország · RentalOS',
    stars: 5,
    initials: 'CS',
  },
  {
    quote: 'Kedvencem Pázmándon! Finom ízek, gyors kiszolgálás! 10 éve visszajárunk — az online rendelés tökéletes.',
    name: 'Zöldfészek Pizzéria',
    role: 'Pázmánd, Magyarország · TableOS · 4.4★ · 45 értékelés',
    stars: 4,
    initials: 'ZP',
  },
] as const

export const ROADMAP = [
  { index: '01', name: 'RentalOS', segment: 'Bérlési vállalkozások', status: 'live' },
  { index: '02', name: 'TableOS', segment: 'Éttermek', status: 'beta' },
  { index: '03', name: 'StudioOS', segment: 'Szépségszalonok', status: 'q3' },
  { index: '04', name: 'GarageOS', segment: 'Autószerviztulajdonosok', status: 'q4' },
  { index: '05', name: 'MarinaOS', segment: 'Vízi sportok', status: 'q4' },
] as const
