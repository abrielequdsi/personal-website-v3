import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  ProjectsSection,
  ContactSection,
} from '@components/main-page'

export default function Home() {
  return (
    <section className="bg-black-rock ">
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </section>
  )
}
