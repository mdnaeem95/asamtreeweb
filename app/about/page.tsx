import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Heart, Award, Users, Clock, Star, Shield } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">EST. 2010</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Serving authentic halal Malay cuisine with passion and tradition since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="aspect-4/3 relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="Asam Tree restaurant"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-6 rounded-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">6+</div>
                    <div className="text-xs text-blue-200">Locations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-xs text-blue-200">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                A Journey of Authentic Flavors
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  In a city already filled with countless eateries, Asam Tree Cafe, Bakery & Restaurant 
                  has carved out a special place in the hearts of Singaporeans since 2010. What began 
                  as a humble dream to share authentic Malay and Indonesian cuisine has blossomed into 
                  a beloved establishment with 6+ locations across the island.
                </p>
                
                <p>
                  Our name, &quot;Asam Tree,&quot; reflects the essence of traditional Southeast Asian cooking—the 
                  perfect balance of tangy, spicy, and savory flavors that define our heritage. Every dish 
                  we serve is a testament to generations of culinary wisdom passed down through our chefs.
                </p>
                
                <p>
                  From our signature Nasi Padang to our aromatic Curry Chicken Noodles, each recipe is 
                  crafted with care, using only the freshest halal-certified ingredients. We believe that 
                  great food brings people together, and that&apos;s exactly what we&apos;ve been doing for over 
                  15 years.
                </p>

                <p>
                  Today, whether you visit us in Ang Mo Kio, Bukit Batok, Hougang, Toa Payoh, or Yishun, 
                  you&apos;ll experience the same commitment to quality, authenticity, and warm hospitality that 
                  has made Asam Tree a trusted name in halal dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Halal Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                100% MUIS halal-certified ingredients and strict adherence to Islamic dietary laws in every dish we prepare.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Authentic Recipes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Traditional Malay and Indonesian recipes passed down through generations, preserving cultural heritage.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fresh ingredients sourced daily and prepared with meticulous attention to flavor and presentation.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Family First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Creating a welcoming atmosphere where families can enjoy comfortable dining and create memories together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                Why Choose Asam Tree?
              </h2>
              <p className="text-lg text-slate-600">
                What sets us apart from other restaurants
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Halal Certified Excellence
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every ingredient is carefully selected and certified halal by MUIS. We maintain 
                    strict standards to ensure Muslim diners can eat with complete peace of mind.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Fresh Daily Preparation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our dishes are prepared fresh every morning using traditional cooking methods. 
                    No pre-cooked meals, no shortcuts—just authentic flavors made the right way.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Award-Winning Taste
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our signature Nasi Padang and Ayam Penyet have earned rave reviews from food 
                    critics and countless loyal customers who return again and again.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Air-Conditioned Comfort
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Unlike traditional hawker centers, all our locations offer comfortable, 
                    air-conditioned dining—perfect for families, elderly, and business lunches.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Affordable Pricing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Quality doesn&apos;t have to be expensive. Our generous portions and reasonable 
                    prices make authentic Malay cuisine accessible to everyone.
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Catering Services Available
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Planning an event? Our catering team can bring our authentic flavors to your 
                    office, home, or special occasion with customizable menus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600">
                15+ years of serving Singapore
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {/* 2010 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2010</div>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-blue-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">The Beginning</h3>
                  <p className="text-slate-600">
                    Asam Tree opened its first location, bringing authentic Malay cuisine to 
                    Singapore families with a focus on quality and tradition.
                  </p>
                </div>
              </div>

              {/* 2012 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2012</div>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-blue-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">First Expansion</h3>
                  <p className="text-slate-600">
                    Opened our second and third locations in Ang Mo Kio and Bukit Batok, 
                    making our beloved dishes accessible to more neighborhoods.
                  </p>
                </div>
              </div>

              {/* 2015 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2015</div>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-blue-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Catering Services Launch</h3>
                  <p className="text-slate-600">
                    Introduced catering services to bring our authentic flavors to corporate 
                    events, weddings, and family celebrations.
                  </p>
                </div>
              </div>

              {/* 2018 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2018</div>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-blue-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Central Kitchen Established</h3>
                  <p className="text-slate-600">
                    Built our central kitchen in Woodlands to maintain consistent quality 
                    across all locations and support our catering operations.
                  </p>
                </div>
              </div>

              {/* 2020 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2020</div>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-4 h-4 bg-blue-900 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-blue-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Online Ordering</h3>
                  <p className="text-slate-600">
                    Partnered with Oddle to offer convenient online ordering and delivery, 
                    adapting to changing customer needs during challenging times.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex gap-8">
                <div className="shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-blue-900">2024</div>
                </div>
                <div className="shrink-0">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">6+ Locations Strong</h3>
                  <p className="text-slate-600">
                    Now serving customers across Singapore with 6+ locations, maintaining 
                    the same commitment to quality and authenticity that started it all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halal Certification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    MUIS Halal Certified
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    All our outlets are certified by the Islamic Religious Council of Singapore (MUIS). 
                    We ensure strict compliance with Islamic dietary laws in sourcing ingredients, 
                    food preparation, and kitchen operations.
                  </p>
                  <p className="text-slate-600">
                    Dine with confidence knowing every dish meets the highest halal standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience Our Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit any of our 6+ locations and taste the authentic flavors that have made 
            Asam Tree a Singapore favorite for over 15 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/branches"
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              Find a Location
            </a>
            <a
              href="/menu"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}