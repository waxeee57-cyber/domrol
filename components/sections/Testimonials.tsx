import { getTranslations } from 'next-intl/server'
import ScrollReveal from '@/components/ScrollReveal'
import { TESTIMONIALS } from '@/lib/constants'

export default async function Testimonials() {
  const t = await getTranslations('testimonials')

  const testimonialData = [
    {
      ...TESTIMONIALS[0],
      quote: t('costaSolQuote'),
      name: t('costaSolName'),
      role: t('costaSolRole'),
      stat: null,
    },
    {
      ...TESTIMONIALS[1],
      quote: t('zoldfeszekQuote'),
      name: t('zoldfeszekName'),
      role: t('zoldfeszekRole'),
      stat: t('zoldfeszekStat'),
    },
  ]

  return (
    <section
      className="bg-ink-2"
      style={{ borderTop: '1px solid var(--wire)', borderBottom: '1px solid var(--wire)', padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
          <span className="font-mono text-dust uppercase" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            — {t('label')}
          </span>
        </div>
        <h2 className="font-display text-paper mb-12" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
          {t('title')}
        </h2>
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', backgroundColor: 'var(--wire)' }}>
            {testimonialData.map((testimonial) => (
              <article key={testimonial.id} className="bg-ink hover:bg-ink-3 transition-colors duration-300" style={{ padding: '3rem 2.5rem' }}>
                <p className="quote-text font-display text-mist" style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 flex-wrap" style={{ borderTop: '1px solid var(--wire)', paddingTop: '1.5rem', marginTop: '2rem' }}>
                  <div className="font-mono text-dust flex items-center justify-center shrink-0" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--wire-2)', fontSize: '9px' }} aria-hidden="true">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body text-paper" style={{ fontSize: '13px', fontWeight: 500 }}>{testimonial.name}</div>
                    <div className="font-mono text-dust" style={{ fontSize: '10px', letterSpacing: '0.06em' }}>{testimonial.role}</div>
                    {testimonial.stat && (
                      <div className="font-mono text-dust" style={{ fontSize: '9px', marginTop: '2px', letterSpacing: '0.04em' }}>{testimonial.stat}</div>
                    )}
                  </div>
                  <div className="text-rental shrink-0" style={{ fontSize: '11px', letterSpacing: '2px' }} aria-label={`${testimonial.stars} out of 5 stars`}>
                    {'★'.repeat(testimonial.stars)}{'☆'.repeat(5 - testimonial.stars)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
