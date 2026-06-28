'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-fond border-b border-bordure transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="AHADI Group — accueil">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect width="36" height="36" rx="9" fill="#F0F7F4" />
            <line x1="18" y1="4" x2="6" y2="32" stroke="#1A1A18" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="4" x2="30" y2="32" stroke="#1A1A18" strokeWidth="3" strokeLinecap="round" />
            <line x1="9" y1="21" x2="27" y2="21" stroke="#267253" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="21" r="4" fill="#267253" />
          </svg>
          <div>
            <div
              className="font-serif text-noir"
              style={{ fontSize: '20px', letterSpacing: '3px' }}
            >
              AHADI
            </div>
            <div
              className="text-ahadi uppercase"
              style={{ fontSize: '9px', letterSpacing: '3px' }}
            >
              LA PROMESSE TENUE
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#histoire" className="text-sm text-gris hover:text-noir transition-colors">
            Notre histoire
          </a>
          <a href="#services" className="text-sm text-gris hover:text-noir transition-colors">
            Nos services
          </a>
          <a href="#valeurs" className="text-sm text-gris hover:text-noir transition-colors">
            Nos valeurs
          </a>
          <a
            href="#contact"
            className="bg-ahadi text-white text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Nous contacter
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-noir transition-transform duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-noir transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-noir transition-transform duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-fond border-t border-bordure px-6 py-6 flex flex-col gap-5">
          <a href="#histoire" className="text-sm text-gris" onClick={closeMenu}>
            Notre histoire
          </a>
          <a href="#services" className="text-sm text-gris" onClick={closeMenu}>
            Nos services
          </a>
          <a href="#valeurs" className="text-sm text-gris" onClick={closeMenu}>
            Nos valeurs
          </a>
          <a
            href="#contact"
            className="bg-ahadi text-white text-sm px-5 py-3 rounded-full text-center"
            onClick={closeMenu}
          >
            Nous contacter
          </a>
        </div>
      )}
    </header>
  )
}
