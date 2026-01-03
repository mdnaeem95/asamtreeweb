import { MapPin, Phone, Mail, Clock, Navigation, Bus, Train, Car } from 'lucide-react'
import Image from 'next/image'
import type { Branch } from '@/lib/branches-data'

interface BranchCardProps {
  branch: Branch
}

export function BranchCard({ branch }: BranchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-slate-200">
      {/* Image */}
      <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
        <Image
          src={branch.image}
          alt={branch.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-full">
          ✓ HALAL CERTIFIED
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          {branch.name}
        </h3>

        {/* Address */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-700 font-medium">{branch.address}</p>
              <p className="text-slate-500 text-sm">{branch.postal}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-slate-400 shrink-0" />
            <a 
              href={`tel:${branch.phone.replace(/\s/g, '')}`}
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              {branch.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-slate-400 shrink-0" />
            <a 
              href={`mailto:${branch.email}`}
              className="text-blue-900 hover:text-blue-700"
            >
              {branch.email}
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="text-slate-700">
                <span className="font-medium">Mon-Fri:</span> {branch.hours.weekday}
              </p>
              <p className="text-slate-700">
                <span className="font-medium">Sat-Sun:</span> {branch.hours.weekend}
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {branch.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-blue-50 text-blue-900 text-xs font-semibold rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Transport Info */}
        {(branch.nearbyMRT || branch.parking || branch.busServices) && (
          <div className="border-t border-slate-200 pt-4 mb-6 space-y-2">
            {branch.nearbyMRT && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Train className="w-4 h-4 text-slate-400" />
                <span>{branch.nearbyMRT}</span>
              </div>
            )}
            {branch.parking && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Car className="w-4 h-4 text-slate-400" />
                <span>{branch.parking}</span>
              </div>
            )}
            {branch.busServices && branch.busServices.length > 0 && (
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <Bus className="w-4 h-4 text-slate-400 mt-0.5" />
                <span>Bus: {branch.busServices.join(', ')}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={branch.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-blue-900 text-white text-center font-semibold rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
          <a
            href={`tel:${branch.phone.replace(/\s/g, '')}`}
            className="px-4 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-900 hover:text-blue-900 transition flex items-center justify-center"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="aspect-16/9 relative">
        <iframe
          src={branch.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    </div>
  )
}