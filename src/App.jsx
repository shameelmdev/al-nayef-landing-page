import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import ServiceDetailing from './components/ServiceDetailing'
import CTA from './components/CTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Services />
        <CTA />
        <ServiceDetailing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
