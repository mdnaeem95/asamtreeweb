'use client'

import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-serif font-bold text-blue-900">
              Asam Tree
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              ✓ HALAL CERTIFIED
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-blue-900 transition font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-slate-700 hover:text-blue-900 transition font-medium">
              Menu
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-900 transition font-medium">
              About
            </Link>
            <Link href="/branches" className="text-slate-700 hover:text-blue-900 transition font-medium">
              Branches
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-900 transition font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+6562345678" 
              className="flex items-center gap-2 text-slate-700 hover:text-blue-900 transition"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">6234 5678</span>
            </a>
            <a
              href="https://asamtree.oddle.me/en_SG/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition shadow-md hover:shadow-lg"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-3">
            <Link 
              href="/" 
              className="block py-2 text-slate-700 hover:text-blue-900 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="block py-2 text-slate-700 hover:text-blue-900 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-slate-700 hover:text-blue-900 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/branches" 
              className="block py-2 text-slate-700 hover:text-blue-900 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Branches
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-slate-700 hover:text-blue-900 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://asamtree.oddle.me/en_SG/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold text-center"
            >
              Order Online
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}