'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Flame } from 'lucide-react'

const signatureDishes = [
  {
    name: 'Mutton Rendang',
    price: 'From $9.20',
    image: 'https://images.unsplash.com/photo-1620700791277-d2cec5be17ef?q=80&w=774&auto=format&fit=crop',
    story: 'Slow-cooked for 6 hours until fork-tender. Our most improved dish - customers say it\'s "outstanding, perfectly spiced"',
    badge: 'Customer Favorite',
    tags: ['Halal', 'Spicy'],
  },
  {
    name: 'Secret Sambal',
    price: 'FREE with meal',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop',
    story: 'The legendary condiment that keeps them coming back. "We can never have enough!" - Ask for it at the counter 🌶️',
    badge: 'Best-Kept Secret',
    tags: ['Signature', 'Spicy'],
    highlight: true,
  },
  {
    name: 'Ayam Penyet',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop',
    story: 'Indonesian-style crispy fried chicken. "Super crispy outside, super juicy meat inside" - served with our signature sambal',
    badge: 'Always Sold Out',
    tags: ['Halal', 'Crispy'],
  },
  {
    name: 'Nasi Padang',
    price: 'From $6.80',
    image: 'https://images.unsplash.com/photo-1666239308347-4292ea2ff777?q=80&w=1470&auto=format&fit=crop',
    story: 'Our flagship dish! Choose from 20+ freshly prepared items. Generous portions that "make you full for the rest of the day"',
    badge: 'Most Popular',
    tags: ['Halal', 'Customizable'],
  },
]

export function SignatureDishes() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
            What We&apos;re Famous For
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Authentic Malay flavors prepared fresh daily with premium halal ingredients
          </p>
        </motion.div>

        {/* Dishes grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${dish.highlight ? 'md:col-span-2' : ''}`}
            >
              <div className={`bg-white rounded-3xl overflow-hidden border-2 ${dish.highlight ? 'border-accent-300 shadow-xl' : 'border-neutral-200'} hover:shadow-2xl transition-all duration-300`}>
                
                <div className={`grid ${dish.highlight ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 ${dish.highlight ? 'bg-accent-500' : 'bg-primary-600'} text-white text-xs font-semibold rounded-full shadow-lg`}>
                        {dish.badge}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {dish.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-neutral-700 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    
                    {/* Name and Price */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-serif font-bold text-primary-900">
                        {dish.name}
                      </h3>
                      <span className="text-2xl font-bold text-accent-600 whitespace-nowrap ml-4">
                        {dish.price}
                      </span>
                    </div>

                    {/* Story */}
                    <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                      {dish.story}
                    </p>

                    {/* Quick facts (for highlight dish) */}
                    {dish.highlight && (
                      <div className="flex items-center gap-4 text-sm text-neutral-500 border-t border-neutral-200 pt-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>Ask at counter</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-4 h-4 text-accent-500" />
                          <span>Adjustable heat</span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
          >
            View Full Menu (30+ Dishes)
          </Link>
          <p className="mt-4 text-sm text-neutral-500">
            All dishes prepared fresh daily • Halal certified ingredients
          </p>
        </motion.div>

      </div>
    </section>
  )
}