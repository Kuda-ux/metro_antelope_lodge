import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight, Navigation, Car } from 'lucide-react'

const IMG = {
  header: '/lodge-compound.jpg',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello, my name is ${formData.name}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`
    window.open(`https://wa.me/263780292970?text=${encodeURIComponent(whatsappMessage.replace(/%0A/g, '\n'))}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.header} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-brand-dark/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="animate-fade-in">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mt-3 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              We would love to hear from you. Reach out to us for bookings, enquiries, or any questions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out to us through any of the following channels. We are always happy to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Phone</h3>
                    <a href="tel:+263780292970" className="text-gray-600 hover:text-brand-primary transition-colors block">0780 292 970</a>
                    <a href="tel:+263777776088" className="text-gray-600 hover:text-brand-primary transition-colors block">0777 776 088</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
                    <a href="mailto:maxwellmncube01@gmail.com" className="text-gray-600 hover:text-brand-primary transition-colors break-all">
                      maxwellmncube01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Location</h3>
                    <p className="text-gray-600">Plot Number 1 Tabasnyoni,<br />Antelope Mine, Maphisa,<br />Matobo, Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-light hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Hours</h3>
                    <p className="text-gray-600">Open 24 Hours<br />Check-in from 14:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-heading font-bold text-brand-dark">Quick WhatsApp</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  For the fastest response, message us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20Metro%20Antelope%20Lodge."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we will get back to you as soon as possible.</p>

                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Your message has been opened in WhatsApp. We will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+263 7XX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your booking requirements, dates, number of guests..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      Send Message via WhatsApp
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Your message will be sent via WhatsApp for the fastest response.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mt-3 mb-4">
              Our Location on the Map
            </h2>
            <p className="text-gray-600 text-lg">
              Plot Number 1 Tabasnyoni, Antelope Mine, Maphisa — easily accessible and waiting to welcome you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <div className="aspect-[16/10] w-full bg-gray-200">
                <iframe
                  title="Metro Antelope Lodge — Plot 1 Tabasnyoni, Antelope Mine, Maphisa"
                  src="https://www.google.com/maps?q=Plot+1+Tabasnyoni+Antelope+Mine+Maphisa+Matobo+Zimbabwe&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* Floating address pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 max-w-xs pointer-events-none">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-brand-dark text-sm">Metro Antelope Lodge</p>
                    <p className="text-xs text-gray-600 leading-snug">Plot 1 Tabasnyoni, Antelope Mine, Maphisa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Sidebar */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-brand-primary to-blue-900 rounded-2xl p-6 text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Get Directions</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Open the address directly in Google Maps for turn-by-turn directions to the lodge.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Plot+1+Tabasnyoni+Antelope+Mine+Maphisa+Matobo+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-gray-100 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg w-full justify-center"
                >
                  Open in Google Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-brand-dark mb-2">Driving from Bulawayo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Take the Bulawayo–Maphisa road south for approximately 100km. Once in Maphisa, follow signs to Antelope Mine. The lodge is located at Plot 1 Tabasnyoni.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-heading font-bold text-brand-dark mb-2">Need Help Finding Us?</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  WhatsApp us your location and we'll guide you in.
                </p>
                <a
                  href="https://wa.me/263780292970?text=Hello%2C%20I%20need%20directions%20to%20Metro%20Antelope%20Lodge%2C%20Plot%201%20Tabasnyoni%2C%20Antelope%20Mine%2C%20Maphisa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                >
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
