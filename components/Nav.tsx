'use client'
import { useState, useEffect } from 'react'
import { SITE } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Modules', href: '#modules' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: `mailto:${SITE.email}` },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when mobile menu is open */
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
          aria-label="Domrol — home"
        >
          Dom<span className="italic text-rental">rol</span>
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
            href="#modules"
            className="font-body font-medium text-ink bg-paper hover:bg-paper-dim rounded-[3px] transition-colors duration-200"
            style={{ fontSize: '13px', padding: '7px 18px' }}
          >
            Get started
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

      {/* Mobile full-screen overlay */}
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
        <a
          href="#modules"
          onClick={() => setMenuOpen(false)}
          className="font-body font-medium text-ink bg-paper hover:bg-paper-dim rounded-[3px] transition-colors duration-200 mt-2"
          style={{ fontSize: '14px', padding: '11px 24px' }}
        >
          Get started
        </a>
      </div>
    </>
  )
}
