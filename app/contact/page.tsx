'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { Mail, Phone, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Event on ${formData.eventDate || 'TBD'} (${formData.guestCount || 'guest count TBD'})`,
          message: formData.message,
        }),
      })
      let data = null

      try{
        data = await res.json()
      } catch {
        data = null
      }

      if (!res.ok) {
        throw new Error(data?.details?.join(', ') || data?.error || 'Server Error (${res.status})'
      )
    }
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-[#D8C3A5] shadow-2xl p-12 md:p-16 text-center">

      <span className="inline-block px-5 py-2 mb-6 rounded-full bg-[#8B6B61] text-white text-sm font-semibold tracking-widest uppercase">
        CONTACT US
      </span>

      <h1
        className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Get In Touch
      </h1>

      <p className="text-xl text-[#6B4C3B] max-w-3xl mx-auto leading-8">
        Let's discuss your event and create something extraordinary together.
      </p>

    </div>
  </div>
</section>

        {/* Contact Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="bg-[#F5ECE4] rounded-[30px] border border-[#E6D8CE] shadow-xl p-8 space-y-8 h-fit">
                <div>
                  <h2 className="font-serif italic text-3xl font-bold text-[#5A3D31] mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We&apos;re here to help bring your vision to life.
                  </p>
                </div>

                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    info: '+91 97815 53180',
                    href: 'tel:+919781553180',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    info: 'ashrafshekhalvi@gmail.com',
                    href: 'mailto:ashrafshekhalvi@gmail.com',
                  },
                ].map(({ icon: Icon, title, info, href }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      {href ? (
                        <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <Reveal delay={150} className="lg:col-span-2">
                {error && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Guest Count</label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select guest count</option>
                        <option value="50-100">50-100 guests</option>
                        <option value="100-200">100-200 guests</option>
                        <option value="200-500">200-500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-2">Tell Us About Your Event</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Share your vision, theme, preferences..."
                    />
                  </div>

                  <button
  type="submit"
  disabled={isSubmitting}
  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-60"
>
  {isSubmitting
    ? 'Sending...'
    : submitted
      ? 'Message Sent Successfully!'
      : 'Send Message'}
</button>
                </form>
                </Reveal>
              </div>
            </div>
        </section>

        {/* FAQ Section */}
<section className="py-20 md:py-32 bg-muted/30">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Outer FAQ Box */}
    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-[#D8C3A5] shadow-2xl p-10 md:p-14">

      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full bg-[#8B6B61] text-white text-sm font-semibold tracking-widest uppercase mb-6">
          FAQ
        </span>

        <h2
          className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Frequently Asked Questions
        </h2>

        <p className="text-lg text-[#6B4C3B]">
          Find answers to the most common questions about our services.
        </p>
      </div>

      <div className="space-y-5">
        {[
          {
            q: 'How far in advance should we book?',
            a: 'We recommend booking 6–12 months in advance for weddings and major events, but we can also accommodate shorter timelines based on availability.',
          },
          {
            q: 'Do you work with venues outside our area?',
            a: 'Yes. We work with venues across different locations. Share your venue details and we will discuss the best way to serve your event.',
          },
          {
            q: 'Can we customize packages?',
            a: 'Absolutely. Every event is unique, so we create customised plans that suit your style, requirements, and budget.',
          },
          {
            q: "What's included in day-of coordination?",
            a: 'Our day-of coordination includes timeline management, vendor coordination, setup supervision, and complete support throughout your event.',
          },
        ].map((faq, index) => (
          <Reveal key={index} delay={index * 80}>
            <details className="bg-[#F5ECE4] border border-[#E6D8CE] rounded-[25px] shadow-md p-6 group">
              <summary className="font-semibold text-lg text-[#5A3D31] flex justify-between items-center cursor-pointer list-none">
                {faq.q}
                <span className="text-[#8B6B61] text-2xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-[#6B4C3B] leading-7">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

    </div>

  </div>
</section>
      </main>
      <Footer />
    </>
  )
}
