import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'From intimate ceremonies to grand celebrations, we create your perfect wedding day.',
    },
    {
      icon: Sparkles,
      title: 'Premium Styling',
      description: 'Luxurious designs with elegant florals, lighting, and décor that stun.',
    },
    {
      icon: Star,
      title: 'Full Coordination',
      description: 'End-to-end event management ensuring every detail is perfect.',
    },
  ]

  const gallery = [
    {
      id: 1,
      image: '/events/event-1-mountain-mandap.jpg',
      title: 'Sunflower Dreams',
      category: 'Outdoor Events',
    },
    {
      id: 2,
      image: '/events/event-2-ballroom.jpg',
      title: 'Elegant Ballroom',
      category: 'Indoor Celebrations',
    },
    {
      id: 3,
      image: '/events/event-3-white-garden.jpg',
      title: 'White Garden Romance',
      category: 'Garden Events',
    },
    {
      id: 4,
      image: '/events/event-4-pink-arches.jpg',
      title: 'Pink Paradise',
      category: 'Romantic Setups',
    },
    {
      id: 5,
      image: '/events/event-5-gold-buffet.jpg',
      title: 'Gold Luxury',
      category: 'Premium Catering',
    },
    {
      id: 6,
      image: '/events/event-6-night-stage.jpg',
      title: 'Evening Spectacular',
      category: 'Night Events',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-linear-to-b from-background via-background to-muted flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-lg h-128 bg-accent rounded-full mix-blend-multiply opacity-40 blur-3xl animate-float-slow" />
<div className="absolute bottom-0 left-0 w-md h-112 bg-primary rounded-full mix-blend-multiply opacity-25 blur-3xl animate-float" />
<div className="absolute top-1/3 left-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply opacity-20 blur-3xl animate-float-slow" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] bg-size-[32px_32px] opacity-[0.04]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
               <div className="bg-[#F5ECE4] backdrop-blur-xl rounded-[40px] border border-[#E6D8CE] shadow-2xl p-10 md:p-12">
                <p className="font-display italic text-3xl text-[#5A3D31] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Celebrate Your Love
                </p>
                <h1 className="text-balance mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Create Unforgettable Moments with Luxury Events
                </h1>
                <p className="text-lg text-[#6B4C3B] mb-8 leading-relaxed max-w-lg">
                  White Moons Love Events brings your dream celebrations to life with elegant design, meticulous planning, and attention to every detail. Your special moment deserves perfection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="btn-shine inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
                  >
                    Book Your Event
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                  <Link
                    href="/gallery"
                    className="glass inline-flex items-center justify-center px-8 py-3 rounded-lg hover:bg-primary/5 transition-all font-semibold text-primary"
                  >
                    View Gallery
                  </Link>
                </div>
                </div>
              </Reveal>

              {/* Hero Image Grid */}
              <Reveal variant="scale" delay={150} className="hidden lg:grid grid-cols-2 gap-4">
                <div className="col-span-1 row-span-2 animate-float-slow">
                  <Image
                    src="/events/event-3-white-garden.jpg"
                    alt="White Garden Event"
                    width={300}
                    height={600}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <Image
                  src="/events/event-1-mountain-mandap.jpg"
                  alt="Sunflower Event"
                  width={300}
                  height={280}
                  className="w-full h-44 object-cover rounded-2xl shadow-xl animate-float"
                />
                <Image
                  src="/events/event-4-pink-arches.jpg"
                  alt="Pink Arches Event"
                  width={300}
                  height={280}
                  className="w-full h-44 object-cover rounded-2xl shadow-xl animate-float"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services Section */}
