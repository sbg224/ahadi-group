import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
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
        <Stories />
        <Scope />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
