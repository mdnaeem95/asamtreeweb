import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/forms/contact-form'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Contact Information
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                {/* Main Office */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Main Office</h3>
                      <p className="text-slate-600 mb-1">Block 709 Ang Mo Kio Avenue 8</p>
                      <p className="text-slate-600">#01-2609, Singapore 560709</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                      <a 
                        href="tel:+6562345678"
                        className="text-blue-900 hover:text-blue-700 font-medium block mb-1"
                      >
                        +65 6234 5678
                      </a>
                      <p className="text-sm text-slate-500">Mon-Sun: 6:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                      <a 
                        href="mailto:info@asamtree.com.sg"
                        className="text-blue-900 hover:text-blue-700 block mb-1"
                      >
                        info@asamtree.com.sg
                      </a>
                      <a 
                        href="mailto:catering@asamtree.com.sg"
                        className="text-blue-900 hover:text-blue-700 block text-sm"
                      >
                        catering@asamtree.com.sg
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-slate-700">
                          <span className="font-medium">Monday - Friday:</span> 6:00 AM - 8:00 PM
                        </p>
                        <p className="text-slate-700">
                          <span className="font-medium">Saturday - Sunday:</span> 6:00 AM - 8:00 PM
                        </p>
                        <p className="text-slate-500 mt-2">Open 7 days a week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/asamtreecafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition group"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition group"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-slate-200">
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

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
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
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Quick answers to common questions
            </p>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Do you accept reservations?
                </h3>
                <p className="text-slate-600">
                  We operate on a first-come, first-served basis for regular dining. However, 
                  for large groups (10+ people), please call us in advance so we can prepare.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Do you offer catering services?
                </h3>
                <p className="text-slate-600">
                  Yes! We provide catering for corporate events, weddings, and private functions. 
                  Contact us at catering@asamtree.com.sg or call +65 6789 0123 for customized menus.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Is all your food halal certified?
                </h3>
                <p className="text-slate-600">
                  Yes, all our outlets are MUIS halal certified. We use only halal-certified 
                  ingredients and maintain strict compliance with Islamic dietary laws.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Can I order online for delivery?
                </h3>
                <p className="text-slate-600">
                  Yes! Order through our Oddle platform at{' '}
                  <a 
                    href="https://asamtree.oddle.me/en_SG/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 font-medium"
                  >
                    asamtree.oddle.me
                  </a>
                  {' '}for delivery to your doorstep.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Do you have vegetarian options?
                </h3>
                <p className="text-slate-600">
                  Yes, we offer several vegetarian dishes including Sayur Lodeh and can 
                  customize some items upon request. Please inform our staff about your 
                  dietary preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">
            Prefer to Talk?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Give us a call and we&apos;ll be happy to help
          </p>
          <a
            href="tel:+6562345678"
            className="inline-block px-8 py-4 bg-yellow-300 text-blue-900 rounded-lg font-bold hover:bg-yellow-200 transition shadow-lg text-xl"
          >
            +65 6234 5678
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}