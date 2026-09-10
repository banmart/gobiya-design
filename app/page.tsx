import Hero from '@/components/Hero'
import Dock from '@/components/Dock'
import TrustStrip from '@/components/TrustStrip'
import WorkSection from '@/components/WorkSection'
import FeedSection from '@/components/FeedSection'
import AiSearchSection from '@/components/AiSearchSection'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'
import ServicesSection from '@/components/ServicesSection'
import FaqSection from '@/components/FaqSection'
import AreasSection from '@/components/AreasSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      {/* RevealInit adds .js class and wires scroll-reveal IntersectionObserver */}
      <RevealInit />

      <Hero />
      <Dock />

      <main id="main">
        <TrustStrip />
        <WorkSection />
        <FeedSection />
        <AiSearchSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <FaqSection />
        <AreasSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  )
}
