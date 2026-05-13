import { getTranslations } from 'next-intl/server'

export default async function Hero() {
  const t = await getTranslations('hero')

  return (
    <section
      className="hero-grain relative min-h-screen flex flex-col"
      style={{
        background: [
          'radial-gradient(ellipse 60% 40% at 80% 60%, #110e08, transparent)',
          'radial-gradient(ellipse 120% 80% at 50% 0%, #141210, #080808)',
        ].join(', '),
      }}
    >
      {/* Content */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1100px] mx-auto w-full px-6"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        {/* Kicker */}
        <div className="anim-rise-1 flex items-center gap-3 mb-8">
          <div
            aria-hidden="true"
            style={{ width: '28px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }}
          />
          <span
            className="font-mono text-dust uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.18em' }}
          >
            {t('kicker')}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="anim-rise-2 font-display text-paper max-w-[900px]"
          style={{
            fontSize: 'clamp(3.2rem, 7vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
          }}
        >
          <span className="block">{t('h1Line1')}</span>
          <span className="block">
            <span className="italic text-rental">{t('h1Line2')}</span>
          </span>
          <span className="block text-dust">{t('h1Line3')}</span>
        </h1>

        {/* Bottom row */}
        <div className="anim-rise-3 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-16">
          {/* Subtitle */}
          <p
            className="font-body text-fog"
            style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.75, maxWidth: '420px' }}
          >
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#modules"
              className="font-body font-medium text-ink bg-paper rounded-[3px] btn-primary"
              style={{ fontSize: '14px', padding: '11px 24px', display: 'inline-block' }}
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#roadmap"
              className="font-body rounded-[3px] btn-ghost"
              style={{ fontSize: '14px', padding: '11px 24px', display: 'inline-block' }}
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Hero rule */}
      <div className="anim-fadein relative z-10 w-full" style={{ height: '1px', backgroundColor: 'var(--wire)' }} />
    </section>
  )
}
