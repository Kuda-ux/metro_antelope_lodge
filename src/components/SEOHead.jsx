import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DOMAIN = 'https://www.metroantelopelodge.co.zw'

const pageSEO = {
  '/': {
    title: 'Metro Antelope Lodge | Premium Accommodation in Matobo, Zimbabwe',
    description: 'Metro Antelope Lodge — Premium affordable accommodation in Antelope Dam, Maphisa, Matobo, Zimbabwe. Near the iconic Matobo Hills UNESCO World Heritage Site. Book via WhatsApp today. Perfect for tourists, business travelers, families, and holiday visitors.',
    keywords: 'Metro Antelope Lodge, accommodation Zimbabwe, Matobo accommodation, lodge Matobo Hills, Antelope Dam lodge, Maphisa accommodation, affordable lodge Zimbabwe, Metro Properties Zimbabwe, best lodge Matobo, Zimbabwe holiday accommodation, Bulawayo accommodation, Southern Zimbabwe lodge, hotel near Matobo Hills, Zimbabwe tourism, safari lodge Zimbabwe, budget accommodation Matobo, Matobo National Park hotel, Zimbabwe travel, Africa lodge, Southern Africa accommodation, bed and breakfast Matobo, guesthouse Zimbabwe, lodge booking Zimbabwe, WhatsApp booking Zimbabwe, Matabeleland accommodation, Matabeleland South lodge',
  },
  '/about': {
    title: 'About Metro Antelope Lodge | Our Story — Matobo, Zimbabwe',
    description: 'Learn about Metro Antelope Lodge, a Metro Properties brand in Antelope Dam, Maphisa, Matobo, Zimbabwe. Our mission is to provide comfortable, affordable accommodation near the Matobo Hills UNESCO World Heritage Site for international and local guests.',
    keywords: 'about Metro Antelope Lodge, Metro Properties Zimbabwe, lodge history Matobo, accommodation Maphisa, Antelope Dam Zimbabwe, Matobo Hills lodge, Zimbabwe hospitality, African lodge experience, trusted accommodation Zimbabwe',
  },
  '/rooms': {
    title: 'Rooms & Rates | Metro Antelope Lodge — Matobo, Zimbabwe',
    description: 'View our comfortable rooms at Metro Antelope Lodge. Standard, Twin, and Family rooms available. Clean, secure, and affordable accommodation in Antelope Dam, Matobo, Zimbabwe. Book now via WhatsApp.',
    keywords: 'rooms Metro Antelope Lodge, accommodation rates Zimbabwe, standard room Matobo, twin room Zimbabwe, family room lodge, affordable rooms Matobo, lodge rooms Antelope Dam, book room Zimbabwe WhatsApp, cheap accommodation Matobo, hotel rooms Southern Zimbabwe',
  },
  '/facilities': {
    title: 'Facilities & Services | Metro Antelope Lodge — Matobo, Zimbabwe',
    description: 'Enjoy world-class facilities at Metro Antelope Lodge — swimming pool, restaurant & bar, boating on Antelope Dam, conference centre, and kids\' play area. Located in Maphisa, Matobo, Zimbabwe. Perfect for families, business and leisure guests.',
    keywords: 'Metro Antelope Lodge facilities, swimming pool Matobo, restaurant bar Zimbabwe, boating Antelope Dam, conference centre Matobo, kids play area lodge, family lodge Zimbabwe, business meetings Matobo, lodge amenities Zimbabwe, fishing Antelope Dam, Matobo restaurant, conference venue Zimbabwe, lake activities Zimbabwe',
  },
  '/gallery': {
    title: 'Photo Gallery | Metro Antelope Lodge — Matobo, Zimbabwe',
    description: 'Browse photos of Metro Antelope Lodge in Antelope Dam, Maphisa, Matobo, Zimbabwe. See our beautiful green environment, lodge building, rooms, and natural surroundings near the Matobo Hills.',
    keywords: 'Metro Antelope Lodge photos, lodge gallery Zimbabwe, Matobo accommodation images, Antelope Dam lodge pictures, Zimbabwe lodge gallery, lodge exterior photos, room photos Matobo',
  },
  '/contact': {
    title: 'Contact Us | Metro Antelope Lodge — Book Your Stay in Matobo, Zimbabwe',
    description: 'Contact Metro Antelope Lodge for bookings and enquiries. Located in Antelope Dam, Maphisa, Matobo, Zimbabwe. Call +263780292970 or message us on WhatsApp. We welcome international and local guests.',
    keywords: 'contact Metro Antelope Lodge, book lodge Zimbabwe, WhatsApp booking Matobo, phone number lodge Zimbabwe, lodge enquiry Matobo, directions Antelope Dam, email Metro Antelope Lodge, Zimbabwe accommodation contact',
  },
}

export default function SEOHead() {
  const location = useLocation()
  const seo = pageSEO[location.pathname] || pageSEO['/']

  useEffect(() => {
    document.title = seo.title

    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', seo.description)
    setMeta('keywords', seo.keywords)
    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:url', `${DOMAIN}${location.pathname === '/' ? '/' : location.pathname}`, true)
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${DOMAIN}${location.pathname === '/' ? '/' : location.pathname}`)

    let breadcrumbScript = document.getElementById('breadcrumb-jsonld')
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script')
      breadcrumbScript.id = 'breadcrumb-jsonld'
      breadcrumbScript.type = 'application/ld+json'
      document.head.appendChild(breadcrumbScript)
    }
    const breadcrumbItems = [
      { name: 'Home', url: DOMAIN + '/' },
    ]
    if (location.pathname !== '/') {
      const pageName = location.pathname.replace('/', '')
      breadcrumbItems.push({
        name: pageName.charAt(0).toUpperCase() + pageName.slice(1),
        url: DOMAIN + location.pathname,
      })
    }
    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    })
  }, [location.pathname, seo])

  return null
}
