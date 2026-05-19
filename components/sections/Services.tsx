import { getTranslations } from 'next-intl/server'

const SERVICE_ICONS = ['🌐', '⚙️', '🤖', '📱', '🔗', '🎨']

type ServiceCardProps = {
  icon: string
  title: string
  desc: string
}

function ServiceCard({ icon, title, desc }: ServiceCardProps) {
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
        className="mb-4"
        style={{ fontSize: '28px', lineHeight: 1 }}
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

export default async function Services() {
  const t = await getTranslations('services')

  const services = [
    { icon: SERVICE_ICONS[0], title: t('websiteTitle'), desc: t('websiteDesc') },
    { icon: SERVICE_ICONS[1], title: t('saasTitle'),    desc: t('saasDesc') },
    { icon: SERVICE_ICONS[2], title: t('aiTitle'),      desc: t('aiDesc') },
    { icon: SERVICE_ICONS[3], title: t('mobileTitle'),  desc: t('mobileDesc') },
    { icon: SERVICE_ICONS[4], title: t('apiTitle'),     desc: t('apiDesc') },
    { icon: SERVICE_ICONS[5], title: t('designTitle'),  desc: t('designDesc') },
  ]

  return (
    <section
      id="services"
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
          className="font-display text-paper mb-3"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {t('title')}
        </h2>
        <p
          className="font-body text-fog mb-12"
          style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '480px' }}
        >
          {t('subtitle')}
        </p>

        {/* Service grid: 3×2 desktop, 1 mobile */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px', marginBottom: '48px' }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#waitlist"
            className="btn-primary font-body inline-block"
            style={{ fontSize: '15px', padding: '13px 32px' }}
          >
            {t('cta')}
          </a>
          <p
            className="font-body text-fog mt-4"
            style={{ fontSize: '13px' }}
          >
            {t('ctaNote')}
          </p>
        </div>
      </div>
    </section>
  )
}
