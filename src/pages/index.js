import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  ProjectsSection,
  ContactSection,
} from '@components/main-page'
import { LeftLineDecor, RightLineDecor } from '@components/ui'
import { experiences, projects } from '@lib/notion'

export default function Home(props) {
  const experiences = props.experiences
  const featuredProjects = props.projects.filter((project) => {
    return project.properties.Type.select?.name == 'featured 1'
  })
  const otherFeaturedProjects = props.projects.filter((project) => {
    return project.properties.Type.select?.name == 'featured 2'
  })
  // console.log(props.projects[0].properties.Type.select.name)
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

export async function getServerSideProps() {
  const experiencesRes = await experiences()
  const projectsRes = await projects()
  return {
    props: {
      experiences: experiencesRes.results,
      projects: projectsRes.results,
    },
  }
}
