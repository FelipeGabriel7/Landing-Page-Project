import { AboutPage } from './components/About/About'
import { FAQSection } from './components/FAQ/Questions'
import Footer from './components/Footer/Footer'
import { NavbarComponent } from './components/Navbar/Navbar'
import { BenefitsSection } from './components/plus/Plus'
import { ResourcesSection } from './components/plus/Resources'
import { ProductPage } from './components/ProductPage/ProductPage'

function App() {
  return (
    <>
      <NavbarComponent />
      <ProductPage />
      <AboutPage />
      <BenefitsSection />
      <ResourcesSection />
      <FAQSection />
      <Footer />
    </>
  )
}

export default App
