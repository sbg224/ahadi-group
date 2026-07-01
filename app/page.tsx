import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import PreuveTerrain from '@/components/PreuveTerrain'
import Methode from '@/components/Methode'
import Devise from '@/components/Devise'
import Legit from '@/components/Legit'
import Stories from '@/components/Stories'
import Scope from '@/components/Scope'
import Values from '@/components/Values'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Devise />
        <Legit />
        <Methode />
        <Stories />
        <Scope />
        <Values />
        <PreuveTerrain />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
