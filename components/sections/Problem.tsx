import ScrollReveal from '@/components/ScrollReveal'

const CARDS = [
  {
    num: '01',
    title: 'Elveszett foglalások',
    body: 'Hétvégi érdeklődések érkeznek, nincs aki válaszol. Az ügyfél máshova megy — és nem jön vissza.',
  },
  {
    num: '02',
    title: 'Dupla foglalások',
    body: 'Manuális Excel, telefonos egyeztetés. Néha ketten foglalják ugyanazt az időpontot.',
  },
  {
    num: '03',
    title: '25–30% jutalék',
    body: 'Wolt, Foodpanda — minden rendelésen elveszi a negyedét. 100 rendelés × €12 átlag = €300/hó elveszett profit.',
  },
]

export default function Problem() {
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
            — A probléma
          </span>
        </div>

        {/* Two-col header */}
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
            Millió vállalkozás él WhatsApp-on.
          </h2>
          <p
            className="font-body text-fog"
            style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8 }}
          >
            Nincs rendszer. Nincs valós idejű áttekintés. Nincsenek automatizált folyamatok.
            Csak chat üzenetek — és elveszett foglalások éjszaka, hétvégén, ünnepnapokon.
          </p>
        </div>

        {/* Pain cards */}
        <ScrollReveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '1px', backgroundColor: 'var(--wire)' }}
          >
            {CARDS.map((card) => (
              <article
                key={card.num}
                className="bg-ink hover:bg-ink-3 transition-colors duration-300"
                style={{ padding: '2.5rem 2rem' }}
              >
                <div
                  className="font-mono text-wire-2"
                  style={{ fontSize: '36px', lineHeight: 1, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {card.num}
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
