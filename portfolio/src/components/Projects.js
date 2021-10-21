import React from 'react'
import ProjectCard from './ProjectCard'
import data from '../data/data'

const Projects = () => {
  const handleClickedProject = () => {
    console.log('clicked')
    console.log(data)
  }

  return (
    <div className="page projects" id="projects">
      <div className="introduction-text">
        <h2>Projects</h2>
        <i class="devicon-html5-plain-wordmark"></i>
        {data.map((project, index) => (
          <ProjectCard
            onClick={handleClickedProject}
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
