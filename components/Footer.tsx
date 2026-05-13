import { SITE } from '@/lib/constants'

const PLATFORM_LINKS = [
  { label: 'RentalOS', href: 'https://rentalos.domrol.com' },
  { label: 'TableOS', href: 'https://tableos.domrol.com' },
  { label: 'StudioOS', href: '#' },
  { label: 'GarageOS', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: `mailto:${SITE.email}` },
]

const LEGAL_LINKS = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Security', href: '#' },
]

function FooterCol({
  header,
  links,
}: {
  header: string
  links: { label: string; href: string }[]
}) {
  return (
    <nav aria-label={header}>
      <div
        className="font-mono uppercase mb-4"
        style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--wire-2)' }}
      >
        {header}
      </div>
      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const isExternal = link.href.startsWith('http')
          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-body text-fog hover:text-paper transition-colors duration-200"
                style={{ fontSize: '13px', fontWeight: 300, textDecoration: 'none' }}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--wire)', padding: '48px 2.5rem 32px' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Top grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
          style={{ marginBottom: '3rem' }}
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="font-display text-paper"
              style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-0.04em' }}
              aria-label="Domrol — home"
            >
              Dom<span className="italic text-rental">rol</span>
            </a>
            <p
              className="font-body text-dust mt-3"
              style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.6, maxWidth: '240px' }}
            >
              {SITE.tagline} Built in Hungary. Deployed globally.
            </p>
          </div>

          <FooterCol header="Platform" links={PLATFORM_LINKS} />
          <FooterCol header="Company" links={COMPANY_LINKS} />
          <FooterCol header="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom row */}
        <div
          className="flex items-center justify-between flex-wrap"
          style={{
            borderTop: '1px solid var(--wire)',
            paddingTop: '20px',
            gap: '8px',
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: '10px', color: 'var(--wire-2)', letterSpacing: '0.06em' }}
          >
            © 2026 Domrol. All rights reserved.
          </span>
          <span
            className="font-mono"
            style={{ fontSize: '10px', color: 'var(--wire-2)', letterSpacing: '0.06em' }}
          >
            HU · ES · EU
          </span>
        </div>
      </div>
    </footer>
  )
}
