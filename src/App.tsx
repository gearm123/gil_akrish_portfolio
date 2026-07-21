import { useMemo } from 'react'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ResearchSection from './components/ResearchSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import WorkSection from './components/WorkSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ApproachSection from './components/ApproachSection'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import PageSeo from './components/seo/PageSeo'
import { useViewport } from './hooks/useViewport'
import { defaultSeo } from './constants/seoConfig'
import { getAllJsonLd } from './seo/structuredData'
import './App.css'
import './styles/desktop.css'
import './styles/mobile.css'

export default function App() {
  const viewport = useViewport()
  const jsonLd = useMemo(() => getAllJsonLd(), [])

  return (
    <div className={`site site--${viewport}`}>
      <PageSeo
        title={defaultSeo.title}
        description={defaultSeo.description}
        path="/"
        jsonLd={jsonLd}
      />
      <SiteHeader />
      <main>
        <Hero />
        <ResearchSection />
        <ExperienceSection />
        <EducationSection />
        <WorkSection />
        <CapabilitiesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
