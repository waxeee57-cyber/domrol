import { getTranslations } from 'next-intl/server'

function FooterCol({ header, links }: { header: string; links: { label: string; href: string; accent?: boolean }[] }) {
  return (
    <nav aria-label={header}>
      <div className="font-mono uppercase mb-4" style={{ fontSize: '9px', letterSpacing: '0.16em', color: 'var(--wire-2)' }}>
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
                className="font-body hover:text-paper transition-colors duration-200"
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  color: link.accent ? '#C9A84C' : 'var(--fog)',
                }}
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

export default async function Footer() {
  const t = await getTranslations('footer')

  const platformLinks = [
    { label: 'TableOS', href: 'https://tableos.domrol.com' },
    { label: 'RentalOS', href: 'https://rentalos.domrol.com' },
    { label: 'DriveCostaSol', href: 'https://drivecostasol.com' },
  ]

  const companyLinks = [
    { label: t('contact'), href: 'mailto:info@domrol.com' },
    { label: t('startProject'), href: '#waitlist', accent: true },
  ]

  const legalLinks = [
    { label: t('privacy'), href: '#' },
    { label: t('terms'), href: '#' },
  ]

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid var(--wire)', padding: '56px 2.5rem 32px' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12" style={{ marginBottom: '3rem' }}>
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="font-display text-paper"
              style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.04em' }}
              aria-label="DomRol — home"
            >
              Dom<span style={{ color: '#C9A84C' }}>Rol</span>
            </a>
            <p className="font-body text-dust mt-3" style={{ fontSize: '12px', fontWeight: 400, lineHeight: 1.6, maxWidth: '240px' }}>
              {t('tagline')}
            </p>
          </div>
          <FooterCol header={t('platformLabel')} links={platformLinks} />
          <FooterCol header={t('companyLabel')} links={companyLinks} />
          <FooterCol header={t('legalLabel')} links={legalLinks} />
        </div>
        <div
          className="flex items-center justify-between flex-wrap"
          style={{ borderTop: '1px solid var(--wire)', paddingTop: '20px', gap: '8px' }}
        >
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--dust)', letterSpacing: '0.06em' }}>
            {t('copyright')}
          </span>
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--dust)', letterSpacing: '0.06em' }}>
            HU · ES · EU
          </span>
        </div>
      </div>
    </footer>
  )
}
