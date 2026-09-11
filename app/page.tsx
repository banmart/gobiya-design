import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import ServicesSection from '@/components/ServicesSection'
import FeedSection from '@/components/FeedSection'
import Footer from '@/components/Footer'
import './home.css'
import BlogSection from '@/components/BlogSection'
import Testimonials from '@/components/Testimonials'

export default function Page() {
  return <div className="home">
    <a className="skip" href="#main">Skip to content</a>
    <main id="main">
      <Hero />
      <TrustStrip compact />
      <ServicesSection />
      <Testimonials />
      <BlogSection homepage />
      <FeedSection compact />
    </main>
    <Footer />
  </div>
}
