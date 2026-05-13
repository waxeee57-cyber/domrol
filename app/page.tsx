import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Ticker from '@/components/sections/Ticker'
import Problem from '@/components/sections/Problem'
import Modules from '@/components/sections/Modules'
import Testimonials from '@/components/sections/Testimonials'
import Roadmap from '@/components/sections/Roadmap'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Modules />
        <Testimonials />
        <Roadmap />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
