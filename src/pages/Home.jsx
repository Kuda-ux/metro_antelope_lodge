import { Link } from 'react-router-dom'
import { MapPin, Shield, Bed, Star, ArrowRight, Phone, Sun, Mountain, Users, Coffee, Wifi, Zap, TreePine, Camera, Waves, Utensils, Briefcase, Baby, Sparkles, Sailboat } from 'lucide-react'

const IMG = {
  hero: '/lodge-entrance.jpg',
  about: '/garden-view.jpg',
  room1: '/room-standard.jpg',
  room2: '/room-family.jpg',
  room3: '/thatched-cottage.jpg',
  location: '/antelope-dam.jpg',
  cta: '/lodge-panoramic.jpg',
  garden: '/garden-palms.jpg',
  modern: '/modern-room-exterior.jpg',
  modern2: '/modern-room-exterior-2.jpg',
  dam2: '/antelope-dam-2.jpg',
  cottage: '/cottage-tree.jpg',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Metro Antelope Lodge entrance with welcome sign at Antelope Dam, Matobo Zimbabwe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44 w-full">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span>Zimbabwe's Hidden Gem at Antelope Dam</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Experience the <span className="text-brand-secondary">Beauty of Matobo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Modern rooms, traditional thatched cottages, and stunning lake views — all nestled beside the iconic Antelope Dam near the Matobo Hills UNESCO World Heritage Site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Metro%20Antelope%20Lodge."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Explore Our Rooms
              </Link>
            </div>
          </div>
        </div>
        {/* Floating image thumbnails */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-3">
          {[IMG.modern, IMG.dam2, IMG.cottage].map((src, i) => (
            <div key={i} className="w-24 h-24 rounded-xl overflow-hidden border-2 border-white/30 shadow-lg hover:scale-110 transition-transform duration-300">
              <img src={src} alt="Lodge preview" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: Shield, label: 'Safe & Secure', value: '24/7' },
              { icon: Star, label: 'Guest Rating', value: '4.8/5' },
              { icon: Bed, label: 'Comfortable', value: 'Rooms' },
              { icon: Mountain, label: 'Matobo Hills', value: 'UNESCO' },
              { icon: Wifi, label: 'Free WiFi', value: 'Fast' },
              { icon: Zap, label: 'Solar Power', value: 'Green' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-xl font-heading font-bold text-brand-dark">{item.value}</span>
                <span className="text-sm text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Image Collage */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-6">
                Where Modern Comfort Meets African Heritage
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Set on the shores of Antelope Dam, Metro Antelope Lodge combines contemporary architecture with traditional thatched cottages to create an unforgettable Zimbabwean getaway. Wake up to birdsong, watch the sun set over the lake, and explore the nearby Matobo Hills.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Powered by solar energy and equipped with free WiFi, our lodge delivers modern convenience in a serene natural setting. Whether you're on a family holiday, a business trip, or seeking an adventure base, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Sun, text: 'Lakeside Setting' },
                  { icon: Shield, text: 'Safe & Secure' },
                  { icon: Zap, text: 'Solar Powered' },
                  { icon: Wifi, text: 'Free WiFi' },
                  { icon: TreePine, text: 'Lush Gardens' },
                  { icon: Users, text: 'Friendly Staff' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <f.icon className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                    {f.text}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={IMG.about}
                  alt="Lodge gardens with palm trees and lush green lawns"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full h-[240px] object-cover hover:shadow-2xl transition-shadow duration-300"
                />
                <img
                  src={IMG.modern}
                  alt="Modern room exterior with contemporary design"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full h-[200px] object-cover hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={IMG.location}
                  alt="Antelope Dam lake view with mountains"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full h-[200px] object-cover hover:shadow-2xl transition-shadow duration-300"
                />
                <img
                  src={IMG.cottage}
                  alt="Traditional thatched cottage accommodation"
                  loading="lazy"
                  className="rounded-2xl shadow-xl w-full h-[240px] object-cover hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-lg">4.8 / 5</p>
                    <p className="text-sm text-gray-500">Guest Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Accommodation</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-gray-600 text-lg">
              From modern en-suite rooms to charming thatched cottages — every room features real Zimbabwean hospitality with contemporary amenities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard Room',
                description: 'Elegant room with plush bedding, decorative towel art, and warm curtains — perfect for couples or solo travelers.',
                features: ['Queen Bed', 'Clean Linen & Towels', 'Private Entrance', 'WiFi Access'],
                image: IMG.room1,
                badge: 'Most Popular',
              },
              {
                title: 'Family Cottage',
                description: 'Spacious room with comfortable beds and a wicker seating area — ideal for families wanting extra space and homely comfort.',
                features: ['Spacious Layout', 'Natural Lighting', 'Cozy Furnishings', 'WiFi Access'],
                image: IMG.room2,
                badge: 'Family Favourite',
              },
              {
                title: 'Thatched Cottage',
                description: 'Authentic African thatched-roof cottage with modern interiors — the perfect blend of tradition and comfort.',
                features: ['Thatched Roof', 'Private Veranda', 'Garden Views', 'Unique Experience'],
                image: IMG.room3,
                badge: 'Unique Stay',
              },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 hover:border-brand-secondary/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={`${room.title} at Metro Antelope Lodge`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full">{room.badge}</span>
                  <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-xl">{room.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{room.description}</p>
                  <ul className="space-y-2 mb-5">
                    {room.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.title)}%20at%20Metro%20Antelope%20Lodge.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 group/link"
                  >
                    Book This Room
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              View All Rooms & Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-cyan-50/40 to-brand-light relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-cyan-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              Facilities & Activities
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              More Than Just a Stay
            </h2>
            <p className="text-gray-600 text-lg">
              Swim, dine, sail, meet, and play — Metro Antelope Lodge is packed with activities to make every visit memorable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Waves, title: 'Swimming Pool', desc: 'Refreshing outdoor pool', gradient: 'from-sky-400 to-blue-500' },
              { icon: Utensils, title: 'Restaurant & Bar', desc: 'Local & international cuisine', gradient: 'from-amber-400 to-orange-500' },
              { icon: Sailboat, title: 'Boating', desc: 'Cruise on Antelope Dam', gradient: 'from-cyan-400 to-teal-500' },
              { icon: Briefcase, title: 'Conference Centre', desc: 'Meetings & retreats', gradient: 'from-blue-500 to-brand-primary' },
              { icon: Baby, title: 'Kids Play Area', desc: 'Fun & safe for children', gradient: 'from-green-400 to-emerald-500' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-heading font-bold text-brand-dark mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-cyan-600 hover:shadow-2xl text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore All Facilities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Antelope Dam Showcase */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={IMG.location} alt="Antelope Dam scenic lake view with trees and mountains" loading="lazy" className="rounded-2xl shadow-xl w-full h-[200px] object-cover" />
                <img src={IMG.dam2} alt="Panoramic view of Antelope Dam lake" loading="lazy" className="rounded-2xl shadow-xl w-full h-[200px] object-cover" />
              </div>
              <img src={IMG.garden} alt="Lush tropical gardens at Metro Antelope Lodge with banana trees" loading="lazy" className="rounded-2xl shadow-xl w-full h-[220px] object-cover mt-4" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Location</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-6">
                On the Shores of Antelope Dam
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Step outside and be greeted by the breathtaking Antelope Dam — a tranquil lake surrounded by lush African bushveld and rolling hills. Our lodge sits in this stunning natural landscape, minutes from the Matobo Hills UNESCO World Heritage Site.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Enjoy bird watching, nature walks, or simply relax in our tropical gardens with palm trees and banana plants. This is Zimbabwe at its most beautiful.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">Antelope Dam, Maphisa, Matobo, Zimbabwe</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">0780 292 970 / 0777 776 088</span>
                </div>
              </div>
              <a
                href="https://wa.me/263780292970?text=Hello%2C%20I%20need%20directions%20to%20Metro%20Antelope%20Lodge."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3">
              See It For Yourself
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: IMG.hero, label: 'Lodge Entrance' },
              { src: IMG.modern2, label: 'Modern Rooms' },
              { src: IMG.room1, label: 'Interior' },
              { src: IMG.dam2, label: 'Antelope Dam' },
            ].map((item, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden h-56 cursor-pointer">
                <img src={item.src} alt={item.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Camera className="w-8 h-8 text-white mx-auto mb-2" />
                    <span className="text-white font-semibold text-sm">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-semibold transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.cta} alt="Metro Antelope Lodge panoramic view with thatched cottages and modern rooms" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-primary/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Your Matobo Adventure Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your stay today and discover why guests call Metro Antelope Lodge Zimbabwe's best-kept secret. Siyalamukela — You are welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Metro%20Antelope%20Lodge."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
