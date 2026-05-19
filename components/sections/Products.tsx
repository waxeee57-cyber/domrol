import { getTranslations } from 'next-intl/server'

type ProductCardProps = {
  name: string
  status: string
  isLive: boolean
  description: string
  note: string
  url?: string
  icon: string
}

function ProductCard({ name, status, isLive, description, note, url, icon }: ProductCardProps) {
  return (
    <div
      className="card-hover flex flex-col"
      style={{
        background: '#111111',
        border: '1px solid #222222',
        borderRadius: '12px',
        padding: '28px',
      }}
    >
      {/* Icon + Status */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="font-mono"
          style={{ fontSize: '28px', lineHeight: 1 }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <span
          className="font-mono"
          style={{
            fontSize: '11px',
            letterSpacing: '0.06em',
            padding: '4px 10px',
            borderRadius: '100px',
            background: isLive ? '#C9A84C' : '#222222',
            color: isLive ? '#0A0A0A' : '#888888',
            fontWeight: isLive ? 700 : 400,
          }}
        >
          {status}
        </span>
      </div>

      {/* Name */}
      <div
        className="font-display text-paper mb-3"
        style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em' }}
      >
        {name}
      </div>

      {/* Description */}
      <p
        className="font-body text-fog mb-4 flex-1"
        style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}
      >
        {description}
      </p>

      {/* Note + Link */}
      <div className="flex items-center justify-between flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: '1px solid #222222' }}>
        <span
          className="font-mono"
          style={{ fontSize: '11px', color: '#555555', letterSpacing: '0.04em' }}
        >
          {note}
        </span>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono module-link"
            style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '0.04em' }}
          >
            View live <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  )
}

function NextCard({ status, description, note }: { status: string; description: string; note: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        background: '#111111',
        border: '1px dashed #333333',
        borderRadius: '12px',
        padding: '28px',
        minHeight: '220px',
      }}
    >
      <div className="font-mono mb-3" style={{ fontSize: '24px' }} aria-hidden="true">＋</div>
      <span
        className="font-mono mb-3"
        style={{
          fontSize: '11px',
          letterSpacing: '0.06em',
          padding: '4px 10px',
          borderRadius: '100px',
          background: '#222222',
          color: '#888888',
        }}
      >
        {status}
      </span>
      <p className="font-body text-fog mb-2" style={{ fontSize: '13px', lineHeight: 1.6 }}>
        {description}
      </p>
      <a
        href="#waitlist"
        className="font-mono"
        style={{ fontSize: '12px', color: '#C9A84C' }}
      >
        {note}
      </a>
    </div>
  )
}

export default async function Products() {
  const t = await getTranslations('products')

  const products: ProductCardProps[] = [
    {
      name: 'TableOS',
      status: t('tableosStatus'),
      isLive: true,
      description: t('tableosDesc'),
      note: t('tableosNote'),
      url: 'https://tableos.domrol.com',
      icon: '🍽️',
    },
    {
      name: 'Rentivo',
      status: t('rentivoStatus'),
      isLive: true,
      description: t('rentivoDesc'),
      note: t('rentivoNote'),
      icon: '📱',
    },
    {
      name: 'RentalOS',
      status: t('rentalosStatus'),
      isLive: true,
      description: t('rentalosDesc'),
      note: t('rentalosNote'),
      url: 'https://rentalos.domrol.com',
      icon: '🚗',
    },
    {
      name: 'DriveCostaSol',
      status: t('driveStatus'),
      isLive: true,
      description: t('driveDesc'),
      note: t('driveNote'),
      url: 'https://drivecostasol.com',
      icon: '🏖️',
    },
  ]

  return (
    <section
      id="products"
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

        {/* Product grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
          <NextCard
            status={t('nextStatus')}
            description={t('nextDesc')}
            note={t('nextNote')}
          />
        </div>
      </div>
    </section>
  )
}
