import { getTranslations } from 'next-intl/server'

export default async function WhyDomRol() {
  const t = await getTranslations('whyDomRol')

  const col1Items = t.raw('col1Items') as string[]
  const col2Items = t.raw('col2Items') as string[]
  const col3Items = t.raw('col3Items') as string[]

  return (
    <section
      id="why"
      style={{ borderTop: '1px solid var(--wire)', padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
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
          className="font-display text-paper mb-3"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
          }}
        >
          {t('title')}
        </h2>

        <p
          className="font-body text-fog mb-12"
          style={{ fontSize: '0.95rem', fontWeight: 300 }}
        >
          {t('body')}
        </p>

        {/* Three-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: '1px solid var(--wire)' }}
        >
          {/* Column 1 — Custom dev */}
          <div
            style={{ padding: '2.5rem 2rem', borderRight: '1px solid var(--wire)' }}
          >
            <div
              className="font-mono text-dust uppercase mb-3"
              style={{ fontSize: '10px', letterSpacing: '0.14em' }}
            >
              {t('col1Label')}
            </div>
            <div
              className="font-display text-paper mb-4"
              style={{ fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.03em' }}
            >
              {t('col1Title')}
            </div>
            <div
              style={{ borderTop: '1px solid var(--wire)', paddingTop: '1rem' }}
            />
            <ul className="flex flex-col" style={{ gap: '10px' }}>
              {col1Items.map((item) => (
                <li key={item} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ color: 'var(--table)', flexShrink: 0, fontSize: '13px' }}>✗</span>
                  <span className="font-body text-fog" style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Generic platforms */}
          <div
            style={{ padding: '2.5rem 2rem', borderRight: '1px solid var(--wire)' }}
          >
            <div
              className="font-mono text-dust uppercase mb-3"
              style={{ fontSize: '10px', letterSpacing: '0.14em' }}
            >
              {t('col2Label')}
            </div>
            <div
              className="font-display text-paper mb-4"
              style={{ fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.03em' }}
            >
              {t('col2Title')}
            </div>
            <div
              style={{ borderTop: '1px solid var(--wire)', paddingTop: '1rem' }}
            />
            <ul className="flex flex-col" style={{ gap: '10px' }}>
              {col2Items.map((item) => (
                <li key={item} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ color: 'var(--table)', flexShrink: 0, fontSize: '13px' }}>✗</span>
                  <span className="font-body text-fog" style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — DomRol */}
          <div
            className="bg-ink-2"
            style={{
              padding: '2.5rem 2rem',
              borderTop: '2px solid var(--rental)',
              marginTop: '-1px',
            }}
          >
            <div
              className="font-mono text-dust uppercase mb-3"
              style={{ fontSize: '10px', letterSpacing: '0.14em' }}
            >
              {t('col3Label')}
            </div>
            <div
              className="font-display text-paper mb-4"
              style={{ fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.03em' }}
            >
              {t('col3Title')}
            </div>
            <div
              style={{ borderTop: '1px solid var(--wire)', paddingTop: '1rem' }}
            />
            <ul className="flex flex-col" style={{ gap: '10px' }}>
              {col3Items.map((item) => (
                <li key={item} className="flex items-start" style={{ gap: '10px' }}>
                  <span style={{ color: 'var(--rental)', flexShrink: 0, fontSize: '13px' }}>✓</span>
                  <span className="font-body text-fog" style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
