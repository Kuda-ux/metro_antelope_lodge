import { Link } from 'react-router-dom'
import {
  Waves,
  Utensils,
  Briefcase,
  Baby,
  ArrowRight,
  Clock,
  Check,
  Wifi,
  Coffee,
  Users,
  Calendar,
  Sparkles,
} from 'lucide-react'

const IMG = {
  header: '/garden-view.jpg',
  pool: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  conference: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  kids: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=1200&q=80',
}

const facilities = [
  {
    title: 'Swimming Pool',
    tagline: 'Cool off in style',
    icon: Waves,
    image: IMG.pool,
    description:
      'A clean, refreshing swimming pool surrounded by our lush gardens — perfect for cooling off after a day exploring the Matobo Hills. Loungers, shaded seating, and pool-side service create a relaxing atmosphere for adults and supervised children alike.',
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
    description:
      'Enjoy hearty Zimbabwean dishes alongside international favourites in our warm and welcoming dining space. Our bar serves cold drinks, local beer, and quality wines — the perfect place to wind down with friends and family after a day in Matobo.',
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
    title: 'Conference Centre',
    tagline: 'Meet, plan & inspire',
    icon: Briefcase,
    image: IMG.conference,
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
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.header} alt="Metro Antelope Lodge facilities and services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Facilities & Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-4">
              More Than Just a Stay
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover the new facilities coming soon to Metro Antelope Lodge — designed to make every guest feel at home, whether for leisure, family, or business.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-primary to-blue-900 rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-brand-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-bold mb-2">Exciting New Facilities Opening Soon</h2>
                <p className="text-blue-100 leading-relaxed">
                  We are expanding Metro Antelope Lodge to give you even more reasons to visit. Our new pool, restaurant & bar, conference centre, and kids' play area are being prepared with the same care and attention that has always defined us.
                </p>
              </div>
            </div>
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
                      className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${f.accent} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Coming Soon badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-brand-dark uppercase tracking-wider">Opening Soon</span>
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

      {/* Conference & Events Highlight */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              Built for Every Kind of Guest
            </h2>
            <p className="text-gray-600 text-lg">
              From family holidays to business retreats — Metro Antelope Lodge has something for everyone.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Families', desc: 'Kids play area & spacious family rooms' },
              { icon: Briefcase, title: 'Business', desc: 'Conference centre with WiFi & power' },
              { icon: Calendar, title: 'Events', desc: 'Venue hire for special occasions' },
              { icon: Coffee, title: 'Leisure', desc: 'Pool, restaurant & relaxing gardens' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Be the First to Experience Our New Facilities
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Reserve your stay or get notified when our new pool, restaurant, conference centre, and kids' area open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20please%20notify%20me%20when%20the%20new%20facilities%20at%20Metro%20Antelope%20Lodge%20open."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Notify Me on WhatsApp
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
