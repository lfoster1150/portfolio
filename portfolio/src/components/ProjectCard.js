import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ProjectModal from './ProjectModal'
import TechIcons from './TechIcons'

const ProjectCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(true)
  const [modalShow, setModalShow] = useState(false)
  const { project, onClick } = props

  const showModal = () => {
    setModalShow(true)
  }

  const hideModal = () => {
    setModalShow(false)
  }

  return (
    <div>
      <Card
        fluid="true"
        className="project-card"
        onClick={showModal}
        onMouseEnter={() => setShowOverlay(false)}
        onMouseLeave={() => setShowOverlay(true)}
      >
        <Card.Img
          variant="top"
          fluid="true"
          src={project.image}
          alt={`${project.title} image`}
          onClick={onClick}
        />
        {showOverlay ? (
          <Card.ImgOverlay>
            <Card.Title>{project.title}</Card.Title>
            <TechIcons className="overlay-icons" icons={project.icons} />
            <Card.Text>{project.description}</Card.Text>
          </Card.ImgOverlay>
        ) : undefined}
      </Card>
      <ProjectModal
        project={project}
        show={modalShow}
        onHide={hideModal}
      />
    </div>
  )
}

export default ProjectCard
