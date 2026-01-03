'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        reset()
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-900">Message sent successfully!</p>
            <p className="text-sm text-green-700">We&apos;ll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900">Failed to send message</p>
            <p className="text-sm text-red-700">Please try again or call us directly.</p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
          Your Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="John Doe"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.name
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-blue-500'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
          Email Address *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="john@example.com"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.email
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-blue-500'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
          Phone Number <span className="text-slate-400">(Optional)</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="+65 1234 5678"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
          Subject *
        </label>
        <select
          {...register('subject')}
          id="subject"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.subject
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-blue-500'
          }`}
        >
          <option value="">Select a subject...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Catering Request">Catering Request</option>
          <option value="Feedback">Feedback</option>
          <option value="Partnership">Partnership Opportunity</option>
          <option value="Complaint">Complaint</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Tell us how we can help you..."
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
            errors.message
              ? 'border-red-300 focus:ring-red-500'
              : 'border-slate-300 focus:ring-blue-500'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full px-6 py-4 rounded-lg font-bold text-white transition flex items-center justify-center gap-2 ${
          status === 'loading'
            ? 'bg-slate-400 cursor-not-allowed'
            : 'bg-blue-900 hover:bg-blue-800 shadow-md hover:shadow-lg'
        }`}
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-sm text-slate-500 text-center">
        * Required fields
      </p>
    </form>
  )
}