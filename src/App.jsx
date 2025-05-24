import './App.css'
import Contact from './components/Contact'
import Features1 from './components/Features1'
import Features2 from './components/Features2'
import Features3 from './components/Features3'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavbarHeader from './components/NavbarHeader'
import Services from './components/Services'
import Testmonials from './components/Testmonials'
import WhyChooseUs from './components/WhyChooseUs'
import TrustedBrandsSection from './components/TrustedBrandsSection'

function App() {

  return (
    <>
     <NavbarHeader/>
     <Hero/>
     <WhyChooseUs/>
     <TrustedBrandsSection/>
     <Features1/>
     <Features2/>
     <Features3/>
     <Services/>
     <Testmonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
