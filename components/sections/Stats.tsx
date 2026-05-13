import { getTranslations } from 'next-intl/server'

export default async function Stats() {
  const t = await getTranslations('stats')

  const stats = [
    { value: t('s1value'), label: t('s1label') },
    { value: t('s2value'), label: t('s2label') },
    { value: t('s3value'), label: t('s3label') },
    { value: t('s4value'), label: t('s4label') },
  ]

  return (
    <div
      className="bg-ink-2"
      style={{ borderTop: '1px solid var(--wire)', borderBottom: '1px solid var(--wire)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ padding: '28px 0' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center"
              style={{
                padding: '12px 16px',
                borderRight: i < stats.length - 1 ? '1px solid var(--wire)' : undefined,
              }}
            >
              <span
                className="font-display text-paper"
                style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.1 }}
              >
                {stat.value}
              </span>
              <span
                className="font-mono text-dust uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.14em', marginTop: '4px' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
