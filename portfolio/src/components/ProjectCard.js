import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap'
import ProjectModal from './ProjectModal'

const ProjectCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [comments, setComments] = useState([])
  const { title, image, description, onClick } = props

  const showModal = () => {
    setModalShow(true)
  }

  const hideModal = () => {
    setModalShow(false)
  }

  return (
    <div>
      <Card
        className="project-card"
        onClick={onClick}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <Card.Img src={image} alt={`${title} image`} onClick={onClick} />
        {showOverlay ? (
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.ImgOverlay>
        ) : undefined}
      </Card>
      <ProjectModal
        img={image}
        description={description}
        show={modalShow}
        onHide={hideModal}
        showModal={showModal}
        getUserPhotos={props.getUserPhotos}
      />
    </div>
  )
}

export default ProjectCard
