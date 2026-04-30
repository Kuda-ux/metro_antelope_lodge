import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '263777776088'
const WHATSAPP_MESSAGE = 'Hello, I would like to book a stay at Metro Antelope Lodge.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
      <span className="hidden sm:inline font-semibold text-sm">Book via WhatsApp</span>
    </a>
  )
}
