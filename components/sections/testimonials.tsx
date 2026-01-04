'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "The beef rendang was outstanding—tender, flavorful, and perfectly spiced, making each bite a delight. The staff were warm, friendly, and attentive, making us feel right at home.",
    author: "Google Review",
    rating: 5,
    location: "Ang Mo Kio",
  },
  {
    text: "Always packed during lunch, and for good reason. Generous portions that'll keep you full all day! The sambal is addictive - we can never have enough.",
    author: "Burpple",
    rating: 5,
    location: "Regular Customer",
  },
  {
    text: "Nestled right beside an NTUC, this is one of my favourite places to get my Malay food cravings fixed. The ayam penyet is super crispy and the meat is super juicy!",
    author: "ThreeBestRated.sg",
    rating: 5,
    location: "Ang Mo Kio",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Customer Love
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            Why Families Love Us
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Over 10 years of serving authentic flavors and warm hospitality
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                {/* Quote icon */}
                <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-accent-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-neutral-700 leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-primary-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-4xl font-bold text-primary-700 mb-2">10+</p>
              <p className="text-sm text-neutral-600">Years Serving Singapore</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-4xl font-bold text-accent-600 mb-2">6</p>
              <p className="text-sm text-neutral-600">Locations Islandwide</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-4xl font-bold text-secondary-600 mb-2">1000s</p>
              <p className="text-sm text-neutral-600">Happy Families</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}