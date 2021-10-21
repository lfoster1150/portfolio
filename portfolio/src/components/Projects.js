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
        <ProjectCard
          onClick={handleClickedProject}
          title="Combat League"
          image="https://i.imgur.com/go9h9JDm.png?1"
          description="A web app interpretation of a futuristic football strategy board game built using HTML, CSS, and Vanilla JavaScript."
        />
      </div>
    </div>
  )
}

export default Projects
