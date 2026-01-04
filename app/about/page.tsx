'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Heart, Flame, Users, Award, MapPin, Calendar } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Tamarind Story */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white overflow-hidden">
        
        {/* Tamarind leaf pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-sm font-semibold">🌳 ASAM TREE STORY</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              More Than Just Food
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              It&apos;s about <span className="text-accent-300 font-semibold">tamarind trees</span>, a young couple&apos;s dream, and a <span className="text-accent-300 font-semibold">secret sambal</span> that became legendary
            </motion.p>

          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* The Name Story - Tamarind Significance */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1725483990707-1584a62acd0f?q=80&w=1470&auto=format&fit=crop"
                  alt="Traditional tamarind used in Malay cooking"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white px-8 py-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <Leaf className="w-8 h-8 mx-auto mb-2 text-accent-300" />
                  <div className="text-sm text-primary-200">The name</div>
                  <div className="text-2xl font-bold">Asam = Tamarind</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Our Name
              </span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
                Why &quot;Asam Tree&quot;?
              </h2>
              
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  <span className="font-serif font-bold text-2xl text-primary-700">&quot;Asam&quot;</span> means <span className="font-semibold text-primary-600">tamarind</span> in Malay – the tangy fruit that&apos;s essential to traditional Southeast Asian cooking. It&apos;s what gives our dishes that perfect balance of sweet, sour, and savory.
                </p>
                
                <p>
                  Just like the tamarind tree provides flavor and depth to our recipes, we aim to add richness to the Ang Mo Kio community. The name represents our commitment to <span className="text-accent-600 font-semibold">authentic ingredients</span> and <span className="text-accent-600 font-semibold">traditional methods</span>.
                </p>

                <p className="text-primary-800 italic bg-primary-50 p-4 rounded-xl border-l-4 border-primary-500">
                  &quot;In Malay cooking, asam is irreplaceable. That&apos;s what we wanted our restaurant to be – irreplaceable to our community.&quot;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Founders Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left: Story (reversed order) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
                Our Founders
              </span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
                A Young Couple&apos;s Passion
              </h2>
              
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Founded in <span className="font-bold text-primary-700">July 2013</span>, Asam Tree was born from the dream of a young couple who had spent over <span className="font-semibold">10 years working in the F&B industry</span>.
                </p>
                
                <p>
                  They had one simple mission: to <span className="text-accent-600 font-semibold">fervently share their love and passion for Malay cuisine</span> with families in their community.
                </p>

                <p>
                  They chose Ang Mo Kio strategically – a bustling town area that <span className="font-semibold">caters to the Malay-Muslim community</span>. Located conveniently beside NTUC Fairprice, we became the perfect spot for families to grab a delicious halal meal after grocery shopping.
                </p>

                <div className="bg-neutral-50 p-6 rounded-xl border-l-4 border-accent-500 mt-6">
                  <p className="text-neutral-800 font-medium">
                    &quot;We wanted to create a simple, casual halal-certified restaurant where families can dine comfortably, or grab a quick meal after doing their groceries.&quot;
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">- Asam Tree Founders</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <Calendar className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary-900">2013</div>
                    <div className="text-sm text-neutral-600">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-accent-50 rounded-xl">
                    <Award className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent-900">10+</div>
                    <div className="text-sm text-neutral-600">Years F&B Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                  alt="Family-style Malay dining"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Location badge */}
              <div className="absolute -top-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border-2 border-primary-200">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent-600" />
                  <div>
                    <div className="text-xs text-neutral-500">First Location</div>
                    <div className="font-bold text-primary-900">Ang Mo Kio</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Secret - Legendary Sambal */}
      <section className="py-24 bg-gradient-to-br from-accent-50 to-accent-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
                Our Best-Kept Secret
              </h2>

              <p className="text-2xl text-accent-800 font-semibold mb-8">
                The Legendary Sambal 🌶️
              </p>

              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                  Every regular customer knows: <span className="font-bold text-accent-600">it&apos;s all about the sambal</span>.
                </p>

                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our secret sambal recipe has become legendary in the Ang Mo Kio community. It&apos;s what brings customers back, week after week. The perfect balance of heat, flavor, and that <span className="italic">&quot;oomph&quot;</span> that transforms every dish.
                </p>

                <div className="border-t border-neutral-200 pt-8">
                  <p className="text-neutral-800 text-lg italic mb-2">
                    &quot;The best-kept secret and crowd-drawer is their special sambal which gives that oomph to most of its dishes.&quot;
                  </p>
                  <p className="text-sm text-neutral-500">- Asam Tree Website</p>
                </div>

                <div className="mt-8 p-6 bg-accent-50 rounded-2xl border-2 border-accent-200">
                  <p className="text-accent-800 font-semibold mb-2">Customer Quote:</p>
                  <p className="text-neutral-700 italic">
                    &quot;One thing we think every visitor to this cafe should try is their chilli (next to cashier counter). We can never have enough of that!! #sedap 🌶️&quot;
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">- Burpple Review</p>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-neutral-600 font-medium">
                    ✨ Available FREE at the counter with your meal ✨
                  </p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-6">
                Giving Back
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
                Community at Heart
              </h2>
              <p className="text-xl text-neutral-600">
                More than a business, we&apos;re part of the neighborhood
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Charity Work */}
              <div className="bg-secondary-50 p-8 rounded-2xl border-2 border-secondary-200">
                <Users className="w-12 h-12 text-secondary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-900 mb-3">
                  Ultimate Hawker Fest 2014
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We participated in the <span className="font-semibold">Ultimate Hawker Fest 2014</span>, featuring our signature lontong to raise funds for beneficiaries under the care of Touch Community Services.
                </p>
                <p className="text-secondary-700 font-medium mt-4">
                  Community has always been at the heart of what we do.
                </p>
              </div>

              {/* Mosque Proximity */}
              <div className="bg-primary-50 p-8 rounded-2xl border-2 border-primary-200">
                <MapPin className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-primary-900 mb-3">
                  Serving the Muslim Community
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Located near <span className="font-semibold">Masjid Al-Muttaqin</span> in Ang Mo Kio, we&apos;re proud to serve the local Muslim community with 100% halal-certified food in a convenient, family-friendly setting.
                </p>
                <div className="mt-4 flex items-center gap-2 text-secondary-600 font-semibold">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full" />
                  <span>MUIS Halal Certified</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
                What Makes Us Special
              </h2>
              <p className="text-xl text-neutral-600">
                The Asam Tree difference, experienced by thousands of families
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Air-Conditioned Comfort */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Air-Conditioned Comfort
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Dine in cool, comfortable surroundings – a rare luxury mentioned by customers again and again. Perfect for Singapore&apos;s weather!
                </p>
              </motion.div>

              {/* Generous Portions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Generous Portions
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  &quot;Make you full for the rest of the day!&quot; – our portions are hearty and satisfying, delivering real value for families.
                </p>
              </motion.div>

              {/* Always Fresh */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Prepared Fresh Daily
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Traditional recipes prepared fresh every morning. We still find ways to improve on the taste, especially crowd favorites like Mutton Rendang and Ayam Masak Merah.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Journey Timeline - Simplified */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-neutral-600">
                From a dream to 6+ locations across Singapore
              </p>
            </div>

            <div className="space-y-12">
              
              {/* 2013 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold text-primary-700">2013</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-primary-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">The Beginning</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A young couple with 10 years of F&B experience opens Asam Tree in Ang Mo Kio, bringing authentic Malay cuisine to the community.
                  </p>
                </div>
              </motion.div>

              {/* 2014 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold text-accent-700">2014</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-accent-600 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-primary-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Community Recognition</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Participated in Ultimate Hawker Fest 2014, featuring our signature lontong for charity. Word spreads about our secret sambal.
                  </p>
                </div>
              </motion.div>

              {/* 2018 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold text-primary-700">2018</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mt-2"></div>
                  <div className="w-px h-full bg-primary-200 absolute left-1/2 -translate-x-1/2 top-6"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Central Kitchen</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Established central kitchen in Woodlands to maintain consistent quality across growing number of locations.
                  </p>
                </div>
              </motion.div>

              {/* 2026 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold text-secondary-700">2026</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-secondary-600 rounded-full mt-2 animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">6+ Locations Strong</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Now serving families across Singapore at Ang Mo Kio, Bukit Batok, Hougang, Toa Payoh, Yishun, and more – with the same passion that started it all.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Experience the Asam Tree Story
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Visit us today and taste the passion, tradition, and legendary sambal that have made us a Singapore favorite for over a decade
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/branches"
                  className="px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-neutral-100 hover:shadow-xl transition-all"
                >
                  Find Your Nearest Location
                </Link>
                <Link
                  href="/menu"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
                >
                  Explore Our Menu
                </Link>
              </div>

              <p className="mt-8 text-sm text-white/70">
                &quot;In a city filled with eateries, Asam Tree is unforgettable.&quot; - Customer Review
              </p>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}