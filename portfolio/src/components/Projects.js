import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../data/data'
import { Container } from 'react-bootstrap'

const Projects = () => {
  const handleClickedProject = () => {
    console.log('clicked')
    console.log(data)
  }

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
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
