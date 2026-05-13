import { MODULES, COMING_MODULES } from '@/lib/constants'

/* ─── RentalOS admin mockup ───────────────────────────── */
function RentalMockup() {
  const rows = [
    { name: 'Carlos M.', vehicle: 'Ford Focus', status: 'Active' as const },
    { name: 'Anna K.', vehicle: 'BMW 3', status: 'Confirmed' as const },
    { name: 'Lukas B.', vehicle: 'VW Golf', status: 'Pending' as const },
    { name: 'Sofia R.', vehicle: 'Audi A3', status: 'Confirmed' as const },
  ]

  const badge = (s: 'Active' | 'Confirmed' | 'Pending') => {
    if (s === 'Active')
      return {
        background: 'rgba(212,168,83,0.12)',
        color: 'var(--rental)',
      }
    if (s === 'Pending')
      return {
        background: 'rgba(196,75,42,0.10)',
        color: '#c46040',
      }
    return {
      background: 'rgba(255,255,255,0.05)',
      color: 'var(--dust)',
    }
  }

  return (
    <div
      className="bg-ink-3 w-full"
      style={{ maxWidth: '380px', border: '1px solid var(--wire)', borderRadius: '4px' }}
      role="img"
      aria-label="RentalOS admin dashboard mockup"
    >
      {/* Window bar */}
      <div
        className="bg-ink-4 flex items-center gap-2"
        style={{ padding: '8px 14px', borderBottom: '1px solid var(--wire)' }}
      >
        <div className="flex gap-[6px]">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3a1a1a' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2a2210' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#102215' }} />
        </div>
        <span
          className="font-mono flex-1 text-center"
          style={{ fontSize: '9px', color: 'var(--wire-2)' }}
        >
          rentalos.domrol.com/admin
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '16px' }}>
        <div
          className="font-mono text-dust uppercase mb-3"
          style={{ fontSize: '9px', letterSpacing: '0.12em' }}
        >
          Dashboard — Today
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 mb-4" style={{ gap: '8px' }}>
          {[
            { label: 'Bookings', value: '12', accent: true },
            { label: 'Active', value: '7', accent: false },
            { label: 'Revenue', value: '€840', accent: false },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-ink"
              style={{ border: '1px solid var(--wire)', borderRadius: '2px', padding: '10px' }}
            >
              <div
                className="font-mono text-dust uppercase mb-1"
                style={{ fontSize: '8px' }}
              >
                {s.label}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  color: s.accent ? 'var(--rental)' : 'var(--paper)',
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ border: '1px solid var(--wire)', borderRadius: '2px', overflow: 'hidden' }}>
          {/* Header */}
          <div
            className="grid font-mono"
            style={{
              gridTemplateColumns: '1fr 1fr auto',
              padding: '6px 8px',
              borderBottom: '1px solid var(--wire)',
              fontSize: '8px',
              letterSpacing: '0.08em',
              color: 'var(--wire-2)',
            }}
          >
            <span>Customer</span>
            <span>Vehicle</span>
            <span>Status</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid hover:bg-ink-2 transition-colors"
              style={{
                gridTemplateColumns: '1fr 1fr auto',
                padding: '7px 8px',
                borderBottom: '1px solid var(--wire)',
                fontSize: '11px',
                color: 'var(--fog)',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'var(--mist)', fontWeight: 500 }}>{row.name}</span>
              <span>{row.vehicle}</span>
              <span
                className="font-mono"
                style={{
                  fontSize: '8px',
                  padding: '2px 6px',
                  borderRadius: '1px',
                  ...badge(row.status),
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── TableOS kitchen mockup ──────────────────────────── */
function TableMockup() {
  const columns = [
    {
      header: 'New · 3',
      headerColor: 'var(--dust)',
      cards: [
        { id: '#247', items: '2× Margherita / 1× Cola', time: '2 min ago', accent: 'table' as const },
        { id: '#248', items: '1× Pepperoni / 1× Tiramisu', time: 'just now', accent: 'table' as const },
      ],
    },
    {
      header: 'Prep · 2',
      headerColor: 'var(--rental)',
      cards: [
        { id: '#245', items: '3× BBQ Chicken / 2× Fries', time: '8 min ago', accent: 'rental' as const },
      ],
    },
    {
      header: 'Done · 5',
      headerColor: '#5a9a5a',
      cards: [
        { id: '#243', items: '2× Quattro', time: '12 min ago', accent: 'none' as const },
      ],
    },
  ]

  const cardBorder = (accent: 'table' | 'rental' | 'none') => {
    if (accent === 'table') return '2px solid var(--table)'
    if (accent === 'rental') return '2px solid var(--rental)'
    return 'none'
  }

  return (
    <div
      className="bg-ink-3 w-full"
      style={{ maxWidth: '380px', border: '1px solid var(--wire)', borderRadius: '4px' }}
      role="img"
      aria-label="TableOS kitchen display mockup"
    >
      {/* Window bar */}
      <div
        className="bg-ink-4 flex items-center gap-2"
        style={{ padding: '8px 14px', borderBottom: '1px solid var(--wire)' }}
      >
        <div className="flex gap-[6px]">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3a1a1a' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2a2210' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#102215' }} />
        </div>
        <span
          className="font-mono flex-1 text-center"
          style={{ fontSize: '9px', color: 'var(--wire-2)' }}
        >
          tableos.domrol.com/admin/kitchen
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '16px' }}>
        <div
          className="font-mono text-dust uppercase mb-3"
          style={{ fontSize: '9px', letterSpacing: '0.12em' }}
        >
          Kitchen Display — Live
        </div>

        <div className="grid grid-cols-3" style={{ gap: '8px' }}>
          {columns.map((col) => (
            <div key={col.header}>
              <div
                className="font-mono uppercase mb-2"
                style={{ fontSize: '8px', letterSpacing: '0.06em', color: col.headerColor }}
              >
                {col.header}
              </div>
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-ink"
                  style={{
                    border: '1px solid var(--wire)',
                    borderLeft: cardBorder(card.accent),
                    borderRadius: '2px',
                    padding: '8px',
                    marginBottom: '6px',
                  }}
                >
                  <div
                    className="font-mono text-dust"
                    style={{ fontSize: '8px', marginBottom: '3px' }}
                  >
                    {card.id}
                  </div>
                  <div
                    className="text-fog"
                    style={{ fontSize: '10px', lineHeight: 1.4, marginBottom: '3px' }}
                  >
                    {card.items}
                  </div>
                  <div
                    className="font-mono"
                    style={{ fontSize: '8px', color: 'var(--wire-2)' }}
                  >
                    {card.time}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────── */
export default function Modules() {
  const rental = MODULES[0]
  const table = MODULES[1]

  return (
    <section id="modules" style={{ borderTop: '1px solid var(--wire)' }}>
      {/* Section header */}
      <div
        className="max-w-[1100px] mx-auto px-6"
        style={{ paddingTop: '80px', paddingBottom: '48px' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            aria-hidden="true"
            style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }}
          />
          <span
            className="font-mono text-dust uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          >
            — A megoldás
          </span>
        </div>
        <h2
          className="font-display text-paper"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
          }}
        >
          Egy platform. Minden iparágnak.
        </h2>
      </div>

      {/* ── RentalOS row ─────────────────────── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: '440px', borderBottom: '1px solid var(--wire)' }}
      >
        {/* Info col */}
        <div
          className="hover:bg-ink-2 transition-colors duration-300"
          style={{ padding: '4rem 3rem', borderRight: '1px solid var(--wire)' }}
        >
          {/* Tag */}
          <div className="flex items-center gap-2 mb-5">
            <div
              aria-hidden="true"
              style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--rental)', flexShrink: 0 }}
            />
            <span
              className="font-mono text-dust uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.16em' }}
            >
              {rental.name} · {rental.statusLabel}
            </span>
          </div>

          <h2
            className="font-display text-paper mb-5"
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.05em',
              lineHeight: 1.0,
            }}
          >
            {rental.title}
          </h2>

          <p
            className="font-body text-fog mb-6"
            style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '380px' }}
          >
            {rental.description}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap mb-6" style={{ gap: '6px' }}>
            {rental.pills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-dust"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  border: '1px solid var(--wire-2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href={rental.url}
            target="_blank"
            rel="noopener noreferrer"
            className="module-link font-mono text-rental uppercase"
            style={{ fontSize: '12px', letterSpacing: '0.1em' }}
          >
            {rental.url.replace('https://', '')} <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Screen col */}
        <div
          className="bg-ink-2 flex items-center justify-center overflow-hidden"
          style={{ padding: '3rem' }}
        >
          <RentalMockup />
        </div>
      </div>

      {/* ── TableOS row (screen left, info right) ─ */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: '440px', borderBottom: '1px solid var(--wire)' }}
      >
        {/* Screen col — order-2 on mobile, order-1 on desktop */}
        <div
          className="bg-ink-2 flex items-center justify-center overflow-hidden order-2 md:order-1"
          style={{ padding: '3rem' }}
        >
          <TableMockup />
        </div>

        {/* Info col — order-1 on mobile, order-2 on desktop */}
        <div
          className="hover:bg-ink-2 transition-colors duration-300 order-1 md:order-2"
          style={{ padding: '4rem 3rem', borderLeft: '1px solid var(--wire)' }}
        >
          {/* Tag */}
          <div className="flex items-center gap-2 mb-5">
            <div
              aria-hidden="true"
              style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--table)', flexShrink: 0 }}
            />
            <span
              className="font-mono text-dust uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.16em' }}
            >
              {table.name} · {table.statusLabel}
            </span>
          </div>

          <h2
            className="font-display text-paper mb-5"
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.05em',
              lineHeight: 1.0,
            }}
          >
            {table.title}
          </h2>

          <p
            className="font-body text-fog mb-6"
            style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '380px' }}
          >
            {table.description}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap mb-6" style={{ gap: '6px' }}>
            {table.pills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-dust"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  border: '1px solid var(--wire-2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href={table.url}
            target="_blank"
            rel="noopener noreferrer"
            className="module-link font-mono text-table uppercase"
            style={{ fontSize: '12px', letterSpacing: '0.1em' }}
          >
            {table.url.replace('https://', '')} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* ── Coming soon ───────────────────────── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 bg-ink"
        style={{ borderBottom: '1px solid var(--wire)' }}
      >
        {COMING_MODULES.map((mod, i) => (
          <div
            key={mod.name}
            className="hover:bg-ink-2 transition-colors duration-300"
            style={{
              padding: '2rem 1.5rem',
              borderRight: i < COMING_MODULES.length - 1 ? '1px solid var(--wire)' : undefined,
            }}
          >
            <div
              className="font-mono uppercase mb-3"
              style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'var(--wire-2)' }}
            >
              {mod.name} · {mod.when}
            </div>
            <h3
              className="font-display text-paper"
              style={{ fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '4px' }}
            >
              {mod.segment}
            </h3>
            <p
              className="font-body text-fog"
              style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.6 }}
            >
              {mod.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
