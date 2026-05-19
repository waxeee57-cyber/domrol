import { getTranslations } from 'next-intl/server'

type PersonCardProps = {
  initials: string
  name: string
  role: string
  desc: string
}

function PersonCard({ initials, name, role, desc }: PersonCardProps) {
  return (
    <div
      className="card-hover flex flex-col"
      style={{
        background: '#111111',
        border: '1px solid #222222',
        borderRadius: '12px',
        padding: '32px',
      }}
    >
      {/* Avatar */}
      <div
        className="font-display mb-6"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.27)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 800,
          color: '#C9A84C',
          letterSpacing: '-0.02em',
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {initials}
      </div>

      {/* Name */}
      <div
        className="font-display text-paper mb-1"
        style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.03em' }}
      >
        {name}
      </div>

      {/* Role */}
      <div
        className="font-mono mb-4"
        style={{ fontSize: '13px', color: '#C9A84C', letterSpacing: '0.04em' }}
      >
        {role}
      </div>

      {/* Description */}
      <p
        className="font-body"
        style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.75, color: '#888888' }}
      >
        {desc}
      </p>
    </div>
  )
}

export default async function About() {
  const t = await getTranslations('about')

  const people: PersonCardProps[] = [
    {
      initials: 'R',
      name: t('rolandName'),
      role: t('rolandRole'),
      desc: t('rolandDesc'),
    },
    {
      initials: 'D',
      name: t('dominikName'),
      role: t('dominikRole'),
      desc: t('dominikDesc'),
    },
  ]

  return (
    <section
      id="about"
      style={{ borderTop: '1px solid var(--wire)', padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Label */}
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
          className="font-display text-paper mb-12"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {t('title')}
        </h2>

        {/* Two cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '16px', marginBottom: '48px' }}
        >
          {people.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </div>

        {/* Footer line */}
        <div
          className="text-center font-mono text-fog"
          style={{ fontSize: '13px', letterSpacing: '0.04em' }}
        >
          {t('footer')}
        </div>
      </div>
    </section>
  )
}
