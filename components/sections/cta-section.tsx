'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Taste Authentic Malay Cuisine?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Visit us today at any of our 6 locations, or order online for delivery
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="tel:+6562345678"
              className="group px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-neutral-50 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: 6234 5678
            </a>
            
            <Link
              href="/branches"
              className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Find Nearest Location
            </Link>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Open Daily: 6am - 8pm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary-400 rounded-full animate-pulse" />
              <span>100% Halal Certified</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}