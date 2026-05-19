import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import WhyUs from '@/components/sections/WhyUs'
import Numbers from '@/components/sections/Numbers'
import About from '@/components/sections/About'
import Waitlist from '@/components/sections/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Services />
        <Portfolio />
        <WhyUs />
        <Numbers />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
