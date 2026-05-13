import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Problem from '@/components/sections/Problem'
import Modules from '@/components/sections/Modules'
import Testimonials from '@/components/sections/Testimonials'
import WhyDomRol from '@/components/sections/WhyDomRol'
import Roadmap from '@/components/sections/Roadmap'
import Contact from '@/components/sections/Contact'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Modules />
        <Testimonials />
        <WhyDomRol />
        <Roadmap />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
