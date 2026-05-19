'use client'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

type Locale = 'en' | 'hu'

function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center gap-1">
      {(['en', 'hu'] as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className="font-mono uppercase transition-colors duration-200"
          style={{
            fontSize: '11px',
            letterSpacing: '0.1em',
            padding: '5px 10px',
            borderRadius: '4px',
            border: locale === loc ? 'none' : '1px solid var(--wire)',
            backgroundColor: locale === loc ? '#C9A84C' : 'transparent',
            color: locale === loc ? '#0A0A0A' : 'var(--dust)',
            cursor: 'pointer',
            fontWeight: locale === loc ? 700 : 400,
          }}
          aria-current={locale === loc ? 'true' : undefined}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { label: t('products'),  href: '#products' },
    { label: t('services'),  href: '#services' },
    { label: t('portfolio'), href: '#portfolio' },
    { label: t('whyUs'),     href: '#why' },
    { label: t('about'),     href: '#about' },
    { label: t('numbers'),   href: '#numbers' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
        style={{
          height: '60px',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--wire)' : '1px solid transparent',
          transition: 'background-color 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="font-display text-paper select-none"
          style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.04em' }}
          aria-label="DomRol — home"
        >
          Dom<span style={{ color: '#C9A84C' }}>Rol</span>
        </a>

        {/* Center links — desktop */}
        <div className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-fog hover:text-paper transition-colors duration-200"
              style={{ fontSize: '13px' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitcher />
          <a
            href="#waitlist"
            className="btn-primary font-body"
            style={{ fontSize: '13px', padding: '8px 20px', display: 'inline-block' }}
          >
            {t('earlyAccess')}
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-paper text-xl p-2 leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden${menuOpen ? ' open' : ''}`}
        style={{ background: '#0A0A0A' }}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-fog hover:text-paper transition-colors duration-200 text-lg"
          >
            {link.label}
          </a>
        ))}
        <LocaleSwitcher />
        <a
          href="#waitlist"
          onClick={() => setMenuOpen(false)}
          className="btn-primary font-body mt-2"
          style={{ fontSize: '15px', padding: '13px 32px', display: 'inline-block' }}
        >
          {t('earlyAccess')}
        </a>
      </div>
    </>
  )
}
