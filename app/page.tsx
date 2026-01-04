import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { SignatureDishes } from '@/components/sections/signature-dishes'
import { Testimonials } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  )
}