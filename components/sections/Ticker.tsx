'use client'

const ITEMS = [
  { name: 'CostaSol Car Rent', loc: 'Marbella, ES' },
  { name: 'Zöldfészek Pizzéria', loc: 'Pázmánd, HU' },
  { name: 'drivecostasol.com', loc: 'Live since 2026' },
  { name: '4.8★ Google', loc: 'CostaSol' },
  { name: '4.4★ Google', loc: 'Zöldfészek · 45 reviews' },
  { name: 'RentalOS · TableOS', loc: 'Live & Beta' },
]

/* Duplicate for seamless infinite loop (translateX -50%) */
const DOUBLED = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div
      className="ticker-wrap relative overflow-hidden"
      style={{ borderBottom: '1px solid var(--wire)' }}
    >
      {/* Left fade */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: '80px',
          background: 'linear-gradient(to right, var(--ink), transparent)',
        }}
      />
      {/* Right fade */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: '80px',
          background: 'linear-gradient(to left, var(--ink), transparent)',
        }}
      />

      <div className="ticker-track" aria-hidden="true">
        {DOUBLED.map((item, i) => (
          <div
            key={i}
            className="flex items-baseline shrink-0"
            style={{
              padding: '18px 40px',
              borderRight: '1px solid var(--wire)',
            }}
          >
            <span
              className="font-mono text-dust uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.1em' }}
            >
              {item.name}
            </span>
            <span
              className="font-mono"
              style={{ fontSize: '10px', color: 'var(--wire-2)', marginLeft: '10px' }}
            >
              {item.loc}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
