import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Asam Tree</h3>
            <p className="text-slate-400 text-sm mb-4">
              Authentic halal-certified Malay and Indonesian cuisine. Famous for our Nasi Padang since 2010.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/50 text-green-300 text-xs font-semibold rounded-full w-fit">
              ✓ HALAL CERTIFIED
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block text-slate-400 hover:text-white transition">
                Menu
              </Link>
              <Link href="/about" className="block text-slate-400 hover:text-white transition">
                About Us
              </Link>
              <Link href="/branches" className="block text-slate-400 hover:text-white transition">
                Our Branches
              </Link>
              <Link href="/catering" className="block text-slate-400 hover:text-white transition">
                Catering Services
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">+65 6234 5678</p>
                  <p className="text-xs">Mon-Sun: 6am - 8pm</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:info@asamtree.com.sg" className="hover:text-white transition">
                  info@asamtree.com.sg
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p>6+ locations across Singapore</p>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Monday - Sunday</span>
              </div>
              <p className="ml-6 text-white font-medium">6:00 AM - 8:00 PM</p>
            </div>

            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
                <a 
                href="https://www.facebook.com/asamtreecafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition"
                >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Asam Tree Pte Ltd. All rights reserved.</p>
          <p className="mt-2">
            Website by{' '}
            <span className="text-primary-400 font-medium">FreshPlate Digital</span>
          </p>
        </div>
      </div>
    </footer>
  )
}