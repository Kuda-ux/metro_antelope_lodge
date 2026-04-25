import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Chatbot from './components/Chatbot'
import ScrollToTop from './components/ScrollToTop'
import SEOHead from './components/SEOHead'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SEOHead />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}

export default App
