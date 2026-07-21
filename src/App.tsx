import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import WorkSection from './components/WorkSection'
import CapabilitiesSection from './components/CapabilitiesSection'
import ApproachSection from './components/ApproachSection'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import { useViewport } from './hooks/useViewport'
import './App.css'
import './styles/desktop.css'
import './styles/mobile.css'

export default function App() {
  const viewport = useViewport()

  return (
    <div className={`site site--${viewport}`}>
      <SiteHeader />
      <main>
        <Hero />
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
