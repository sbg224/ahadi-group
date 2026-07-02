'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-bordure"
      style={{
        backgroundColor: scrolled ? 'rgba(250,250,248,0.85)' : '#FAFAF8',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={handleLogoClick} aria-label="AHADI Group — accueil" style={{ textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="AHADI Group"
            width={1164}
            height={453}
            className="object-contain"
            style={{ height: '72px', width: 'auto' }}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#histoire" className="text-sm text-gris hover:text-noir transition-colors">
            Notre histoire
          </Link>
          <Link href="/#services" className="text-sm text-gris hover:text-noir transition-colors">
            Nos services
          </Link>
          <Link href="/#valeurs" className="text-sm text-gris hover:text-noir transition-colors">
            Nos valeurs
          </Link>
          <Link
            href="/#contact"
            className="btn-primary bg-ahadi text-white text-sm px-5 py-2 rounded-full"
          >
            Nous contacter
          </Link>
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
          <Link href="/#histoire" className="text-sm text-gris" onClick={closeMenu}>
            Notre histoire
          </Link>
          <Link href="/#services" className="text-sm text-gris" onClick={closeMenu}>
            Nos services
          </Link>
          <Link href="/#valeurs" className="text-sm text-gris" onClick={closeMenu}>
            Nos valeurs
          </Link>
          <Link
            href="/#contact"
            className="btn-primary bg-ahadi text-white text-sm px-5 py-3 rounded-full text-center"
            onClick={closeMenu}
          >
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  )
}
