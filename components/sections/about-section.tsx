'use client'

import { motion } from 'framer-motion'
import { Leaf, Heart, Flame } from 'lucide-react'

const stories = [
  {
    icon: Leaf,
    title: 'The Name',
    subtitle: '"Asam" - The Tamarind Tree',
    description: 'In Malay, "asam" means tamarind - the tangy fruit that\'s essential to our traditional recipes. Just like the tamarind adds depth to our dishes, our restaurant adds flavor to the Ang Mo Kio community.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Heart,
    title: 'The Founders',
    subtitle: 'A Labor of Love',
    description: 'Founded by a young couple with 10 years in F&B, Asam Tree was born from a simple dream: share authentic Malay cuisine with families in their neighborhood. Nestled beside NTUC Fairprice, we\'re your go-to for a delicious meal after grocery shopping.',
    color: 'text-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    icon: Flame,
    title: 'The Secret',
    subtitle: 'Our Special Sambal',
    description: 'Every regular knows: it\'s all about the sambal. Our secret recipe has become legendary. Ask for it at the counter - locals can never get enough! 🌶️',
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-50',
  },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            More Than Just a Restaurant
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Serving the Ang Mo Kio community since 2013 with authentic flavors and warm hospitality
          </p>
        </motion.div>

        {/* 3-column story cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${story.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${story.color}`} />
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <p className={`text-sm font-semibold ${story.color} uppercase tracking-wide mb-1`}>
                      {story.title}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-primary-900">
                      {story.subtitle}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed flex-grow">
                    {story.description}
                  </p>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-neutral-50 px-8 py-6 rounded-2xl border border-neutral-200">
            <p className="text-lg text-neutral-700 mb-2">
              <span className="font-serif font-bold text-primary-700 text-xl">Fun fact:</span> We participated in the Ultimate Hawker Fest 2014, raising funds for Touch Community Services!
            </p>
            <p className="text-sm text-neutral-500">
              Community has always been at the heart of what we do
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}