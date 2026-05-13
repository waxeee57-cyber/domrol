import { getTranslations } from 'next-intl/server'
import ScrollReveal from '@/components/ScrollReveal'

export default async function Problem() {
  const t = await getTranslations('problem')

  const cards = [
    { num: '01', stat: t('card1Stat'), title: t('card1Title'), body: t('card1Body') },
    { num: '02', stat: t('card2Stat'), title: t('card2Title'), body: t('card2Body') },
    { num: '03', stat: t('card3Stat'), title: t('card3Title'), body: t('card3Body') },
  ]

  return (
    <section style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-16">
          <h2
            className="font-display text-paper"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
            }}
          >
            {t('title')}
          </h2>
          <p
            className="font-body text-fog"
            style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8 }}
          >
            {t('body')}
          </p>
        </div>

        <ScrollReveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '1px', backgroundColor: 'var(--wire)' }}
          >
            {cards.map((card) => (
              <article
                key={card.num}
                className="bg-ink hover:bg-ink-3 transition-colors duration-300"
                style={{ padding: '2.5rem 2rem' }}
              >
                <div
                  className="font-mono text-wire-2"
                  style={{ fontSize: '36px', lineHeight: 1, marginBottom: '0.75rem', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {card.num}
                </div>
                <div
                  className="font-mono text-rental"
                  style={{ fontSize: '11px', marginBottom: '0.5rem', lineHeight: 1.4 }}
                >
                  {card.stat}
                </div>
                <h3
                  className="font-display text-paper"
                  style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-body text-fog"
                  style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.7 }}
                >
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
