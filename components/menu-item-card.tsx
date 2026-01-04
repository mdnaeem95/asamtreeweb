'use client'

import Image from 'next/image'
import { MenuItem } from '@/lib/menu-data'
import { Star, Flame, Leaf, Quote } from 'lucide-react'

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className={`group bg-white rounded-2xl h-full flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${item.isSignature ? 'ring-2 ring-accent-400' : ''}`}>
      
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Signature badge */}
        {item.isSignature && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-accent-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-white" />
            <span>Signature</span>
          </div>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
          {item.price === 'FREE' ? (
            <span className="text-lg font-bold text-accent-600">FREE</span>
          ) : item.priceRange ? (
            <span className="text-lg font-bold text-primary-900">{item.priceRange}</span>
          ) : (
            <span className="text-lg font-bold text-primary-900">${item.price}</span>
          )}
        </div>

        {/* Dietary badges */}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {item.dietary?.map((tag) => (
            <div
              key={tag}
              className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1"
            >
              {tag === 'Spicy' && <Flame className="w-3 h-3 text-accent-600" />}
              {tag === 'Vegetarian' && <Leaf className="w-3 h-3 text-secondary-600" />}
              {tag === 'Halal' && <span className="text-secondary-600">✓</span>}
              <span className={
                tag === 'Spicy' ? 'text-accent-700' : 
                tag === 'Vegetarian' ? 'text-secondary-700' :
                tag === 'Halal' ? 'text-secondary-700' :
                'text-neutral-700'
              }>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        
        {/* Name */}
        <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
          {item.name}
        </h3>

        {/* Description */}
        <div className="flex-1">
          <p className="text-neutral-600 text-sm leading-relaxed mb-3">
            {item.description}
          </p>
        </div>

        {/* Story (if exists) */}
        {item.story && (
          <div className="mt-auto pt-4 border-t border-neutral-200">
            <p className="text-sm text-neutral-700 italic leading-relaxed">
              {item.story}
            </p>
          </div>
        )}

        {/* Customer Quote (if exists) */}
        {item.customerQuote && (
          <div className="mt-3 p-3 bg-accent-50 rounded-lg border-l-4 border-accent-400">
            <div className="flex items-start gap-2">
              <Quote className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-accent-800 font-medium">
                &quot;{item.customerQuote}&quot;
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}