import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Metro Properties Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <span className="text-white font-heading font-bold text-lg block leading-tight">Metro Antelope</span>
                <span className="text-brand-secondary text-xs font-medium tracking-wider uppercase">Lodge</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-3">
              Premium comfortable accommodation in the heart of Antelope Dam, Matobo — near the iconic Matobo Hills.
            </p>
            <p className="text-xs text-gray-500 mt-4 italic">A Metro Properties Brand — Home of Business & Dreams</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Rooms', path: '/rooms' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+263780292970" className="text-gray-400 hover:text-white transition-colors block">0780 292 970</a>
                  <a href="tel:+263777776088" className="text-gray-400 hover:text-white transition-colors block mt-1">0777 776 088</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:maxwellmncube01@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  maxwellmncube01@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Antelope Dam, Maphisa, Matobo, Zimbabwe</span>
              </li>
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Book Your Stay</h3>
            <p className="text-sm text-gray-400 mb-4">Ready to experience comfort and tranquility? Get in touch today.</p>
            <a
              href="https://wa.me/263780292970?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Metro%20Antelope%20Lodge."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Metro Antelope Lodge. All rights reserved. | A <span className="text-gray-400">Metro Properties</span> Brand.
          </p>
        </div>
      </div>
    </footer>
  )
}
