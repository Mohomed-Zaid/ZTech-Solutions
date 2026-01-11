import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SuccessBand from './components/SuccessBand'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-10">
        <Hero />
        <SuccessBand />
        <CaseStudies />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
