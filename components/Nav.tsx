'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

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
        <a href="#" aria-label="AHADI Group — accueil">
          <Image
            src="/logo.png"
            alt="AHADI Group"
            width={320}
            height={122}
            className="object-contain"
            style={{ height: '44px', width: 'auto' }}
            priority
          />
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