<section className="py-20 md:py-32 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-[#F5ECE4] rounded-[40px] border border-[#E6D8CE] shadow-2xl p-10 md:p-12">

      <div className="text-center mb-12">
        <p className="inline-block px-5 py-2 rounded-full bg-[#8B6B61] text-white text-sm font-semibold uppercase tracking-widest mb-6">
          Our Services
        </p>

        <h2
          className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Excellence in Every Detail
        </h2>

        <p className="text-lg text-[#6B4C3B] max-w-2xl mx-auto">
          Comprehensive event planning services tailored to make your celebration perfect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon

          return (
            <Reveal key={service.title} delay={i * 120}>
              <div className="bg-[#FAF5EF] rounded-[30px] border border-[#E6D8CE] shadow-lg p-8 h-full group transition-all duration-300 hover:-translate-y-2">

                <div className="w-14 h-14 rounded-full bg-[#EADCD2] flex items-center justify-center mb-5 mx-auto group-hover:bg-[#8B6B61] transition-all duration-300">

                  <Icon
                    size={28}
                    className={
                      service.title === 'Wedding Planning'
                        ? 'text-[#8B6B61] group-hover:text-white transition-colors'
                        : 'text-primary group-hover:text-white transition-colors'
                    }
                  />

                </div>

                <h3 className="text-xl font-semibold text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-center text-muted-foreground">
                  {service.description}
                </p>

              </div>
            </Reveal>
          )
        })}
      </div>

    </div>

  </div>
</section>

       {/* Gallery Preview Section */}
<section className="py-20 md:py-32 bg-muted/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-[#F5ECE4] rounded-[40px] border border-[#E6D8CE] shadow-2xl p-10 md:p-12 mb-16">

      <div className="text-center">

        <p className="inline-block px-5 py-2 rounded-full bg-[#8B6B61] text-white text-sm font-semibold uppercase tracking-widest mb-6">
          Our Portfolio
        </p>

        <h2
          className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Stunning Event Designs
        </h2>

        <p className="text-lg text-[#6B4C3B] max-w-2xl mx-auto">
          Explore our collection of beautifully executed events that showcase our expertise.
        </p>

      </div>

    </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, i) => (
                <Reveal key={item.id} variant="scale" delay={(i % 3) * 100}>
                  <Link
                    href="/gallery"
                    className="group relative overflow-hidden rounded-xl bg-card h-80 block shadow-md hover:shadow-2xl transition-shadow duration-500"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="glass-strong rounded-lg px-4 py-3 -mx-1">
                        <p className="text-accent text-sm font-semibold">{item.category}</p>
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                View Full Gallery
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Custom Event Planning Section */}
        <section className="relative py-20 md:py-32 bg-accent/10 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
          <Reveal variant="scale" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-strong rounded-3xl p-10 md:p-14">
             
              <h2
  className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-8"
  style={{ fontFamily: 'Georgia, serif' }}
>
  Customise Your Event
</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Every celebration is unique, and so are our decorations and services.
                </p>
                <p>
                  We do not offer fixed packages or fixed pricing because every event depends on your requirements, venue, decoration style, guest count, and budget.
                </p>
                <p>
                  Whether it&apos;s a wedding, birthday, engagement, baby shower, anniversary, corporate event, or any special occasion, we create a personalised experience just for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link
                  href="/book"
                  className="btn-shine inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
                >
                  Get a Custom Quote
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <a
                  href="tel:+919781553180"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </section>

       {/* CTA Section */}
<section className="py-20 md:py-32 bg-background">
  <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-[#F5ECE4] rounded-[40px] border border-[#E6D8CE] shadow-2xl p-10 md:p-12 text-center">

      <p className="inline-block px-5 py-2 rounded-full bg-[#8B6B61] text-white text-sm font-semibold uppercase tracking-widest mb-6">
        LET'S CELEBRATE
      </p>

      <h2
        className="font-display italic text-5xl md:text-6xl font-bold text-[#5A3D31] mb-6"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Ready to Celebrate?
      </h2>

      <p className="text-xl text-[#6B4C3B] max-w-2xl mx-auto leading-relaxed mb-10">
        Let's create an event that tells your unique love story. Get in touch with our team to discuss your vision.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <Link
          href="/book"
          className="btn-shine inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
        >
          Book Consultation
          <ChevronRight size={20} className="ml-2" />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold"
        >
          Contact Us
        </Link>

      </div>

    </div>

  </Reveal>
</section>
      </main>
      <Footer />
    </>
  )
}
