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
            borderRadius: '2px',
            border: locale === loc ? 'none' : '1px solid var(--wire)',
            backgroundColor: locale === loc ? 'var(--paper)' : 'transparent',
            color: locale === loc ? 'var(--ink)' : 'var(--dust)',
            cursor: 'pointer',
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
    { label: t('modules'), href: '#modules' },
    { label: t('roadmap'), href: '#roadmap' },
    { label: t('contact'), href: '#contact-form' },
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
          height: '56px',
          backgroundColor: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
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
          style={{ fontSize: '17px', fontWeight: 500, letterSpacing: '-0.04em' }}
          aria-label="DomRol — home"
        >
          Dom<span className="italic text-rental">Rol</span>
        </a>

        {/* Center links — desktop */}
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
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
            href="https://rentalos.domrol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-dust hover:text-fog transition-colors duration-200"
            style={{ fontSize: '12px' }}
          >
            rentalos.domrol.com →
          </a>
          <a
            href="#contact-form"
            className="font-body font-medium text-ink bg-paper hover:bg-paper-dim rounded-[3px] transition-colors duration-200"
            style={{ fontSize: '13px', padding: '7px 18px' }}
          >
            {t('getStarted')}
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
        className={`nav-overlay fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 md:hidden${menuOpen ? ' open' : ''}`}
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
        <a
          href="https://rentalos.domrol.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="font-mono text-dust hover:text-fog transition-colors duration-200 text-sm"
        >
          rentalos.domrol.com →
        </a>
        <LocaleSwitcher />
        <a
          href="#contact-form"
          onClick={() => setMenuOpen(false)}
          className="font-body font-medium text-ink bg-paper hover:bg-paper-dim rounded-[3px] transition-colors duration-200 mt-2"
          style={{ fontSize: '14px', padding: '11px 24px' }}
        >
          {t('getStarted')}
        </a>
      </div>
    </>
  )
}
