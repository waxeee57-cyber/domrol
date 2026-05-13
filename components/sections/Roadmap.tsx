import { ROADMAP } from '@/lib/constants'
import ScrollReveal from '@/components/ScrollReveal'

type StatusKey = typeof ROADMAP[number]['status']

function getBadgeStyle(status: StatusKey) {
  const styles: Record<StatusKey, { color: string; borderColor: string; backgroundColor: string; label: string }> = {
    live: {
      color: 'var(--rental)',
      borderColor: 'rgba(212,168,83,0.3)',
      backgroundColor: 'rgba(212,168,83,0.05)',
      label: 'Live',
    },
    beta: {
      color: 'var(--table)',
      borderColor: 'rgba(196,75,42,0.3)',
      backgroundColor: 'rgba(196,75,42,0.05)',
      label: 'Beta',
    },
    q3: {
      color: 'var(--dust)',
      borderColor: 'var(--wire)',
      backgroundColor: 'transparent',
      label: 'Q3 2026',
    },
    q4: {
      color: 'var(--wire-2)',
      borderColor: 'var(--wire)',
      backgroundColor: 'transparent',
      label: 'Q4 2026',
    },
  }
  return styles[status]
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
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
            — Roadmap
          </span>
        </div>

        <h2
          className="font-display text-paper mb-4"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
          }}
        >
          One architecture. Every vertical.
        </h2>

        <p
          className="font-body text-fog"
          style={{ fontSize: '0.95rem', fontWeight: 300 }}
        >
          Minden iparágnak építünk egy OS-t — ugyanabból az architektúrából, iparág-specifikus funkcionalitással.
        </p>

        <ScrollReveal>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
            style={{
              gap: '1px',
              backgroundColor: 'var(--wire)',
              border: '1px solid var(--wire)',
              marginTop: '4rem',
            }}
          >
            {ROADMAP.map((item) => {
              const badge = getBadgeStyle(item.status)
              return (
                <div
                  key={item.index}
                  className="bg-ink hover:bg-ink-2 transition-colors duration-300"
                  style={{ padding: '2rem 1.5rem' }}
                >
                  <div
                    className="font-mono text-wire"
                    style={{ fontSize: '28px', letterSpacing: '-0.04em', marginBottom: '1rem' }}
                    aria-hidden="true"
                  >
                    {item.index}
                  </div>
                  <div
                    className="font-display text-paper"
                    style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.03em' }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="font-body text-fog"
                    style={{ fontSize: '12px', fontWeight: 300, marginBottom: '1rem', marginTop: '2px' }}
                  >
                    {item.segment}
                  </div>
                  <span
                    className="font-mono uppercase"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      border: `1px solid ${badge.borderColor}`,
                      padding: '3px 8px',
                      color: badge.color,
                      backgroundColor: badge.backgroundColor,
                    }}
                  >
                    {badge.label}
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
