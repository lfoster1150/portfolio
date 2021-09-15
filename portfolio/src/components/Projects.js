import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const handleClickedProject = () => {
    console.log('clicked')
  }

  return (
    <div className="page projects" id="projects">
      <div className="introduction-text">
        <h2>Projects</h2>
        <ProjectCard
          onClick={handleClickedProject}
          title="Project 1"
          image="https://i.imgur.com/go9h9JDm.png?1"
        />
      </div>
    </div>
  )
}

export default Projects
