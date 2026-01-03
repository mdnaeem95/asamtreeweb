'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BranchCard } from '@/components/branch-card'
import { branches } from '@/lib/branches-data'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function BranchesPage() {
  const [selectedRegion, setSelectedRegion] = useState('all')

  // Group branches by region (simplified)
  const regions = {
    all: branches,
    north: branches.filter(b => ['yishun', 'woodlands', 'ang-mo-kio'].includes(b.id)),
    central: branches.filter(b => ['toa-payoh'].includes(b.id)),
    west: branches.filter(b => ['bukit-batok'].includes(b.id)),
    east: branches.filter(b => ['hougang'].includes(b.id)),
  }

  const filteredBranches = selectedRegion === 'all' 
    ? branches 
    : regions[selectedRegion as keyof typeof regions]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our Locations
            </h1>
            <p className="text-xl text-blue-100">
              Visit us at any of our 6 convenient locations across Singapore
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">6+</div>
              <div className="text-sm text-slate-600">Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
              <div className="text-sm text-slate-600">Years Serving</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-1">7 Days</div>
              <div className="text-sm text-slate-600">Open Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="sticky top-[73px] z-40 bg-slate-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'all'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Locations (6)
            </button>
            <button
              onClick={() => setSelectedRegion('north')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'north'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              North (3)
            </button>
            <button
              onClick={() => setSelectedRegion('central')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'central'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Central (1)
            </button>
            <button
              onClick={() => setSelectedRegion('west')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'west'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              West (1)
            </button>
            <button
              onClick={() => setSelectedRegion('east')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'east'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              East (1)
            </button>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
              General Inquiries
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Main Line</h3>
                <a href="tel:+6562345678" className="text-blue-900 hover:text-blue-700 font-medium">
                  +65 6234 5678
                </a>
              </div>

              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                <a href="mailto:info@asamtree.com.sg" className="text-blue-900 hover:text-blue-700">
                  info@asamtree.com.sg
                </a>
              </div>

              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Catering</h3>
                <a href="mailto:catering@asamtree.com.sg" className="text-blue-900 hover:text-blue-700">
                  catering@asamtree.com.sg
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Can&apos;t Visit Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Order online and get your favorites delivered to your doorstep
          </p>
          <a
            href="https://asamtree.oddle.me/en_SG/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-yellow-300 text-blue-900 rounded-lg font-bold hover:bg-yellow-200 transition shadow-lg"
          >
            Order Online Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}