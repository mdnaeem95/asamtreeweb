import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { PopularDishes } from '@/components/sections/popular-dishes'
import { AboutSection } from '@/components/sections/about-section'
import { LocationsSection } from '@/components/sections/locations-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PopularDishes />
      <AboutSection />
      <LocationsSection />
      <CTASection />
      <Footer />
    </>
  )
}