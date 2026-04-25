import { Link } from 'react-router-dom'
import { Shield, Heart, Sparkles, Home, Users, ArrowRight, Award, Globe } from 'lucide-react'

const IMG = {
  header: '/garden-view.jpg',
  story: '/lodge-entrance.jpg',
  team: '/modern-room-exterior.jpg',
  values: '/antelope-dam-2.jpg',
  cottage: '/thatched-cottage.jpg',
  garden: '/garden-banana.jpg',
  solar: '/solar-power.jpg',
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.header} alt="About Metro Antelope Lodge" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover what makes Metro Antelope Lodge the preferred choice for visitors to Matobo.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                A Place of Comfort & Trust
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Metro Antelope Lodge is a proud member of the Metro Properties family, dedicated to providing quality accommodation services in Zimbabwe. Located in the serene environment of Antelope Dam, Maphisa, Matobo, our lodge was established with a simple mission — to offer guests a clean, comfortable, and secure place to stay.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that finding trustworthy accommodation is important. That is why every aspect of our lodge has been designed with your comfort and safety in mind. From our well-maintained rooms to our friendly service, we ensure that every guest feels at home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are visiting for a short stop or an extended stay, Metro Antelope Lodge provides the perfect environment for relaxation and convenience.
              </p>
            </div>
            <div className="relative">
              <img src={IMG.story} alt="Metro Antelope Lodge entrance with welcome signboard" className="rounded-2xl shadow-2xl w-full h-[320px] object-cover" />
              <img src={IMG.cottage} alt="Traditional thatched cottage at the lodge" className="rounded-2xl shadow-2xl w-full h-[170px] object-cover mt-4" />
              <div className="absolute -bottom-6 -right-6 bg-brand-primary rounded-2xl p-6 text-white hidden md:block shadow-xl">
                <Award className="w-8 h-8 mb-2 text-brand-secondary" />
                <p className="font-heading font-bold text-lg">Metro Properties</p>
                <p className="text-blue-200 text-sm">Home of Business & Dreams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Band */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={IMG.values} alt="Lodge grounds" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-primary/40"></div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              Our commitment to providing the best guest experience is built on these core values.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust & Security',
                description: 'We build trust through reliable service and a secure environment. Every guest can rest easy knowing they are in safe hands.',
              },
              {
                icon: Heart,
                title: 'Comfort & Care',
                description: 'From our rooms to our service, every detail is designed to make you feel comfortable and cared for throughout your stay.',
              },
              {
                icon: Sparkles,
                title: 'Simplicity & Cleanliness',
                description: 'We believe in the beauty of simplicity. Clean rooms, straightforward service, and a welcoming atmosphere.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-brand-light hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-brand-secondary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Secure', desc: 'Your safety is our top priority' },
                { icon: Heart, title: 'Comfortable', desc: 'Designed for your relaxation' },
                { icon: Sparkles, title: 'Clean', desc: 'Immaculate hygiene standards' },
                { icon: Home, title: 'Homely', desc: 'Feel at home away from home' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <img src={IMG.team} alt="Modern room exterior at Metro Antelope Lodge" className="rounded-2xl shadow-xl w-full h-[190px] object-cover" />
              <div className="grid grid-cols-2 gap-4">
                <img src={IMG.garden} alt="Tropical garden with banana trees" className="rounded-2xl shadow-lg w-full h-[190px] object-cover" />
                <img src={IMG.solar} alt="Solar power system for green energy" className="rounded-2xl shadow-lg w-full h-[190px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Properties */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-primary to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-brand-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-10 h-10 text-brand-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Part of the Metro Properties Family
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Metro Antelope Lodge operates under Metro Properties — Home of Business & Dreams. A trusted name in property management and development in Zimbabwe. Our parent brand's commitment to quality and professionalism is reflected in every aspect of our lodge.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-primary px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
