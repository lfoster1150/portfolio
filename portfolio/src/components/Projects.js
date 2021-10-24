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
    <div>
      <div className="divider"></div>
      <div className="projects page" id="projects">
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
    </div>
  )
}

export default Projects
