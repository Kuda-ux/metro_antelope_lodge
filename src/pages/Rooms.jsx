import { Bed, Shield, Wifi, Wind, Droplets, Users, ArrowRight, Check } from 'lucide-react'

const IMG = {
  header: '/modern-room-exterior.jpg',
  room1: '/room-standard.jpg',
  room2: '/room-family.jpg',
  room3: '/thatched-cottage.jpg',
  modern2: '/modern-room-exterior-2.jpg',
  modern3: '/modern-room-exterior-3.jpg',
  cottage2: '/cottage-tree.jpg',
}

export default function Rooms() {
  const rooms = [
    {
      title: 'Standard Room',
      description: 'An elegant room featuring a plush queen bed with velvet headboard, decorative towel art, and warm sheer curtains. Tiled floors and modern finishes make this the perfect retreat for couples or solo travelers.',
      features: ['Queen Bed with Plush Headboard', 'Fresh Linen & Towel Art', 'Tiled Floors', 'Secure Lock', 'Natural Lighting', 'Free WiFi'],
      image: IMG.room1,
      highlight: false,
    },
    {
      title: 'Family Cottage',
      description: 'A spacious cottage with comfortable beds, wicker seating area, and large windows flooding the room with natural light. Perfect for families or guests wanting extra space and homely comfort.',
      features: ['Double Bed', 'Wicker Seating Area', 'Spacious Layout', 'Secure Lock', 'Large Windows', 'Free WiFi'],
      image: IMG.room2,
      highlight: true,
    },
    {
      title: 'Thatched Cottage',
      description: 'Experience authentic African charm in our traditional thatched-roof cottages. Featuring modern interiors with a private veranda, garden views, and the unique character of Zimbabwean architecture.',
      features: ['Thatched Roof Design', 'Private Veranda', 'Garden & Bush Views', 'Secure Lock', 'Modern Interior', 'Free WiFi'],
      image: IMG.room3,
      highlight: false,
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.header} alt="Our Rooms" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Accommodation</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-4">
              Our Rooms
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Clean, secure, and comfortable rooms designed to make your stay enjoyable and stress-free.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img src={room.image} alt={room.title} className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500" />
                    {room.highlight && (
                      <div className="absolute top-4 right-4 bg-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        Popular Choice
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {room.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {room.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 text-brand-secondary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/263777776088?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20rooms."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Enquire & Book
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              Room Amenities & Features
            </h2>
            <p className="text-gray-600 text-lg">
              Every room is designed with your comfort in mind.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Bed, label: 'Comfortable Beds' },
              { icon: Shield, label: 'Secure Rooms' },
              { icon: Droplets, label: 'Clean Water' },
              { icon: Wind, label: 'Fresh Air' },
              { icon: Users, label: 'Friendly Staff' },
              { icon: Wifi, label: 'Connectivity' },
            ].map((amenity, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-brand-light rounded-2xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-brand-primary transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-brand-dark">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.modern2} alt="Modern room exteriors at Metro Antelope Lodge" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-primary/85"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Book a Room?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Contact us via WhatsApp for availability and rates. We respond quickly!
          </p>
          <a
            href="https://wa.me/263777776088?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Metro%20Antelope%20Lodge."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Book via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
