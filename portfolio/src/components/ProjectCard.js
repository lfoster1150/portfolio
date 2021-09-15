import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap'

const ProjectCard = (props) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const { title, image, onClick } = props

  return (
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
          <Card.Text>This is a description of the project</Card.Text>
          <Card.Text>These are the technologies used (get icons)</Card.Text>
        </Card.ImgOverlay>
      ) : undefined}
    </Card>
  )
}

export default ProjectCard
