'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { useState } from 'react'
import { CheckCircle, Calendar, Users, MapPin, Heart, Loader2, AlertCircle } from 'lucide-react'

export default function BookEvent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const eventTypes = [
    'Wedding',
    'Engagement Party',
    'Anniversary',
    'Corporate Event',
    'Birthday Celebration',
    'Other',
  ]



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.details?.join(', ') || data?.error || 'Something went wrong')
      }
      setSubmitted(true)
      setStep(1)
      setFormData({
        eventType: '',
        eventDate: '',
        guestCount: '',
        location: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStep1Complete = formData.eventType && formData.eventDate && formData.guestCount

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
       <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-[#D8C3A5] shadow-2xl p-12 md:p-16 text-center">

      <span className="inline-block px-5 py-2 mb-6 rounded-full bg-[#8B6B61] text-white text-sm font-semibold tracking-widest uppercase">
        BOOK EVENT
      </span>

      <h1
        className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Book Your Event
      </h1>

      <p className="text-xl text-[#6B4C3B] max-w-3xl mx-auto leading-8">
        Let's start planning your perfect celebration. Complete the form below and we'll get in touch with you soon.
      </p>

    </div>

  </div>
</section>

        {/* Booking Form Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <Reveal
  variant="scale"
  className="text-center bg-white/80 backdrop-blur-xl rounded-[40px] border border-[#D8C3A5] shadow-2xl p-12"
>
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-glow">
                  <CheckCircle size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">Booking Request Submitted!</h2>
                <p className="text-muted-foreground mb-4">
                  Thank you for your interest in White Moons Love Events. We&apos;ll review your details and contact you within 24 hours at the email and phone number you provided.
                </p>
                <button
                  onClick={() => {
                    setStep(1)
                    setSubmitted(false)
                  }}
                  className="btn-shine px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold"
                >
                  Start New Booking
                </button>
              </Reveal>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-12">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          s <= step
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {s}
                      </div>
                      <span className={`hidden sm:inline text-sm font-medium ${s <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                        {s === 1 ? 'Event Details' : 'Your Information'}
                      </span>
                      {s === 1 && (
                        <div className={`hidden md:block h-1 w-20 ${step === 2 ? 'bg-primary' : 'bg-muted'}`} />
                      )}
                    </div>
                  ))}
                </div>

                {error && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl rounded-[35px] border border-[#D8C3A5] shadow-2xl p-8 md:p-10">

                  {/* Step 1: Event Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2
  className="font-display italic text-4xl font-bold text-[#5A3D31] mb-8"
  style={{ fontFamily: "Georgia, serif" }}
>
  Tell Us About Your Event
</h2>

                      <div>
                        <label className="block text-sm font-semibold mb-3">Event Type *</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {eventTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, eventType: type })}
                              className={`p-3 rounded-lg border-2 font-medium transition-all ${
                                formData.eventType === type
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-border bg-background hover:border-primary'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                            <Calendar size={18} />
                            Event Date *
                          </label>
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                            <Users size={18} />
                            Expected Guests *
                          </label>
                          <select
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            required
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

                      <div>
                        <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                          <MapPin size={18} />
                          Location / Venue
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="City, State or Venue Name"
                        />
                      </div>



                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!isStep1Complete}
                        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Your Information
                      </button>
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <div className="space-y-6">
                     <h2
  className="font-display italic text-4xl font-bold text-[#5A3D31] mb-8"
  style={{ fontFamily: "Georgia, serif" }}
>
  Your Information
</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          <label className="block text-sm font-semibold mb-2">Email *</label>
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

                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Tell Us About Your Event</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={8}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base leading-relaxed"
                          placeholder="Tell us about your event, decoration ideas, preferred theme, guest count, special requirements, or anything you'd like us to know."
                        />
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-shine flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Heart size={20} />
                              Submit Booking Request
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
