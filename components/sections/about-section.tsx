import { Award, Heart, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
                alt="Asam Tree Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-4 border-slate-50">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-slate-600 font-medium">Years Serving</div>
                <div className="text-sm text-slate-600">Singapore</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
              About Asam Tree
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Authentic Flavors,
              <br />
              <span className="text-blue-900">Family Traditions</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Since 2010, Asam Tree has been serving authentic halal-certified Malay and Indonesian 
              cuisine to families across Singapore. What started as a single location has grown to 
              6+ branches, but our commitment remains the same: fresh ingredients, traditional recipes, 
              and warm hospitality.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our signature Nasi Padang, Ayam Penyet, and traditional favorites are prepared fresh 
              daily by our experienced chefs who bring generations of culinary expertise to every dish.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Halal Certified</div>
                  <div className="text-sm text-slate-600">MUIS certified ingredients</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Fresh Daily</div>
                  <div className="text-sm text-slate-600">Prepared every morning</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Award Winning</div>
                  <div className="text-sm text-slate-600">Recognized by food critics</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Family Friendly</div>
                  <div className="text-sm text-slate-600">Air-conditioned comfort</div>
                </div>
              </div>
            </div>
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition shadow-md hover:shadow-lg"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}