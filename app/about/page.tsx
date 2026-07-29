import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Heart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | White Moons Love Events',
  description: 'Learn about White Moons Love Events, our mission, and commitment to creating unforgettable celebrations.',
}

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        {/* Hero Section */}
<section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/70 backdrop-blur-md rounded-[40px] shadow-2xl border border-white/50 p-10 md:p-14 text-center">

      <span className="inline-block px-6 py-2 rounded-full bg-[#6B4C4C] text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">
        ABOUT WHITE MOONS
      </span>

      <h1 className="font-serif italic font-bold text-5xl md:text-6xl text-[#5C3D3D] mb-6">
        About White Moons Love
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Creating unforgettable celebrations with elegance, creativity, and meticulous attention to detail.
      </p>

    </div>
  </div>
</section>

        {/* Story Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>

  <span className="inline-block px-6 py-2 rounded-full bg-[#6B4C4C] text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
    OUR JOURNEY
  </span>

  <h2 className="font-serif italic font-bold text-5xl md:text-6xl text-[#5C3D3D] mb-6 whitespace-nowrap">
    Our Story
  </h2>
               <div className="bg-white/70 backdrop-blur-md rounded-[30px] shadow-xl border border-white/50 p-8 mt-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  White Moons Love Events was founded on the belief that every celebration deserves to be extraordinary. We specialize in creating luxury event experiences that transform visions into reality.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Over 15 years, we&apos;ve had the honor of planning over 500 events, from intimate gatherings to grand celebrations. Each event has taught us that the magic isn&apos;t just in the décor—it&apos;s in the emotion, the details, and the connections made.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, our team of experienced planners, designers, and coordinators continue to craft moments that last a lifetime.
                </p>
                </div>
              </Reveal>
              <Reveal variant="scale" delay={150} className="relative h-96 rounded-[35px] overflow-hidden shadow-2xl">
                <Image
                  src="/events/event-2-ballroom.jpg"
                  alt="White Moons Love Events Celebration"
                  fill
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-5xl mx-auto mb-16">
  <div className="bg-white/70 backdrop-blur-md rounded-[40px] shadow-2xl border border-white/50 p-10 text-center">

    <span className="inline-block px-6 py-2 rounded-full bg-[#6B4C4C] text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">
      WHAT WE BELIEVE
    </span>

    <h2 className="font-serif italic font-bold text-5xl md:text-6xl text-[#5C3D3D] mb-6">
      Our Values
    </h2>

    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Every celebration is built on passion, creativity, trust, and excellence.
    </p>
</div>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'We pour our hearts into every event, treating your celebration as if it were our own.',
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We maintain the highest standards in design, service, and execution at every step.',
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'We work closely with you to understand your vision and bring it to life beautifully.',
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'We stay creative and fresh, bringing new ideas while respecting timeless elegance.',
                },
              ].map((value, i) => {
                const Icon = value.icon
                return (
                  <Reveal key={value.title} delay={i * 100}>
                    <div className="bg-[#F5ECE4] hover:bg-white transition-all duration-500 rounded-[30px] shadow-xl border border-[#E6D8CE] p-8 text-center h-full group hover:-translate-y-2 hover:shadow-2xl">
                     <div className="w-14 h-14 rounded-full bg-[#EADCD2] flex items-center justify-center mb-5 mx-auto group-hover:bg-[#6B4C4C] group-hover:scale-110 transition-all duration-300">

  <Icon
    size={28}
    className="text-[#6B4C4C] group-hover:text-white transition-colors duration-300"
  />

</div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </Reveal>
                )
              })}
          </div>
        </section>

       {/* Owner Section */}
<section className="py-20 md:py-32 bg-background">
  <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Outer Owner Box */}
    <div className="bg-white/70 backdrop-blur-md rounded-[35px] shadow-xl border border-white/50 p-8 md:p-12 text-center">

      <span className="inline-block px-5 py-2 rounded-full bg-[#6B4C4C] text-white text-xs font-bold uppercase tracking-[0.25em] mb-5">
        OWNER
      </span>

      <h2 className="font-serif italic text-4xl md:text-5xl font-bold text-[#5C3D3D] mb-5">
        Managed by Ashraf Sheikh Alvi
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        This business is managed directly by the owner with a dedicated focus on delivering personalised, high-quality event planning services. Every celebration receives the same level of care and attention to detail.
      </p>


      {/* Inner Contact Box */}
      <div className="bg-white/80 rounded-[30px] shadow-lg border border-gray-100 p-8 mt-10">

        <h3 className="text-2xl font-serif italic text-[#5C3D3D] font-bold mb-6">
          Get In Touch
        </h3>


        <div className="space-y-4 text-lg text-gray-700">

          <p>
            <span className="font-bold text-[#5C3D3D]">
              Phone:
            </span>{' '}
            <a 
              href="tel:+919781553180" 
              className="text-[#8B6B61] hover:underline"
            >
              +91 97815 53180
            </a>
          </p>


          <p>
            <span className="font-bold text-[#5C3D3D]">
              Email:
            </span>{' '}
            <a 
              href="mailto:ashrafshekhalvi@gmail.com" 
              className="text-[#8B6B61] hover:underline"
            >
              ashrafshekhalvi@gmail.com
            </a>
          </p>


          <p>
            <span className="font-bold text-[#5C3D3D]">
              Instagram:
            </span>{' '}
            <a
              href="https://www.instagram.com/whitemoonslove"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B6B61] hover:underline"
            >
              @whitemoonslove
            </a>
          </p>

        </div>

      </div>

    </div>

  </Reveal>
</section>

 {/* CTA Section */}
<section className="py-20 md:py-32 bg-background">
  <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Outer CTA Box */}
    <div className="bg-white/70 backdrop-blur-md rounded-[35px] shadow-xl border border-white/50 p-8 md:p-12 text-center">

      <h2 className="text-balance text-4xl md:text-5xl font-serif italic font-bold text-[#5C3D3D] mb-6">
        Ready to Work Together?
      </h2>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
        Let us be part of your special journey. Contact us today to discuss your event.
      </p>


      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

  <a
    href="/contact"
    className="btn-shine inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
  >
    Get In Touch
  </a>

  <a
    href="/services"
    className="glass inline-flex items-center justify-center px-8 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-primary"
  >
    Explore Services
  </a>

</div>

    </div>

  </Reveal>
</section> 
</main>
      <Footer />
    </>
  )
}     