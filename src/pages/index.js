import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
} from '@components/main-page'

export default function Home() {
  return (
    <section className="bg-black-rock ">
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
    </section>
  )
}
