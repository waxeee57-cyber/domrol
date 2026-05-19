import { getTranslations } from 'next-intl/server'

const ICONS = ['✦', '⚡', '◈', '⬡', '◉', '▲']

type WhyCardProps = {
  icon: string
  title: string
  desc: string
}

function WhyCard({ icon, title, desc }: WhyCardProps) {
  return (
    <div
      className="card-hover"
      style={{
        background: '#111111',
        border: '1px solid #222222',
        borderRadius: '12px',
        padding: '28px',
      }}
    >
      <div
        className="font-mono mb-4"
        style={{ fontSize: '20px', color: '#C9A84C', lineHeight: 1 }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div
        className="font-display text-paper mb-3"
        style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}
      >
        {title}
      </div>
      <p
        className="font-body text-fog"
        style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}
      >
        {desc}
      </p>
    </div>
  )
}

export default async function WhyUs() {
  const t = await getTranslations('whyUs')

  const cards: WhyCardProps[] = [
    { icon: ICONS[0], title: t('provenTitle'),    desc: t('provenDesc') },
    { icon: ICONS[1], title: t('speedTitle'),     desc: t('speedDesc') },
    { icon: ICONS[2], title: t('stackTitle'),     desc: t('stackDesc') },
    { icon: ICONS[3], title: t('euTitle'),        desc: t('euDesc') },
    { icon: ICONS[4], title: t('ownershipTitle'), desc: t('ownershipDesc') },
    { icon: ICONS[5], title: t('maintainTitle'),  desc: t('maintainDesc') },
  ]

  return (
    <section
      id="why"
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
          className="font-display text-paper mb-12"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {t('title')}
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {cards.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
