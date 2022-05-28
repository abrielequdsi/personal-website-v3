import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  ProjectsSection,
  ContactSection,
} from '@components/main-page'
import { LeftLineDecor, RightLineDecor } from '@components/ui'

export default function Home() {
  return (
    <div>
      <LeftLineDecor />
      <RightLineDecor />
      <div>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}
