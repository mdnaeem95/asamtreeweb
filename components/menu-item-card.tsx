import Image from 'next/image'
import { Flame } from 'lucide-react'
import type { MenuItem } from '@/lib/menu-data'

interface MenuItemCardProps {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.popular && (
            <div className="px-3 py-1 bg-yellow-300 text-slate-900 text-xs font-bold rounded-full shadow-md">
              ⭐ POPULAR
            </div>
          )}
          {item.dietary.includes('spicy') && (
            <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3" />
              SPICY
            </div>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 px-4 py-2 bg-blue-900 text-white font-bold rounded-lg shadow-lg">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Dietary Tags */}
        <div className="flex flex-wrap gap-2">
          {item.dietary.includes('halal') && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              ✓ Halal
            </span>
          )}
          {item.dietary.includes('vegetarian') && (
            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
              🌱 Vegetarian
            </span>
          )}
          {item.dietary.includes('vegetarian-option') && (
            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
              🌱 Veg Option
            </span>
          )}
        </div>
      </div>
    </div>
  )
}