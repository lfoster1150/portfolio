import React, { useState } from 'react'
import { Card, Row, Image } from 'react-bootstrap'
import ProjectModal from './ProjectModal'
import TechIcons from './TechIcons'

const ProjectCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false)
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
        fluid
        className="project-card"
        onClick={showModal}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <Card.Img
          variant="top"
          fluid
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
        showModal={showModal}
      />
    </div>
  )
}

export default ProjectCard
