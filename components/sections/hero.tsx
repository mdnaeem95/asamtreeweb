'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChefHat, Clock, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-50">
      {/* Two-column split */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-0 min-h-screen">
          
          {/* LEFT: Image with tamarind pattern overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden order-2 lg:order-1"
          >
            {/* Main food image */}
            <div className="relative h-[400px] lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1666239308347-4292ea2ff777?q=80&w=1470&auto=format&fit=crop"
                alt="Authentic Nasi Padang spread at Asam Tree"
                fill
                className="object-cover"
                priority
              />
              
              {/* Subtle tamarind leaf pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-full shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-primary-900">HALAL CERTIFIED</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Story and CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center px-8 lg:px-16 py-16 order-1 lg:order-2"
          >
            
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full w-fit mb-6 border border-accent-200"
            >
              <ChefHat className="w-4 h-4" />
              <span className="text-sm font-medium">Family Owned Since 2013</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-primary-900 mb-6 leading-tight"
            >
              Where Tangy Meets{' '}
              <span className="text-accent-500">Tradition</span>
            </motion.h1>

            {/* Subheading with story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl text-neutral-700 leading-relaxed">
                <span className="font-semibold text-primary-700">&quot;Asam&quot;</span> means tamarind in Malay - the tangy fruit essential to our traditional recipes. Just like tamarind adds depth to our dishes, we add flavor to the Ang Mo Kio community.
              </p>
              
              <p className="text-lg text-neutral-600">
                Founded by a young couple passionate about Malay cuisine, serving authentic halal food with <span className="text-accent-600 font-semibold">generous portions</span> and <span className="text-accent-600 font-semibold">legendary sambal</span>.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 mb-10 text-sm text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>10+ years serving Singapore</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>6 convenient locations</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/menu"
                className="group px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg shadow-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-200 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Try Our Secret Sambal
                  <span className="text-2xl group-hover:animate-bounce">🌶️</span>
                </span>
              </Link>
              
              <Link
                href="/menu"
                className="px-8 py-4 border-2 border-primary-500 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200 text-center"
              >
                View Full Menu
              </Link>
            </motion.div>

            {/* Social proof hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-sm text-neutral-500 italic"
            >
              &quot;Always packed during lunch - and for good reason!&quot; - Burpple Review
            </motion.p>

          </motion.div>

        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}