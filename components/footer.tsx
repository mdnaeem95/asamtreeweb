import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Asam Tree</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Authentic halal-certified Malay and Indonesian cuisine. Famous for our Nasi Padang and legendary sambal since 2013.
            </p>
            <div className="flex items-center gap-2 text-secondary-400 font-semibold">
              <div className="w-3 h-3 bg-secondary-400 rounded-full" />
              <span>HALAL CERTIFIED</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-neutral-300 hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/branches" className="text-neutral-300 hover:text-white transition-colors">Our Locations</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">+65 6234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">info@asamtree.com.sg</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">Mon-Sun: 6am - 8pm</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">6 locations islandwide</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Asam Tree Pte Ltd. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Serving the Ang Mo Kio community since 2013 • Family owned & operated
          </p>
        </div>

      </div>
    </footer>
  )
}