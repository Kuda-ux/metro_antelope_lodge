import { Link } from 'react-router-dom'
import {
  Waves,
  Utensils,
  Briefcase,
  Baby,
  Sailboat,
  ArrowRight,
  Check,
  Coffee,
  Users,
  Calendar,
  Sparkles,
  Heart,
  Star,
} from 'lucide-react'

// Curated Unsplash photos that authentically depict each facility in a lodge setting.
// Each image has a fallback to a real lodge photo in case the external image fails to load.
const IMG = {
  header: '/garden-view.jpg',
  // Modest outdoor lodge pool surrounded by palms
  pool: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
  poolFallback: '/garden-palms.jpg',
  // Warm rustic lodge restaurant / dining
  restaurant: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  restaurantFallback: '/lodge-compound.jpg',
  // Meeting room with conference table
  conference: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
  conferenceFallback: '/modern-room-exterior.jpg',
  // Outdoor playground / swings
  kids: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80',
  kidsFallback: '/lodge-green-lawn.jpg',
  // Wooden boat on a calm lake — matches Antelope Dam atmosphere
  boats: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?auto=format&fit=crop&w=1200&q=80',
  boatsFallback: '/antelope-dam.jpg',
}

// Fallback handler — swaps to local lodge photo if external image 404s
const handleImgError = (fallback) => (e) => {
  if (e.target.src !== window.location.origin + fallback) {
    e.target.src = fallback
  }
}

