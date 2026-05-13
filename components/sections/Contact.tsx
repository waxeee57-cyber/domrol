import { getTranslations } from 'next-intl/server'

export default async function Contact() {
  const t = await getTranslations('contact')

  return (
    <section
      id="contact-form"
      style={{ borderTop: '1px solid var(--wire)', padding: '80px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                aria-hidden="true"
                style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }}
              />
              <span
                className="font-mono text-dust uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.18em' }}
              >
                — {t('label')}
              </span>
            </div>
            <h2
              className="font-display text-paper"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
              }}
            >
              {t('title')}
            </h2>
            <p
              className="font-body text-fog"
              style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, marginTop: '1rem' }}
            >
              {t('body')}
            </p>
          </div>

          {/* Right — buttons */}
          <div className="flex flex-col" style={{ gap: '10px' }}>
            <a
              href="https://rentalos.domrol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-rental font-body font-medium text-ink"
              style={{
                backgroundColor: 'var(--rental)',
                fontSize: '14px',
                padding: '12px 28px',
                borderRadius: '2px',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
            >
              {t('rentalBtn')}
            </a>
            <a
              href="https://tableos.domrol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn-table font-body font-medium text-paper"
              style={{
                backgroundColor: 'var(--table)',
                fontSize: '14px',
                padding: '12px 28px',
                borderRadius: '2px',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
            >
              {t('tableBtn')}
            </a>
            <div style={{ borderTop: '1px solid var(--wire)', margin: '4px 0' }} />
            <a
              href="mailto:info@domrol.com"
              className="font-body text-fog"
              style={{
                border: '1px solid var(--wire-2)',
                fontSize: '14px',
                padding: '12px 28px',
                borderRadius: '2px',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {t('emailBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
