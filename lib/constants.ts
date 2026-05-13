export const SITE = {
  name: 'DomRol',
  tagline: 'Every business deserves an operating system.',
  description: 'DomRol builds vertical SaaS for industries that still run on WhatsApp.',
  url: 'https://domrol.com',
  email: 'info@domrol.com',
} as const

export const STATS = [
  { value: '2', label: 'Live products' },
  { value: '0', label: 'Double bookings since launch' },
  { value: '48h', label: 'Average go-live time' },
  { value: '4 280', label: 'Customers migrated' },
] as const

export const MODULES = [
  {
    id: 'rental',
    name: 'RentalOS',
    status: 'live' as const,
    statusLabel: 'Live',
    url: 'https://rentalos.domrol.com',
    accent: 'rental' as const,
  },
  {
    id: 'table',
    name: 'TableOS',
    status: 'beta' as const,
    statusLabel: 'Beta',
    url: 'https://tableos.domrol.com',
    accent: 'table' as const,
  },
] as const

export const TESTIMONIALS = [
  {
    id: 'costas',
    stars: 5,
    initials: 'CS',
  },
  {
    id: 'zoldfeszek',
    stars: 4,
    initials: 'ZP',
  },
] as const
