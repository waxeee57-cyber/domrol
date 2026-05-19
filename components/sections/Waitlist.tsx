'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Waitlist() {
  const t = useTranslations('waitlist')
  const [email, setEmail] = useState('')
  const [checks, setChecks] = useState({ products: false, website: false, saas: false, ai: false })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const checkboxes = [
    { key: 'products', label: t('checkProducts') },
    { key: 'website',  label: t('checkWebsite') },
    { key: 'saas',     label: t('checkSaas') },
    { key: 'ai',       label: t('checkAi') },
  ] as const

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const toggleCheck = (key: keyof typeof checks) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section
      id="waitlist"
      style={{
        borderTop: '1px solid var(--wire)',
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(201,168,76,0.03) 0%, transparent 100%)',
      }}
    >
      <div className="max-w-[600px] mx-auto px-6 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
          <span className="font-mono text-dust uppercase" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
            — {t('label')}
          </span>
          <div aria-hidden="true" style={{ width: '20px', height: '1px', backgroundColor: 'var(--dust)', flexShrink: 0 }} />
        </div>

        <h2
          className="font-display text-paper mb-3"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          {t('title')}
        </h2>
        <p
          className="font-body text-fog mb-10"
          style={{ fontSize: '1rem', lineHeight: 1.7 }}
        >
          {t('subtitle')}
        </p>

        {submitted ? (
          <div
            style={{
              background: '#111111',
              border: '1px solid rgba(201,168,76,0.27)',
              borderRadius: '12px',
              padding: '40px 32px',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }} aria-hidden="true">✦</div>
            <div
              className="font-display text-paper mb-2"
              style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.03em' }}
            >
              {t('successTitle')}
            </div>
            <p className="font-body text-fog" style={{ fontSize: '14px' }}>
              {t('successDesc')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Email input */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                className="font-body w-full"
                style={{
                  background: '#111111',
                  border: error ? '1px solid rgba(224,82,82,0.6)' : '1px solid #222222',
                  borderRadius: '8px',
                  color: '#F5F5F5',
                  fontSize: '15px',
                  padding: '14px 18px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#C9A84C' }}
                onBlur={(e) => { e.target.style.borderColor = error ? 'rgba(224,82,82,0.6)' : '#222222' }}
              />
              {error && (
                <p className="font-mono text-left mt-2" style={{ fontSize: '11px', color: 'rgba(224,82,82,0.9)' }}>
                  {error}
                </p>
              )}
            </div>

            {/* Checkboxes */}
            <div
              style={{
                background: '#111111',
                border: '1px solid #222222',
                borderRadius: '8px',
                padding: '16px 18px',
                marginBottom: '16px',
                textAlign: 'left',
              }}
            >
              {checkboxes.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center gap-3 cursor-pointer"
                  style={{ padding: '6px 0' }}
                >
                  <div
                    onClick={() => toggleCheck(key)}
                    role="checkbox"
                    aria-checked={checks[key]}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') toggleCheck(key) }}
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '4px',
                      border: checks[key] ? 'none' : '1px solid #333333',
                      background: checks[key] ? '#C9A84C' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 0.15s, border 0.15s',
                      cursor: 'pointer',
                    }}
                  >
                    {checks[key] && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4l2.5 2.5L9 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="font-body text-fog" style={{ fontSize: '14px' }}>{label}</span>
                </label>
              ))}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary font-body w-full"
              style={{ fontSize: '15px', padding: '14px 28px', cursor: 'pointer', width: '100%' }}
            >
              {t('submit')}
            </button>

            <p
              className="font-mono text-fog mt-4"
              style={{ fontSize: '11px', letterSpacing: '0.04em' }}
            >
              {t('note')}
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
