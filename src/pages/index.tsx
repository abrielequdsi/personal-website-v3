import type { NextPage } from 'next'
import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  ProjectsSection,
  ContactSection,
} from '@components/main-page'
import { LeftLineDecor, RightLineDecor } from '@components/ui'
import { experiences, projects } from '@lib/notion'

const Home: NextPage = (props: any) => {
  const experiences = props.experiences
  const featuredProjects = props.projects.filter((project: any) => {
    return project.properties.Type.select?.name == 'featured 1'
  })
  const otherFeaturedProjects = props.projects.filter((project: any) => {
    return project.properties.Type.select?.name == 'featured 2'
  })
  return (
    <div>
      <LeftLineDecor />
      <RightLineDecor />
      <div>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection experiences={experiences} />
        <ProjectsSection
          featuredProjects={featuredProjects}
          otherFeaturedProjects={otherFeaturedProjects}
        />
        <ContactSection />
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const experiencesRes = await experiences()
  const projectsRes = await projects()
  return {
    props: {
      experiences: experiencesRes.results,
      projects: projectsRes.results,
    },
  }
}
