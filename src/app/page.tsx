import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
} 