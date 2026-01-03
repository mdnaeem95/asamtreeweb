import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const dishes = [
  {
    name: 'Nasi Padang',
    description: 'Our signature dish! Fragrant rice with rendang, vegetables, and your choice of protein',
    price: 'From $6.80',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b3b70d4a42?w=800&h=600&fit=crop',
    popular: true,
  },
  {
    name: 'Ayam Penyet',
    description: 'Indonesian-style crispy fried chicken with aromatic sambal',
    price: '$8.50',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop',
    popular: true,
  },
  {
    name: 'Curry Chicken Noodle',
    description: 'Rich coconut curry with tender chicken and yellow noodles',
    price: '$7.80',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    popular: true,
  },
  {
    name: 'Mee Siam',
    description: 'Tangy and spicy rice vermicelli in tamarind gravy',
    price: '$7.80',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop',
    popular: false,
  },
  {
    name: 'Nasi Lemak',
    description: 'Fragrant coconut rice with sambal, egg, and crispy ikan bilis',
    price: 'From $5.80',
    image: 'https://images.unsplash.com/photo-1603564472105-1f04e0e5ae32?w=800&h=600&fit=crop',
    popular: false,
  },
  {
    name: 'Lontong',
    description: 'Compressed rice cakes in rich coconut vegetable curry',
    price: '$7.80',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    popular: false,
  },
]

export function PopularDishes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-slate-600">
            Authentic Malay and Indonesian favorites, prepared fresh daily with premium halal ingredients
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-300 text-slate-900 text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-900 transition">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-bold text-blue-900 whitespace-nowrap ml-2">
                    {dish.price}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition shadow-md hover:shadow-lg"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}