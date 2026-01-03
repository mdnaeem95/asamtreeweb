import { MapPin, Clock, Phone } from 'lucide-react'
import Link from 'next/link'

const locations = [
  {
    name: 'Ang Mo Kio Central',
    address: 'Block 709 Ang Mo Kio Ave 8, #01-2609',
    postal: 'Singapore 560709',
    phone: '+65 6234 5678',
    hours: '6:00 AM - 8:00 PM',
    mapUrl: 'https://goo.gl/maps/example1',
  },
  {
    name: 'Bukit Batok',
    address: 'Block 155 Bukit Batok St 11, #01-322',
    postal: 'Singapore 650155',
    phone: '+65 6567 8901',
    hours: '6:00 AM - 8:00 PM',
    mapUrl: 'https://goo.gl/maps/example2',
  },
  {
    name: 'Hougang (Kang Kar Mall)',
    address: '100 Hougang Avenue 10, #01-03',
    postal: 'Singapore 538767',
    phone: '+65 6890 1234',
    hours: '6:00 AM - 8:00 PM',
    mapUrl: 'https://goo.gl/maps/example3',
  },
  {
    name: 'Toa Payoh',
    address: '470 Lorong 6 Toa Payoh, #02-70',
    postal: 'Singapore 310470',
    phone: '+65 6123 4567',
    hours: '6:00 AM - 8:00 PM',
    mapUrl: 'https://goo.gl/maps/example4',
  },
  {
    name: 'Yishun (KTPH Hospital)',
    address: '90 Yishun Central, #01-12',
    postal: 'Singapore 768828',
    phone: '+65 6456 7890',
    hours: '6:00 AM - 8:00 PM',
    mapUrl: 'https://goo.gl/maps/example5',
  },
  {
    name: 'Woodlands (Central Kitchen)',
    address: '15 Woodlands Loop, #04-27',
    postal: 'Singapore 738322',
    phone: '+65 6789 0123',
    hours: 'Catering & Wholesale Only',
    mapUrl: 'https://goo.gl/maps/example6',
  },
]

export function LocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Visit Us Island-Wide
          </h2>
          <p className="text-lg text-slate-600">
            6+ convenient locations across Singapore. Find the nearest Asam Tree to you!
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              {/* Location Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
                {location.name}
              </h3>

              {/* Address */}
              <div className="space-y-3 mb-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {location.address}
                  <br />
                  {location.postal}
                </p>

                {/* Phone */}
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <a 
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="text-blue-900 hover:text-blue-700 font-medium"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{location.hours}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition text-center"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="px-4 py-2 border-2 border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:border-blue-900 hover:text-blue-900 transition"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/branches"
            className="inline-block px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
          >
            View All Branch Details
          </Link>
        </div>
      </div>
    </section>
  )
}