import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    title: 'Lodge Entrance',
    description: 'The welcoming entrance of Metro Antelope Lodge with our Siyalamukela sign',
    image: '/lodge-entrance.jpg',
  },
  {
    title: 'Modern Room Exterior',
    description: 'Contemporary grey-blue room buildings with modern architecture',
    image: '/modern-room-exterior.jpg',
  },
  {
    title: 'Modern Rooms - Front View',
    description: 'Stylish entrance with glass doors and steel railings',
    image: '/modern-room-exterior-2.jpg',
  },
  {
    title: 'Modern Suite',
    description: 'Another angle of our beautifully designed modern rooms',
    image: '/modern-room-exterior-3.jpg',
  },
  {
    title: 'Thatched Cottage',
    description: 'Traditional African thatched-roof cottage with private veranda',
    image: '/thatched-cottage.jpg',
  },
  {
    title: 'Thatched Cottage - Side View',
    description: 'Charming cottage with garden surroundings and bush views',
    image: '/thatched-cottage-2.jpg',
  },
  {
    title: 'Cape Dutch Cottage',
    description: 'Classic cottage with tree shade and decorative pottery',
    image: '/cottage-tree.jpg',
  },
  {
    title: 'Standard Room Interior',
    description: 'Elegant queen bed with plush headboard and towel art',
    image: '/room-standard.jpg',
  },
  {
    title: 'Family Room Interior',
    description: 'Spacious family room with wicker seating and natural light',
    image: '/room-family.jpg',
  },
  {
    title: 'Antelope Dam',
    description: 'Stunning lake views just steps from the lodge',
    image: '/antelope-dam.jpg',
  },
  {
    title: 'Lake Panorama',
    description: 'Wide view of Antelope Dam with hills in the background',
    image: '/antelope-dam-2.jpg',
  },
  {
    title: 'Dam & Mountains',
    description: 'Antelope Dam with dramatic mountain scenery',
    image: '/antelope-dam-3.jpg',
  },
  {
    title: 'Tropical Gardens',
    description: 'Lush gardens with palm trees and banana plants',
    image: '/garden-palms.jpg',
  },
  {
    title: 'Garden & Lodge View',
    description: 'Beautiful garden path leading to the lodge buildings',
    image: '/garden-view.jpg',
  },
  {
    title: 'Garden Oasis',
    description: 'Tropical banana trees and hedges in our gardens',
    image: '/garden-banana.jpg',
  },
  {
    title: 'Lodge Panoramic',
    description: 'Panoramic view showing both thatched and modern buildings',
    image: '/lodge-panoramic.jpg',
  },
  {
    title: 'Green Lawns',
    description: 'Expansive green lawns with the lodge in the background',
    image: '/lodge-green-lawn.jpg',
  },
  {
    title: 'Solar Power System',
    description: 'Our green energy solar inverter system ensuring 24/7 power',
    image: '/solar-power.jpg',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const navigate = (dir) => {
    if (selected === null) return
    const next = selected + dir
    if (next >= 0 && next < galleryItems.length) setSelected(next)
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/antelope-dam-2.jpg" alt="Metro Antelope Lodge Gallery — Real Photos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Take a visual tour of Metro Antelope Lodge and its serene surroundings.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-brand-secondary/50"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5">
                    <h3 className="text-white font-heading font-bold text-sm">{item.title}</h3>
                    <p className="text-white/80 text-xs mt-1">{item.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          {selected > 0 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {selected < galleryItems.length - 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            className="max-w-5xl w-full rounded-2xl overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selected].image}
              alt={galleryItems[selected].title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="bg-black/60 backdrop-blur-sm px-6 py-4">
              <h3 className="text-white font-heading font-bold text-lg">{galleryItems[selected].title}</h3>
              <p className="text-white/70 text-sm mt-1">{galleryItems[selected].description}</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelected(i)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === selected ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us for more photos or to arrange a visit to the lodge.
          </p>
          <a
            href="https://wa.me/263777776088?text=Hello%2C%20I%20would%20like%20to%20see%20more%20photos%20of%20Metro%20Antelope%20Lodge."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Request More Photos
          </a>
        </div>
      </section>
    </>
  )
}
