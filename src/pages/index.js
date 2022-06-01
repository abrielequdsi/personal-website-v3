import { useState } from 'react'
import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  ProjectsSection,
  ContactSection,
} from '@components/main-page'
import { LeftLineDecor, RightLineDecor } from '@components/ui'
import { experiences } from '@lib/notion'

export default function Home(props) {
  return (
    <div>
      <LeftLineDecor />
      <RightLineDecor />
      <div>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection experiences={props.experiences} />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let { results } = await experiences()
  return {
    props: {
      experiences: results,
    },
  }
}
