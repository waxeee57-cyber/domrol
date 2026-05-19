import { getTranslations } from 'next-intl/server'

export default async function Numbers() {
  const t = await getTranslations('numbers')

  const stats = [
    { value: t('s1value'), label: t('s1label') },
    { value: t('s2value'), label: t('s2label') },
    { value: t('s3value'), label: t('s3label') },
    { value: t('s4value'), label: t('s4label') },
  ]

  return (
    <section
      id="numbers"
      style={{ borderTop: '1px solid var(--wire)', borderBottom: '1px solid var(--wire)', padding: '80px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
          <span className="font-mono text-dust uppercase" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            — {t('label')}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '2px' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center"
              style={{
                padding: '32px 24px',
                background: '#111111',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === stats.length - 1 ? '0 12px 12px 0' : '0',
                border: '1px solid #222222',
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  color: '#C9A84C',
                }}
              >
                {stat.value}
              </span>
              <span
                className="font-mono text-fog uppercase mt-2"
                style={{ fontSize: '10px', letterSpacing: '0.14em', lineHeight: 1.5 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
