import Header from '../components/Header'
import Hero from '../components/Hero'
import Ecosystems from '../components/Ecosystems'
import HowItWorks from '../components/HowItWorks'
import Bridge from '../components/Bridge'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystems />
        <HowItWorks />
        <Bridge />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
