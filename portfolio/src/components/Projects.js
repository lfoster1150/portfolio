import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../data/data'
import { Container } from 'react-bootstrap'

const Projects = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="projects page" id="projects">
        <div className="projects-text">
          <p>
            The following projects were created as part of General Assembly's full time 12 week, 
            500+ hour immersive full stack development program.
          </p>
        </div>
        <Container className="projects-container">
          {data.map((project, index) => (
            <ProjectCard
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
