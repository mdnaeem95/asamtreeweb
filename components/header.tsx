'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <p className="text-xl font-serif font-bold text-primary-900">Asam Tree</p>
              <p className="text-xs text-neutral-500">Since 2013</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/branches" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Branches
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+6562345678"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>6234 5678</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/menu"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/branches"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Branches
              </Link>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+6562345678"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 6234 5678</span>
              </a>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}