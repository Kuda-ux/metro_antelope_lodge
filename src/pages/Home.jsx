import { Link } from 'react-router-dom'
import { MapPin, Shield, Bed, Star, ArrowRight, Phone, Sun, Mountain, Users, Coffee } from 'lucide-react'

const IMG = {
  hero: '/lodge-green-1.svg',
  about: '/lodge-green-2.svg',
  room1: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
  room2: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80',
  room3: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80',
  location: '/lodge-building-1.svg',
  cta: '/lodge-building-2.svg',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Metro Antelope Lodge — green surroundings at Antelope Dam, Matobo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44 w-full">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <MapPin className="w-4 h-4 text-brand-secondary" />
              Antelope Dam, Maphisa, Matobo — Zimbabwe
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Welcome to <span className="text-brand-secondary">Metro Antelope Lodge</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Comfortable and affordable accommodation in the heart of Antelope Dam, Matobo. Your gateway to the iconic Matobo Hills.
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
                View Rooms
              </Link>
            </div>
          </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: 'Safe & Secure', value: '24/7' },
              { icon: Star, label: 'Guest Experience', value: '5-Star' },
              { icon: Bed, label: 'Comfortable', value: 'Rooms' },
              { icon: Mountain, label: 'Near Matobo Hills', value: 'UNESCO' },
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

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-6">
                Your Peaceful Retreat in Matobo
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Metro Antelope Lodge offers a peaceful and comfortable stay for guests visiting Matobo. Designed to provide relaxation and convenience, it is the perfect place for both short and extended stays.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are visiting for business or leisure, our lodge provides the ideal environment for a restful and enjoyable experience surrounded by the natural beauty of Antelope Dam.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Sun, text: 'Peaceful Environment' },
                  { icon: Shield, text: 'Safe & Secure' },
                  { icon: Coffee, text: 'Modern Comfort' },
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
            <div className="relative">
              <img
                src={IMG.about}
                alt="Metro Antelope Lodge green environment"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-lg">Trusted</p>
                    <p className="text-sm text-gray-500">By Metro Properties</p>
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
              Our Rooms
            </h2>
            <p className="text-gray-600 text-lg">
              Clean, secure, and comfortable rooms designed to make your stay enjoyable and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard Room',
                description: 'A comfortable and well-equipped room perfect for solo travelers or couples seeking a peaceful stay.',
                features: ['Comfortable Bed', 'Clean Linen', 'Private Space'],
                image: IMG.room1,
              },
              {
                title: 'Twin Room',
                description: 'Spacious room with twin beds, ideal for friends or colleagues traveling together.',
                features: ['Twin Beds', 'Extra Space', 'Well-Furnished'],
                image: IMG.room2,
              },
              {
                title: 'Family Room',
                description: 'Our largest room option designed to accommodate families with all the comfort you need.',
                features: ['Family-Sized', 'Comfortable', 'Secure'],
                image: IMG.room3,
              },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 hover:border-brand-secondary/30 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={room.image} alt={room.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-lg">{room.title}</span>
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
                    href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20rooms."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:text-brand-secondary transition-colors group/link"
                  >
                    Enquire Now
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
              View All Rooms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Location</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-6">
                Easy to Find, Hard to Leave
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Conveniently located in Antelope Dam, Maphisa, Matobo, offering easy access and a peaceful environment near the iconic Matobo Hills UNESCO World Heritage Site.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our lodge is nestled in a serene setting, providing the perfect balance of accessibility and tranquility. Whether you are visiting the Matobo Hills or passing through, we are easy to reach.
              </p>
              <div className="flex flex-col gap-4">
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
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={IMG.location} alt="Metro Antelope Lodge building exterior" loading="lazy" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Antelope Dam, Matobo</h3>
                  <p className="text-gray-300 text-sm mb-4">Near the Matobo Hills UNESCO World Heritage Site</p>
                  <a
                    href="https://wa.me/263780292970?text=Hello%2C%20I%20need%20directions%20to%20Metro%20Antelope%20Lodge."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 border border-white/20"
                  >
                    Get Directions via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.cta} alt="Metro Antelope Lodge building" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-primary/85"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today and secure your stay at Metro Antelope Lodge. We look forward to welcoming you.
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
