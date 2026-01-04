'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuItemCard } from '@/components/menu-item-card'
import { menuCategories, menuItems } from '@/lib/menu-data'
import { Search, ChefHat, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section - The Nasi Padang Story */}
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
              <span className="text-sm font-semibold">🍛 AUTHENTIC MALAY & INDONESIAN CUISINE</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              Choose Your Adventure
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8"
            >
              From our famous <span className="text-accent-300 font-semibold">Nasi Padang</span> with 20+ dishes to our <span className="text-accent-300 font-semibold">legendary sambal</span> – every item is prepared fresh daily with love
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search for your favorites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
              />
            </motion.div>

          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* Quick Highlights */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Sparkles className="w-8 h-8 text-accent-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-900 mb-1">4</div>
              <div className="text-sm text-neutral-600">Signature Dishes</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <ChefHat className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-900 mb-1">30+</div>
              <div className="text-sm text-neutral-600">Menu Items</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="text-2xl mx-auto mb-2">🌶️</div>
              <div className="text-2xl font-bold text-accent-900 mb-1">FREE</div>
              <div className="text-sm text-neutral-600">Secret Sambal</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <Heart className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">100%</div>
              <div className="text-sm text-neutral-600">Halal Certified</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            
            {/* All Items */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              All Items
            </button>

            {/* Category Buttons */}
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {selectedCategory === 'all' ? (
            // Show all categories with sections
            menuCategories.map((category, catIndex) => {
              const categoryItems = filteredItems.filter(
                (item) => item.category === category.id
              )
              
              if (categoryItems.length === 0) return null

              return (
                <motion.div
                  key={category.id}
                  id={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  className="mb-20 last:mb-0"
                >
                  {/* Category Header */}
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-5xl">{category.icon}</span>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">
                          {category.name}
                        </h2>
                        <p className="text-neutral-600 text-lg mt-1">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryItems.map((item, itemIndex) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                      >
                        <MenuItemCard item={item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })
          ) : (
            // Show selected category only
            <div>
              {/* Category Header */}
              <div className="mb-10">
                {menuCategories
                  .filter((cat) => cat.id === selectedCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-5xl">{category.icon}</span>
                        <div>
                          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">
                            {category.name}
                          </h2>
                          <p className="text-neutral-600 text-lg mt-1">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Items Grid */}
              {filteredItems.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <MenuItemCard item={item} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl">
                  <p className="text-neutral-500 text-xl">No items found matching &quot;{searchQuery}&quot;</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Sambal Callout */}
      <section className="py-16 bg-gradient-to-br from-accent-50 to-accent-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-accent-200"
            >
              <div className="text-6xl mb-4">🌶️</div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                Don&apos;t Forget the Secret Sambal!
              </h3>
              <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
                Our legendary sambal is <span className="font-bold text-accent-600">FREE at the counter</span> with your meal. It&apos;s what gives that &quot;oomph&quot; to every dish!
              </p>
              <div className="inline-block p-4 bg-accent-50 rounded-2xl border-l-4 border-accent-500">
                <p className="text-accent-800 italic font-medium">
                  &quot;We can never have enough of that!!&quot; - Customer Review
                </p>
              </div>
            </motion.div>

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
                Ready to Order?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Get your favorites delivered to your doorstep – same authentic flavors, same generous portions!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://asamtree.oddle.me/en_SG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-primary-700 rounded-xl font-bold hover:bg-neutral-100 hover:shadow-2xl transition-all text-lg"
                >
                  Order Online via Oddle
                </a>
                <Link
                  href="/branches"
                  className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all text-lg"
                >
                  Visit Our Locations
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/70">
                Open daily: 6:00 AM - 8:00 PM • All outlets halal certified
              </p>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}