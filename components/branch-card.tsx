'use client'

import Image from 'next/image'
import { MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react'
import { Branch } from '@/lib/branches-data'

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${branch.isflagship ? 'ring-2 ring-accent-400' : ''}`}>
      
      {/* Image with overlay badge */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={branch.image}
          alt={branch.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Flagship badge */}
        {branch.isflagship && (
          <div className="absolute top-4 left-4 px-4 py-2 bg-accent-500 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4 fill-white" />
            <span>Flagship Location</span>
          </div>
        )}

        {/* Central Kitchen badge */}
        {branch.isCentralKitchen && (
          <div className="absolute top-4 left-4 px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-bold shadow-lg">
            Central Kitchen
          </div>
        )}

        {/* Region tag */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700 capitalize">
          {branch.region}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        
        {/* Name */}
        <h3 className="text-2xl font-serif font-bold text-primary-900 mb-3">
          {branch.name}
        </h3>

        {/* Story */}
        <p className="text-neutral-600 leading-relaxed mb-6 italic">
          {branch.story}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {branch.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
              <span className="text-neutral-700">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 my-6" />

        {/* Address */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-neutral-700">{branch.address}</div>
              <div className="text-sm text-neutral-500">{branch.postalCode}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <a href={`tel:${branch.phone}`} className="text-neutral-700 hover:text-accent-600 font-medium transition-colors">
              {branch.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <span className="text-neutral-700">{branch.hours}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {!branch.isCentralKitchen && (
            <a
              href={branch.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group/btn"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </a>
          )}

          {branch.isCentralKitchen && (
            <a
              href="mailto:catering@asamtree.com.sg"
              className="flex-1 px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact for Catering</span>
            </a>
          )}

          <a
            href={`tel:${branch.phone}`}
            className="px-6 py-3 border-2 border-primary-600 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  )
}