import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, ArrowRight } from 'lucide-react'

const FAQ_DATA = [
  {
    keywords: ['room', 'rooms', 'accommodation', 'stay', 'bed', 'sleep'],
    question: 'What rooms do you offer?',
    answer: 'We offer Standard Rooms (double bed), Twin Rooms (two single beds), and Family Rooms (multiple beds). All rooms are clean, secure, and comfortable with fresh linen and natural lighting.',
  },
  {
    keywords: ['price', 'cost', 'rate', 'much', 'afford', 'cheap', 'expensive', 'pay'],
    question: 'What are your rates?',
    answer: 'Our rates are very affordable and competitive. For the latest pricing, please contact us directly via WhatsApp and we will provide you with a detailed quote based on your needs.',
    redirect: true,
  },
  {
    keywords: ['book', 'reserve', 'reservation', 'booking', 'available', 'availability'],
    question: 'How do I book?',
    answer: 'Booking is easy! Simply message us on WhatsApp at +263 780 292 970 with your preferred dates, number of guests, and room type. We will confirm your reservation promptly.',
    redirect: true,
  },
  {
    keywords: ['location', 'where', 'address', 'find', 'direction', 'map', 'far'],
    question: 'Where are you located?',
    answer: 'We are located in Antelope Dam, Maphisa, Matobo, Zimbabwe — near the iconic Matobo Hills UNESCO World Heritage Site. Contact us on WhatsApp for detailed directions.',
  },
  {
    keywords: ['check', 'checkin', 'checkout', 'time', 'arrive', 'leave'],
    question: 'Check-in & check-out times?',
    answer: 'Check-in is from 14:00 (2 PM) and check-out is by 10:00 (10 AM). Early check-in or late check-out may be arranged — just let us know in advance.',
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'number'],
    question: 'How can I contact you?',
    answer: 'You can reach us at:\n📞 0780 292 970 / 0777 776 088\n📧 maxwellmncube01@gmail.com\n💬 WhatsApp: +263 780 292 970\nWe respond quickly!',
  },
  {
    keywords: ['safe', 'secure', 'security', 'safety'],
    question: 'Is the lodge safe?',
    answer: 'Absolutely! Safety is our top priority. All rooms have secure locks, and the lodge premises are well-maintained with a peaceful and secure environment for all our guests.',
  },
  {
    keywords: ['wifi', 'internet', 'network'],
    question: 'Do you have WiFi?',
    answer: 'We provide connectivity options for our guests. For the latest details on WiFi availability, please contact us directly.',
  },
  {
    keywords: ['matobo', 'hills', 'tour', 'tourist', 'attraction', 'visit', 'near', 'nearby'],
    question: 'What attractions are nearby?',
    answer: 'We are near the famous Matobo Hills — a UNESCO World Heritage Site known for its stunning rock formations, ancient cave paintings, and diverse wildlife including black and white rhinos. Perfect for day trips!',
  },
  {
    keywords: ['family', 'children', 'kids', 'child'],
    question: 'Is it family-friendly?',
    answer: 'Yes! We welcome families with open arms. Our Family Rooms are spacious and designed to accommodate parents and children comfortably.',
  },
]

const INITIAL_MESSAGE = {
  type: 'bot',
  text: "👋 Welcome to Metro Antelope Lodge! I'm here to help you with any questions. What would you like to know?",
}

const QUICK_OPTIONS = [
  'What rooms do you offer?',
  'What are your rates?',
  'How do I book?',
  'Where are you located?',
]

function findAnswer(input) {
  const lower = input.toLowerCase()
  for (const faq of FAQ_DATA) {
    if (faq.keywords.some(kw => lower.includes(kw))) {
      return faq
    }
  }
  return null
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [showQuick, setShowQuick] = useState(true)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return

    setMessages(prev => [...prev, { type: 'user', text: userMsg }])
    setInput('')
    setShowQuick(false)

    setTimeout(() => {
      const match = findAnswer(userMsg)
      if (match) {
        setMessages(prev => [...prev, { type: 'bot', text: match.answer, redirect: match.redirect }])
      } else {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "That's a great question! For the best assistance, let me connect you with our team on WhatsApp — they'll be happy to help you personally.",
          redirect: true,
        }])
      }
      setShowQuick(true)
    }, 600)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-brand-primary hover:bg-brand-primary/90'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[7.5rem] right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-brand-primary px-5 py-4 flex items-center gap-3">
            <img src="/logo.png" alt="Metro Antelope Lodge" className="h-9 w-auto bg-white rounded-md p-0.5" />
            <div>
              <h3 className="text-white font-semibold text-sm font-sans">Metro Antelope Lodge</h3>
              <p className="text-blue-200 text-xs">Online — typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.type === 'user'
                    ? 'bg-brand-primary text-white rounded-br-md'
                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-md'
                }`}>
                  {msg.text}
                  {msg.redirect && (
                    <a
                      href="https://wa.me/263780292970?text=Hello%2C%20I%20have%20a%20question%20about%20Metro%20Antelope%20Lodge."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 transition-colors"
                    >
                      💬 Chat on WhatsApp
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          {showQuick && (
            <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-gray-100 bg-white">
              {QUICK_OPTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-blue-50 text-brand-primary px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors font-medium"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend() }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary/40 focus:border-brand-secondary bg-gray-50"
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white p-2.5 rounded-xl transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