const facilities = [
  {
    title: 'Swimming Pool',
    tagline: 'Cool off in style',
    icon: Waves,
    image: IMG.pool,
    fallback: IMG.poolFallback,
    description:
      'Dive into our refreshing swimming pool surrounded by lush gardens — the perfect way to cool off after a day exploring the Matobo Hills. Loungers, shaded seating, and pool-side service create a relaxing atmosphere for adults and supervised children alike.',
    features: [
      'Outdoor pool with garden views',
      'Loungers & shaded seating',
      'Towel service for guests',
      'Pool-side refreshments',
    ],
    accent: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
  {
    title: 'Restaurant & Bar',
    tagline: 'Authentic Zimbabwean flavours',
    icon: Utensils,
    image: IMG.restaurant,
    fallback: IMG.restaurantFallback,
    description:
      'Savour hearty Zimbabwean dishes alongside international favourites in our warm and welcoming dining space. Our bar serves cold drinks, local beer, and quality wines — the perfect place to wind down with friends and family after a day in Matobo.',
    features: [
      'Traditional Zimbabwean cuisine',
      'International menu options',
      'Full bar with local & imported drinks',
      'Indoor & outdoor seating',
    ],
    accent: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Boating on the Dam',
    tagline: 'Glide across Antelope Dam',
    icon: Sailboat,
    image: IMG.boats,
    fallback: IMG.boatsFallback,
    description:
      'Step right onto the water with our boating experience on Antelope Dam. Whether you fancy a peaceful paddle, a sunset cruise, or a fishing trip, our boats let you enjoy the dam\'s beauty up close — spotting birdlife, soaking in the views, and creating memories on the water.',
    features: [
      'Boat rides & sunset cruises',
      'Fishing trips on request',
      'Life jackets provided',
      'Bird watching & photography',
    ],
    accent: 'from-cyan-500 to-teal-600',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    title: 'Conference Centre',
    tagline: 'Meet, plan & inspire',
    icon: Briefcase,
    image: IMG.conference,
    fallback: IMG.conferenceFallback,
    description:
      'Host your business meetings, workshops, or team retreats in our purpose-built conference centre. Equipped with modern facilities, fast WiFi, and the natural calm of Antelope Dam, our venue is ideal for productive sessions away from the city.',
    features: [
      'Boardroom & training room setups',
      'Reliable WiFi & solar-backed power',
      'Tea, coffee & catering on request',
      'Quiet lakeside location',
    ],
    accent: 'from-brand-primary to-blue-900',
    iconBg: 'bg-blue-100',
    iconColor: 'text-brand-primary',
  },
  {
    title: 'Kids Playing Area',
    tagline: 'Where children make memories',
    icon: Baby,
    image: IMG.kids,
    fallback: IMG.kidsFallback,
    description:
      'A safe, secure outdoor play area designed for little adventurers. Swings, climbing frames, and open lawn space let children run, laugh, and explore while parents relax nearby — making Metro Antelope Lodge the perfect family destination.',
    features: [
      'Safe, fenced outdoor play area',
      'Swings, slides & climbing frames',
      'Open lawn for free play',
      'Visible from family rooms',
    ],
    accent: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
]

export default function Facilities() {
  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.header} alt="Metro Antelope Lodge facilities and services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 via-brand-dark/70 to-cyan-900/60"></div>
          {/* Floating decorative blobs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-5 py-2.5 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-brand-secondary" />
              <span>Everything You Need, All in One Place</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-[1.1]">
              Facilities & <span className="text-brand-secondary">Activities</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">
              From poolside relaxation to lakeside boating, gourmet dining to family fun — Metro Antelope Lodge offers a complete experience for every guest.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats / Highlights Strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { num: '5+', label: 'On-Site Activities', color: 'text-brand-primary' },
              { num: '24/7', label: 'Hospitality', color: 'text-sky-600' },
              { num: '✨', label: 'Family Friendly', color: 'text-amber-500' },
              { num: '🚣', label: 'Lakeside Fun', color: 'text-cyan-600' },
              { num: '❤️', label: 'Made With Love', color: 'text-rose-500' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-3xl md:text-4xl font-heading font-bold ${s.color}`}>{s.num}</span>
                <span className="text-xs md:text-sm text-gray-500 mt-1 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={f.image}
                      alt={`${f.title} at Metro Antelope Lodge`}
                      loading="lazy"
                      onError={handleImgError(f.fallback)}
                      className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${f.accent} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Available badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                      <span className="relative flex w-2.5 h-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Available</span>
                    </div>
                    {/* Tagline pill bottom right */}
                    <div className="absolute bottom-4 right-4 bg-brand-primary/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
                      <span className="text-xs font-semibold text-white">{f.tagline}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`inline-flex items-center gap-3 mb-5`}>
                    <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center`}>
                      <f.icon className={`w-7 h-7 ${f.iconColor}`} />
                    </div>
                    <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">{f.tagline}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-5">
                    {f.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {f.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-brand-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-secondary" />
                        </div>
                        <span className="text-sm text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/263780292970?text=${encodeURIComponent(`Hello, I would like to enquire about the ${f.title} at Metro Antelope Lodge.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Everyone */}
      <section className="py-20 bg-gradient-to-br from-brand-light via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Why Guests Love Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              Built for Every Kind of Guest
            </h2>
            <p className="text-gray-600 text-lg">
              From family holidays to business retreats — Metro Antelope Lodge has something for everyone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Families', desc: 'Kids play area & spacious family rooms', gradient: 'from-green-400 to-emerald-500' },
              { icon: Briefcase, title: 'Business', desc: 'Conference centre with WiFi & power', gradient: 'from-blue-500 to-brand-primary' },
              { icon: Calendar, title: 'Events', desc: 'Venue hire for special occasions', gradient: 'from-amber-400 to-orange-500' },
              { icon: Heart, title: 'Leisure', desc: 'Pool, boating, restaurant & gardens', gradient: 'from-rose-400 to-pink-500' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-brand-dark mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/lodge-panoramic.jpg" alt="Metro Antelope Lodge panoramic" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-primary/85"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Experience It All at Metro Antelope Lodge
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Pool, boating, gourmet dining, conferences, and family fun — your perfect Matobo getaway is just a WhatsApp message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20and%20enjoy%20the%20facilities%20at%20Metro%20Antelope%20Lodge."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Browse Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
