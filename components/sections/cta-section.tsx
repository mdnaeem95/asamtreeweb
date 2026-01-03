import { Phone, ShoppingBag, Calendar } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready to Experience Authentic Malay Cuisine?
          </h2>
          <p className="text-xl text-blue-100">
            Visit us today or order online for delivery to your doorstep
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Order Online */}
          <a
            href="https://asamtree.oddle.me/en_SG/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 hover:bg-white hover:border-white transition-all duration-300"
          >
            <div className="w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 transition-colors">
              Order Online
            </h3>
            <p className="text-blue-100 text-sm group-hover:text-slate-600 transition-colors">
              Get your favorites delivered via Oddle
            </p>
          </a>

          {/* Call Us */}
          <a
            href="tel:+6562345678"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 hover:bg-white hover:border-white transition-all duration-300"
          >
            <div className="w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 transition-colors">
              Call to Order
            </h3>
            <p className="text-blue-100 text-sm group-hover:text-slate-600 transition-colors">
              Phone orders & inquiries: 6234 5678
            </p>
          </a>

          {/* Catering */}
          <a
            href="/catering"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 hover:bg-white hover:border-white transition-all duration-300"
          >
            <div className="w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 transition-colors">
              Catering Services
            </h3>
            <p className="text-blue-100 text-sm group-hover:text-slate-600 transition-colors">
              Perfect for events & corporate functions
            </p>
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-blue-200 text-sm">
            All our food is prepared with halal-certified ingredients
          </p>
        </div>
      </div>
    </section>
  )
}