import Hero from '@/components/Hero'
import Dock from '@/components/Dock'
import TrustStrip from '@/components/TrustStrip'
import ServicesSection from '@/components/ServicesSection'
import FeedSection from '@/components/FeedSection'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Page() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <RevealInit />
    <main id="main">
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <FeedSection />
    </main>
    <Dock />
    <Footer />
  </>
}
