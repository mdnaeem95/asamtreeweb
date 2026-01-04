'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return

    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-secondary-50 border-2 border-secondary-400 rounded-xl flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-secondary-900">Message sent successfully!</p>
            <p className="text-sm text-secondary-700">We&apos;ll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
          Your Name <span className="text-accent-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.name 
              ? 'border-accent-400 focus:border-accent-500' 
              : 'border-neutral-300 focus:border-primary-500'
          } focus:outline-none`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
          Email Address <span className="text-accent-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.email 
              ? 'border-accent-400 focus:border-accent-500' 
              : 'border-neutral-300 focus:border-primary-500'
          } focus:outline-none`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
          Phone Number <span className="text-neutral-400 text-xs">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
          placeholder="+65 1234 5678"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-primary-900 mb-2">
          What can we help you with?
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none transition-colors"
        >
          <option value="">Select a topic...</option>
          <option value="general">General Inquiry</option>
          <option value="catering">Catering Services</option>
          <option value="feedback">Feedback</option>
          <option value="bulk-order">Bulk Order</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
          Your Message <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
            errors.message 
              ? 'border-accent-400 focus:border-accent-500' 
              : 'border-neutral-300 focus:border-primary-500'
          } focus:outline-none`}
          placeholder="Tell us how we can help you..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-4 bg-accent-600 text-white font-bold rounded-lg hover:bg-accent-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-sm text-neutral-500 text-center">
        We typically respond within 24 hours on weekdays
      </p>

    </form>
  )
}