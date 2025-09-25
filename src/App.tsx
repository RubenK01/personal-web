import { useEffect, useState } from 'react'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technologies from '@/components/Technologies'
import About from '@/components/About'
//import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

function App() {
  const [pathname, setPathname] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'))

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (pathname === '/politica-de-privacidad') {
    return (
      <main className="min-h-screen bg-dark-950">
        <Navigation />
        <PrivacyPolicy />
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App 
