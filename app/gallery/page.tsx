'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    image: '/events/event-1-mountain-mandap.jpg',
    title: 'Mountain Mandap',
    category: 'Outdoor',
    description: 'A spectacular mountain venue celebration with yellow mandap, abundant sunflowers, and breathtaking alpine backdrop.',
  },
  {
    id: 2,
    image: '/events/event-2-ballroom.jpg',
    title: 'Elegant Ballroom',
    category: 'Indoor',
    description: 'A luxurious indoor event with elegant gold draping and sophisticated ambiance.',
  },
  {
    id: 3,
    image: '/events/event-3-white-garden.jpg',
    title: 'White Garden Romance',
    category: 'Garden',
    description: 'A stunning garden setup with white florals and romantic greenery arrangements.',
  },
  {
    id: 4,
    image: '/events/event-4-pink-arches.jpg',
    title: 'Pink Paradise',
    category: 'Romantic',
    description: 'Beautiful pink and white floral arches creating a romantic celebration space.',
  },
  {
    id: 5,
    image: '/events/event-5-luxury-outdoor.jpg',
    title: 'Luxury Outdoor Venue',
    category: 'Outdoor',
    description: 'A contemporary luxury outdoor celebration with elegant white pergolas, cascading greenery, white florals, and integrated water features.',
  },
  {
    id: 6,
    image: '/events/event-6-mehendi-backdrop.jpg',
    title: 'Mehendi Elegance',
    category: 'Mehendi',
    description: 'An elegant mehendi celebration backdrop with white florals, green fabric draping, and traditional gold accents.',
  },
]

const categories = ['All', 'Outdoor', 'Indoor', 'Garden', 'Romantic', 'Mehendi']

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/70 backdrop-blur-md rounded-[40px] shadow-2xl border border-white/50 p-10 md:p-14 text-center">

      <span className="inline-block px-6 py-2 rounded-full bg-[#6B4C4C] text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">
        LUXURY EVENT GALLERY
      </span>

      <h1 className="font-serif italic font-bold text-5xl md:text-6xl text-[#5C3D3D] mb-6">
        Our Event Gallery
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Explore our collection of beautifully executed events that showcase
        the elegance and luxury of our work.
      </p>

    </div>
  </div>
</section>

        {/* Gallery Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                      : 'glass text-foreground hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-2xl bg-card h-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="glass-strong rounded-lg px-4 py-3 text-left">
                      <p className="text-accent text-sm font-semibold uppercase tracking-wide">{item.category}</p>
                      <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              <X size={28} className="text-white" />
            </button>

            <div
              className="max-w-5xl w-full reveal-scale in-view"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
              <div className="glass-strong p-8 rounded-b-2xl">
                <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">{selectedImage.category}</p>
                <h3 className="text-3xl font-semibold mb-4">{selectedImage.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
