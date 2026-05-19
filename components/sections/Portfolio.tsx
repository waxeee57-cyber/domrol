import { getTranslations } from 'next-intl/server'

type PortfolioItemProps = {
  tag: string
  title: string
  desc: string
  stack: string[]
  linkLabel: string
  url: string
  gradient: string
  reverse?: boolean
}

function PortfolioItem({ tag, title, desc, stack, linkLabel, url, gradient, reverse }: PortfolioItemProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center`}
      style={{ gap: '40px', marginBottom: '64px' }}
    >
      {/* Visual — conditionally reversed on desktop */}
      <div
        className={reverse ? 'md:order-2' : 'md:order-1'}
        style={{
          height: '280px',
          borderRadius: '12px',
          background: gradient,
          border: '1px solid rgba(201,168,76,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Browser chrome mockup */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            bottom: '16px',
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ height: '28px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3a1a1a' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2a2210' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#102215' }} />
            <div style={{ flex: 1, height: '14px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', margin: '0 8px' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            <div
              className="font-display text-paper text-center"
              style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.04em', opacity: 0.9 }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? 'md:order-1' : 'md:order-2'}>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: '#888888', letterSpacing: '0.06em' }}
          >
            {tag}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              padding: '3px 9px',
              borderRadius: '100px',
              background: '#C9A84C',
              color: '#0A0A0A',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            Live
          </span>
        </div>

        <h3
          className="font-display text-paper mb-4"
          style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {title}
        </h3>

        <p
          className="font-body text-fog mb-6"
          style={{ fontSize: '14px', lineHeight: 1.8 }}
        >
          {desc}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '4px',
                background: '#1A1A1A',
                border: '1px solid #333333',
                color: '#888888',
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono module-link"
          style={{ fontSize: '13px', color: '#C9A84C', letterSpacing: '0.04em' }}
        >
          {linkLabel}
        </a>
      </div>
    </div>
  )
}

export default async function Portfolio() {
  const t = await getTranslations('portfolio')

  const items: PortfolioItemProps[] = [
    {
      tag: t('dunaiTag'),
      title: t('dunaiTitle'),
      desc: t('dunaiDesc'),
      stack: t.raw('dunaiStack') as string[],
      linkLabel: t('dunaiLink'),
      url: 'https://project-hoit7.vercel.app',
      gradient: 'linear-gradient(135deg, #1a0808 0%, #2a1010 50%, #1a0808 100%)',
    },
    {
      tag: t('zoldfeszekTag'),
      title: t('zoldfeszekTitle'),
      desc: t('zoldfeszekDesc'),
      stack: t.raw('zoldfeszekStack') as string[],
      linkLabel: t('zoldfeszekLink'),
      url: 'https://zoldfeszek.hu',
      gradient: 'linear-gradient(135deg, #081a08 0%, #0f2a10 50%, #081a08 100%)',
      reverse: true,
    },
    {
      tag: t('driveTag'),
      title: t('driveTitle'),
      desc: t('driveDesc'),
      stack: t.raw('driveStack') as string[],
      linkLabel: t('driveLink'),
      url: 'https://drivecostasol.com',
      gradient: 'linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%)',
    },
  ]

  return (
    <section
      id="portfolio"
      style={{ borderTop: '1px solid var(--wire)', padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
          <span className="font-mono text-dust uppercase" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            — {t('label')}
          </span>
        </div>

        <h2
          className="font-display text-paper mb-3"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {t('title')}
        </h2>
        <p
          className="font-body text-fog mb-16"
          style={{ fontSize: '1rem', lineHeight: 1.7 }}
        >
          {t('subtitle')}
        </p>

        {items.map((item) => (
          <PortfolioItem key={item.title} {...item} />
        ))}

        {/* Bottom CTA */}
        <div
          className="text-center"
          style={{ borderTop: '1px solid var(--wire)', paddingTop: '48px' }}
        >
          <a
            href="#waitlist"
            className="font-mono"
            style={{ fontSize: '14px', color: '#C9A84C', letterSpacing: '0.04em' }}
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
