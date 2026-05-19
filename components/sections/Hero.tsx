import { getTranslations } from 'next-intl/server'

export default async function Hero() {
  const t = await getTranslations('hero')

  return (
    <section
      className="hero-grain relative min-h-screen flex flex-col"
      style={{
        background: [
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.08), transparent)',
          'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(201,168,76,0.04), transparent)',
          '#0A0A0A',
        ].join(', '),
      }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1100px] mx-auto w-full px-6"
        style={{ paddingTop: '120px', paddingBottom: '100px' }}
      >
        {/* Badge */}
        <div className="anim-rise-1 mb-8">
          <span
            className="inline-flex items-center gap-2 font-mono"
            style={{
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.27)',
              color: '#C9A84C',
              fontSize: '12px',
              letterSpacing: '0.06em',
              padding: '6px 14px',
              borderRadius: '100px',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#C9A84C',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {t('badge')}
          </span>
        </div>

        {/* H1 */}
        <h1
          className="anim-rise-2 font-display text-paper max-w-[860px]"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
          }}
        >
          <span className="block">{t('h1')}</span>
          <span className="block" style={{ color: '#C9A84C' }}>{t('h1Accent')}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-rise-3 font-body text-fog mt-6 mb-10"
          style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.7, maxWidth: '520px' }}
        >
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="anim-rise-3 flex flex-wrap items-center gap-3">
          <a
            href="#waitlist"
            className="btn-primary font-body"
            style={{ fontSize: '15px', padding: '13px 28px', display: 'inline-block' }}
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#products"
            className="btn-secondary font-body"
            style={{ fontSize: '15px', padding: '13px 28px', display: 'inline-block' }}
          >
            {t('ctaSecondary')}
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="anim-fadein relative z-10 w-full"
        style={{ height: '1px', backgroundColor: 'var(--wire)' }}
      />
    </section>
  )
}
