import React from 'react'
import ProjectCard from './ProjectCard'
import PageTitle from './PageTitle'
import data from '../data/data'
import { Container } from 'react-bootstrap'

const Projects = () => {
  const handleClickedProject = () => {
    console.log('clicked')
    console.log(data)
  }

  return (
    <div className="projects page" id="projects">
      <PageTitle title="PROJECTS" />
      <Container className="projects-container">
        {data.map((project, index) => (
          <ProjectCard
            onClick={handleClickedProject}
            key={index}
            project={project}
          />
        ))}
      </Container>
    </div>
  )
}

export default Projects
