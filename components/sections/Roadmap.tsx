import { getTranslations } from 'next-intl/server'
import ScrollReveal from '@/components/ScrollReveal'

type RoadmapItem = {
  index: string
  name: string
  segment: string
  status: 'live' | 'beta' | 'q3' | 'q4'
  statusLabel: string
}

type StatusKey = RoadmapItem['status']

function getBadgeStyle(status: StatusKey) {
  const styles: Record<StatusKey, { color: string; borderColor: string; backgroundColor: string }> = {
    live: { color: 'var(--rental)', borderColor: 'rgba(212,168,83,0.3)', backgroundColor: 'rgba(212,168,83,0.05)' },
    beta: { color: 'var(--table)', borderColor: 'rgba(196,75,42,0.3)', backgroundColor: 'rgba(196,75,42,0.05)' },
    q3: { color: 'var(--dust)', borderColor: 'var(--wire)', backgroundColor: 'transparent' },
    q4: { color: 'var(--wire-2)', borderColor: 'var(--wire)', backgroundColor: 'transparent' },
  }
  return styles[status]
}

export default async function Roadmap() {
  const t = await getTranslations('roadmap')
  const items = t.raw('items') as RoadmapItem[]

  return (
    <section id="roadmap" style={{ borderTop: '1px solid var(--wire)', padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
          <span className="font-mono text-dust uppercase" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>— {t('label')}</span>
        </div>
        <h2 className="font-display text-paper mb-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, letterSpacing: '-0.04em' }}>
          {t('title')}
        </h2>
        <p className="font-body text-fog mb-12" style={{ fontSize: '0.95rem', fontWeight: 300 }}>
          {t('body')}
        </p>
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" style={{ gap: '1px', backgroundColor: 'var(--wire)', border: '1px solid var(--wire)' }}>
            {items.map((item) => {
              const badge = getBadgeStyle(item.status)
              return (
                <div key={item.index} className="bg-ink hover:bg-ink-2 transition-colors duration-300" style={{ padding: '2rem 1.5rem' }}>
                  <div className="font-mono text-wire" style={{ fontSize: '28px', letterSpacing: '-0.04em', marginBottom: '1rem' }} aria-hidden="true">{item.index}</div>
                  <div className="font-display text-paper" style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.03em' }}>{item.name}</div>
                  <div className="font-body text-fog" style={{ fontSize: '12px', fontWeight: 300, marginBottom: '1rem', marginTop: '2px' }}>{item.segment}</div>
                  <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.1em', border: `1px solid ${badge.borderColor}`, padding: '3px 8px', color: badge.color, backgroundColor: badge.backgroundColor }}>
                    {item.statusLabel}
                  </span>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
