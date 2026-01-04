'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BranchCard } from '@/components/branch-card'
import { branches } from '@/lib/branches-data'
import { MapPin, Phone, Mail, Navigation, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export default function BranchesPage() {
  const [selectedRegion, setSelectedRegion] = useState('all')

  // Group branches by region
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

  const dineInBranches = branches.filter(b => !b.isCentralKitchen)

  return (
    <>
      {/* Hero Section - Origin Story */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-20 overflow-hidden">
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-sm font-semibold">📍 6 LOCATIONS ACROSS SINGAPORE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              From Ang Mo Kio to Island-Wide
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              What started as one young couple&apos;s dream in 2013 has grown to serve families across Singapore – each location bringing the same <span className="text-accent-300 font-semibold">authentic flavors</span> and <span className="text-accent-300 font-semibold">legendary sambal</span>
            </motion.p>

          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary-900 mb-1">{dineInBranches.length}</div>
              <div className="text-sm text-neutral-600">Dine-In Locations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Award className="w-8 h-8 text-accent-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent-900 mb-1">10+</div>
              <div className="text-sm text-neutral-600">Years Serving SG</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Clock className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary-900 mb-1">7</div>
              <div className="text-sm text-neutral-600">Days a Week</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Navigation className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary-900 mb-1">100%</div>
              <div className="text-sm text-neutral-600">Halal Certified</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Flagship Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 md:p-12 border-2 border-accent-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-accent-700 uppercase tracking-wide">Flagship Location</div>
                  <div className="text-2xl font-bold text-primary-900">Ang Mo Kio</div>
                </div>
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                <span className="font-serif font-bold text-2xl text-primary-700">&quot;</span>A stone&apos;s throw away from Ang Mo Kio MRT station, just beside NTUC Fairprice<span className="font-serif font-bold text-2xl text-primary-700">&quot;</span> – this is where it all began in 2013.
              </p>

              <p className="text-neutral-700 leading-relaxed mb-8">
                Our founders chose this spot strategically to serve the Malay-Muslim community in the heart of town. Today, it remains our busiest location, always packed during lunch, and still the home of that legendary sambal everyone talks about.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://goo.gl/maps/example1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Visit Our Flagship</span>
                </a>
                <a
                  href="tel:+6562345678"
                  className="px-6 py-3 border-2 border-accent-600 text-accent-700 font-semibold rounded-lg hover:bg-accent-50 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: 6234 5678</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              All Locations ({branches.length})
            </button>
            
            <button
              onClick={() => setSelectedRegion('north')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'north'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              North ({regions.north.length})
            </button>
            
            <button
              onClick={() => setSelectedRegion('central')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'central'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              Central ({regions.central.length})
            </button>
            
            <button
              onClick={() => setSelectedRegion('west')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'west'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              West ({regions.west.length})
            </button>
            
            <button
              onClick={() => setSelectedRegion('east')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedRegion === 'east'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              East ({regions.east.length})
            </button>

          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
              Find Your Nearest Location
            </h2>
            <p className="text-xl text-neutral-600">
              Each location brings the same authentic flavors and warm hospitality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredBranches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BranchCard branch={branch} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-neutral-600">
                Questions? Catering inquiries? We&apos;re here to help
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Main Phone */}
              <div className="bg-primary-50 p-8 rounded-2xl text-center border-2 border-primary-200">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Main Line</h3>
                <p className="text-sm text-neutral-600 mb-3">Call our flagship location</p>
                <a 
                  href="tel:+6562345678" 
                  className="text-lg font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                >
                  +65 6234 5678
                </a>
              </div>

              {/* Email */}
              <div className="bg-accent-50 p-8 rounded-2xl text-center border-2 border-accent-200">
                <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Email Us</h3>
                <p className="text-sm text-neutral-600 mb-3">General inquiries</p>
                <a 
                  href="mailto:info@asamtree.com.sg" 
                  className="text-lg font-semibold text-accent-700 hover:text-accent-900 transition-colors break-all"
                >
                  info@asamtree.com.sg
                </a>
              </div>

              {/* Catering */}
              <div className="bg-secondary-50 p-8 rounded-2xl text-center border-2 border-secondary-200">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">Catering</h3>
                <p className="text-sm text-neutral-600 mb-3">Bulk orders & events</p>
                <a 
                  href="mailto:catering@asamtree.com.sg" 
                  className="text-lg font-semibold text-secondary-700 hover:text-secondary-900 transition-colors break-all"
                >
                  catering@asamtree.com.sg
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Can&apos;t Visit Us?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Get your favorites delivered to your doorstep – same authentic flavors, same generous portions, same legendary sambal 🌶️
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://asamtree.oddle.me/en_SG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-neutral-100 hover:shadow-xl transition-all"
                >
                  Order Online via Oddle
                </a>
                <Link
                  href="/menu"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
                >
                  Browse Menu
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/70">
                Available for delivery through Oddle platform
              </p>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}