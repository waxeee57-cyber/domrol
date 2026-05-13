export default function FinalCta() {
  return (
    <section
      className="text-center"
      style={{ borderTop: '1px solid var(--wire)', padding: '120px 2.5rem' }}
    >
      {/* Vertical line decoration */}
      <div
        aria-hidden="true"
        className="mx-auto mb-10"
        style={{
          width: '1px',
          height: '80px',
          background: 'linear-gradient(to bottom, var(--wire), transparent)',
        }}
      />

      <h2
        className="font-display mx-auto"
        style={{
          fontSize: 'clamp(3rem, 6vw, 6rem)',
          fontWeight: 400,
          letterSpacing: '-0.05em',
          lineHeight: 0.95,
        }}
      >
        <span className="block text-paper">Melyik</span>
        <span className="block text-dust">iparágban vagy?</span>
      </h2>

      <p
        className="font-body text-fog mx-auto mt-6"
        style={{ fontSize: '1rem', maxWidth: '480px', marginBottom: '3rem' }}
      >
        48 óra alatt éles. Done-for-you setup. Nincs IT csapat szükséges.
      </p>

      <div className="flex flex-wrap items-center justify-center" style={{ gap: '12px' }}>
        <a
          href="https://rentalos.domrol.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-medium text-ink bg-rental rounded-[2px] btn-rental"
          style={{ fontSize: '14px', padding: '12px 28px', display: 'inline-block' }}
        >
          🚗 RentalOS — Bérlési vállalkozás
        </a>
        <a
          href="https://tableos.domrol.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-medium text-paper bg-table rounded-[2px] btn-table"
          style={{ fontSize: '14px', padding: '12px 28px', display: 'inline-block' }}
        >
          🍕 TableOS — Étterem
        </a>
      </div>
    </section>
  )
}
