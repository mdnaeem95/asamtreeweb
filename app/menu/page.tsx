'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MenuItemCard } from '@/components/menu-item-card'
import { menuCategories, menuItems } from '@/lib/menu-data'
import { Search } from 'lucide-react'

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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Authentic halal Malay & Indonesian cuisine, prepared fresh daily
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {/* All Items */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Items
            </button>

            {/* Category Buttons */}
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {selectedCategory === 'all' ? (
            // Show all categories with sections
            menuCategories.map((category) => {
              const categoryItems = filteredItems.filter(
                (item) => item.category === category.id
              )
              
              if (categoryItems.length === 0) return null

              return (
                <div key={category.id} id={category.id} className="mb-16 last:mb-0">
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{category.icon}</span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                        {category.name}
                      </h2>
                    </div>
                    <p className="text-slate-600 text-lg">{category.description}</p>
                  </div>

                  {/* Items Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            // Show selected category only
            <div>
              {/* Category Header */}
              <div className="mb-8">
                {menuCategories
                  .filter((cat) => cat.id === selectedCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{category.icon}</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                          {category.name}
                        </h2>
                      </div>
                      <p className="text-slate-600 text-lg">{category.description}</p>
                    </div>
                  ))}
              </div>

              {/* Items Grid */}
              {filteredItems.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg">No items found matching your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-blue-100 mb-6">Get your favorites delivered to your doorstep</p>
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