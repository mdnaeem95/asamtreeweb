'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/forms/contact-form'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Heart } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Personal Touch */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-20 overflow-hidden">
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="text-sm font-semibold">💬 WE&apos;RE HERE TO HELP</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              Let&apos;s Talk!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed"
            >
              Whether you&apos;re planning a big event, have a question about our menu, or just want to say hi – we&apos;d love to hear from you! 
            </motion.p>

          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Info (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Quick Intro */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-2xl border-2 border-accent-200">
                <Heart className="w-8 h-8 text-accent-600 mb-3" />
                <h3 className="text-lg font-bold text-primary-900 mb-2">
                  Family-Run, Community-Focused
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Started by a young couple in 2013, we still treat every customer like family. Your questions, feedback, and ideas matter to us!
                </p>
              </div>

              {/* Flagship Location */}
              <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-primary-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">
                      Flagship Location
                    </div>
                    <h3 className="font-bold text-primary-900 mb-2">Ang Mo Kio</h3>
                    <p className="text-neutral-700 text-sm mb-1">Block 709 Ang Mo Kio Avenue 8</p>
                    <p className="text-neutral-700 text-sm">#01-2609, Singapore 560709</p>
                    <p className="text-xs text-neutral-500 mt-2 italic">
                      Right beside NTUC Fairprice, near Masjid Al-Muttaqin
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-secondary-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 mb-2">Call Us</h3>
                    <a 
                      href="tel:+6562345678"
                      className="text-lg font-semibold text-secondary-700 hover:text-secondary-900 transition-colors block mb-1"
                    >
                      +65 6234 5678
                    </a>
                    <p className="text-sm text-neutral-600 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Mon-Sun: 6:00 AM - 8:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-accent-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 mb-2">Email</h3>
                    <a 
                      href="mailto:info@asamtree.com.sg"
                      className="text-accent-700 hover:text-accent-900 transition-colors block mb-1 text-sm break-all"
                    >
                      info@asamtree.com.sg
                    </a>
                    <a 
                      href="mailto:catering@asamtree.com.sg"
                      className="text-accent-700 hover:text-accent-900 transition-colors block text-sm break-all"
                    >
                      catering@asamtree.com.sg
                    </a>
                    <p className="text-xs text-neutral-500 mt-2">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-accent-600" />
                  <span>Follow Our Journey</span>
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/asamtreecafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-colors font-semibold text-sm"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
                <p className="text-xs text-neutral-500 mt-3 text-center">
                  See our latest dishes, events & community moments!
                </p>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-neutral-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667890123456!2d103.84567890000001!3d1.3694567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjInMTAuMCJOIDEwM8KwNTAnNDQuNCJF!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* Right Column - Contact Form (3/5) */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-primary-200 sticky top-24">
                
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Got a question about our menu? Planning a big event? Want to share feedback? Fill out the form below and we&apos;ll get back to you soon!
                  </p>
                </div>

                <ContactForm />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
                Quick Answers
              </h2>
              <p className="text-xl text-neutral-600">
                Common questions from our community
              </p>
            </div>

            <div className="space-y-4">
              
              {/* FAQ 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-50 p-6 rounded-2xl border-2 border-primary-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Is all your food halal certified?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  <span className="font-semibold text-secondary-700">Absolutely!</span> All our outlets are <span className="font-semibold">MUIS halal certified</span>. We use only halal-certified ingredients and maintain strict compliance with Islamic dietary laws. This has been our commitment since day one in 2013.
                </p>
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-accent-50 p-6 rounded-2xl border-2 border-accent-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Do you offer catering services?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  <span className="font-semibold text-accent-700">Yes, we do!</span> We provide catering for corporate events, weddings, and family celebrations. Our Woodlands central kitchen handles all catering operations. Contact us at <a href="mailto:catering@asamtree.com.sg" className="text-accent-700 font-semibold underline">catering@asamtree.com.sg</a> for customized menus and pricing.
                </p>
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-secondary-50 p-6 rounded-2xl border-2 border-secondary-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Can I get that legendary sambal to-go?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  <span className="font-semibold text-secondary-700">Of course! 🌶️</span> Our secret sambal is available <span className="font-semibold">FREE at the counter</span> with your meal. For bulk orders of sambal, please contact us directly – we get this request a lot!
                </p>
              </motion.div>

              {/* FAQ 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary-50 p-6 rounded-2xl border-2 border-primary-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Do you accept reservations?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  We operate <span className="font-semibold">first-come, first-served</span> for regular dining to keep things flowing smoothly. However, for <span className="font-semibold">large groups (10+ people)</span>, please call us in advance at <a href="tel:+6562345678" className="text-primary-700 font-semibold">+65 6234 5678</a> so we can prepare!
                </p>
              </motion.div>

              {/* FAQ 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-accent-50 p-6 rounded-2xl border-2 border-accent-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Can I order online for delivery?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  <span className="font-semibold text-accent-700">Absolutely!</span> Order through our Oddle platform at{' '}
                  <a 
                    href="https://asamtree.oddle.me/en_SG/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-700 font-semibold underline"
                  >
                    asamtree.oddle.me
                  </a>
                  {' '}for delivery to your doorstep. Same authentic flavors, same generous portions!
                </p>
              </motion.div>

              {/* FAQ 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-secondary-50 p-6 rounded-2xl border-2 border-secondary-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-start gap-2">
                  <span className="text-accent-600">Q:</span>
                  <span>Do you have vegetarian options?</span>
                </h3>
                <p className="text-neutral-700 leading-relaxed pl-6">
                  Yes! We offer several vegetarian dishes including <span className="font-semibold">Sayur Lodeh</span>, <span className="font-semibold">stir-fried tofu, tempeh & long beans</span> (customer favorite!), and can customize some items upon request. Just let our staff know your dietary preferences.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-accent-300" />
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Prefer to Talk?
              </h2>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Sometimes it&apos;s easier to just call! Our team is ready to help with any questions about our menu, catering, or anything else.
              </p>

              <a
                href="tel:+6562345678"
                className="inline-block px-10 py-5 bg-white text-primary-700 rounded-xl font-bold hover:bg-neutral-100 hover:shadow-2xl transition-all text-2xl"
              >
                📞 +65 6234 5678
              </a>

              <p className="mt-6 text-sm text-white/70">
                Available Mon-Sun: 6:00 AM - 8:00 PM
              </p>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}