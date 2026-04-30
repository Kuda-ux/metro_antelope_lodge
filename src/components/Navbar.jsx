import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Metro Antelope Lodge" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/263777776088?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Metro%20Antelope%20Lodge."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/263777776088?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Metro%20Antelope%20Lodge."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-brand-primary text-white px-5 py-3 rounded-lg text-sm font-semibold text-center transition-all hover:bg-brand-primary/90"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
