import { AboutPage } from '../components/About/About'
import { FAQSection } from '../components/FAQ/Questions'
import { BenefitsSection } from '../components/plus/Plus'
import { ResourcesSection } from '../components/plus/Resources'
import { ProductPage } from '../components/ProductPage/ProductPage'


export const HomePage = () => {
    return (
        <>

            <ProductPage />
            <AboutPage />
            <BenefitsSection />
            <ResourcesSection />
            <FAQSection />

        </>
    )
}