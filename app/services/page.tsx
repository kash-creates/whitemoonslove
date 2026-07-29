import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { Metadata } from 'next'
import { CheckCircle, Sparkles, Users, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | White Moons Love Events',
  description: 'Explore our comprehensive event planning services including wedding planning, design, and coordination.',
}

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Full Event Planning',
      description: 'Complete event coordination from concept to execution. We handle every detail to bring your vision to life.',
      features: [
        'Concept & design development',
        'Vendor selection & management',
        'Timeline & budget coordination',
        'Day-of coordination',
      ],
    },
    {
      icon: Palette,
      title: 'Premium Styling & Design',
      description: 'Luxury designs featuring elegant florals, lighting, décor, and architectural elements.',
      features: [
        'Floral arrangements & garlands',
        'Lighting design & installation',
        'Fabric draping & elegant touches',
        'Custom decorative elements',
      ],
    },
    {
      icon: Users,
      title: 'Venue Decoration',
      description: 'Transform any venue into a spectacular celebration space with our expert design team.',
      features: [
        'Complete venue transformation',
        'Theme development & execution',
        'Seating & layout planning',
        'Ambient design setup',
      ],
    },
    {
      icon: Users,
      title: 'Photography & Videography Coordination',
      description: 'Coordination of professional photography and videography services for your event.',
      features: [
        'Photographer liaising',
        'Shot list coordination',
        'Timeline management',
        'Multi-angle coverage planning',
      ],
    },
  ]



  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white/80 backdrop-blur-xl rounded-[40px] border border-[#D8C3A5] shadow-2xl p-16 text-center">
           <div className="inline-block px-5 py-2 mb-6 rounded-full bg-[#8B6B61] text-white text-sm font-semibold tracking-widest uppercase">
  Luxury Event Planning
</div>
         <h1
  className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
  style={{ fontFamily: "Georgia, serif" }}
>
  Our Premium Services
</h1>
            <p className="text-xl text-[#6B4C3B] max-w-3xl mx-auto leading-8">
              Comprehensive event planning and styling services designed to create unforgettable celebrations.
            </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <Reveal key={service.title} delay={(i % 2) * 120}>
                   <div className="bg-[#F5ECE4] rounded-3xl border border-[#E6D8CE] shadow-xl p-8 h-full group hover:-translate-y-2 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-primary font-semibold">
                        Contact us for a customised quotation.
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Customisation Section */}
        <section className="relative py-20 md:py-32 bg-accent/10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
          <Reveal variant="scale" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 md:p-14">
            <h2
  className="text-balance text-5xl md:text-6xl font-bold font-serif italic text-[#5A3D31] mb-8"
  style={{ fontFamily: "Georgia, serif" }}
>
  Completely Customised for You
</h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                We understand that every event is unique. There are no fixed packages or fixed pricing because every celebration depends on your specific requirements, venue, decoration style, guest count, and budget.
              </p>
              <p className="font-semibold text-primary">
                Contact us directly for a personalised quotation tailored to your vision.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="btn-shine inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
              >
                Request Custom Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </Reveal>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
             <div className="bg-white/80 backdrop-blur-xl rounded-[35px] border border-[#D8C3A5] shadow-2xl p-10 text-center">
              <h2
               className="font-display italic text-4xl md:text-5xl font-bold text-[#5A3D31] mb-6"
                 style={{ fontFamily: "Georgia, serif" }}
                  >
                  Our Process
                 </h2>
              <p className="text-xl text-[#6B4C3B] max-w-3xl mx-auto leading-8">
                We follow a proven methodology to ensure your event is perfect.
              </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We listen to your vision and discuss all details.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Our team creates a comprehensive event plan.',
                },
                {
                  step: '03',
                  title: 'Design',
                  description: 'We develop stunning designs and styling concepts.',
                },
                {
                  step: '04',
                  title: 'Execution',
                  description: 'We bring everything to life with perfection.',
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 120} className="relative">
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.step !== '04' && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-accent animate-shimmer" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
